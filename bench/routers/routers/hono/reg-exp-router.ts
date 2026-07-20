import { PreparedRegExpRouter, buildInitParams } from 'hono/router/reg-exp-router';

import { simple_api } from '../../suites.ts';
import type { Result } from 'hono/router';

interface Handler {
  (t: Result<this> & { length: 2 }): string;
}
type MatchResult = Parameters<Handler>[0];

{
  const router = new PreparedRegExpRouter<Handler>(
    // @ts-ignore
    ...buildInitParams({
      paths: [
        '/',
        '/about',
        '/user/:id',
        '/post',
        '/post/:id',
        '/post/:id/comments',
        '/post/:id/comment',
      ],
    }),
  );
  router.add('GET', '/', (_) => 'GET /');
  router.add('GET', '/about', (_) => 'GET /about');

  router.add('GET', '/user/:id', (t) => 'GET /user/:id ' + t[1][t[0][0][1].id]);
  router.add('PUT', '/user/:id', (t) => 'PUT /user/:id ' + t[1][t[0][0][1].id]);

  router.add('POST', '/post', (_) => 'POST /post');
  router.add('GET', '/post/:id', (t) => 'GET /post/:id ' + t[1][t[0][0][1].id]);
  router.add('PUT', '/post/:id', (t) => 'PUT /post/:id ' + t[1][t[0][0][1].id]);

  router.add('GET', '/post/:id/comments', (t) => 'GET /post/:id/comments ' + t[1][t[0][0][1].id]);
  router.add('POST', '/post/:id/comment', (t) => 'POST /post/:id/comment ' + t[1][t[0][0][1].id]);

  simple_api.it('hono reg-exp-router', (method, path) => {
    let res = router.match(method, path) as MatchResult;
    return res[0].length !== 0 ? res[0][0][0](res) : '';
  });
}
