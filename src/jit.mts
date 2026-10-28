import type { Router } from './index.mts';
import type { Tree } from './tree.mts';
import { tree_compile_to_code } from './tree/jit.mts';

export const router_compile_to_code = (
  router: Router<string>,
  resultId: string,
  pathId: string,
  methodId: string,
  handleHeadCode: string,
): string => {
  let str = `switch(${methodId}){`,
    allTree = router.get(''),
    getTree = router.get('GET'),
    headTree: Tree<string> | undefined;

  allTree === null || router.delete('');

  // Handle GET & HEAD
  if (getTree != null) {
    router.delete('GET');
    str += 'case"HEAD":{' + handleHeadCode;

    headTree = router.get('HEAD');
    if (headTree != null) {
      router.delete('HEAD');
      str += tree_compile_to_code(headTree, resultId, pathId);
    }

    str += `}case "GET":{${tree_compile_to_code(getTree, resultId, pathId)}}break;`;
  }

  // Handle other methods
  router.forEach((value, key) => {
    str += `case"${key}":{${tree_compile_to_code(value, resultId, pathId)}}break;`;
  });

  // Re-add GET & HEAD
  if (getTree != null) {
    router.set('GET', getTree);
    headTree == null || router.set('HEAD', headTree);
  }

  str += '}';

  // Check all method match
  if (allTree != null) {
    router.set('', allTree);
    str += tree_compile_to_code(allTree, resultId, pathId);
  }

  return str;
};
