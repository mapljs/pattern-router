import createRouter from 'find-my-way';

import { simple_api } from '../suites.ts';

{
  const router = createRouter();
  router.get('/', (_, _1, _2) => 'GET /');
  router.get('/about', (_, _1, _2) => 'GET /about');

  router.get('/user/:id', (_, _1, params) => 'GET /user/:id ' + params.id!);
  router.put('/user/:id', (_, _1, params) => 'PUT /user/:id ' + params.id!);

  router.post('/post', (_, _1, _2) => 'POST /post');
  router.get('/post/:id', (_, _1, params) => 'GET /post/:id ' + params.id!);
  router.put('/post/:id', (_, _1, params) => 'PUT /post/:id ' + params.id!);

  router.get('/post/:id/comments', (_, _1, params) => 'GET /post/:id/comments ' + params.id!);
  router.post('/post/:id/comment', (_, _1, params) => 'POST /post/:id/comment ' + params.id!);

  simple_api.it('find-my-way (jit)', (method, path) => {
    let handle = router.find(method as any, path);
    // @ts-ignore
    return handle?.handler(null, null, handle.params) ?? '';
  });
}
