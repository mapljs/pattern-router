import { is_dynamic_pattern } from '@mapl/pattern-router/tree/utils';

export type Method =
  | 'GET'
  | 'QUERY'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'OPTIONS'
  | 'TRACE'
  | '';
export type Routes = {
  [key: string]: Routes | Method | [Method, ...Method[]];
};
export type RoutesList = [method: string, path: string, item: string][];

type Tests = {
  [key: string]:
    | Tests
    | {
        [key in Method]?: boolean | string;
      };
};

const addRoutes = (routeList: RoutesList, routes: Routes, path: string): void => {
  for (const key in routes) {
    const route = routes[key],
      subpath = key === '/' ? path : path === '/' ? key : path + key;

    if (Array.isArray(route))
      for (const method of route) {
        routeList.push([method, subpath, method + ' ' + subpath]);
      }
    else if (typeof route === 'string') {
      routeList.push([route, subpath, route + ' ' + subpath]);
    } else addRoutes(routeList, route, subpath);
  }
};
const addTests = (testsList: RoutesList, tests: Tests, path: string): void => {
  for (const key in tests) {
    const test = tests[key];

    if (key.startsWith('/')) {
      addTests(testsList, test as any, key === '/' ? path : path === '/' ? key : path + key);
    } else {
      testsList.push([
        key,
        path,
        (test as any) === true ? `${key} ${path}` : (test as any) === false ? '' : `${key} ${test}`,
      ]);
    }
  }
};

export default (o: { routes: Routes; tests: Tests }): { routes: RoutesList; tests: RoutesList } => {
  const routes: RoutesList = [];
  addRoutes(routes, o.routes, '/');

  // Don't automatically add tests for dynamic routes
  const tests = routes.filter((route) => !is_dynamic_pattern(route[1]));
  addTests(tests, o.tests, '/');

  return { routes, tests };
};
