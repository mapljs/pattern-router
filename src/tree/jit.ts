import type { Tree } from './index.ts';
import { node_compile_root_to_regexp, HANDLERS, reset } from './regex.ts';

export const tree_compile_to_code = (
  tree: Tree<string>,
  resultId: string,
  pathId: string,
): string => {
  let str = '',
    keys = tree[0],
    values = tree[1];

  if (keys.length > 0) {
    str += `switch(${pathId}){`;
    for (let i = 0; i < keys.length; i++)
      str += `case${JSON.stringify(keys[i])}:{${values[i]};break}`;
    str += '}';
  }

  if (tree[2] !== null) {
    let root = tree[2],
      wildcardValue: string | null = null;

    // Optimize for *
    if (root[6] !== null) {
      wildcardValue = root[6][0];
      root[6][0] = null;
    }

    reset();
    str += `let ${resultId}=/${node_compile_root_to_regexp(root)}/.exec(${pathId});if(${resultId}!==null){`;
    for (let i = 1, hasHandler = false, startIf = `if(${resultId}[`; i < HANDLERS.length; i++)
      if (HANDLERS[i] != null) {
        str += startIf + i + `]===""){${HANDLERS[i]}}`;
        if (!hasHandler) {
          hasHandler = true;
          startIf = 'else ' + startIf;
        }
      }

    str +=
      wildcardValue !== null ? ((root[6]![0] = wildcardValue), `}else{${wildcardValue}}`) : '}';
  }

  return str;
};
