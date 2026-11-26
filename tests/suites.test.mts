import { it } from 'node:test';
import assert from 'node:assert/strict';

import { router_init, router_set } from '@mapl/pattern-router';
import { router_compile_to_code, CODE, DECLS } from '@mapl/pattern-router/jit';

import suites from '../suites/index.mts';

for (const name in suites) {
  it(name, () => {
    const suite = suites[name],
      router = router_init<string>();
    for (const [method, path, value] of suite.routes)
      router_set(router, method, path, `return ${JSON.stringify(value)}`);

    router_compile_to_code(router, 'match', 'path', 'method', '');
    const match = eval(`{let _${DECLS};(method,path)=>{${CODE}}}`);

    for (const [method, path, expect] of suite.tests)
      it(method + ' ' + path, () => {
        assert.equal(match(method, path), expect);
      });
  });
}
