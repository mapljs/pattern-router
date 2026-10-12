import { node_insert, node_remove, type Node } from './node.ts';

export type Tree<T> = [staticMap: Map<string, T>] | [staticMap: Map<string, T>, root: Node<T>];

export const tree_init = <T>(): Tree<T> => [new Map()];
export const tree_set_static = <T>(tree: Tree<T>, path: string, store: T): void => {
  tree[0].set(path, store);
};
export const tree_set_dynamic = <T>(tree: Tree<T>, path: string, store: T): void => {
  tree.length === 1 && tree.push(['', null, null, null, null, null, null] as any);
  node_insert(tree[1]!, path, 0, store);
};

/**
 * @returns true if the tree is empty
 */
export const tree_remove_static = <T>(tree: Tree<T>, path: string): boolean =>
  (tree[0].delete(path), tree.length === 1 && tree[0].size === 0);

/**
 * @returns true if the tree is empty
 */
export const tree_remove_dynamic = <T>(tree: Tree<T>, path: string): boolean =>
  tree.length === 2 && node_remove(tree[1], path, 0) && (tree.pop(), tree[0].size === 0);
