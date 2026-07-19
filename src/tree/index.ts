import {
  linear_map_add,
  linear_map_index,
  linear_map_is_empty,
  linear_map_remove_reordered,
  type LinearMap,
} from '../linear-map.ts';
import { node_insert, node_remove, type Node } from './node.ts';
import { validatePattern } from './utils.ts';

export interface Tree<T> extends LinearMap<string, T> {
  2: Node<T> | null;
}

export const tree_init = <T>(): Tree<T> => [[], [], null];
export const tree_set_static: <T>(tree: Tree<T>, path: string, store: T) => void = linear_map_add;
export const tree_set_dynamic = <T>(tree: Tree<T>, path: string, store: T): void => {
  validatePattern(path);
  node_insert((tree[2] ??= ['', null, null, null, null, null, null]), path, 0, store);
};

/**
 * @returns true if the tree has no item
 */
export const tree_remove_static = <T>(tree: Tree<T>, path: string): boolean => {
  const idx = linear_map_index(tree, path);
  return idx !== -1 && linear_map_remove_reordered(tree, idx) && tree[2] === null;
};

/**
 * @returns true if the tree has no item
 */
export const tree_remove_dynamic = <T>(tree: Tree<T>, path: string): boolean => {
  return (
    tree[2] !== null &&
    node_remove(tree[2], path, 0) &&
    // @ts-ignore
    ((tree[2] = null), linear_map_is_empty(tree))
  );
};
