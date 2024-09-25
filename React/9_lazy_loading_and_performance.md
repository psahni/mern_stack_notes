### Lazy loading
- lazy lets you defer loading component’s code until it is rendered for the first time.

```js
  import { lazy } from 'react';
  const MarkdownPreview = lazy(
    () => import('./MarkdownPreview.js')
  );
```


* Code Splitting
* Suspense


### Peformance 

* Shimer UI (no loader)
* Lazy loading
* Asset optimization
* Write Optimized code
  - Optimized bundler
* CDN
* defer
* async
* Critical render path


### Error Boundry

* Error Handling:
Use Error Boundaries to catch errors in lazy-loaded components:

React error boundaries are a crucial aspect of error handling in React applications. They are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. They’re like a JavaScript catch {} block but for components.



```js
import ErrorBoundary from './ErrorBoundary';

function MyComponent() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}
```
https://blog.logrocket.com/react-error-handling-react-error-boundary/

### Links
https://react.dev/reference/react/lazy#usage


Code Spliting:
https://blog.logrocket.com/react-dynamic-imports-route-centric-code-splitting-guide/



### Profiling and Measuring Performance
Utilize the `React DevTools Profiler` to identify performance bottlenecks in your application. This tool helps visualize component rendering times and can guide optimization efforts

https://www.perplexity.ai/search/react-optimization-techniques-RxRSaqmHSVGQjC7ANDoZMw
