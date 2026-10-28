import { enableCompileCache } from 'node:module';
enableCompileCache();

import { router_init, router_set } from '@mapl/pattern-router';
import { router_compile_to_code } from '@mapl/pattern-router/jit';

import { format } from 'oxfmt';

import suites from '../../suites/index.mts';
import { writeFile } from 'node:fs/promises';

const pending = [];

for (const name in suites) {
  const suite = suites[name],
    router = router_init<string>();
  for (const [method, path, value] of suite.routes)
    router_set(
      router,
      method,
      path,
      method === 'GET'
        ? `return isHead?'':${JSON.stringify(value)}`
        : `return ${JSON.stringify(value)}`,
    );

  const filename = `snapshots/${name}.mts`;
  pending.push(
    writeFile(
      `snapshots/${name}.json`,
      JSON.stringify(Object.fromEntries(router.entries()), null, 2),
    ),
    format(
      filename,
      `export default(method:string,path:string)=>{let isHead=false;${router_compile_to_code(router, 'match', 'path', 'method', 'isHead=true')}}`,
    ).then((str) => writeFile(filename, str.code)),
  );
}

await Promise.all(pending);
