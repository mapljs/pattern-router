import { createRouter, addRoute, findRoute } from 'rou3';
import { compileRouter } from 'rou3/compiler';

import { simple_api } from '../suites.ts';

type Handler = (params: Record<string, string>) => string;
{
  const router = createRouter<Handler>();
  addRoute(router, 'GET', '/', (_) => 'GET /');
  addRoute(router, 'GET', '/about', (_) => 'GET /about');
  addRoute(router, 'GET', '/user/:id', (params) => 'GET /user/:id ' + params.id);

  simple_api.it('rou3', (method, path) => {
    let res = findRoute(router, method, path);
    return typeof res !== 'undefined' ? res.data(res.params!) : '';
  });

  const compiledFindRoute = compileRouter(router);
  simple_api.it('rou3 (jit)', (method, path) => {
    let res = compiledFindRoute(method, path);
    return typeof res !== 'undefined' ? res.data(res.params!) : '';
  });
}
