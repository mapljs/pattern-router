import { tree_init, tree_set_dynamic, tree_set_static, type Tree } from './tree.mts';
import { is_dynamic_pattern } from './tree/utils.mts';

export type Router<T> = Map<string, Tree<T>>;

export const router_init = <T,>(): Router<T> => new Map();

export const router_set_static = <T,>(
  router: Router<T>,
  method: string,
  path: string,
  store: T,
): void => {
  let tree = router.get(method);
  tree == null && router.set(method, (tree = tree_init()));
  tree_set_static(tree, path, store);
};
export const router_set_dynamic = <T,>(
  router: Router<T>,
  method: string,
  path: string,
  store: T,
): void => {
  let tree = router.get(method);
  tree == null && router.set(method, (tree = tree_init()));
  tree_set_dynamic(tree, path, store);
};
export const router_set = <T,>(router: Router<T>, method: string, path: string, store: T): void =>
  is_dynamic_pattern(path)
    ? router_set_dynamic(router, method, path, store)
    : router_set_static(router, method, path, store);
