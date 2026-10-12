import type { ConnectNode, Node } from './node.ts';
import {
  unnamed_group_to_regexp,
  named_group_end,
  unnamed_group_end,
  is_modifier,
} from './utils.ts';

export const static_part_to_regexp = (str: string): string =>
  str.replace(/([.+*?^${}()[\]|/\\])/g, '\\$1');

export const group_delimiter_to_regexp = (
  group: string,
  offsets: number[],
): // @ts-expect-error
string => {
  for (
    let j = 0, modifier = group[group.length - 1], hasModifier = is_modifier(modifier);
    j < group.length;
    j++
  ) {
    switch (group[j]) {
      case '(': {
        const regexpEnd = unnamed_group_end(group, j + 1),
          prefixWithRegexp =
            static_part_to_regexp(group.slice(0, j)) + unnamed_group_to_regexp(group, j, regexpEnd);

        return hasModifier
          ? `(?:${prefixWithRegexp + group.slice(regexpEnd, -2)})` + modifier
          : prefixWithRegexp + group.slice(regexpEnd, -1);
      }

      case ':': {
        offsets[offsets.length - 1]++;

        const prefix = static_part_to_regexp(group.slice(0, j)),
          endIdx = named_group_end(group, j),
          suffix = static_part_to_regexp(group.slice(endIdx, hasModifier ? -2 : -1));

        let namedCapture: string, regex: string;
        for (let curIdx = j + 1, startIdx = curIdx; ; ) {
          if (curIdx === endIdx) {
            regex = '[^/]+';
            namedCapture = `(?<${group.slice(startIdx, endIdx)}>`;
            break;
          }

          if (group[curIdx] === '(') {
            regex = unnamed_group_to_regexp(group, curIdx, unnamed_group_end(group, curIdx + 1));
            namedCapture = `(?<${group.slice(startIdx, curIdx)}>`;
            break;
          }

          curIdx++;
        }

        return hasModifier
          ? modifier === '?'
            ? `(?:${prefix + namedCapture + regex})${suffix})?`
            : modifier === '+'
              ? prefix + namedCapture + regex + `(?:${suffix + prefix + regex})*)` + suffix
              : `(?:${prefix + namedCapture + regex}(?:${suffix + prefix + regex})*)${suffix})?`
          : prefix + namedCapture + regex + ')' + suffix;
      }

      case '*':
        return hasModifier
          ? `(?:${static_part_to_regexp(group.slice(0, j))}.*${static_part_to_regexp(group.slice(j + 1, -2))})` +
              modifier
          : static_part_to_regexp(group.slice(0, j)) +
              '.*' +
              static_part_to_regexp(group.slice(j + 1, -1));

      case '}':
        return hasModifier
          ? `(?:${static_part_to_regexp(group.slice(0, j))})` + modifier
          : static_part_to_regexp(group.slice(0, j));
    }
  }
};

export const named_group_to_regexp = (key: string, offsets: number[]): string => {
  offsets[offsets.length - 1]++;

  const autoGroupPrefixing = key[0] === '/',
    modifier = key[key.length - 1],
    startIdx = autoGroupPrefixing ? 2 : 1;

  for (let curIdx = startIdx; curIdx < key.length; curIdx++) {
    if (key[curIdx] === '(') {
      const regex = unnamed_group_to_regexp(key, curIdx, unnamed_group_end(key, curIdx + 1)),
        namedCapture = `(?<${key.slice(startIdx, curIdx)}>`;

      return autoGroupPrefixing
        ? modifier === '?'
          ? `(?:\\/${namedCapture + regex}))?`
          : modifier === '+'
            ? `\\/${namedCapture + regex}(?:\\/${regex})*)`
            : modifier === '*'
              ? `(?:\\/${namedCapture + regex}(?:\\/${regex})*))?`
              : `\\/${namedCapture + regex})`
        : namedCapture +
            (modifier === '?'
              ? regex + ')?'
              : modifier === '+'
                ? `(?:${regex})+)`
                : modifier === '*'
                  ? `(?:${regex})*)`
                  : regex + ')');
    }
  }

  const namedCapture = `(?<${is_modifier(modifier) ? key.slice(startIdx, -1) : key.slice(startIdx)}>`;
  return autoGroupPrefixing
    ? modifier === '?'
      ? `(?:\\/${namedCapture}[^/]+))?`
      : modifier === '+'
        ? `\\/${namedCapture}.+)`
        : modifier === '*'
          ? `(?:\\/${namedCapture}.+))?`
          : `\\/${namedCapture}[^/]+)`
    : namedCapture + (modifier === '?' ? '[^/]+)?' : modifier === '*' ? '[^/]*)' : '[^/]+)');
};

export const connect_node_compile_to_regexp = <T>(
  connectNode: ConnectNode<T>,
  handlers: T[],
  offsets: number[],
): string => {
  if (connectNode[0] !== null) {
    const str =
      connectNode[1] === null
        ? '()'
        : `(?:${node_compile_to_regexp(connectNode[1], handlers, offsets)}|())`;

    handlers.push(connectNode[0]);
    offsets.push(offsets[offsets.length - 1] + 1);

    return str;
  }

  return node_compile_to_regexp(connectNode[1]!, handlers, offsets);
};

export const node_compile_to_regexp = <T>(
  node: Node<T>,
  handlers: T[],
  offsets: number[],
): string => {
  const regexPaths = [];

  if (node[1] !== null) {
    handlers.push(node[1]);
    offsets.push(offsets[offsets.length - 1] + 1);

    regexPaths.push('()');
  }

  if (node[2] !== null)
    for (let i = 0, staticChildren = Object.values(node[2]); i < staticChildren.length; i++)
      regexPaths.push(node_compile_to_regexp(staticChildren[i]!, handlers, offsets));

  if (node[3] !== null) {
    const map = node[3];
    for (const group in map)
      regexPaths.push(
        group_delimiter_to_regexp(group, offsets) +
          connect_node_compile_to_regexp(map[group]!, handlers, offsets),
      );
  }

  if (node[4] !== null) {
    const map = node[4];
    for (const regexp in map)
      regexPaths.push(regexp + connect_node_compile_to_regexp(map[regexp]!, handlers, offsets));
  }

  if (node[5] !== null) {
    const map = node[5];
    for (const group in map)
      regexPaths.push(
        named_group_to_regexp(group, offsets) +
          connect_node_compile_to_regexp(map[group]!, handlers, offsets),
      );
  }

  if (node[6] !== null)
    regexPaths.push('.*' + connect_node_compile_to_regexp(node[6], handlers, offsets));

  return (
    (node[0].length > 0 ? static_part_to_regexp(node[0]) : '') +
    (regexPaths.length === 1 ? regexPaths[0] : `(?:${regexPaths.join('|')})`)
  );
};
