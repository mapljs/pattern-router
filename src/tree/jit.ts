import type { Tree } from './index.ts';
import { node_compile_to_regexp } from './regex.ts';

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
    let root = tree[1],
      wildcard = root[6],
      wildcardValue: string | null = null;

    if (wildcard !== null) {
      wildcardValue = wildcard[0];
      if (wildcard[1] === null) root[6] = null;
      else wildcard[0] = null;
    }

    {
      const handlers: string[] = [],
        offsets = [1],
        regexp = node_compile_to_regexp(root, handlers, offsets);

      if (handlers.length > 0) {
        let prefix = `if(${resultId}[`;
        str += `let ${resultId}=/^${regexp}$/.exec(${pathId});if(${resultId}!==null){${prefix + offsets[0]}]===""){${handlers[0]}}`;
        prefix = 'else ' + prefix;

        for (let i = 1; i < handlers.length; i++)
          str += prefix + offsets[i] + `]===""){${handlers[i]}}`;
        str += '}';
      }
    }

    if (wildcardValue !== null)
      str += wildcard![0] = wildcardValue;
    root[6] = wildcard;
  }

  return str;
};
