### Lazy loading
- lazy lets you defer loading component’s code until it is rendered for the first time.

```js
  import { lazy } from 'react';
  const MarkdownPreview = lazy(
    () => import('./MarkdownPreview.js')
  );
```

### Links
https://react.dev/reference/react/lazy#usage