import { describe, it } from 'node:test';
import assert from 'node:assert';

import type { Suite } from '../../suites/types.ts';

import { tree_init, tree_set_dynamic, tree_set_static } from '@mapl/pattern-router/tree';
import { compile } from '@mapl/pattern-router/tree/compiler/regex-jit';
import { isDynamicPattern, validatePattern } from '@mapl/pattern-router/tree/utils';

import customer_api from '../../suites/customer-api.json' with { type: 'json' };
import commerce_api from '../../suites/commerce-api.json' with { type: 'json' };
import operations_api from '../../suites/operations-api.json' with { type: 'json' };

const clone = (o: object) => JSON.parse(JSON.stringify(o));

const run = (suite: Suite) => {
  const tree = tree_init<string>();
  for (const pattern in suite) {
    isDynamicPattern(pattern)
      ? tree_set_dynamic(tree, pattern, `return {id:${JSON.stringify(pattern)},params:r.groups}`)
      : tree_set_static(tree, pattern, `return {id:${JSON.stringify(pattern)},params:{}}`);
  }

  const fn: (path: string) => { id: string; params: Record<string, string> } | undefined = Function(
    'p',
    compile(tree, 'r', 'p'),
  ) as any;

  for (const pattern in suite) {
    describe(pattern, () => {
      for (
        let j = 0, tests = suite[pattern], urlPattern = validatePattern(pattern);
        j < tests.length;
        j++
      ) {
        const path = tests[j],
          matchedResult = fn(path),
          expected = urlPattern.exec(path, 'http://example.com');

        if (expected === null)
          it(`not match ${path}`, () => {
            assert.notStrictEqual(matchedResult?.id, pattern);
          });
        else
          it(`match ${path}`, () => {
            assert.ok(matchedResult != null, `expect ${path} to match`);

            assert.strictEqual(
              matchedResult.id,
              pattern,
              `expect ${path} to match this pattern, instead matched ${matchedResult.id}`,
            );

            assert.deepStrictEqual(clone(expected.pathname.groups), clone(matchedResult.params));
          });
      }
    });
  }
};

describe(`customer api (${customer_api.length} routes)`, () => {
  run(customer_api);
});

describe(`commerce api (${commerce_api.length} routes)`, () => {
  run(commerce_api);
});

describe(`operations api (${operations_api.length} routes)`, () => {
  run(operations_api);
});
