A fast URLPattern router.
```ts
import { router_init, router_set, router_remove } from '@mapl/pattern-router';

const router = router_init<(req: Request) => Response | Promise<Response>>();
router_set(router, 'GET', '/', (req) => new Response('Hi'));
router_set(router, 'GET', '/user/:id(\\d+)', (req, params) => new Response(`user id: ${params.id}`));
router_set(router, 'PUT', '/post/:id(\\d+)', (req, params) => updatePost(req, params.id));
```

## Compability
This library requires [`RegExp.escape()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape#browser_compatibility) and [duplicate named capture groups in different disjunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group#browser_compatibility) support.

## Limitations
- Regular expressions in patterns cannot include capture groups.
- Wildcards and unnamed groups don't capture, use named groups instead.
- Named groups only capture the last matched value in group delimiters with `+` and `*` modifier.
