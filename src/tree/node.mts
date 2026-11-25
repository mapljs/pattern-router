import {
  group_delimiter_end,
  named_group_end,
  unnamed_group_end,
  wildcard_group_end,
} from './utils.mts';

type Dict<T> = Partial<Record<string, T>>;

// Sort by priority
export type Node<T> = [
  prefix: string,
  store: T | null,
  staticChildren: Dict<Node<T>> | null,
  dynamicChildren: Dict<Node<T>> | null,
];

export const dict = <T,>(key: string, value: T): Dict<T> => {
    const v: Dict<T> = Object.create(null);
    v[key] = value;
    return v;
  },
  regexp_group_needs_prefixing = (path: string, pathIdx: number, firstIdx: number): 0 | 1 =>
    pathIdx > firstIdx && path[pathIdx - 1] === '/' ? 1 : 0,
  is_prefixed_regexp_group = (path: string, pathIdx: number): boolean =>
    path[pathIdx] === '/' &&
    pathIdx + 1 < path.length &&
    (path[pathIdx + 1] === '(' || path[pathIdx + 1] === ':' || path[pathIdx + 1] === '*'),
  // node dict
  node_dict_create = <T,>(
    path: string,
    keyStartIdx: number,
    keyEndIdx: number,
    store: T,
  ): Dict<Node<T>> =>
    dict(
      path.slice(keyStartIdx, keyEndIdx),
      keyEndIdx === path.length
        ? // fast path
          ['', store, null, null]
        : node_create(path, keyEndIdx, store),
    ),
  insert_to_node_dict = <T,>(
    node: Node<T>,
    path: string,
    keyStartIdx: number,
    keyEndIdx: number,
    store: T,
  ): void => {
    if (node[3] === null) {
      node[3] = node_dict_create(path, keyStartIdx, keyEndIdx, store);
    } else {
      const map = node[3],
        groupKey = path.slice(keyStartIdx, keyEndIdx),
        connectNode = map[groupKey];

      if (connectNode == null)
        map[groupKey] =
          keyEndIdx === path.length
            ? // fast path
              ['', store, null, null]
            : node_create(path, keyEndIdx, store);
      else {
        // fast path
        if (keyEndIdx === path.length) connectNode[1] = store;
        else node_insert(connectNode, path, keyEndIdx, store);
      }
    }
  },
  // node
  node_create_root = <T,>(): Node<T> => ['', null, null, null],
  node_create = <T,>(path: string, startIdx: number, store: T): Node<T> => {
    for (let pathIdx = startIdx; pathIdx < path.length; pathIdx++) {
      switch (path[pathIdx]) {
        case '{': {
          return [
            path.slice(startIdx, pathIdx),
            null,
            null,
            node_dict_create(path, pathIdx + 1, group_delimiter_end(path, pathIdx + 1), store),
          ];
        }

        case '(': {
          pathIdx -= regexp_group_needs_prefixing(path, pathIdx, startIdx);

          return [
            path.slice(startIdx, pathIdx),
            null,
            null,
            node_dict_create(path, pathIdx, unnamed_group_end(path, pathIdx), store),
          ];
        }

        case ':': {
          pathIdx -= regexp_group_needs_prefixing(path, pathIdx, startIdx);

          return [
            path.slice(startIdx, pathIdx),
            null,
            null,
            node_dict_create(path, pathIdx, named_group_end(path, pathIdx), store),
          ];
        }

        case '*': {
          pathIdx -= regexp_group_needs_prefixing(path, pathIdx, startIdx);

          return [
            path.slice(startIdx, pathIdx),
            null,
            null,
            node_dict_create(path, pathIdx, wildcard_group_end(path, pathIdx), store),
          ];
        }

        case '\\':
          throw new Error(
            'escaping characters is not supported, use their url-encoded equivalent instead!',
          );
      }
    }

    return [path.slice(startIdx), store, null, null];
  },
  node_insert = <T,>(node: Node<T>, path: string, pathIdx: number, store: T): void => {
    let nodePath = node[0],
      nodePathIdx = 0;

    while (pathIdx < path.length) {
      let pathChar = path[pathIdx];
      if (nodePathIdx === nodePath.length) {
        if (is_prefixed_regexp_group(path, pathIdx)) pathChar = path[pathIdx + 1];

        switch (pathChar) {
          case '{': {
            insert_to_node_dict(
              node,
              path,
              pathIdx + 1,
              group_delimiter_end(path, pathIdx + 1),
              store,
            );
            return;
          }

          case '(': {
            insert_to_node_dict(node, path, pathIdx, unnamed_group_end(path, pathIdx), store);
            return;
          }

          case ':': {
            insert_to_node_dict(node, path, pathIdx, named_group_end(path, pathIdx), store);
            return;
          }

          case '*': {
            insert_to_node_dict(node, path, pathIdx, wildcard_group_end(path, pathIdx), store);
            return;
          }
        }

        if (node[2] === null) {
          node[2] = dict(pathChar, node_create(path, pathIdx, store));
          return;
        } else {
          const map = node[2];

          if ((node = map[pathChar]!) == null) {
            map[pathChar] = node_create(path, pathIdx, store);
            return;
          } else {
            pathIdx++;

            nodePath = node[0];
            nodePathIdx = 1;
          }
        }
      } else {
        const nodePathChar = nodePath[nodePathIdx];

        // insert /a/bc to /a/bd
        if (pathChar !== nodePathChar || is_prefixed_regexp_group(path, pathIdx)) {
          const movedNode: Node<T> = [nodePath.slice(nodePathIdx), node[1], node[2], node[3]];

          nodePath = node[0] = nodePath.slice(0, nodePathIdx);
          node[2] = dict(nodePathChar, movedNode);
          node[1] = node[3] = null;
        } else {
          pathIdx++;
          nodePathIdx++;
        }
      }
    }

    // insert /a/b to /a/bc
    if (nodePathIdx < nodePath.length) {
      const movedNode: Node<T> = [nodePath.slice(nodePathIdx), node[1], node[2], node[3]];

      node[0] = nodePath.slice(0, nodePathIdx);
      node[2] = dict(nodePath[nodePathIdx], movedNode);
      node[3] = null;
    }

    node[1] = store;
  };
