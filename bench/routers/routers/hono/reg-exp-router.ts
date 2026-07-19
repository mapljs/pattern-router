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
      paths: ['/', '/about', '/user/:id'],
    }),
  );
  router.add('GET', '/', () => '/');
  router.add('GET', '/about', () => '/about');
  router.add('GET', '/user/:id', (t) => '/user/:id ' + t[1][t[0][0][1].id]);

  simple_api.it('hono PreparedRegExpRouter', (method, path) => {
    const res = router.match(method, path) as MatchResult;
    return res[0].length !== 0 ? res[0][0][0](res) : '';
  });
}
