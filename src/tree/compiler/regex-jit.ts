import type { Tree } from '../index.ts';
import { compileNode, HANDLERS, reset } from './regex.ts';

export const compile = (tree: Tree<string>, resultId: string, pathId: string): string => {
  let str = '',
    keys = tree[0],
    values = tree[1];

  if (keys.length > 0) {
    let i = keys.length - 1,
      prefix = `if(${pathId}===`;
    str += prefix + JSON.stringify(keys[i]) + `){${values[i]}}`;

    prefix = 'else ' + prefix;
    while (--i >= 0) str += prefix + JSON.stringify(keys[i]) + `){${values[i]}}`;
  }

  if (tree[2] !== null) {
    // console.log(JSON.stringify(tree[2]!, null, 2));
    reset();
    str += `let ${resultId}=/^${compileNode(tree[2])}$/.exec(${pathId});if(${resultId}!==null)switch(${resultId}.lastIndexOf('')){`;
    for (let i = 1; i < HANDLERS.length; i++)
      if (HANDLERS[i] !== null) str += `case ${i}:{${HANDLERS[i]};break}`;
    str += '}';
  }

  return str;
};
