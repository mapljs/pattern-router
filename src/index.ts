import {
  tree_init,
  tree_remove_dynamic,
  tree_remove_static,
  tree_set_dynamic,
  tree_set_static,
  type Tree,
} from './tree/index.ts';
import { is_dynamic_pattern } from './tree/utils.ts';

export type Router<T> = Map<string, Tree<T>>;

export const router_init = <T>(): Router<T> => new Map();

export const router_set_static = <T>(
  router: Router<T>,
  method: string,
  path: string,
  store: T,
): void => {
  let tree = router.get(method);
  if (tree == null) {
    tree = tree_init<T>();
    tree_set_static(tree, path, store);
    router.set(method, tree);
  } else tree_set_static(tree, path, store);
};
export const router_set_dynamic = <T>(
  router: Router<T>,
  method: string,
  path: string,
  store: T,
): void => {
  let tree = router.get(method);
  if (tree == null) {
    tree = tree_init<T>();
    tree_set_dynamic(tree, path, store);
    router.set(method, tree);
  } else tree_set_dynamic(tree, path, store);
};
export const router_set = <T>(router: Router<T>, method: string, path: string, store: T): void =>
  is_dynamic_pattern(path)
    ? router_set_dynamic(router, method, path, store)
    : router_set_static(router, method, path, store);

/**
 * @returns true if router is empty
 */
export const router_remove_static = <T>(
  router: Router<T>,
  method: string,
  path: string,
): boolean => {
  const tree = router.get(method);
  return (
    tree != null &&
    tree_remove_static(tree, path) &&
    (router.delete(method), router.size === 0)
  );
};

/**
 * @returns true if router is empty
 */
export const router_remove_dynamic = <T>(
  router: Router<T>,
  method: string,
  path: string,
): boolean => {
  const tree = router.get(method);
  return (
    tree != null &&
    tree_remove_dynamic(tree, path) &&
    (router.delete(method), router.size === 0)
  );
};
export const router_remove = <T>(router: Router<T>, method: string, path: string): boolean =>
  is_dynamic_pattern(path)
    ? router_remove_dynamic(router, method, path)
    : router_remove_static(router, method, path);
