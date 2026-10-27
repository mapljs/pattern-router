import suite, { rand, randstr, sample } from './lib.mts';

const username_part = () => '/' + randstr(8),
  email_part = () => username_part() + '@gmail.com',
  event_part = () => '/' + btoa(randstr(16)).replaceAll('=', ''),
  location_part = event_part,
  file_part = () => {
    let parts = rand(3) + 1,
      str = '';
    while (parts-- > 0) str += username_part();
    return str;
  };

export default suite({
  '/user': {
    '/': 'GET',
    '/comments': 'GET',
    '/avatar': 'GET',
    '/lookup': {
      '/username': {
        '/:username': [sample(username_part, 5), 'GET'],
      },
      '/email': {
        '/:email': [sample(email_part, 5), 'GET'],
      },
    },
  },
  '/event': {
    '/:event': [
      sample(event_part, 5),
      {
        '/': 'GET',
        '/comments': 'GET',
        '/comment': 'POST',
      },
    ],
  },
  '/map': {
    '/:location': [
      sample(location_part, 5),
      {
        '/events': 'GET',
      },
    ],
  },
  '/status': 'GET',
  '/very/deeply/nested/route/hello/there': 'GET',
  '/static': {
    '/:file+': [sample(file_part, 10), 'GET'],
  },
});
