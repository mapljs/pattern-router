import type { LinearMap } from '../../utils/linear-map.ts';
import type { ConnectNode, Node } from '../node.ts';
import { findNamedGroupEnd, findUnnamedGroupEnd } from '../utils.ts';

// params keys and pos
export interface Handler<T> extends LinearMap<string, number> {
  // store
  2: T;
}

export type Handlers<T> = Handler<T>[];
const EMPTY: Handler<any> = [] as any;

let HANDLERS!: Handlers<any>;

export const parseNamedGroup = (
  key: string,
  curIdx: number,
  lastIdx: number,
): [name: string, regex: string] => {
  const autoGroupPrefixing = key[curIdx] === '/',
    startIdx = autoGroupPrefixing ? 2 : 1;

  // move to first pos of param name
  curIdx += startIdx;

  const modifier = key[lastIdx];
  while (true) {
    if (curIdx === lastIdx) {
      return autoGroupPrefixing
        ? modifier === '?'
          ? [key.slice(startIdx, lastIdx), '(?:\\/([^/]+))?']
          : modifier === '+'
            ? [key.slice(startIdx, lastIdx), '\\/([^/]+(?:\\/[^/]+)*)']
            : modifier === '*'
              ? [key.slice(startIdx, lastIdx), '(?:\\/([^/]+(?:\\/[^/]+)*))?']
              : [key.slice(startIdx, lastIdx + 1), '\\/([^/]+)']
        : modifier === '?'
          ? [key.slice(startIdx, lastIdx), '([^/]+)?']
          : modifier === '+'
            ? [key.slice(startIdx, lastIdx), '([^/]+)']
            : modifier === '*'
              ? [key.slice(startIdx, lastIdx), '([^/]*)']
              : [key.slice(startIdx, lastIdx + 1), '([^/]+)'];
    }

    if (key[curIdx] === '(') {
      const regex = key.slice(curIdx + 1, findUnnamedGroupEnd(key, curIdx + 1) - 1),
        name = key.slice(startIdx, curIdx);

      return autoGroupPrefixing
        ? modifier === '?'
          ? [name, `(?:\\/(${regex}))?`]
          : modifier === '+'
            ? [name, `\\/(${regex}(?:\\/${regex})*)`]
            : modifier === '*'
              ? [name, `(?:\\/(${regex}(?:\\/${regex})*))?`]
              : [name, `\\/(${regex})`]
        : modifier === '?'
          ? [name, `(${regex})?`]
          : modifier === '+'
            ? [name, `((?:${regex})+)`]
            : modifier === '*'
              ? [name, `((?:${regex})*)`]
              : [name, `(${regex})`];
    }

    curIdx++;
  }
};

// return a string with additional |
export const compileConnectNode = <T>(
  connectNode: ConnectNode<T>,
  paramKeys: string[],
  paramIndices: number[],
): string => {
  if (connectNode[0] !== null) {
    HANDLERS.push([paramKeys, paramIndices, connectNode[0]]);
    return connectNode[1] === null
      ? '()$|'
      : `(?:()$|${compileNode(connectNode[1], paramKeys, paramIndices)})|`;
  }

  return compileNode(connectNode[1]!, paramKeys, paramIndices) + '|';
};

export const compileNode = <T>(
  node: Node<T>,
  paramKeys: string[],
  paramIndices: number[],
): string => {
  let parts = '',
    partsCnt = 0;

  if (node[1] !== null) {
    partsCnt = 1;

    parts += '()$|';
    HANDLERS.push([paramKeys, paramIndices, node[1]]);
  }

  if (node[2] !== null)
    for (let i = 0, staticChildren = node[2][1]; i < staticChildren.length; i++, partsCnt++)
      parts += compileNode(staticChildren[i], paramKeys, paramIndices) + '|';

  if (node[3] !== null) {
    for (
      let i = 0, patterns = node[3][0], connectNodes = node[3][1];
      i < connectNodes.length;
      i++, partsCnt++
    ) {
      let patternPrevIdx = 0,
        pattern = patterns[i],
        newParamKeys = paramKeys.slice(),
        newParamIndices = paramIndices.slice();

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

          // Fallthrough to ':'
          // @ts-ignore
          case '/':
            if (patternIdx + 1 === pattern.length || pattern[patternIdx + 1] !== ':') break;

          case ':': {
            const groupEndIdx = findNamedGroupEnd(pattern, patternIdx),
              parsed = parseNamedGroup(pattern, patternIdx, groupEndIdx);

            newParamKeys.push(parsed[0]);
            newParamIndices.push(HANDLERS.length);

            HANDLERS.push(EMPTY);
            parts += pattern.slice(patternPrevIdx, patternIdx) + parsed[1];

            patternPrevIdx = patternIdx = groupEndIdx + 1;
            continue walk_pattern;
          }
        }

        patternIdx++;
      }

      parts +=
        pattern.slice(patternPrevIdx) +
        compileConnectNode(connectNodes[i], newParamKeys, newParamIndices);
    }
  }

  if (node[4] !== null)
    for (
      let i = 0, regexps = node[4][0], connectNodes = node[4][1];
      i < regexps.length;
      i++, partsCnt++
    )
      parts += regexps[i] + compileConnectNode(connectNodes[i], paramKeys, paramIndices);

  if (node[5] !== null)
    for (
      let i = 0, keys = node[5][0], connectNodes = node[5][1];
      i < keys.length;
      i++, partsCnt++
    ) {
      const parsed = parseNamedGroup(keys[i], 0, keys[i].length - 1),
        newParamKeys = paramKeys.concat(parsed[0]),
        newParamIndices = paramIndices.concat(HANDLERS.length);

      HANDLERS.push(EMPTY);
      parts += parsed[1] + compileConnectNode(connectNodes[i], newParamKeys, newParamIndices);
    }

  if (node[6] !== null) {
    partsCnt++;
    parts += '.*' + compileConnectNode(node[6], paramKeys, paramIndices);
  }

  return RegExp.escape(node[0]) + (partsCnt > 1 ? `(?:${parts.slice(0, -1)})` : parts.slice(0, -1));
};

export const compile = <T>(
  root: Node<T>,
): {
  regex: string;
  handlers: Handlers<T>;
} => {
  HANDLERS = [EMPTY];
  return {
    regex: compileNode(root, [], []),
    handlers: HANDLERS,
  };
};
