import type { Router, Tree } from './index.mts';
import { node_compile_to_regexp } from './tree/regexp.mts';

/**
 * Output code.
 *
 * @example
 * router_compile_to_code(...);
 * console.log(CODE);
 */
export let CODE = '',
  /**
   * @internal
   */
  RESULT_ID = '',
  /**
   * @internal
   */
  PATH_ID = '',
  /**
   * @internal
   */
  REGEXP_ID = 0,
  /**
   * Required declarations for output code.
   *
   * @example
   * ,m0=/^abc(?:[0-9]+)()$/
   */
  DECLS = '',
  /**
   * @internal
   */
  static_route_compile_to_case_code = (value: string, key: string): void => {
    CODE += `case${JSON.stringify(key)}:{${value}}break;`;
  },
  /**
   * @internal
   */
  route_tree_compile_to_case_code = (value: Tree<string>, key: string): void => {
    CODE += `case"${key}":`;
    tree_compile_to_code(value);
    CODE += 'break;';
  },
  /**
   * @internal
   */
  tree_compile_to_code = (tree: Tree<string>): void => {
    if (tree[0].size > 0) {
      CODE += `switch(${PATH_ID}){`;
      tree[0].forEach(static_route_compile_to_case_code);
      CODE += '}';
    }

    if (tree.length === 2) {
      const handlers: string[] = [],
        offsets = [1],
        regexp = node_compile_to_regexp(tree[1]!, handlers, offsets);

      if (handlers.length > 0) {
        let prefix = `if(${RESULT_ID}[`,
          regexp_ids = RESULT_ID + REGEXP_ID++;
        DECLS += `,${regexp_ids}=/^${regexp}$/`;

        CODE += `{let ${RESULT_ID}=${regexp_ids}.exec(${PATH_ID});if(${RESULT_ID}!==null){${prefix + offsets[0]}]===""){${handlers[0]}}`;

        if (handlers.length > 1) {
          prefix = 'else ' + prefix;
          for (let i = 1; i < handlers.length; i++)
            CODE += prefix + offsets[i] + `]===""){${handlers[i]}}`;
        }

        CODE += '}}';
      }
    }
  },
  router_compile_to_code = (
    router: Router<string>,
    resultId: string,
    pathId: string,
    methodId: string,
    handleHeadCode: string,
  ): void => {
    CODE = `switch(${methodId}){`;
    RESULT_ID = resultId;
    PATH_ID = pathId;
    REGEXP_ID = 0;
    DECLS = '';

    let allTree = router.get(''),
      getTree = router.get('GET'),
      headTree: Tree<string> | undefined;

    allTree === null || router.delete('');

    // Handle GET & HEAD
    if (getTree != null) {
      router.delete('GET');
      CODE += 'case"HEAD":{' + handleHeadCode;

      headTree = router.get('HEAD');
      if (headTree != null) {
        router.delete('HEAD');
        tree_compile_to_code(headTree);
      }

      CODE += '}case "GET":';
      tree_compile_to_code(getTree);
      CODE += 'break;';
    }

    // Handle other methods
    router.forEach(route_tree_compile_to_case_code);

    // Re-add GET & HEAD
    if (getTree != null) {
      router.set('GET', getTree);
      headTree == null || router.set('HEAD', headTree);
    }

    CODE += '}';

    // Check all method match
    if (allTree != null) {
      router.set('', allTree);
      tree_compile_to_code(allTree);
    }
  };
