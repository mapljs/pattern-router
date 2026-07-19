import { compile as compileJIT } from '@mapl/pattern-router/tree/compiler/regex-jit';
import {
  compileNode,
  HANDLERS,
  reset,
  type Handlers,
} from '@mapl/pattern-router/tree/compiler/regex';

import { router_init, router_set, type Router } from '@mapl/pattern-router';
import { linear_map_index, linear_map_swap } from '@mapl/pattern-router/utils/linear-map';

import { simple_api } from '../../suites.ts';

const buildJIT = (router: Router<string>) => {
  const matchAllIdx = linear_map_index(router, ''),
    trees = router[1];

  if (matchAllIdx !== -1) linear_map_swap(router, matchAllIdx, trees.length - 1);

  let str = '(m,p)=>{switch(m){';
  for (
    let i = 0, methods = router[0], treesLen = trees.length - (matchAllIdx !== -1 ? 1 : 0);
    i < treesLen;
    i++
  )
    str += `case${JSON.stringify(methods[i])}:` + compileJIT(trees[i], 'r', 'p') + '';
  str += '}';

  if (matchAllIdx !== -1) str += compileJIT(trees[trees.length - 1], 'r', 'p');

  return (0, eval)(str + 'return ""}');
};

type Handler = (params: Dict<string>) => string;
const build = (router: Router<Handler>): ((method: string, path: string) => string) => {
  const trees = router[1],
    staticMaps: Map<string, Handler>[] = [],
    regexps: (RegExp | null)[] = [],
    handlers: Handlers<Handler>[] = [];

  {
    const matchAllIdx = linear_map_index(router, '');

    // Swap the match all tree to last position
    if (matchAllIdx !== -1) linear_map_swap(router, matchAllIdx, trees.length - 1);

    for (let i = 0, treesLen = trees.length - (matchAllIdx !== -1 ? 1 : 0); i < treesLen; i++) {
      const tree = trees[i];
      {
        const mp: Map<string, Handler> = new Map();
        for (let i = 0, treeKeys = tree[0], treeValues = tree[1]; i < treeKeys.length; i++)
          mp.set(treeKeys[i], treeValues[i]);
        staticMaps.push(mp);
      }

      if (tree[2] !== null) {
        reset();
        regexps.push(new RegExp('^' + compileNode(tree[2]) + '$'));
        handlers.push(HANDLERS);
      } else {
        regexps.push(null);
        handlers.push(null!);
      }
    }

    // no match all handler
    if (matchAllIdx === -1) {
      const methods = router[0];
      return (method, path) => {
        let i = methods.indexOf(method);
        if (i !== -1) {
          let handler = staticMaps[i].get(path);
          if (typeof handler !== 'undefined')
            // @ts-ignore
            return handler();

          if (regexps[i] !== null) {
            let matchResult = regexps[i].exec(path);
            if (matchResult !== null)
              return handlers[i][matchResult.lastIndexOf('')]!(matchResult.groups!);
          }
        }

        return '';
      };
    }
  }

  // remove match all method
  const methods = router[0].slice(0, -1),
    matchAllTree = trees[trees.length - 1],
    matchAllStaticMap: Map<string, Handler> = new Map();
  for (
    let i = 0, treeKeys = matchAllTree![0], treeValues = matchAllTree![1];
    i < treeKeys.length;
    i++
  )
    matchAllStaticMap.set(treeKeys[i], treeValues[i]);

  // match all with only static routes
  if (matchAllTree[2] === null)
    return (method, path) => {
      let i = methods.indexOf(method);
      if (i !== -1) {
        const handler = staticMaps[i].get(path);
        if (typeof handler !== 'undefined')
          // @ts-ignore
          return handler();

        if (regexps[i] !== null) {
          let matchResult = regexps[i].exec(path);
          if (matchResult !== null)
            return handlers[i][matchResult.lastIndexOf('')]!(matchResult.groups!);
        }
      }

      // @ts-ignore
      return matchAllStaticMap.get(path)?.() ?? '';
    };

  // match all with dynamic routes
  reset();
  const matchAllRegexp = new RegExp('^' + compileNode(matchAllTree![2]) + '$'),
    matchAllHandler = HANDLERS;

  return (method, path) => {
    let i = methods.indexOf(method);
    if (i !== -1) {
      let handler = staticMaps[i].get(path);
      if (typeof handler !== 'undefined')
        // @ts-ignore
        return handler();

      if (regexps[i] !== null) {
        let matchResult = regexps[i].exec(path);
        if (matchResult !== null)
          return handlers[i][matchResult.lastIndexOf('')]!(matchResult.groups!);
      }
    }

    let handler = matchAllStaticMap.get(path);
    if (typeof handler !== 'undefined')
      // @ts-ignore
      return handler();

    let matchResult = matchAllRegexp.exec(path);
    return matchResult !== null
      ? matchAllHandler[matchResult.lastIndexOf('')]!(matchResult.groups!)
      : '';
  };
};

{
  const router = router_init<string>();
  router_set(router, 'GET', '/', 'return "/"');
  router_set(router, 'GET', '/about', 'return "/about"');
  router_set(router, 'GET', '/user/:id', 'return "/user/:id "+r.groups.id');

  const fn = buildJIT(router);
  simple_api.it('@mapl/pattern-router (jit)', fn);
}

{
  const router = router_init<Handler>();
  router_set(router, 'GET', '/', () => '/');
  router_set(router, 'GET', '/about', () => '/about');
  router_set(router, 'GET', '/user/:id', (params) => '/user/:id ' + params.id!);

  const fn = build(router);
  simple_api.it('@mapl/pattern-router', fn);
}
