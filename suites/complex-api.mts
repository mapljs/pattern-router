import suite, { rand, randstr, sample } from './lib.mts';

const name_part = () => '/' + randstr(8),
  optional_name_part = () => (rand(1) ? name_part() : ''),
  invite_part = () => '/' + btoa(randstr(16)).replaceAll('=', ''),
  key_part = () => '/' + randstr(32),
  file_part = () => {
    let parts = rand(5) + 1,
      str = '';
    while (parts-- > 0) str += name_part();
    return str;
  };

export default suite({
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
    '/:user': [
      sample(name_part, 5),
      {
        '/': ['GET', 'POST'],
        '/notifications': 'GET',
        '/invites': {
          '/': 'POST',
          '/:invite': [
            sample(invite_part, 5),
            {
              '/': 'GET',
              '/accept': 'POST',
              '/resend': 'POST',
            },
          ],
        },
      },
    ],
    '/me': {
      '/': ['GET', 'POST'],
      '/preferences': ['GET', 'PATCH'],
      '/sessions': {
        '/': 'GET',
        '/:session': [sample(key_part, 10), 'DELETE'],
      },
    },
    '/notifications': {
      '/': 'GET',
      '/read': {
        '/:notification?': [sample(optional_name_part, 10), 'POST'],
      },
    },
  },
  '/org': {
    '/': 'POST',
    '/:org': [
      sample(name_part, 2),
      {
        '/': ['GET', 'PATCH', 'DELETE'],
        '/members': {
          '/': ['GET', 'POST'],
          '/:member': [sample(name_part, 5), 'POST'],
        },
        '/roles': {
          '/': ['GET', 'POST'],
          '/:role': [sample(name_part, 5), 'POST'],
        },
        '/domains': {
          '/': ['GET', 'POST'],
          '/:domain': [sample(name_part, 5), 'POST'],
        },
        '/projects': {
          '/': 'POST',
          '/:project': [
            sample(name_part, 3),
            {
              '/': ['GET', 'PATCH', 'DELETE'],
              '/members': ['GET', 'POST'],
              '/activity': 'GET',
              '/tasks': {
                '/': ['GET', 'POST'],
                '/time-entries': {
                  '/': ['GET', 'POST'],
                  '/:entry': [sample(key_part, 2), 'DELETE'],
                },
                '/attachments': ['GET', 'POST'],
                '/tags': ['POST', 'DELETE'],
                '/fields': {
                  '/:field': [sample(name_part, 3), ['PUT', 'DELETE']],
                },
              },
            },
          ],
        },
        '/tasks': {
          '/': 'GET',
          '/:task': [
            sample(name_part, 3),
            {
              '/': ['GET', 'PATCH', 'DELETE'],
              '/assign': 'POST',
              '/status': 'POST',
              '/comments': ['GET', 'POST'],
            },
          ],
        },
        '/billing': {
          '/plans': 'GET',
          '/subscription': {
            '/': ['GET', 'POST'],
            '/cancel': 'POST',
          },
          '/invoices': {
            '/': 'GET',
            '/:invoice': [sample(name_part, 5), ['GET', 'POST']],
          },
          '/payment-methods': {
            '/': ['GET', 'POST'],
            '/:method': [sample(name_part, 3), ['PUT', 'DELETE']],
          },
        },
        '/api-keys': {
          '/': ['GET', 'POST'],
          '/:key': [sample(key_part, 3), 'DELETE'],
        },
        '/webhooks': {
          '/': ['GET', 'POST'],
          '/:hook': [sample(name_part, 5), ['PATCH', 'DELETE']],
        },
      },
    ],
  },
  '/files': {
    '/upload': 'POST',
    '/:file+': [sample(file_part, 5), ['GET', 'DELETE']],
  },
  '/status': 'GET',
  '*': [() => [], ''],
});
