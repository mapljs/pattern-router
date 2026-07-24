export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type Routes = {
  [key: string]: Routes | Method | [Method, ...Method[]];
};
export type RouteList = [method: string, path: string, item: string][];

const addRoutes = (routeList: RouteList, routes: Routes, path: string): void => {
  for (const key in routes) {
    const route = routes[key];
    const subpath = key === '/' ? path : path === '/' ? key : path + key;

    if (Array.isArray(route))
      for (const method of route) {
        routeList.push([method, subpath, method + ' ' + subpath]);
      }
    else if (typeof route === 'string') {
      routeList.push([route, subpath, route + ' ' + subpath]);
    } else addRoutes(routeList, route, subpath);
  }
};

export const buildRoutes = (routes: Routes): RouteList => {
  const list: RouteList = [];
  addRoutes(list, routes, '/');
  return list;
};

export const routesList = {
  'simple api': buildRoutes({
    '/user': {
      '/': 'GET',
      '/comments': 'GET',
      '/avatar': 'GET',
      '/lookup': {
        '/username/:username': 'GET',
        '/email/:email': 'GET',
      },
    },
    '/event': {
      '/:event': {
        '/': 'GET',
        '/comments': 'GET',
        '/comment': 'POST',
      },
    },
    '/map/:location/events': 'GET',
    '/status': 'GET',
    '/very/deeply/nested/route/hello/there': 'GET',
    '/static/:file+': 'GET',
  }),

  'complex api': buildRoutes({
    '/auth': {
      '/register': 'POST',
      '/login': 'POST',
      '/logout': 'POST',
      '/refresh': 'POST',
      '/password': {
        '/forgot': 'POST',
        '/reset': 'POST',
      },
      '/sso': {
        '/': 'POST',
        '/providers': 'GET',
      },
    },
    '/user': {
      '/': 'POST',
      '/:user': {
        '/': ['GET', 'POST'],
        '/notifications': 'GET',
        '/invites': {
          '/': 'POST',
          '/:invite': {
            '/': 'GET',
            '/accept': 'POST',
            '/resend': 'POST',
          },
        },
      },
      '/me': {
        '/': ['GET', 'POST'],
        '/preferences': ['GET', 'PATCH'],
        '/sessions': {
          '/': 'GET',
          '/:session': 'DELETE',
        },
      },
      '/notifications': {
        '/': 'GET',
        '/read-all': 'POST',
        '/:notification/read': 'POST',
      },
    },
    '/org': {
      '/': 'POST',
      '/:org': {
        '/': ['GET', 'PATCH', 'DELETE'],
        '/members': {
          '/': ['GET', 'POST'],
          '/:member': 'POST',
        },
        '/roles': {
          '/': ['GET', 'POST'],
          '/:role': 'POST',
        },
        '/domains': {
          '/': ['GET', 'POST'],
          '/:domain': 'POST',
        },
        '/projects': {
          '/': 'POST',
          '/:project': {
            '/': ['GET', 'PATCH', 'DELETE'],
            '/members': ['GET', 'POST'],
            '/activity': 'GET',
            '/tasks': {
              '/': ['GET', 'POST'],
              '/time-entries': {
                '/': ['GET', 'POST'],
                '/:entry': 'POST',
              },
              '/attachments': ['GET', 'POST'],
              '/tags': ['POST', 'DELETE'],
              '/fields/:field': ['PUT', 'DELETE'],
            },
          },
        },
        '/tasks': {
          '/': 'GET',
          '/:task': {
            '/': ['GET', 'PATCH', 'DELETE'],
            '/assign': 'POST',
            '/status': 'POST',
            '/comments': ['GET', 'POST'],
            '/time-entries': {
              '/': ['GET', 'POST'],
              '/:entry/stop': 'POST',
            },
            '/attachments': ['GET', 'POST'],
            '/tags': ['POST', 'DELETE'],
            '/fields/:field': ['PUT', 'DELETE'],
          },
        },
        '/billing': {
          '/plans': 'GET',
          '/subscription': {
            '/': ['GET', 'POST'],
            '/cancel': 'POST',
          },
          '/invoices': {
            '/': 'GET',
            '/:invoice': ['GET', 'POST'],
          },
          '/payment-methods': {
            '/': ['GET', 'POST'],
            '/:method': 'DELETE',
          },
        },
        '/api-keys': {
          '/': ['GET', 'POST'],
          '/:key': 'DELETE',
        },
        '/webhooks': {
          '/': ['GET', 'POST'],
          '/:hook': {
            '/': ['PATCH', 'DELETE'],
            '/deliveries': {
              '/': 'GET',
              '/:delivery': 'GET',
            },
          },
        },
      },
    },
    '/files': {
      '/upload': 'POST',
      '/:file+': ['GET', 'DELETE'],
    },
    '/search': {
      '/': 'GET',
      '/filters': {
        '/': ['GET', 'POST'],
        '/:filter': ['PATCH', 'DELETE'],
      },
    },
    '/tags': {
      '/': ['GET', 'POST'],
      '/:tag': ['PATCH', 'DELETE'],
    },
    '/status': 'GET',
    '/admin': {
      '/reports': {
        '/time': 'GET',
        '/projects/:project/summary': 'GET',
        '/users/:user/activity': 'GET',
      },
      '/users': 'GET',
      '/projects': 'GET',
      '/audit-logs': 'GET',
      '/stats': 'GET',
      '/impersonate': 'POST',
    },
  }),
};
