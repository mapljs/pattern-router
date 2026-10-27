export const METHODS = [
  'GET',
  'QUERY',
  'POST',
  'PUT',
  'DELETE',
  'PATCH',
  'OPTIONS',
  'TRACE',
  '',
] as const;
export type Method = (typeof METHODS)[number];
export type Routes = {
  [key: string]:
    | Routes
    | Method
    | [Method, ...Method[]]
    | [() => Iterable<string>, Routes | Method | [Method, ...Method[]]];
};
export type RoutesList = [method: string, path: string, item: string][];
export type Suite = { routes: RoutesList; tests: RoutesList };
type Params = [startIdx: number, endIdx: number, string[]][];

const generate_path = function* (
  path: string,
  pathStart: number,
  params: Params,
  paramsIdx: number,
): Generator<string, undefined, unknown> {
  if (paramsIdx < params.length) {
    const param = params[paramsIdx],
      prefix = path.slice(pathStart, param[0]);

    for (const suffix of generate_path(path, param[1], params, paramsIdx + 1))
      for (let i = 0, values = param[2]; i < values.length; i++) yield prefix + values[i] + suffix;
  } else yield path.slice(pathStart);
};
const add_route = (
  { routes, tests }: Suite,
  method: string,
  path: string,
  params: Params,
): void => {
  const res = method + ' ' + path,
    route = [method, path, res] satisfies RoutesList[number];
  routes.push(route);

  if (params.length === 0) {
    if (method === '') {
      for (const submethod of METHODS) tests.push([submethod, path, res]);
    } else {
      tests.push([method, path, res]);
      method === 'GET' && tests.push(['HEAD', path, res]);
    }
  } else
    for (const subpath of generate_path(path, 0, params, 0)) {
      if (method === '') {
        for (const submethod of METHODS) tests.push([submethod, subpath, res]);
      } else {
        tests.push([method, subpath, res]);
        method === 'GET' && tests.push(['HEAD', subpath, res]);
      }
    }
};
const add_routes = (o: Suite, routes: Routes, path: string, params: Params): void => {
  for (const key in routes) {
    const route = routes[key],
      subpath = key === '/' ? path : path === '/' ? key : path + key;

    if (Array.isArray(route)) {
      if (typeof route[0] === 'function') {
        const newParams = params.concat([
            [
              path === '/' ? 0 : path.length, // param start idx
              subpath.length, // param end idx
              [...route[0]()],
            ],
          ]),
          subroute = route[1];

        if (Array.isArray(subroute)) {
          for (const method of subroute) add_route(o, method, subpath, newParams);
        } else if (typeof subroute === 'string') {
          add_route(o, subroute, subpath, newParams);
        } else add_routes(o, subroute, subpath, newParams);
      } else for (const method of route) add_route(o, method, subpath, params);
    } else if (typeof route === 'string') add_route(o, route, subpath, params);
    else add_routes(o, route, subpath, params);
  }
};

export default (routes: Routes): Suite => {
  const suite: Suite = { routes: [], tests: [] };
  add_routes(suite, routes, '/', []);
  return suite;
};

// alphabets
export const str_range = (a: string, b: string) => {
  for (let c_start = a.charCodeAt(0) + 1, max = b.charCodeAt(0); c_start <= max; c_start++)
    a += String.fromCharCode(c_start);
  return a;
};
export const id_alphabet = str_range('a', 'z') + str_range('A', 'Z') + str_range('0', '9');

// fixed seed random
let SEED = 0x1950;

export const rand = (max: number) => (SEED = (Math.imul(SEED, 1664525) + 1013904223) >>> 0) % max;
export const randstr = (
  len: number,
  alphabet: Record<number, string> & { length: number } = id_alphabet,
) => {
  let str = '';
  for (let i = 0; i < len; i++) str += alphabet[rand(alphabet.length)];
  return str;
};
export const sample =
  <T,>(fn: (_: 0, i: number) => T, t: number): (() => T[]) =>
  () =>
    new Array(t).fill(0).map(fn);
