import { PatternRouter } from 'hono/router/pattern-router';

import { simple_api } from '../../suites.ts';
import type { Result } from 'hono/router';

interface Handler {
  (t: Result<this> & { length: 1 }): string;
}
type MatchResult = Parameters<Handler>[0];

{
  const router = new PatternRouter<Handler>();
  router.add('GET', '/', () => 'GET /');
  router.add('GET', '/about', () => 'GET /about');
  router.add('GET', '/user/:id', (t) => 'GET /user/:id ' + t[0][0][1].id);

  simple_api.it('hono pattern-router', (method, path) => {
    let res = router.match(method, path) as MatchResult;
    return res[0].length !== 0 ? res[0][0][0](res) : '';
  });
}
