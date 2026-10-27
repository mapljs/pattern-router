import { it } from 'node:test';
import { strictEqual } from 'node:assert';

import { router_init, router_set } from '@mapl/pattern-router';
import { router_compile_to_code } from '@mapl/pattern-router/jit';

import suites from '../suites/index.mts';

for (const name in suites) {
  it(name, () => {
    const suite = suites[name],
      router = router_init<string>();
    for (const [method, path, value] of suite.routes)
      router_set(router, method, path, `return ${JSON.stringify(value)}`);

    const match = Function(
      'method',
      'path',
      router_compile_to_code(router, 'match', 'path', 'method', ''),
    );

    for (const [method, path, expect] of suite.tests)
      it(method + ' ' + path, () => {
        strictEqual(match(method, path), expect);
      });
  });
}
