import type { Router } from './index.ts';
import { tree_compile_to_code } from './tree/jit.ts';
import { linear_map_index, linear_map_swap } from './linear-map.ts';

export const router_compile_to_code = (
  router: Router<string>,
  resultId: string,
  pathId: string,
  methodId: string,
): string => {
  const matchAllIdx = linear_map_index(router, ''),
    trees = router[1];

  if (matchAllIdx !== -1 && matchAllIdx !== trees.length - 1)
    linear_map_swap(router, matchAllIdx, trees.length - 1);

  let str = `switch(${methodId}){`;
  for (
    let i = 0, methods = router[0], treesLen = trees.length - (matchAllIdx !== -1 ? 1 : 0);
    i < treesLen;
    i++
  )
    str +=
      `case${JSON.stringify(methods[i])}:` + tree_compile_to_code(trees[i], resultId, pathId) + '';
  str += '}';

  return matchAllIdx !== -1
    ? str + tree_compile_to_code(trees[trees.length - 1], resultId, pathId)
    : str;
};
