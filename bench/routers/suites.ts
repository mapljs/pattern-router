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

const suite = <K extends string>(
  routes: Record<K, Bench>,
  params: Record<K, [method: (i: number) => string, path: (i: number) => string]>,
  tests: Record<K, TestCase[] | Generator<TestCase> | (() => Generator<TestCase>)>,
) => {
  const cat = category();
  for (const key in routes) cat.it(key, routes[key]);
  return {
    category: cat,
    it: (name: string, fn: (method: string, path: string) => string) => {
      for (const key in routes) {
        const testCase = tests[key];
        // @ts-ignore
        for (const routeTest of typeof testCase === 'function' ? testCase() : testCase) {
          const actual = fn(routeTest.method, routeTest.path);

          if ('expected' in routeTest) {
            if (actual !== routeTest.expected) {
              console.error(
                `${JSON.stringify(routeTest.method + ' ' + routeTest.path)}: expected ${JSON.stringify(routeTest.expected)}, recieved ${JSON.stringify(actual)}.`,
              );
              console.error('skipping', name);
              return;
            }
          } else if (actual === routeTest.unexpected) {
            console.error(
              `${JSON.stringify(routeTest.method + ' ' + routeTest.path)}: expected !== ${JSON.stringify(routeTest.unexpected)}`,
            );
            console.error('skipping', name);
            return;
          }
        }
      }

      for (const key in routes) routes[key].it(name, params[key], fn);
    },
  };
};

export const simple_api = suite(
  {
    'GET /': bench(),
    'GET /about': bench(),

    'GET /user/:id': bench(),
    'PUT /user/:id': bench(),

    'POST /post': bench(),
    'GET /post/:id': bench(),
    'PUT /post/:id': bench(),

    'GET /post/:id/comments': bench(),
    'POST /post/:id/comment': bench(),
  },
  {
    'GET /': [() => 'GET', (i) => (i % 32 === 0 ? '/' + i : '/')],
    'GET /about': [() => 'GET', (i) => (i % 32 === 0 ? '/about-' + i : '/about')],

    'GET /user/:id': [
      () => 'GET',
      (i) => (i % 128 === 0 ? (i % 256 === 0 ? `/user/${i}/${i}/info` : '/user') : `/user/${i}`),
    ],
    'PUT /user/:id': [
      () => 'PUT',
      (i) => (i % 128 === 0 ? (i % 256 === 0 ? `/user/${i}/${i}/info` : '/user') : `/user/${i}`),
    ],

    'POST /post': [() => 'POST', (i) => (i % 128 === 0 ? '/post-' + i : '/post')],
    'GET /post/:id': [
      () => 'GET',
      (i) => (i % 128 === 0 ? (i % 256 === 0 ? `/post/${i}/${i}/info` : '/post') : `/post/${i}`),
    ],
    'PUT /post/:id': [
      () => 'PUT',
      (i) => (i % 128 === 0 ? (i % 256 === 0 ? `/post/${i}/${i}/info` : '/post') : `/post/${i}`),
    ],

    'GET /post/:id/comments': [
      () => 'GET',
      (i) => (i % 128 === 0 ? `/post/${i}/comment` : `/post/${i}/comments`),
    ],
    'POST /post/:id/comment': [
      () => 'POST',
      (i) => (i % 128 === 0 ? `/post/${i}/comments` : `/post/${i}/comment`),
    ],
  },
  {
    'GET /': [
      {
        method: 'GET',
        path: '/',
        expected: 'GET /',
      },
      {
        method: 'GET',
        path: '/0',
        unexpected: 'GET /',
      },
      {
        method: 'POST',
        path: '/',
        unexpected: 'GET /',
      },
    ],
    'GET /about': [
      {
        method: 'GET',
        path: '/about',
        expected: 'GET /about',
      },
      {
        method: 'GET',
        path: '/aboutme',
        unexpected: 'GET /about',
      },
      {
        method: 'PUT',
        path: '/about',
        unexpected: 'GET /about',
      },
      {
        method: 'OPTIONS',
        path: '/about',
        unexpected: 'GET /about',
      },
    ],

    'GET /user/:id': function* () {
      yield* [
        {
          method: 'GET',
          path: '/user',
          unexpected: 'GET /user/:id ',
        },
        {
          method: 'DELETE',
          path: '/user/me',
          unexpected: 'GET /user/:id me',
        },
      ];

      for (let i = 0, rand = Math.random(); i < 64; i++, rand = Math.random())
        yield {
          method: 'GET',
          path: '/user/' + rand,
          expected: 'GET /user/:id ' + rand,
        };
    },
    'PUT /user/:id': function* () {
      yield* [
        {
          method: 'PUT',
          path: '/user',
          unexpected: 'PUT /user/:id ',
        },
        {
          method: 'QUERY',
          path: '/user/me',
          unexpected: 'PUT /user/:id me',
        },
      ];

      for (let i = 0, rand = Math.random(); i < 64; i++, rand = Math.random())
        yield {
          method: 'PUT',
          path: '/user/' + rand,
          expected: 'PUT /user/:id ' + rand,
        };
    },

    'POST /post': [
      {
        method: 'POST',
        path: '/post',
        expected: 'POST /post',
      },
      {
        method: 'GET',
        path: '/post',
        unexpected: 'POST /post',
      },
      {
        method: 'POST',
        path: '/post/001',
        unexpected: 'POST /post',
      },
    ],
    'GET /post/:id': function* () {
      yield* [
        {
          method: 'GET',
          path: '/post',
          unexpected: 'GET /post/:id ',
        },
        {
          method: 'PATCH',
          path: '/post/me',
          unexpected: 'GET /user/:id me',
        },
      ];

      for (let i = 0, rand = Math.random(); i < 64; i++, rand = Math.random())
        yield {
          method: 'GET',
          path: '/post/' + rand,
          expected: 'GET /post/:id ' + rand,
        };
    },
    'PUT /post/:id': function* () {
      yield* [
        {
          method: 'PUT',
          path: '/post',
          unexpected: 'PUT /post/:id ',
        },
        {
          method: 'GET',
          path: '/post/me',
          unexpected: 'PUT /user/:id me',
        },
      ];

      for (let i = 0, rand = Math.random(); i < 64; i++, rand = Math.random())
        yield {
          method: 'PUT',
          path: '/post/' + rand,
          expected: 'PUT /post/:id ' + rand,
        };
    },

    'GET /post/:id/comments': function* () {
      yield* [
        {
          method: 'GET',
          path: '/post/001',
          unexpected: 'GET /post/:id/comments 001',
        },
        {
          method: 'PATCH',
          path: '/post/me/comments',
          unexpected: 'GET /post/:id/comments me',
        },
      ];

      for (let i = 0, rand = Math.random(); i < 64; i++, rand = Math.random())
        yield {
          method: 'GET',
          path: '/post/' + rand + '/comments',
          expected: 'GET /post/:id/comments ' + rand,
        };
    },
    'POST /post/:id/comment': function* () {
      yield* [
        {
          method: 'POST',
          path: '/post/001',
          unexpected: 'POST /post/:id/comment 001',
        },
        {
          method: 'PATCH',
          path: '/post/me/comment',
          unexpected: 'POST /post/:id/comment me',
        },
      ];

      for (let i = 0, rand = Math.random(); i < 64; i++, rand = Math.random())
        yield {
          method: 'POST',
          path: '/post/' + rand + '/comment',
          expected: 'POST /post/:id/comment ' + rand,
        };
    },
  },
);

export default category({
  iters: 256,
  warmupIters: 64,
}).it('simple api', simple_api.category);
