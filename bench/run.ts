import type { Runnable } from 'measure-loop/api/types';

import reporter from 'measure-loop/reporter';
import md_reporter from 'measure-loop/reporter/md';
import json_reporter from 'measure-loop/reporter/json';
import { env } from 'measure-loop';
import { writeFileSync } from 'node:fs';

export default <T extends Runnable>(meta: ImportMeta, b: T): T => {
  if (meta.main) {
    const file = process.argv.at(2);
    if (file) {
      if (file.endsWith('.md')) {
        b.run({ env, reporter: md_reporter }).then((content) => {
          console.log(content);
          writeFileSync(file, content);
        });
      } else if (file.endsWith('.json')) {
        b.run({ env, reporter: json_reporter }).then((content) => {
          let str = JSON.stringify(content, null, 2);
          console.log(JSON.stringify(content, null, 2));
          writeFileSync(file, str);
        });
      } else throw new Error('unknown extension');
    } else b.run({ env, reporter });
  }
  return b;
};
