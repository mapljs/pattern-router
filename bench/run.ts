import type { Runnable } from 'measure-loop/api/types';

import reporter from 'measure-loop/reporter';
import md_reporter from 'measure-loop/reporter/md';
import { env } from 'measure-loop';

export default <T extends Runnable>(meta: ImportMeta, b: T): T => {
  if (meta.main) {
    const format = process.argv.at(2);
    if (format === 'md') b.run({ env, reporter: md_reporter }).then(console.log);
    else b.run({ env, reporter });
  }
  return b;
};
