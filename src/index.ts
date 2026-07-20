import {
  tree_init,
  tree_remove_dynamic,
  tree_remove_static,
  tree_set_dynamic,
  tree_set_static,
  type Tree,
} from './tree/index.ts';
import { isDynamicPattern } from './tree/utils.ts';
import {
  linear_map_add,
  linear_map_get,
  linear_map_index,
  linear_map_remove_reordered,
  type LinearMap,
} from './linear-map.ts';

export type Router<T> = LinearMap<string, Tree<T>>;

export const router_init = <T>(): Router<T> => [[], []];

export const router_set_static = <T>(
  router: Router<T>,
  method: string,
  path: string,
  store: T,
): void => {
  const idx = linear_map_index(router, method);
  if (idx === -1) {
    const tree = tree_init();
    tree_set_static(tree, path, store);
    linear_map_add(router, method, tree);
  } else tree_set_static(linear_map_get(router, idx), path, store);
};
export const router_set_dynamic = <T>(
  router: Router<T>,
  method: string,
  path: string,
  store: T,
): void => {
  const idx = linear_map_index(router, method);
  if (idx === -1) {
    const tree = tree_init();
    tree_set_dynamic(tree, path, store);
    linear_map_add(router, method, tree);
  } else tree_set_dynamic(linear_map_get(router, idx), path, store);
};
export const router_set = <T>(router: Router<T>, method: string, path: string, store: T): void =>
  isDynamicPattern(path)
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
  const idx = linear_map_index(router, method);
  return (
    idx !== -1 &&
    tree_remove_static(linear_map_get(router, idx), path) &&
    linear_map_remove_reordered(router, idx)
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
  const idx = linear_map_index(router, method);
  return (
    idx !== -1 &&
    tree_remove_dynamic(linear_map_get(router, idx), path) &&
    linear_map_remove_reordered(router, idx)
  );
};
export const router_remove = <T>(router: Router<T>, method: string, path: string): boolean =>
  isDynamicPattern(path)
    ? router_remove_dynamic(router, method, path)
    : router_remove_static(router, method, path);
