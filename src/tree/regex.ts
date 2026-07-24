import type { ConnectNode, Node } from './node.ts';
import { findNamedGroupEnd, findUnnamedGroupEnd, isModifier } from './utils.ts';

export type Handlers<T> = (T | null)[];

export const escapeStaticPart = (part: string): string =>
  // lol alr so it avoids escaping things that have been escaped already
  RegExp.escape(part.split('%').map(encodeURI).join('%'));

export const parseNamedGroup = (key: string, curIdx: number, endIdx: number): string => {
  let autoGroupPrefixing = key[curIdx] === '/',
    startIdx = curIdx + (autoGroupPrefixing ? 2 : 1);
  curIdx = startIdx;

  const modifier = key[endIdx - 1];
  while (true) {
    if (curIdx === endIdx) {
      const namedCapture = `(?<${key.slice(startIdx, endIdx + (isModifier(modifier) ? -1 : 0))}>`;
      return autoGroupPrefixing
        ? modifier === '?'
          ? `(?:\\/${namedCapture}[^/]+))?`
          : modifier === '+'
            ? `\\/${namedCapture}.+)`
            : modifier === '*'
              ? `(?:\\/${namedCapture}.+))?`
              : `\\/${namedCapture}[^/]+)`
        : namedCapture + (modifier === '?' ? '[^/]+)?' : modifier === '*' ? '[^/]*)' : '[^/]+)');
    }

    if (key[curIdx] === '(') {
      const regex = '(?:' + key.slice(curIdx + 1, findUnnamedGroupEnd(key, curIdx + 1)),
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

    curIdx++;
  }
};

export let HANDLERS!: Handlers<any>;

export const reset = (): void => {
  HANDLERS = [null];
};

/**
 * @returns pattern with additional |
 */
export const connect_node_compile_to_regexp = <T>(connectNode: ConnectNode<T>): string => {
  if (connectNode[0] !== null) {
    HANDLERS.push(connectNode[0]);
    return connectNode[1] === null ? '()|' : `(?:()|${node_compile_to_regexp(connectNode[1])})|`;
  }

  return node_compile_to_regexp(connectNode[1]!) + '|';
};

export const node_compile_to_regexp = <T>(node: Node<T>): string => {
  let parts = '',
    partsCnt = 0;

  if (node[1] !== null) {
    partsCnt = 1;

    HANDLERS.push(node[1]);
    parts += '()|';
  }

  if (node[2] !== null)
    for (let i = 0, staticChildren = node[2][1]; i < staticChildren.length; i++, partsCnt++)
      parts += node_compile_to_regexp(staticChildren[i]) + '|';

  if (node[3] !== null) {
    for (
      let i = 0, patterns = node[3][0], connectNodes = node[3][1];
      i < connectNodes.length;
      i++, partsCnt++
    ) {
      let patternPrevIdx = 0,
        pattern = patterns[i],
        modifier = pattern[pattern.length - 1],
        hasModifier = modifier !== '}',
        patternLen = pattern.length - (hasModifier ? 2 : 1);

      if (hasModifier) parts += '(?:';
      for (let patternIdx = 0; patternIdx < patternLen; ) {
        switch (pattern[patternIdx]) {
          case '(': {
            const patternRegexEnd = findUnnamedGroupEnd(pattern, patternIdx + 1);

            parts +=
              escapeStaticPart(pattern.slice(patternPrevIdx, patternIdx)) +
              '(?:' +
              pattern.slice(patternIdx + 1, patternRegexEnd);

            patternPrevIdx = patternIdx = patternRegexEnd;
            continue;
          }

          case ':': {
            const groupEndIdx = findNamedGroupEnd(pattern, patternIdx, patternLen);

            HANDLERS.push(null);
            parts +=
              escapeStaticPart(pattern.slice(patternPrevIdx, patternIdx)) +
              parseNamedGroup(pattern, patternIdx, groupEndIdx);

            patternPrevIdx = patternIdx = groupEndIdx + 1;
            continue;
          }
        }

        patternIdx++;
      }
      parts +=
        escapeStaticPart(pattern.slice(patternPrevIdx, patternLen)) +
        (hasModifier ? ')' + modifier : '') +
        connect_node_compile_to_regexp(connectNodes[i]);
    }
  }

  if (node[4] !== null)
    for (
      let i = 0, regexps = node[4][0], connectNodes = node[4][1];
      i < regexps.length;
      i++, partsCnt++
    )
      parts += '(?:' + regexps[i].slice(1) + connect_node_compile_to_regexp(connectNodes[i]);

  if (node[5] !== null)
    for (
      let i = 0, keys = node[5][0], connectNodes = node[5][1];
      i < keys.length;
      i++, partsCnt++
    ) {
      HANDLERS.push(null);
      parts +=
        parseNamedGroup(keys[i], 0, keys[i].length) +
        connect_node_compile_to_regexp(connectNodes[i]);
    }

  if (node[6] !== null) {
    partsCnt++;
    parts += '.*' + connect_node_compile_to_regexp(node[6]);
  }

  const str = partsCnt > 1 ? `(?:${parts.slice(0, -1)})` : parts.slice(0, -1);
  return node[0].length > 0 ? escapeStaticPart(node[0]) + str : str;
};
