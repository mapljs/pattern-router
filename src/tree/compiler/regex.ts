import type { ConnectNode, Node } from '../node.ts';
import { findNamedGroupEnd, findUnnamedGroupEnd, isModifier } from '../utils.ts';

export type Handlers<T> = (T | null)[];

export let HANDLERS!: Handlers<any>;

export const escapeStaticPart = (part: string): string => RegExp.escape(encodeURI(part));

export const parseNamedGroup = (
  key: string,
  curIdx: number,
  endIdx: number,
): [name: string, regex: string] => {
  let autoGroupPrefixing = key[curIdx] === '/',
    startIdx = curIdx + (autoGroupPrefixing ? 2 : 1);
  curIdx = startIdx;

  const modifier = key[endIdx - 1];
  while (true) {
    if (curIdx === endIdx) {
      const name = key.slice(startIdx, endIdx + (isModifier(modifier) ? -1 : 0)),
        namedCapture = `(?<${name}>`;

      return [
        name,
        autoGroupPrefixing
          ? modifier === '?'
            ? `(?:\\/${namedCapture}[^/]+))?`
            : modifier === '+'
              ? `\\/${namedCapture}[^/]+(?:\\/[^/]+)*)`
              : modifier === '*'
                ? `(?:\\/${namedCapture}[^/]+(?:\\/[^/]+)*)|${namedCapture}))`
                : `\\/${namedCapture}[^/]+)`
          : namedCapture + (modifier === '?' ? '[^/]+)?' : modifier === '*' ? '[^/]*)' : '[^/]+)'),
      ];
    }

    if (key[curIdx] === '(') {
      const regex = '(?:' + key.slice(curIdx + 1, findUnnamedGroupEnd(key, curIdx + 1)),
        name = key.slice(startIdx, curIdx),
        namedCapture = `(?<${name}>`;

      return [
        name,
        autoGroupPrefixing
          ? modifier === '?'
            ? `(?:\\/${namedCapture + regex}))?`
            : modifier === '+'
              ? `\\/${namedCapture + regex}(?:\\/${regex})*)`
              : modifier === '*'
                ? `(?:\\/${namedCapture + regex}(?:\\/${regex})*)|())`
                : `\\/${namedCapture + regex})`
          : namedCapture +
            (modifier === '?'
              ? regex + ')?'
              : modifier === '+'
                ? `(?:${regex})+)`
                : modifier === '*'
                  ? `(?:${regex})*)`
                  : regex + ')'),
      ];
    }

    curIdx++;
  }
};

/**
 * @returns pattern with additional |
 */
export const compileConnectNode = <T>(connectNode: ConnectNode<T>): string => {
  if (connectNode[0] !== null) {
    HANDLERS.push(connectNode[0]);
    return connectNode[1] === null ? '()$|' : `(?:()$|${compileNode(connectNode[1])})|`;
  }

  return compileNode(connectNode[1]!) + '|';
};

export const compileNode = <T>(node: Node<T>): string => {
  let parts = '',
    partsCnt = 0;

  if (node[1] !== null) {
    partsCnt = 1;

    parts += '()$|';
    HANDLERS.push(node[1]);
  }

  if (node[2] !== null)
    for (let i = 0, staticChildren = node[2][1]; i < staticChildren.length; i++, partsCnt++)
      parts += compileNode(staticChildren[i]) + '|';

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
              '(:' +
              pattern.slice(patternIdx + 1, patternRegexEnd);

            patternPrevIdx = patternIdx = patternRegexEnd;
            continue;
          }

          case ':': {
            const groupEndIdx = findNamedGroupEnd(pattern, patternIdx, patternLen),
              parsed = parseNamedGroup(pattern, patternIdx, groupEndIdx);
            HANDLERS.push(null);
            parts += escapeStaticPart(pattern.slice(patternPrevIdx, patternIdx)) + parsed[1];

            patternPrevIdx = patternIdx = groupEndIdx + 1;
            continue;
          }
        }

        patternIdx++;
      }
      parts +=
        escapeStaticPart(pattern.slice(patternPrevIdx, patternLen)) +
        (hasModifier ? ')' + modifier : '') +
        compileConnectNode(connectNodes[i]);
    }
  }

  if (node[4] !== null)
    for (
      let i = 0, regexps = node[4][0], connectNodes = node[4][1];
      i < regexps.length;
      i++, partsCnt++
    )
      parts += '(?:' + regexps[i] + ')' + compileConnectNode(connectNodes[i]);

  if (node[5] !== null)
    for (
      let i = 0, keys = node[5][0], connectNodes = node[5][1];
      i < keys.length;
      i++, partsCnt++
    ) {
      const parsed = parseNamedGroup(keys[i], 0, keys[i].length);
      HANDLERS.push(null);
      parts += parsed[1] + compileConnectNode(connectNodes[i]);
    }

  if (node[6] !== null) {
    partsCnt++;
    parts += '.*' + compileConnectNode(node[6]);
  }

  return (
    escapeStaticPart(node[0]) + (partsCnt > 1 ? `(?:${parts.slice(0, -1)})` : parts.slice(0, -1))
  );
};

export const reset = (): void => {
  HANDLERS = [null];
};
