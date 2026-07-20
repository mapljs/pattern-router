import { router_compile_to_code } from '@mapl/pattern-router/jit';
import { router_compile_to_matcher } from '@mapl/pattern-router/match';

import { router_init, router_set, type Router } from '@mapl/pattern-router';

import { simple_api } from '../../suites.ts';

const buildJIT = (router: Router<string>) =>
  (0, eval)(`(m,p)=>{${router_compile_to_code(router, 'r', 'p', 'm')}return ""}`);

type Handler = (params: Dict<string>) => string;
const build = (router: Router<Handler>): ((method: string, path: string) => string) => {
  const matcher = router_compile_to_matcher(router);

  return (method, path) => {
    let res = matcher.match(method, path);
    if (typeof res !== 'undefined')
      // @ts-ignore
      return res.length === 1 ? res[0]() : res[0](res[1].groups!);
    return '';
  };
};

{
  const router = router_init<string>();
  router_set(router, 'GET', '/', 'return "GET /"');
  router_set(router, 'GET', '/about', 'return "GET /about"');

  router_set(router, 'GET', '/user/:id', 'return "GET /user/:id "+r.groups.id');
  router_set(router, 'PUT', '/user/:id', 'return "PUT /user/:id "+r.groups.id');

  router_set(router, 'POST', '/post', 'return "POST /post"');
  router_set(router, 'GET', '/post/:id', 'return "GET /post/:id "+r.groups.id');
  router_set(router, 'PUT', '/post/:id', 'return "PUT /post/:id "+r.groups.id');

  router_set(router, 'GET', '/post/:id/comments', 'return "GET /post/:id/comments "+r.groups.id');
  router_set(router, 'POST', '/post/:id/comment', 'return "POST /post/:id/comment "+r.groups.id');

  const fn = buildJIT(router);
  simple_api.it('@mapl/pattern-router (jit)', fn);
}

{
  const router = router_init<Handler>();
  router_set(router, 'GET', '/', () => 'GET /');
  router_set(router, 'GET', '/about', () => 'GET /about');

  router_set(router, 'GET', '/user/:id', (params) => 'GET /user/:id ' + params.id!);
  router_set(router, 'PUT', '/user/:id', (params) => 'PUT /user/:id ' + params.id!);

  router_set(router, 'POST', '/post', () => 'POST /post');
  router_set(router, 'GET', '/post/:id', (params) => 'GET /post/:id ' + params.id!);
  router_set(router, 'PUT', '/post/:id', (params) => 'PUT /post/:id ' + params.id!);

  router_set(
    router,
    'GET',
    '/post/:id/comments',
    (params) => 'GET /post/:id/comments ' + params.id!,
  );
  router_set(
    router,
    'POST',
    '/post/:id/comment',
    (params) => 'POST /post/:id/comment ' + params.id!,
  );

  const fn = build(router);
  simple_api.it('@mapl/pattern-router', fn);
}
