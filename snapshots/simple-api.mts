export default (method: string, path: string) => {
  let isHead = false;
  switch (method) {
    case 'HEAD': {
      isHead = true;
    }
    case 'GET':
      switch (path) {
        case '/user':
          {
            return isHead ? '' : 'GET /user';
          }
          break;
        case '/user/comments':
          {
            return isHead ? '' : 'GET /user/comments';
          }
          break;
        case '/user/avatar':
          {
            return isHead ? '' : 'GET /user/avatar';
          }
          break;
        case '/status':
          {
            return isHead ? '' : 'GET /status';
          }
          break;
        case '/very/deeply/nested/route/hello/there':
          {
            return isHead ? '' : 'GET /very/deeply/nested/route/hello/there';
          }
          break;
      }
      {
        let match =
          /^\/(?:user\/lookup\/(?:username\/(?<username>[^/]+)()|email\/(?<email>[^/]+)())|event\/(?<event>[^/]+)(?:\/comments()|())|map\/(?<location>[^/]+)\/events()|static\/(?<file>.+)())$/.exec(
            path,
          );
        if (match !== null) {
          if (match[2] === '') {
            return isHead ? '' : 'GET /user/lookup/username/:username';
          } else if (match[4] === '') {
            return isHead ? '' : 'GET /user/lookup/email/:email';
          } else if (match[6] === '') {
            return isHead ? '' : 'GET /event/:event/comments';
          } else if (match[7] === '') {
            return isHead ? '' : 'GET /event/:event';
          } else if (match[9] === '') {
            return isHead ? '' : 'GET /map/:location/events';
          } else if (match[11] === '') {
            return isHead ? '' : 'GET /static/:file+';
          }
        }
      }
      break;
    case 'POST':
      {
        let match = /^\/event\/(?<event>[^/]+)\/comment()$/.exec(path);
        if (match !== null) {
          if (match[2] === '') {
            return 'POST /event/:event/comment';
          }
        }
      }
      break;
  }
};
