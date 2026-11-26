import { node_create_root, node_insert, type Node } from './tree/node.mts';
import { is_dynamic_pattern } from './tree/utils.mts';

export type Tree<T> = [staticMap: Map<string, T>, root?: Node<T>];
export type Router<T> = Map<string, Tree<T>>;

export const router_init = <T,>(): Router<T> => new Map(),
  router_set_static = <T,>(router: Router<T>, method: string, path: string, store: T): void => {
    let tree = router.get(method);
    tree == null && router.set(method, (tree = [new Map()]));
    tree[0].set(path, store);
  },
  router_set_dynamic = <T,>(router: Router<T>, method: string, path: string, store: T): void => {
    let tree = router.get(method);

    if (tree == null) router.set(method, (tree = [new Map(), node_create_root()]));
    else tree.length === 1 && tree.push(node_create_root() as any);

    node_insert(tree[1]!, path, 0, store);
  },
  router_set = <T,>(router: Router<T>, method: string, path: string, store: T): void =>
    (is_dynamic_pattern(path) ? router_set_dynamic : router_set_static)(
      router,
      method,
      path,
      store,
    );
