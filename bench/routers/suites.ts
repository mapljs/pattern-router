import type { Bench } from 'measure-loop/api/bench';
import { category, bench } from 'measure-loop';

type TestCase = {
  method: string;
  path: string;
} & (
  | {
      expected: string;
    }
  | {
      unexpected: string;
    }
);

export type BenchFn = (method: string, path: string) => string;

const suite = <K extends string>(
  routes: Record<K, Bench>,
  params: Record<K, [method: (i: number) => string, path: (i: number) => string]>,
  tests: Record<K, TestCase[] | (() => Generator<TestCase>)>,
) => {
  const cat = category();
  for (const key in routes) cat.it(key, routes[key]);
  return {
    category: cat,
    it: (name: string, fn: (method: string, path: string) => string) => {
      try {
        for (const key in routes) {
          const testCase = tests[key];
          for (const routeTest of Array.isArray(testCase) ? testCase : testCase()) {
            const actual = fn(routeTest.method, routeTest.path);

            if ('expected' in routeTest) {
              if (actual !== routeTest.expected)
                throw new Error(
                  `${JSON.stringify(routeTest.method + ' ' + routeTest.path)}: expected ${JSON.stringify(routeTest.expected)}, recieved ${JSON.stringify(actual)}.`,
                );
            } else if (actual === routeTest.unexpected)
              throw new Error(
                `${JSON.stringify(routeTest.method + ' ' + routeTest.path)}: expected actual !== ${JSON.stringify(routeTest.unexpected)}`,
              );
          }

          routes[key].it(name, params[key], fn);
        }
      } catch (e) {
        console.error('skipping', name);
        console.error(e);
      }
    },
  };
};

export const simple_api = suite(
  {
    'GET /': bench({
      iters: 256,
      warmupIters: 32,
    }),
    'GET /about': bench({
      iters: 256,
      warmupIters: 32,
    }),
    'GET /user/:id': bench({
      iters: 128,
      warmupIters: 32,
    }),
  },
  {
    'GET /': [() => 'GET', (i) => (i % 8 === 0 ? '/' + i : '/')],
    'GET /about': [() => 'GET', (i) => (i % 8 === 0 ? '/about-' + i : '/about')],
    'GET /user/:id': [
      () => 'GET',
      (i) => (i % 8 === 0 ? (i % 16 === 0 ? `/user/${i}/${i}/info` : '/user') : `/user/${i}`),
    ],
  },
  {
    'GET /': [
      {
        method: 'GET',
        path: '/',
        expected: '/',
      },
      {
        method: 'GET',
        path: '/0',
        unexpected: '/',
      },
      {
        method: 'POST',
        path: '/',
        unexpected: '/',
      },
    ],
    'GET /about': [
      {
        method: 'GET',
        path: '/about',
        expected: '/about',
      },
      {
        method: 'GET',
        path: '/aboutme',
        unexpected: '/about',
      },
      {
        method: 'PUT',
        path: '/about',
        unexpected: '/about',
      },
      {
        method: 'OPTIONS',
        path: '/about',
        unexpected: '/about',
      },
    ],
    'GET /user/:id': function* () {
      yield {
        method: 'GET',
        path: '/user',
        unexpected: '/user/:id ',
      };

      yield {
        method: 'DELETE',
        path: '/user/me',
        unexpected: '/user/:id me',
      };

      for (let i = 0, rand = Math.random(); i < 64; i++, rand = Math.random())
        yield {
          method: 'GET',
          path: '/user/' + rand,
          expected: '/user/:id ' + rand,
        };

      yield {
        method: 'QUERY',
        path: '/user/001',
        unexpected: '/user/:id 001',
      };

      yield {
        method: 'PATCH',
        path: '/user/102',
        unexpected: '/user/:id 102',
      };
    },
  },
);

export default category().it('simple api', simple_api.category);
