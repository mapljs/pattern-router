import {
  linear_map_add,
  linear_map_get,
  linear_map_index,
  type LinearMap,
} from '../utils/linear-map.ts';
import { findNamedGroupEnd, findUnnamedGroupEnd } from './utils.ts';

// Sort by priority
export type Node<T> = [
  prefix: string,
  store: T | null,

  // map by first characters
  staticChildren: LinearMap<string, Node<T>> | null,

  // map group delimiters with modifier ({abc}?)
  delimGroups: LinearMap<string, ConnectNode<T>> | null,

  // map regexp to next node
  unnamedGroups: LinearMap<string, ConnectNode<T>> | null,

  // map regexp to next node
  namedGroups: LinearMap<string, ConnectNode<T>> | null,

  // next node after wildcard
  wildcard: ConnectNode<T> | null,
];

export type ConnectNode<T> = [store: T | null, next: Node<T> | null];

export const node_create = <T>(path: string, pathIdx: number, store: T): Node<T> => {
  let prevIdx = pathIdx;
  while (pathIdx < path.length) {
    switch (path[pathIdx]) {
      case '{': {
        let groupEndIdx = path.indexOf('}', pathIdx + 1) + 1;
        if (groupEndIdx < path.length)
          switch (path[groupEndIdx]) {
            case '+':
            case '*':
            case '?':
              groupEndIdx++;
          }

        const groupKey = path.slice(pathIdx + 1, groupEndIdx);

        return [
          path.slice(prevIdx, pathIdx),
          null,
          null,
          [
            [groupKey],
            [
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            ],
          ],
          null,
          null,
          null,
        ];
      }

      case '(': {
        const groupEndIdx = findUnnamedGroupEnd(path, pathIdx + 1),
          groupKey = path.slice(pathIdx + 1, groupEndIdx - 1);

        return [
          path.slice(prevIdx, pathIdx),
          null,
          null,
          null,
          [
            [groupKey],
            [
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            ],
          ],
          null,
          null,
        ];
      }

      // Fallthrough to ':'
      // @ts-ignore
      case '/':
        if (pathIdx + 1 === path.length || path[pathIdx + 1] !== ':') break;

      case ':': {
        const groupEndIdx = findNamedGroupEnd(path, pathIdx),
          groupKey = path.slice(pathIdx, groupEndIdx);

        return [
          path.slice(prevIdx, pathIdx),
          null,
          null,
          null,
          null,
          [
            [groupKey],
            [
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            ],
          ],
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

export const connect_node_insert_to_map = <T>(
  map: LinearMap<string, ConnectNode<T>>,
  groupKey: string,
  path: string,
  groupEndIdx: number,
  store: T,
): void => {
  const idx = linear_map_index(map, groupKey);

  // Create new node
  if (idx === -1)
    linear_map_add(
      map,
      groupKey,
      groupEndIdx === path.length ? [store, null] : [null, node_create(path, groupEndIdx, store)],
    );
  else {
    const connectNode = linear_map_get(map, idx);

    if (groupEndIdx === path.length) connectNode[0] = store;
    else if (connectNode[1] === null) connectNode[1] = node_create(path, groupEndIdx, store);
    else node_insert(connectNode[1], path, groupEndIdx, store);
  }
};

export const node_insert = <T>(node: Node<T>, path: string, pathIdx: number, store: T): void => {
  let nodePath = node[0],
    nodePathIdx: number = 0;

  insert: while (true) {
    switch (path[pathIdx]) {
      case '{': {
        const groupEndIdx = path.indexOf('}', pathIdx + 1) + 2,
          groupKey = path.slice(pathIdx + 1, groupEndIdx);

        // Create new map
        if (node[3] === null)
          node[3] = [
            [groupKey],
            [
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            ],
          ];
        else connect_node_insert_to_map(node[3], groupKey, path, groupEndIdx, store);
        return;
      }

      case '(': {
        const groupEndIdx = findUnnamedGroupEnd(path, pathIdx + 1),
          groupKey = path.slice(pathIdx + 1, groupEndIdx - 1);

        // Create new map
        if (node[4] === null)
          node[4] = [
            [groupKey],
            [
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            ],
          ];
        else connect_node_insert_to_map(node[4], groupKey, path, groupEndIdx, store);
        return;
      }

      // Fallthrough to ':'
      // @ts-ignore
      case '/':
        if (pathIdx + 1 === path.length || path[pathIdx + 1] !== ':') break;

      case ':': {
        const groupEndIdx = findNamedGroupEnd(path, pathIdx),
          groupKey = path.slice(pathIdx, groupEndIdx);

        // Create new map
        if (node[5] === null)
          node[5] = [
            [groupKey],
            [
              groupEndIdx === path.length
                ? [store, null]
                : [null, node_create(path, groupEndIdx, store)],
            ],
          ];
        else connect_node_insert_to_map(node[5], groupKey, path, groupEndIdx, store);
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

    const pathChar = path[pathIdx];

    // example: insert /a/bc to /a/b
    if (nodePathIdx === nodePath.length) {
      if (node[2] === null) node[2] = [[pathChar], [node_create(path, pathIdx, store)]];
      else {
        const map = node[2],
          idx = linear_map_index(map, pathChar);

        if (idx === -1) linear_map_add(map, pathChar, node_create(path, pathIdx, store));
        else {
          node = linear_map_get(map, idx);
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

        node[0] = nodePath.slice(0, nodePathIdx);
        node[1] = node[3] = node[4] = node[5] = node[6] = null;
        node[2] = [
          [pathChar, nodePathChar],
          [node_create(path, pathIdx, store), movedNode],
        ];
        return;
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
          node[2] = [[nodePathChar], [movedNode]];
        }

        node[1] = store;
      } else continue insert;
    }

    return;
  }
};
