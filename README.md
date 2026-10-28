A fast URLPattern router.

## Usage
Most [URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API#automatic_group_prefixing_in_pathnames) patterns are supported.
```ts
import { node_create_root, node_insert } from '@mapl/pattern-router/tree/node';
import { node_compile_to_regexp } from '@mapl/pattern-router/tree/regexp';

const root = node_create_root<string>();

// in a router implementation static patterns should be matched first
// using a Map instead of using the regexp router.
node_insert(root, '/', 0, 'home');

node_insert(root, '/forum/:forum+', 0, 'forum');

const handlers: string[] = [], 
  offsets = [1],
  regexp = new RegExp('^' + node_compile_to_regexp(root, handlers, offsets) + '$'); // /^\/(?:()|forum\/(?<forum>.+)())$/

handlers; // ["home", "forum"]
offsets; // [1, 3, 4]

const match = (path: string) => {
  let match = regexp.exec(path);
  for (let i = 0; i < handlers.length; i++) {
    // check for each empty capture group position in the regexp
    // if a path matches the capture group will capture an empty string at offsets[i]
    if (match[offsets[i]] === '') {
      return { result: handlers[i], params: match.groups };
    }
  }
}

match('/'); // { result: "home", params: { forum: undefined } }
match('/about'); // undefined
match('/forum/@mapl/pattern-router'); // { result: 'forum', params: { forum: '@mapl/pattern-router' } }
```

### Types
To infer path parameter types of a pattern:
```ts
import type { InferParams } from '@mapl/pattern-router/tree/utils';

type T = InferParams<'/:id'>; // { id: string }
type T = InferParams<'/user/:id*'>; // { id: string | undefined }
type T = InferParams<'/book{s/:id}?'>; // { id: string | undefined }
```

### JIT
Compile a router to matching code.
```ts
import { router_init, router_set } from '@mapl/pattern-router';
import { router_compile_to_code } from '@mapl/pattern-router/jit';

const router = router_init<string>();
router_set(router, 'GET', '/', 'return"home"');
router_set(router, 'POST', '/forum/:forum+', 'return"posting to "+match.groups.forum');

const match = Function(
  'method', 
  'path', 
  router_compile_to_code(
    router, 
    // regexp match result variable
    'match', 
    // input path variable
    'path', 
    // input method variable
    'method', 
    // additional code for HEAD method handling
    ''
  )
);

match('GET', '/'); // "home"
match('GET', '/about'); // undefined
match('POST', '/forum/@mapl/pattern-router'); // "posting to @mapl/pattern-router"
```

In the above example, `router_compile_to_code()` outputs:
```js
switch(method){case"HEAD":{}case "GET":{switch(path){case"/":{return"Home"}break;}}break;case"POST":{let match=/^\/forum\/(?<forum>.+)()$/.exec(path);if(match!==null){if(match[2]===""){return"Posting to "+match.groups.forum}}}break;}
```

### Limitations
Wildcards and unnamed capture groups don't capture. Use named capture groups instead:
```ts
node_insert(root, '/(\\d+)', 0, ...);
// change to
node_insert(root, '/:id(\\d+)', 0, ...);
// or without automatic group prefixing
node_insert(root, '/{:id(\\d+)}', 0, ...);
```

## Compability
This library requires RegExp [duplicate named capture groups in different disjunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group#browser_compatibility) feature support.
