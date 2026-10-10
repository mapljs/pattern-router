import type { Router } from './index.ts';
import { tree_compile_to_code } from './tree/jit.ts';
import { linear_map_index, linear_map_index_from, linear_map_swap } from './linear-map.ts';

export const router_compile_to_code = (
  router: Router<string>,
  resultId: string,
  pathId: string,
  methodId: string,
  handleHeadCode: string,
): string => {
  let i = 0,
    matchAllIdx = linear_map_index(router, ''),
    trees = router[1],
    str = `switch(${methodId}){`;

  if (matchAllIdx !== -1) {
    linear_map_swap(router, matchAllIdx, i);
    matchAllIdx = i++;
  }

  // Handle GET & HEAD
  {
    let getIdx = linear_map_index_from(router, 'GET', i);
    if (getIdx !== -1) {
      linear_map_swap(router, getIdx, i);
      getIdx = i++;

      str += 'case"HEAD":{' + handleHeadCode;
      {
        let headIdx = linear_map_index_from(router, 'HEAD', i);
        if (headIdx !== -1) {
          linear_map_swap(router, headIdx, i);
          str += tree_compile_to_code(trees[headIdx = i++], resultId, pathId);
        }
      }
      str += `}case "GET":{${tree_compile_to_code(trees[getIdx], resultId, pathId)}break}`;
    }
  }

  for (let methods = router[0]; i < trees.length; i++)
    str += `case"${methods[i]}":{${tree_compile_to_code(trees[i], resultId, pathId)}break}`;
  str += '}';

  return matchAllIdx !== -1
    ? str + tree_compile_to_code(trees[matchAllIdx], resultId, pathId)
    : str;
};
