import type { Tree } from './index.ts';
import { node_compile_to_regexp, HANDLERS, reset } from './regex.ts';

export const tree_compile_to_code = (
  tree: Tree<string>,
  resultId: string,
  pathId: string,
): string => {
  let str = '',
    keys = tree[0],
    values = tree[1];

  if (keys.length > 0)
    for (let i = 0, prefix = `if(${pathId}===`; i < keys.length; i++) {
      str += prefix + JSON.stringify(keys[i]) + `){${values[i]}}`;
      if (i === 0) prefix = 'else ' + prefix;
    }

  if (tree[2] !== null) {
    // console.log(JSON.stringify(tree[2]!, null, 2));
    reset();
    str += `{let ${resultId}=/^${node_compile_to_regexp(tree[2])}$/.exec(${pathId});if(${resultId}!==null){`;
    for (let i = 1, hasHandler = false, startIf = `if(${resultId}[`; i < HANDLERS.length; i++)
      if (HANDLERS[i] !== null) {
        str += startIf + i + `]===""){${HANDLERS[i]}}`;
        if (!hasHandler) {
          hasHandler = true;
          startIf = 'else ' + startIf;
        }
      }
    str += '}}';
  }

  return str;
};
