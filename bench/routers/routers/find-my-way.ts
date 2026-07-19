import createRouter from 'find-my-way';

import { simple_api } from '../suites.ts';

{
  const router = createRouter();
  router.get('/', (_, _1, _2) => 'GET /');
  router.get('/about', (_, _1, _2) => 'GET /about');
  router.get('/user/:id', (_, _1, params) => 'GET /user/:id ' + params.id!);

  simple_api.it('find-my-way (jit)', (method, path) => {
    let handle = router.find(method as any, path);
    // @ts-ignore
    return handle?.handler(null, null, handle.params) ?? '';
  });
}
