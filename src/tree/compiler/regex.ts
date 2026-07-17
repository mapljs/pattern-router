import type { ConnectNode, Node } from '../node.ts';
import { findNamedGroupEnd, findUnnamedGroupEnd, isModifier } from '../utils.ts';

export type Handlers<T> = (T | null)[];

export let HANDLERS!: Handlers<any>;

export const parseNamedGroup = (
  key: string,
  curIdx: number,
  lastIdx: number,
): [name: string, regex: string] => {
  let autoGroupPrefixing = key[curIdx] === '/',
    startIdx = autoGroupPrefixing ? 2 : 1;

  // move to first pos of param name
  curIdx += startIdx;

  const modifier = key[lastIdx];
  while (true) {
    if (curIdx === lastIdx) {
      const name = key.slice(startIdx, lastIdx + (isModifier(modifier) ? 0 : 1)),
        namedCapture = `(?<${name}>`;

      return [
        name,
        autoGroupPrefixing
          ? modifier === '?'
            ? `(?:\\/${namedCapture}[^/]+)|${namedCapture}))`
            : modifier === '+'
              ? `\\/${namedCapture}[^/]+(?:\\/[^/]+)*)`
              : modifier === '*'
                ? `(?:\\/${namedCapture}[^/]+(?:\\/[^/]+)*)|${namedCapture}))`
                : `\\/${namedCapture}[^/]+)`
          : namedCapture + (modifier === '?' || modifier === '*' ? '[^/]*)' : '[^/]+)'),
      ];
    }

    if (key[curIdx] === '(') {
      const regex = key.slice(curIdx + 1, findUnnamedGroupEnd(key, curIdx + 1) - 1),
        name = key.slice(startIdx, curIdx),
        namedCapture = `(?<${name}>`;

      return [
        name,
        autoGroupPrefixing
          ? modifier === '?'
            ? `(?:\\/${namedCapture + regex})|${namedCapture}))`
            : modifier === '+'
              ? `\\/${namedCapture + regex}(?:\\/${regex})*)`
              : modifier === '*'
                ? `(?:\\/${namedCapture + regex}(?:\\/${regex})*)|())`
                : `\\/${namedCapture + regex})`
          : namedCapture +
            (modifier === '?'
              ? regex + '|)'
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

// return a string with additional |
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
        pattern = patterns[i];

      walk_pattern: for (let patternIdx = 0; patternIdx < pattern.length; ) {
        switch (pattern[patternIdx]) {
          case '(': {
            const patternRegexEnd = findUnnamedGroupEnd(pattern, patternIdx + 1);

            parts +=
              pattern.slice(patternPrevIdx, patternIdx) +
              pattern.slice(patternIdx + 1, patternRegexEnd - 1);

            patternPrevIdx = patternIdx = patternRegexEnd;
            continue walk_pattern;
          }

          case ':': {
            const groupEndIdx = findNamedGroupEnd(pattern, patternIdx),
              parsed = parseNamedGroup(pattern, patternIdx, groupEndIdx);
            HANDLERS.push(null);
            parts += pattern.slice(patternPrevIdx, patternIdx) + parsed[1];

            patternPrevIdx = patternIdx = groupEndIdx + 1;
            continue walk_pattern;
          }
        }

        patternIdx++;
      }

      parts += pattern.slice(patternPrevIdx) + compileConnectNode(connectNodes[i]);
    }
  }

  if (node[4] !== null)
    for (
      let i = 0, regexps = node[4][0], connectNodes = node[4][1];
      i < regexps.length;
      i++, partsCnt++
    )
      parts += regexps[i] + compileConnectNode(connectNodes[i]);

  if (node[5] !== null)
    for (
      let i = 0, keys = node[5][0], connectNodes = node[5][1];
      i < keys.length;
      i++, partsCnt++
    ) {
      const parsed = parseNamedGroup(keys[i], 0, keys[i].length - 1);
      HANDLERS.push(null);
      parts += parsed[1] + compileConnectNode(connectNodes[i]);
    }

  if (node[6] !== null) {
    partsCnt++;
    parts += '.*' + compileConnectNode(node[6]);
  }

  return RegExp.escape(node[0]) + (partsCnt > 1 ? `(?:${parts.slice(0, -1)})` : parts.slice(0, -1));
};

export const reset = (): void => {
  HANDLERS = [null];
};
