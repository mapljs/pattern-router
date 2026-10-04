import { describe, it } from 'node:test';
import assert from 'node:assert';

import { group_delim_to_regexp } from '@mapl/pattern-router/tree/regex';

describe('group delimiters to regexp', () => {
  it('named groups', () => {
    assert.strictEqual(group_delim_to_regexp('/a:id/b}+'), '\\/a(?<id>[^/]+(?:\\/b\\/a[^/]+)*)\\/b');
    assert.strictEqual(group_delim_to_regexp('/a:id/b}*'), '(?:\\/a(?<id>[^/]+(?:\\/b\\/a[^/]+)*)\\/b)?');
    assert.strictEqual(group_delim_to_regexp('a:id(u*)b}+'), 'a(?<id>(?:u*)(?:ba(?:u*))*)b');
  });
});
