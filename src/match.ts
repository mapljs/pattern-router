import type { Router } from './index.ts';
import { HANDLERS, node_compile_to_regexp, reset, type Handlers } from './tree/regex.ts';
import { linear_map_index, linear_map_swap } from './linear-map.ts';

interface Matcher0<in out T> {
  match: (method: string, path: string) => [T] | [T, RegExpExecArray] | undefined;
  methods: string[];
  staticMaps: Map<string, T>[];
  regexps: (RegExp | null)[];
  handlers: Handlers<T>[];
}
interface Matcher1<in out T> extends Matcher0<T> {
  matchAllStaticMap: Map<string, T>;
}
interface Matcher2<in out T> extends Matcher1<T> {
  matchAllRegExp: RegExp;
  matchAllHandler: Handlers<T>;
}
type Matcher<T> = Matcher0<T> | Matcher1<T> | Matcher2<T>;

const match0: Matcher0<any>['match'] = function (this: Matcher0<any>, method, path) {
  let i = this.methods.indexOf(method);
  if (i !== -1) {
    let handler = this.staticMaps[i].get(path);
    if (typeof handler !== 'undefined') return [handler];

    if (this.regexps[i] !== null) {
      let matchResult = this.regexps[i].exec(path);
      if (matchResult !== null) return [this.handlers[i][matchResult.lastIndexOf('')], matchResult];
    }
  }
};

const match1: Matcher1<any>['match'] = function (this: Matcher1<any>, method, path) {
  let i = this.methods.indexOf(method);
  if (i !== -1) {
    let handler = this.staticMaps[i].get(path);
    if (typeof handler !== 'undefined') return [handler];

    if (this.regexps[i] !== null) {
      let matchResult = this.regexps[i].exec(path);
      if (matchResult !== null) return [this.handlers[i][matchResult.lastIndexOf('')], matchResult];
    }
  }

  const match = this.matchAllStaticMap.get(path);
  if (typeof match !== 'undefined') return [match];
};

const match2: Matcher2<any>['match'] = function (this: Matcher2<any>, method, path) {
  {
    let i = this.methods.indexOf(method);
    if (i !== -1) {
      let handler = this.staticMaps[i].get(path);
      if (typeof handler !== 'undefined') return [handler];

      if (this.regexps[i] !== null) {
        let matchResult = this.regexps[i].exec(path);
        if (matchResult !== null)
          return [this.handlers[i][matchResult.lastIndexOf('')], matchResult];
      }
    }
  }

  let handler = this.matchAllStaticMap.get(path);
  if (typeof handler !== 'undefined') return [handler];

  let matchResult = this.matchAllRegExp.exec(path);
  if (matchResult !== null) return [this.matchAllHandler[matchResult.lastIndexOf('')], matchResult];
};

export const router_compile_to_matcher = <T>(router: Router<T>): Matcher<T> => {
  const trees = router[1],
    staticMaps = [],
    regexps = [],
    handlers = [];

  {
    const matchAllIdx = linear_map_index(router, '');

    // Swap the match all tree to last position
    if (matchAllIdx !== -1 && matchAllIdx !== trees.length - 1)
      linear_map_swap(router, matchAllIdx, trees.length - 1);

    for (let i = 0, treesLen = trees.length - (matchAllIdx !== -1 ? 1 : 0); i < treesLen; i++) {
      const tree = trees[i];
      {
        const mp: Map<string, T> = new Map();
        for (let i = 0, treeKeys = tree[0], treeValues = tree[1]; i < treeKeys.length; i++)
          mp.set(treeKeys[i], treeValues[i]);
        staticMaps.push(mp);
      }

      if (tree[2] !== null) {
        reset();
        regexps.push(new RegExp('^' + node_compile_to_regexp(tree[2]) + '$'));
        handlers.push(HANDLERS);
      } else {
        regexps.push(null);
        handlers.push(null!);
      }
    }

    // no match all handler
    if (matchAllIdx === -1)
      return {
        match: match0,
        methods: router[0].slice(),
        staticMaps,
        regexps,
        handlers,
      };
  }

  // remove match all method
  const methods = router[0].slice(0, -1),
    matchAllTree = trees[trees.length - 1],
    matchAllStaticMap: Map<string, T> = new Map();
  for (
    let i = 0, treeKeys = matchAllTree![0], treeValues = matchAllTree![1];
    i < treeKeys.length;
    i++
  )
    matchAllStaticMap.set(treeKeys[i], treeValues[i]);

  if (matchAllTree[2] === null)
    return {
      match: match1,
      methods,
      staticMaps,
      regexps,
      handlers,
      matchAllStaticMap,
    };

  reset();
  return {
    match: match2,
    methods,
    staticMaps,
    regexps,
    handlers,
    matchAllStaticMap,
    matchAllRegExp: new RegExp('^' + node_compile_to_regexp(matchAllTree![2]) + '$'),
    matchAllHandler: HANDLERS,
  };
};
