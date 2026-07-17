import type { Tree } from '../index.ts';
import { compileNode, HANDLERS, reset } from './regex.ts';

export const compile = (tree: Tree<string>, resultId: string, pathId: string): string => {
  let str = '';
  for (let i = 0, keys = tree[0], values = tree[1]; i < keys.length; i++)
    str += (i > 0 ? 'else ' : '') + `if(${pathId}===${JSON.stringify(keys[i])}){${values[i]}}`;

  if (tree.length > 2) {
    reset();
    str += `let ${resultId}=/^${compileNode(tree[2]!)}$/.exec(${pathId});if(${resultId}!==null)switch(${resultId}.lastIndexOf('')){`;
    for (let i = 1; i < HANDLERS.length; i++)
      if (HANDLERS[i] !== null) str += `case ${i}:{${HANDLERS[i]};break}`;
    str += '}';
  }

  return str;
};
