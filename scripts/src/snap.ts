import { join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';

import { format } from 'oxfmt';
import oxfmtrc from '../../.oxfmtrc.jsonc';

import { router_init, router_set } from '@mapl/pattern-router';
import { router_compile_to_code } from '@mapl/pattern-router/jit';

import { SNAPSHOTS } from '../lib/constants.ts';

import { routesList } from '../../snapshots/routes.ts';
import { fmt } from '../lib/fmt.ts';

const writeFormatted = async (pathFromSnap: string, content: string) => {
  pathFromSnap = join(SNAPSHOTS, pathFromSnap);
  writeFileSync(pathFromSnap, (await format(pathFromSnap, content, oxfmtrc)).code);
};

{
  //
  // MAIN
  //
  try {
    mkdirSync(SNAPSHOTS);
  } catch {}

  const promises = [];
  for (const [name, routeList] of Object.entries(routesList)) {
    const router = router_init<string>();
    for (let i = 0; i < routeList.length; i++) {
      const [method, path, id] = routeList[i];
      router_set(router, method, path, `return "${id}"`);
    }

    const group = fmt.name(`[${name}]`);

    let timeStart = performance.now();

    let code = router_compile_to_code(router, 'r', 'p', 'm', '');
    code[0];

    let timeEnd = performance.now();

    console.log(group, 'routes:', routeList.length);
    console.log(group, 'took:', fmt.duration((timeEnd - timeStart) * 1e6));
    console.log(group, 'size:', fmt.byte(code.length));

    promises.push(
      writeFormatted(name + '.js', `(m,p)=>{${code}return ''}`),
      writeFormatted(name + '.json', JSON.stringify(router)),
    );
  }
  await Promise.all(promises);
}
