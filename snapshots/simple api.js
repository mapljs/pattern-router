(m, p) => {
  switch (m) {
    case 'HEAD': {
    }
    case 'GET': {
      switch (p) {
        case '/user': {
          return 'GET /user';
          break;
        }
        case '/user/comments': {
          return 'GET /user/comments';
          break;
        }
        case '/user/avatar': {
          return 'GET /user/avatar';
          break;
        }
        case '/status': {
          return 'GET /status';
          break;
        }
        case '/very/deeply/nested/route/hello/there': {
          return 'GET /very/deeply/nested/route/hello/there';
          break;
        }
      }
      let r =
        /^\/(?:user\/lookup\/(?:username\/(?<username>[^/]+)()|email\/(?<email>[^/]+)())|event\/(?<event>[^/]+)(?:()|\/comments())|map\/(?<location>[^/]+)\/events()|static\/(?<file>.+)())$/.exec(
          p,
        );
      if (r !== null) {
        if (r[2] === '') {
          return 'GET /user/lookup/username/:username';
        } else if (r[4] === '') {
          return 'GET /user/lookup/email/:email';
        } else if (r[6] === '') {
          return 'GET /event/:event';
        } else if (r[7] === '') {
          return 'GET /event/:event/comments';
        } else if (r[9] === '') {
          return 'GET /map/:location/events';
        } else if (r[11] === '') {
          return 'GET /static/:file+';
        }
      }
      break;
    }
    case 'POST': {
      let r = /^\/event\/(?<event>[^/]+)\/comment()$/.exec(p);
      if (r !== null) {
        if (r[2] === '') {
          return 'POST /event/:event/comment';
        }
      }
      break;
    }
  }
  return '';
};
