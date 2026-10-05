A fast compiled pattern router.

## Usage
Most [URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API#automatic_group_prefixing_in_pathnames) patterns are supported.
```ts
import { router_init, router_set, router_remove } from '@mapl/pattern-router';
import { router_compile_to_code } from '@mapl/pattern-router/jit';

const router = router_init<string>();
router_set(router, 'GET', '/', 'return "Home"');
router_set(router, 'POST', '/forum/:forum+', 'return "Posting to " + match.groups.forum'); // access matched params

const match = (0, eval)(`(method, path) => {${router_compile_to_code(router, 'match', 'path', 'method')}}`);

match('GET', '/'); // "Home"
match('GET', '/about'); // undefined
match('POST', '/forum/@mapl/pattern-router'); // "Posting to @mapl/pattern-router"
```

### Limitations
Wildcards and unnamed capture groups don't capture. Use named capture groups instead:
```ts
router_set(router, 'GET', '/(\\d+)', ...);
// change to
router_set(router, 'GET', '/:id(\\d+)', ...);
// or without automatic group prefixing
router_set(router, 'GET', '/{:id(\\d+)}', ...);
```

### Types
To infer parameters types of a pattern:
```ts
import type { InferParams } from '@mapl/pattern-router/tree/utils';

type T = InferParams<'/:id'>; // { id: string }
type T = InferParams<'/user/:id?'>; // { id: string | undefined }
type T = InferParams<'/book{s/:id}?'>; // { id: string | undefined }
```

## Compability
This library requires RegExp [duplicate named capture groups in different disjunction feature](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group#browser_compatibility) support.
