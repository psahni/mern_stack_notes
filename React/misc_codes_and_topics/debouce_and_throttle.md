### Debounce

```js
    import React, { useState } from 'react';

    function debounce(func, delay) {
      let timeoutId;
      return function (...args) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    }

    const DebouncedSearch = () => {
      const [query, setQuery] = useState('');

      const handleSearch = (event) => {
        setQuery(event.target.value);
        console.log('Searching for:', event.target.value);
        // Here you would typically trigger an API call or filter a list based on the query
      };

      const debouncedSearch = debounce(handleSearch, 500);

      return (
        <div>
          <h1>Search</h1>
          <input
            type="text"
            placeholder="Type to search..."
            onChange={debouncedSearch}
          />
          <p>Search Query: {query}</p>
        </div>
      );
    };

    export default DebouncedSearch;
```

### THROTTLE

```js
import React, { useState } from 'react';

function ThrottledButton() {
  const [count, setCount] = useState(0);

  const throttle = (func, delay) => {
    let lastCall = 0;
    return () => {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        func();
      }
    };
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const throttledIncrement = throttle(incrementCount, 2000);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={throttledIncrement}>Click Me</button>
    </div>
  );
}

export default ThrottledButton;
```