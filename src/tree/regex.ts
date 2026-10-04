import type { ConnectNode, Node } from './node.ts';
import {
  escapeRegexGroup,
  escapeStaticPart,
  findNamedGroupEnd,
  findUnnamedGroupEnd,
  isModifier,
} from './utils.ts';

export type Handlers<T> = (T | null)[];

export let HANDLERS!: Handlers<any>;

export const reset = (): void => {
  HANDLERS = [null];
};

export const group_delim_to_regexp = (group: string): string => {
  for (
    let j = 0, modifier = group[group.length - 1], hasModifier = isModifier(modifier);
    j < group.length;
    j++
  ) {
    switch (group[j]) {
      case '(': {
        const regexpEnd = findUnnamedGroupEnd(group, j + 1),
          prefixWithRegexp =
            escapeStaticPart(group.slice(0, j)) + escapeRegexGroup(group, j, regexpEnd);

        return hasModifier
          ? `(?:${prefixWithRegexp + group.slice(regexpEnd, -2)})` + modifier
          : prefixWithRegexp + group.slice(regexpEnd, -1);
      }

      case ':': {
        HANDLERS.push(null);

        const prefix = escapeStaticPart(group.slice(0, j)),
          endIdx = findNamedGroupEnd(group, j),
          suffix = escapeStaticPart(group.slice(endIdx, hasModifier ? -2 : -1));

        let namedCapture: string, regex: string;
        for (let curIdx = j + 1, startIdx = curIdx; ; ) {
          if (curIdx === endIdx) {
            namedCapture = `(?<${group.slice(startIdx, endIdx)}>`;
            regex = '[^/]+';
            break;
          }

          if (group[curIdx] === '(') {
            regex = escapeRegexGroup(group, curIdx, findUnnamedGroupEnd(group, curIdx + 1));
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
          ? `(?:${escapeStaticPart(group.slice(0, j))}.*${escapeStaticPart(group.slice(j + 1, -2))})` +
              modifier
          : escapeStaticPart(group.slice(0, j)) + '.*' + escapeStaticPart(group.slice(j + 1, -1));

      case '}':
        return hasModifier
          ? `(?:${escapeStaticPart(group.slice(0, j))})` + modifier
          : escapeStaticPart(group.slice(0, j));
    }
  }

  // never happens
  throw '';
};

export const named_group_to_regexp = (key: string): string => {
  HANDLERS.push(null);

  const autoGroupPrefixing = key[0] === '/',
    modifier = key[key.length - 1],
    startIdx = autoGroupPrefixing ? 2 : 1;

  for (let curIdx = startIdx; curIdx < key.length; curIdx++) {
    if (key[curIdx] === '(') {
      const regex = escapeRegexGroup(key, curIdx, findUnnamedGroupEnd(key, curIdx + 1)),
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

  const namedCapture = `(?<${isModifier(modifier) ? key.slice(startIdx, -1) : key.slice(startIdx)}>`;
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

export const connect_node_compile_to_regexp = (connectNode: ConnectNode<unknown>): string => {
  if (connectNode[0] !== null) {
    HANDLERS.push(connectNode[0]);
    return connectNode[1] === null ? '()$' : `(?:()$|${node_compile_to_regexp(connectNode[1])})`;
  }

  return node_compile_to_regexp(connectNode[1]!);
};

export const node_compile_to_regexp = (node: Node<unknown>): string => {
  let regexPaths = [];

  if (node[1] !== null) {
    HANDLERS.push(node[1]);
    regexPaths.push('()$');
  }

  if (node[2] !== null)
    for (let i = 0, staticChildren = node[2][1]; i < staticChildren.length; i++)
      regexPaths.push(node_compile_to_regexp(staticChildren[i]));

  if (node[3] !== null)
    for (let i = 0, groups = node[3][0], connectNodes = node[3][1]; i < groups.length; i++)
      regexPaths.push(
        group_delim_to_regexp(groups[i]) + connect_node_compile_to_regexp(connectNodes[i]),
      );

  if (node[4] !== null)
    for (let i = 0, regexps = node[4][0], connectNodes = node[4][1]; i < regexps.length; i++)
      regexPaths.push(regexps[i] + connect_node_compile_to_regexp(connectNodes[i]));

  if (node[5] !== null)
    for (let i = 0, keys = node[5][0], connectNodes = node[5][1]; i < keys.length; i++)
      regexPaths.push(
        named_group_to_regexp(keys[i]) + connect_node_compile_to_regexp(connectNodes[i]),
      );

  if (node[6] !== null) regexPaths.push('.*' + connect_node_compile_to_regexp(node[6]));

  return (
    (node[0].length > 0 ? escapeStaticPart(node[0]) : '') +
    (regexPaths.length === 1 ? regexPaths[0] : `(?:${regexPaths.join('|')})`)
  );
};

export const node_compile_root_to_regexp = (root: Node<unknown>): string =>
  `^(?:${node_compile_to_regexp(root)}|$.)`;
