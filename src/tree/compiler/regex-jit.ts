import type { Tree } from '../index.ts';
import { compileNode, HANDLERS, reset } from './regex.ts';

export const compile = (tree: Tree<string>, resultId: string, pathId: string): string => {
  let str = '',
    keys = tree[0],
    values = tree[1];

  if (keys.length > 0) {
    str = `switch(${pathId}){`;
    for (let i = 0; i < keys.length; i++) str += `case${JSON.stringify(keys[i])}:{${values[i]}}`;
    str += '}';
  }

  if (tree[2] !== null) {
    // console.log(JSON.stringify(tree[2]!, null, 2));
    reset();
    str += `{let ${resultId}=/^${compileNode(tree[2])}$/.exec(${pathId});if(${resultId}!==null)switch(${resultId}.lastIndexOf('')){`;
    for (let i = 1; i < HANDLERS.length; i++)
      if (HANDLERS[i] !== null) str += `case ${i}:{${HANDLERS[i]}}`;
    str += '}}';
  }

  return str;
};
