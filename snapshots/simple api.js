(m, p) => {
  if (m === 'GET') {
    if (p === '/user') {
      return 'GET /user';
    } else if (p === '/user/comments') {
      return 'GET /user/comments';
    } else if (p === '/user/avatar') {
      return 'GET /user/avatar';
    } else if (p === '/status') {
      return 'GET /status';
    } else if (p === '/very/deeply/nested/route/hello/there') {
      return 'GET /very/deeply/nested/route/hello/there';
    }
    {
      let r =
        /^(?:\/(?:\x75ser\/lookup\/(?:\x75sername(?:\/(?<username>[^/]+)()$|$)|\x65mail(?:\/(?<email>[^/]+)()$|$)|$)|\x65vent(?:\/(?<event>[^/]+)(?:()$|\/comments(?:()$|$))|$)|\x6dap(?:\/(?<location>[^/]+)\/events(?:()$|$)|$)|\x73tatic(?:\/(?<file>.+)()$|$)|$)|$)/.exec(
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
    }
  } else if (m === 'POST') {
    {
      let r = /^(?:\/event(?:\/(?<event>[^/]+)\/comment(?:()$|$)|$)|$)/.exec(p);
      if (r !== null) {
        if (r[2] === '') {
          return 'POST /event/:event/comment';
        }
      }
    }
  }
  return '';
};
