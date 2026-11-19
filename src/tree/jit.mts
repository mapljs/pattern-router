import type { Tree } from '../tree.mts';
import { node_compile_to_regexp } from './regexp.mts';

export const tree_compile_to_code = (
  tree: Tree<string>,
  resultId: string,
  pathId: string,
): string => {
  let str = '';

  if (tree[0].size > 0) {
    str += `switch(${pathId}){`;
    tree[0].forEach((value, key) => {
      str += `case${JSON.stringify(key)}:{${value}}break;`;
    });
    str += '}';
  }

  if (tree.length === 2) {
    const root = tree[1],
      handlers: string[] = [],
      offsets = [1],
      regexp = node_compile_to_regexp(root, handlers, offsets);

    if (handlers.length > 0) {
      let prefix = `if(${resultId}[`;
      str += `{let ${resultId}=/^${regexp}$/.exec(${pathId});if(${resultId}!==null){${prefix + offsets[0]}]===""){${handlers[0]}}`;
      prefix = 'else ' + prefix;

      for (let i = 1; i < handlers.length; i++)
        str += prefix + offsets[i] + `]===""){${handlers[i]}}`;
      str += '}}';
    }
  }

  return str;
};
