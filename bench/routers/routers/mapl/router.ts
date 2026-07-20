import compile from '@mapl/router/method/compiler';
import { createRouter, insertItem, type Router } from '@mapl/router/method';
import { PATH, PARAMS } from '@mapl/router/constants';

import { simple_api } from '../../suites.ts';

const buildJIT = (router: Router<string>) =>
  (0, eval)(`(m,${PATH})=>{${compile(router, 'm', 1)}return ''}`);

{
  const router = createRouter<string>();
  insertItem(router, 'GET', '/', 'return "GET /"');
  insertItem(router, 'GET', '/about', 'return "GET /about"');

  insertItem(router, 'GET', '/user/*', `return "GET /user/:id "+${PARAMS}0`);
  insertItem(router, 'PUT', '/user/*', `return "PUT /user/:id "+${PARAMS}0`);

  insertItem(router, 'POST', '/post', `return "POST /post"`);
  insertItem(router, 'GET', '/post/*', `return "GET /post/:id "+${PARAMS}0`);
  insertItem(router, 'PUT', '/post/*', `return "PUT /post/:id "+${PARAMS}0`);

  insertItem(router, 'GET', '/post/*/comments', `return "GET /post/:id/comments "+${PARAMS}0`);
  insertItem(router, 'POST', '/post/*/comment', `return "POST /post/:id/comment "+${PARAMS}0`);

  const fn = buildJIT(router);
  simple_api.it('@mapl/router (jit)', fn);
}
