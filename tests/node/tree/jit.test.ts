import { describe, it } from 'node:test';
import assert from 'node:assert';

import type { Suite } from './suites/types.ts';

import { tree_init, tree_set_dynamic, tree_set_static } from '@mapl/pattern-router/tree';
import { tree_compile_to_code } from '@mapl/pattern-router/tree/jit';
import { isDynamicPattern, validatePattern } from '@mapl/pattern-router/tree/utils';

import customer_api from './suites/customer-api.json' with { type: 'json' };
import group_delimiters from './suites/group-delimiters.json' with { type: 'json' };

const clone = (o: object) => JSON.parse(JSON.stringify(o));

const run = (name: string, suite: Suite) => {
  describe(name + ` (${Object.keys(suite).length} routes)`, () => {
    const tree = tree_init<string>();
    for (const pattern in suite) {
      isDynamicPattern(pattern)
        ? tree_set_dynamic(tree, pattern, `return {id:${JSON.stringify(pattern)},params:r.groups}`)
        : tree_set_static(tree, pattern, `return {id:${JSON.stringify(pattern)},params:{}}`);
    }

    const fn: (path: string) => { id: string; params: Record<string, string> } | undefined =
      Function('p', tree_compile_to_code(tree, 'r', 'p')) as any;
    // console.log(fn.toString());

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

              // this router doesn't capture unnamed groups and wildcards
              const groups = expected.pathname.groups;
              for (const key in groups) if (Number.isFinite(+key)) delete groups[key];

              assert.deepStrictEqual(clone(matchedResult.params), clone(expected.pathname.groups));
            });
        }
      });
    }
  });
};

run('customer api', customer_api);
run('group delimiters', group_delimiters);
