import {
  unnamed_group_to_regexp,
  group_delimiter_end,
  named_group_end,
  unnamed_group_end,
} from './utils.mts';

type Dict<T> = Partial<Record<string, T>>;

// Sort by priority
export type Node<T> = [
  prefix: string,
  store: T | null,

  // map by first characters
  staticChildren: Dict<Node<T>> | null,

  // map group delimiters with modifier ({abc}?)
  delimGroups: Dict<ConnectNode<T>> | null,

  // map regexp to next node
  unnamedGroups: Dict<ConnectNode<T>> | null,

  // map regexp to next node
  namedGroups: Dict<ConnectNode<T>> | null,

  // next node after wildcard
  wildcard: ConnectNode<T> | null,
];

export type ConnectNode<T> = [store: T | null, next: Node<T> | null];

const dict = <T,>(key: string, value: T) => {
  const v: Dict<T> = Object.create(null);
  v[key] = value;
  return v;
};

const dict_remove = (dict: Dict<any>, key: string): boolean => (
  delete dict[key],
  Object.keys(dict).length === 0
);

export const node_create_root = <T,>(): Node<T> => ['', null, null, null, null, null, null];

export const node_create = <T,>(path: string, pathIdx: number, store: T): Node<T> => {
  let prevIdx = pathIdx;
  while (pathIdx < path.length) {
    switch (path[pathIdx]) {
      case '{': {
        const groupEndIdx = group_delimiter_end(path, pathIdx + 1);

        return [
          path.slice(prevIdx, pathIdx),
          null,
          null,
          dict(
            path.slice(pathIdx + 1, groupEndIdx),
            groupEndIdx === path.length
              ? [store, null]
              : [null, node_create(path, groupEndIdx, store)],
          ),
          null,
          null,
          null,
        ];
      }

      case '(': {
        const groupEndIdx = unnamed_group_end(path, pathIdx + 1);

        return [
          path.slice(prevIdx, pathIdx),
          null,
          null,
          null,
          dict(
            unnamed_group_to_regexp(path, pathIdx, groupEndIdx),
            groupEndIdx === path.length
              ? [store, null]
              : [null, node_create(path, groupEndIdx, store)],
          ),
          null,
          null,
        ];
      }

      // Fallthrough to ':'
      // @ts-ignore
      case '/':
        if (pathIdx + 1 === path.length || path[pathIdx + 1] !== ':') break;

      case ':': {
        const groupEndIdx = named_group_end(path, pathIdx);

        return [
          path.slice(prevIdx, pathIdx),
          null,
          null,
          null,
          null,
          dict(
            path.slice(pathIdx, groupEndIdx),
            groupEndIdx === path.length
              ? [store, null]
              : [null, node_create(path, groupEndIdx, store)],
          ),
          null,
        ];
      }

      case '*':
        return [
          path.slice(prevIdx, pathIdx),
          null,
          null,
          null,
          null,
          null,
          pathIdx + 1 === path.length
            ? [store, null]
            : [null, node_create(path, pathIdx + 1, store)],
        ];
    }

    pathIdx++;
  }

  return [path.slice(prevIdx), store, null, null, null, null, null];
};

export const insert_connect_node = <T,>(
  map: Dict<ConnectNode<T>>,
  groupKey: string,
  path: string,
  groupEndIdx: number,
  store: T,
): void => {
  const connectNode = map[groupKey];

  // Create new node
  if (connectNode == null)
    map[groupKey] =
      groupEndIdx === path.length ? [store, null] : [null, node_create(path, groupEndIdx, store)];
  else {
    if (groupEndIdx === path.length) connectNode[0] = store;
    else if (connectNode[1] === null) connectNode[1] = node_create(path, groupEndIdx, store);
    else node_insert(connectNode[1], path, groupEndIdx, store);
  }
};

export const node_insert = <T,>(node: Node<T>, path: string, pathIdx: number, store: T): void => {
  let nodePath = node[0],
    nodePathIdx: number = 0;

  insert: while (true) {
    const pathChar = path[pathIdx];

    // example: insert /a/bc to /a/b
    if (nodePathIdx === nodePath.length) {
      switch (pathChar) {
        case '{': {
          const groupEndIdx = group_delimiter_end(path, pathIdx + 1),
            groupKey = path.slice(pathIdx + 1, groupEndIdx);

          // Create new map
          if (node[3] === null)
            node[3] = dict(
              groupKey,
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            );
          else insert_connect_node(node[3], groupKey, path, groupEndIdx, store);
          return;
        }

        case '(': {
          const groupEndIdx = unnamed_group_end(path, pathIdx + 1),
            groupKey = path.slice(pathIdx, groupEndIdx);

          // Create new map
          if (node[4] === null)
            node[4] = dict(
              groupKey,
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            );
          else insert_connect_node(node[4], groupKey, path, groupEndIdx, store);
          return;
        }

        // Fallthrough to ':'
        // @ts-ignore
        case '/':
          if (pathIdx + 1 === path.length || path[pathIdx + 1] !== ':') break;

        case ':': {
          const groupEndIdx = named_group_end(path, pathIdx),
            groupKey = path.slice(pathIdx, groupEndIdx);

          // Create new map
          if (node[5] === null)
            node[5] = dict(
              groupKey,
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            );
          else insert_connect_node(node[5], groupKey, path, groupEndIdx, store);
          return;
        }

        case '*':
          if (pathIdx + 1 === path.length) {
            if (node[6] === null) node[6] = [store, null];
            else node[6][0] = store;
          } else {
            if (node[6] === null) node[6] = [null, node_create(path, pathIdx + 1, store)];
            else {
              const connectNode = node[6];
              if (connectNode[1] === null) connectNode[1] = node_create(path, pathIdx + 1, store);
              else {
                node = connectNode[1];
                pathIdx++;

                nodePath = node[0];
                nodePathIdx = 0;
                continue insert;
              }
            }
          }
          return;
      }

      if (node[2] === null) node[2] = dict(pathChar, node_create(path, pathIdx, store));
      else {
        const map = node[2],
          newNode = map[pathChar];

        if (newNode == null) map[pathChar] = node_create(path, pathIdx, store);
        else {
          node = newNode;
          pathIdx++;

          nodePath = node[0];
          nodePathIdx = 1;
          continue insert;
        }
      }
    } else {
      const nodePathChar = nodePath[nodePathIdx];

      // example: insert /a/bc to /a/bd
      if (pathChar !== nodePathChar) {
        const movedNode: Node<T> = [
          nodePath.slice(nodePathIdx),
          node[1],
          node[2],
          node[3],
          node[4],
          node[5],
          node[6],
        ];

        nodePath = node[0] = nodePath.slice(0, nodePathIdx);
        node[1] = node[3] = node[4] = node[5] = node[6] = null;
        node[2] = dict(nodePathChar, movedNode);

        continue insert;
      }

      pathIdx++;
      nodePathIdx++;

      // insert path ends
      if (pathIdx === path.length) {
        // example: insert /a/b to /a/bc
        if (nodePathIdx < nodePath.length) {
          const movedNode: Node<T> = [
            nodePath.slice(nodePathIdx),
            node[1],
            node[2],
            node[3],
            node[4],
            node[5],
            node[6],
          ];

          node[0] = nodePath.slice(0, nodePathIdx);
          node[3] = node[4] = node[5] = node[6] = null;
          node[2] = dict(nodePathChar, movedNode);
        }

        node[1] = store;
      } else continue insert;
    }

    return;
  }
};

/**
 * @returns true if no items remain
 */
export const connect_node_dict_remove = (
  map: Dict<ConnectNode<any>>,
  key: string,
  path: string,
  pathIdx: number,
): boolean => {
  const connectNode = map[key];

  return (
    connectNode != null && connect_node_remove(connectNode, path, pathIdx) && dict_remove(map, key)
  );
};

/**
 * @returns true if this connect node is empty
 */
export const connect_node_remove = (
  node: ConnectNode<any>,
  path: string,
  pathIdx: number,
): boolean =>
  pathIdx === path.length
    ? ((node[0] = null), node[1] === null)
    : node_remove(node[1]!, path, pathIdx) && ((node[1] = null), node[0] === null);

/**
 * @returns true if this node is empty
 */
export const node_remove = (node: Node<any>, path: string, pathIdx: number): boolean => {
  if (!path.startsWith(node[0], pathIdx)) return false;
  pathIdx += node[0].length;

  if (pathIdx === path.length) {
    node[1] = null;
    return (
      node[2] === null &&
      node[3] === null &&
      node[4] === null &&
      node[5] === null &&
      node[6] === null
    );
  } else {
    switch (path[pathIdx]) {
      case '{': {
        if (node[3] === null) return false;

        const groupEndIdx = group_delimiter_end(path, pathIdx + 1);
        return (
          connect_node_dict_remove(
            node[3],
            path.slice(pathIdx + 1, groupEndIdx),
            path,
            groupEndIdx,
          ) &&
          ((node[3] = null),
          node[1] === null &&
            node[2] === null &&
            node[4] === null &&
            node[5] === null &&
            node[6] === null)
        );
      }

      case '(': {
        if (node[4] === null) return false;

        const groupEndIdx = unnamed_group_end(path, pathIdx + 1);
        return (
          connect_node_dict_remove(node[4], path.slice(pathIdx, groupEndIdx), path, groupEndIdx) &&
          ((node[4] = null),
          node[1] === null &&
            node[2] === null &&
            node[3] === null &&
            node[5] === null &&
            node[6] === null)
        );
      }

      // Fallthrough to ':'
      // @ts-ignore
      case '/':
        if (pathIdx + 1 === path.length || path[pathIdx + 1] !== ':') break;

      case ':': {
        if (node[5] === null) return false;

        const groupEndIdx = named_group_end(path, pathIdx);
        return (
          connect_node_dict_remove(node[5], path.slice(pathIdx, groupEndIdx), path, groupEndIdx) &&
          ((node[5] = null),
          node[1] === null &&
            node[2] === null &&
            node[3] === null &&
            node[4] === null &&
            node[6] === null)
        );
      }

      case '*':
        return (
          node[6] !== null &&
          connect_node_remove(node[6], path, pathIdx + 1) &&
          ((node[6] = null),
          node[1] === null &&
            node[2] === null &&
            node[3] === null &&
            node[4] === null &&
            node[5] === null)
        );
    }

    if (node[2] === null) return false;

    const map = node[2],
      childNode = map[path[pathIdx]];

    return (
      childNode != null &&
      node_remove(childNode, path, pathIdx) &&
      dict_remove(map, path[pathIdx]) &&
      ((node[2] = null),
      node[1] === null &&
        node[3] === null &&
        node[4] === null &&
        node[5] === null &&
        node[6] === null)
    );
  }
};
