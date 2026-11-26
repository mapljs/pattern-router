import { enableCompileCache } from 'node:module';
enableCompileCache();

import { router_init, router_set } from '@mapl/pattern-router';
import { CODE, DECLS, router_compile_to_code } from '@mapl/pattern-router/jit';

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

  router_compile_to_code(router, 'match', 'path', 'req.method', 'isHead=true');
  const
    decls = `let _${DECLS};`,
    body = `{let isHead=false,path=new URL(req.url).pathname;${CODE}}`;

  pending.push(
    writeFile(
      `snapshots/${name}.json`,
      JSON.stringify(
        router,
        (_, value) => (value instanceof Map ? Object.fromEntries(value) : value),
        2,
      ),
    ),
    writeFile(`snapshots/${name}.raw.mjs`, decls + `export default(req)=>` + body),
    format(name + '.mts', decls + `export default(req:Request)=>` + body).then((str) =>
      writeFile(`snapshots/${name}.mts`, str.code),
    ),
  );
}

await Promise.all(pending);
