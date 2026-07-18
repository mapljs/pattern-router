import { linear_map_add, type LinearMap } from '../utils/linear-map.ts';
import { node_create, node_insert, type Node } from './node.ts';

export interface Tree<T> extends LinearMap<string, T> {
  2?: Node<T>;
}

export const tree_init = <T>(): Tree<T> => [[], []];

export const tree_set_static: <T>(tree: Tree<T>, path: string, store: T) => void = linear_map_add;
export const tree_set_dynamic = <T>(tree: Tree<T>, path: string, store: T): void => {
  if (tree.length === 2)
    // @ts-ignore
    tree.push(node_create(path, 0, store));
  else node_insert(tree[2]!, path, 0, store);
};
