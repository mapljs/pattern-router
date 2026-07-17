import { describe, it } from 'node:test';
import assert from 'node:assert';

import type { Suite } from '../../suites/types.ts';

import { tree_init, tree_set_dynamic, tree_set_static } from '@mapl/pattern-router/tree';
import { compile } from '@mapl/pattern-router/tree/compiler/regex-jit';
import { isDynamicPattern } from '@mapl/pattern-router/tree/utils';

import customer_api from '../../suites/customer-api.json' with { type: 'json' };
import commerce_api from '../../suites/commerce-api.json' with { type: 'json' };
import operations_api from '../../suites/operations-api.json' with { type: 'json' };

const clone = (o: object) => JSON.parse(JSON.stringify(o));

const run = (suite: Suite) => {
  const tree = tree_init<string>();
  for (let patternId = 0; patternId < suite.length; patternId++) {
    const pat = suite[patternId];

    isDynamicPattern(pat.pattern)
      ? tree_set_dynamic(tree, pat.pattern, `return {id:${patternId},params:r.groups}`)
      : tree_set_static(tree, pat.pattern, `return {id:${patternId},params:{}}`);
  }

  const fn: (path: string) => { id: number; params: Record<string, string> } | undefined = Function(
    'p',
    compile(tree, 'r', 'p'),
  ) as any;

  for (let patternId = 0; patternId < suite.length; patternId++) {
    const pat = suite[patternId];
    it(pat.pattern, () => {
      for (let j = 0, { tests } = pat; j < tests.length; j++) {
        const { path, expected } = tests[j],
          matchedResult = fn(path);

        if (expected === null) {
          assert.notStrictEqual(
            matchedResult?.id ?? -1,
            patternId,
            `expect ${path} to not match ${pat.pattern}`,
          );
        } else {
          assert.ok(matchedResult != null, `expect ${path} to match`);

          assert.strictEqual(
            matchedResult.id,
            patternId,
            `expect ${path} to match this pattern, instead matched ${suite[matchedResult.id].pattern}`,
          );

          assert.deepStrictEqual(
            clone(expected),
            clone(matchedResult.params),
            `expect ${path} to match ${pat.pattern} params`,
          );
        }
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
