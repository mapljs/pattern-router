import suite from './lib.mts';

export default suite({
  routes: {
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
  },
  tests: {}
});
