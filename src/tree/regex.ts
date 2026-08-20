import type { ConnectNode, Node } from './node.ts';
import { escapeStaticPart, parseNamedGroup } from './utils.ts';

export type Handlers<T> = (T | null)[];

export let HANDLERS!: Handlers<any>;

export const reset = (): void => {
  HANDLERS = [null];
};

/**
 * @returns pattern with additional |
 */
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

  if (node[3] !== null) {
    // TODO: redo
    throw new Error('TODO group delimiters');
  }

  if (node[4] !== null)
    for (let i = 0, regexps = node[4][0], connectNodes = node[4][1]; i < regexps.length; i++)
      regexPaths.push(
        // might be lookahead or lookbehind assertions
        (regexps[i].startsWith('(?') ? regexps[i] : '(?:' + regexps[i].slice(1)) +
          connect_node_compile_to_regexp(connectNodes[i]),
      );

  if (node[5] !== null)
    for (let i = 0, keys = node[5][0], connectNodes = node[5][1]; i < keys.length; i++) {
      HANDLERS.push(null);
      regexPaths.push(
        parseNamedGroup(keys[i], 0, keys[i].length) +
          connect_node_compile_to_regexp(connectNodes[i]),
      );
    }

  if (node[6] !== null) regexPaths.push('.*' + connect_node_compile_to_regexp(node[6]));

  return (
    (node[0].length > 0 ? escapeStaticPart(node[0]) : '') +
    (regexPaths.length === 1 ? regexPaths[0] : `(?:${regexPaths.join('|')})`)
  );
};

export const node_compile_root_to_regexp = (root: Node<unknown>): string =>
  `^(?:${node_compile_to_regexp(root)}|$.)`;
