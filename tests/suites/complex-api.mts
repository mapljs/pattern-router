import suite from './lib.mts';

export default suite({
  routes: {
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
    '*': 'GET',
  },
  tests: {}
});
