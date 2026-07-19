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

  const fn = buildJIT(router);
  simple_api.it('@mapl/router (jit)', fn);
}
