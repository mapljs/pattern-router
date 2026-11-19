export default (method: string, path: string) => {
  let isHead = false;
  switch (method) {
    case 'HEAD': {
      isHead = true;
    }
    case 'GET':
      {
        let match = /^\/users(?:\/admin\/\*()|(?:\/(?:[0-9]+))?())$/.exec(path);
        if (match !== null) {
          if (match[1] === '') {
            return isHead ? '' : 'GET /users/admin/*';
          } else if (match[2] === '') {
            return isHead ? '' : 'GET /users/([0-9]+)?';
          }
        }
      }
      break;
  }
};
