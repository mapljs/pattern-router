import { describe, it } from 'node:test';
import assert from 'node:assert';

import type { Suite } from '../../suites/types.ts';

import { type Node, node_insert } from '@mapl/pattern-router/tree/node';
import { compile } from '@mapl/pattern-router/tree/compiler/regex';

const run = (suite: Suite) => {
  const rootNode: Node<number> = ['', null, null, null, null, null, null];
  for (let patternId = 0; patternId < suite.length; patternId++) {
    const pat = suite[patternId];
    node_insert(rootNode, pat.pattern, 0, patternId);
  }

  const result = compile(rootNode),
    regexp = new RegExp('^' + result.regex + '$');

  for (let patternId = 0; patternId < suite.length; patternId++) {
    const pat = suite[patternId];
    it(pat.pattern, () => {
      for (let j = 0, { tests } = pat; j < tests.length; j++) {
        const { path, expected } = tests[j],
          matchedResult = regexp.exec(path);

        if (expected === null) {
          assert.notStrictEqual(
            matchedResult ? result.handlers[matchedResult.indexOf('', 1)][2] : -1,
            patternId,
            `expect ${path} to not match ${pat.pattern}`,
          );
        } else {
          assert.ok(matchedResult !== null, `expect ${path} to match`);

          const handler = result.handlers[matchedResult.indexOf('', 1)];
          assert.strictEqual(
            handler[2],
            patternId,
            `expect ${path} to match this pattern, instead matched ${suite[handler[2]].pattern}`,
          );

          const params: Record<string, string | undefined> = {};
          for (let i = 0, keys = handler[0], indices = handler[1]; i < keys.length; i++)
            params[keys[i]] = matchedResult[indices[i]];

          assert.deepStrictEqual(expected, params, `expect ${path} to match ${pat.pattern} params`);
        }
      }
    });
  }
};

import simple_api from '../../suites/simple-api.json' with { type: 'json' };
describe('Simple API', () => {
  run(simple_api);
});
