A fast pattern router.

## Usage
Most [URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API#automatic_group_prefixing_in_pathnames) patterns work.

```ts
import { router_init, router_set, router_remove } from '@mapl/pattern-router';
import { router_compile_to_matcher } from '@mapl/pattern-router/match';

const router = router_init<(req: Request) => Response | Promise<Response>>();
router_set(router, 'GET', '/', (req) => new Response('Hi'));
router_set(router, 'GET', '/user/:id(\\d+)', (req, params) => new Response(`user id: ${params.id}`));
router_set(router, 'PUT', '/post/:id(\\d+)', (req, params) => updatePost(req, params.id));
router_remove(router, 'GET', '/post/:id(\\d+)');

const matcher = router_compile_to_matcher(router);
matcher.match('GET', '/'); // [(req) => new Response('Hi')]
matcher.match('GET', '/user/001'); // undefined
matcher.match('PUT', '/post/001'); // [(req, params) => updatePost(req, params.id), { id: '001' }]
```

### JIT
To wrap compiled code pieces with routing code:
```ts
import { router_init, router_set, router_remove } from '@mapl/pattern-router';
import { router_compile_to_code } from '@mapl/pattern-router/jit';

const router = router_init<string>();
router_set(router, 'GET', '/', 'return "Home"');
router_set(router, 'POST', '/forum/:forum+', 'return "Posting to " + result.groups.forum');

const match = (0, eval)(`(method,path)=>{${router_compile_to_code(router, 'result', 'path', 'method')}}`);

match('GET', '/'); // "Home"
match('GET', '/about'); // undefined
match('POST', '/forum/@mapl/pattern-router'); // "Posting to @mapl/pattern-router"
```

## Compability
This library requires [`RegExp.escape()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape#browser_compatibility) and [duplicate named capture groups in different disjunction feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group#browser_compatibility) support.

## Limitations
- Regular expressions in patterns cannot include capture groups.
- Wildcards and unnamed groups don't capture, use named groups instead.
- Named groups only capture the last matched value in group delimiters with `+` and `*` modifier.
