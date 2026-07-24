import { join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';

import { format } from 'oxfmt';
import oxfmtrc from '../../.oxfmtrc.jsonc';

import { router_init, router_set } from '@mapl/pattern-router';
import { router_compile_to_code } from '@mapl/pattern-router/jit';

import { SNAPSHOTS } from '../lib/constants.ts';

import { routesList } from '../../snapshots/routes.ts';

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

    promises.push(
      writeFormatted(
        name + '.js',
        `(m,p)=>{${router_compile_to_code(router, 'r', 'p', 'm')}return ''}`,
      ),
      writeFormatted(name + '.json', JSON.stringify(router)),
    );
  }
  await Promise.all(promises);
}
