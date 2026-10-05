import { router_init, router_set, type Router } from '@mapl/pattern-router';
import { router_compile_to_code } from '@mapl/pattern-router/jit';

import { simple_api } from '../../suites.ts';

const buildJIT = (router: Router<string>) =>
  (0, eval)(`(m,p)=>{${router_compile_to_code(router, 'r', 'p', 'm')}return ""}`);

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
