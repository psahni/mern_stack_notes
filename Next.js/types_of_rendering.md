## Types of Rendering


### Static Site Generation (SSG)
* HTML content is generated in advance
* Good for SEO friendly apps
* Generally used, when content is not likely to change often like blog or marketing content

```js
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data.json')));
  return {
    props: { data }, // Passed to the page as props
  };
}

export default function Page({ data }) {
  return <div>{data.title}</div>;
}
```

----------------------------------------------------

### Server-Side Rendering (SSR)
* Dynamic content which is persistent in DB, like user profile data
* Pages are generated in advance on the server side itself
* HTML is sent to the client


```js
// Fresh data on every request - no caching like getStaticProps
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return {
    props: { data },
  };
}

export default function Page({ data }) {
  return <div>{data.title}</div>;
}
```


#### Benefits of Server rendering
* Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.

*  By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.

-> V Imp to understand the server side rendering and benefit over react.js

https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering

--------------------------------------------------------

### Client-Side Rendering (CSR)

* The HTML is delivered to the client with minimal or no pre-rendered content.
* JavaScript fetches data and updates the DOM on the client.
* Regular Front end application.
* Content that requires to delievered after authentication and demands user interaction on the page
* Fully dynamic but slower initial load time compared to SSG or SSR.
* Requires JavaScript to be enabled in the browser.

```js
import { useState, useEffect } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return <div>{data.title}</div>;
}
```
------------------------------------------------------------

### Incremental Static Regeneration (ISR)

[What It Is]
* Allows static pages to be updated incrementally after build time.
* Next.js regenerates the page in the background after a set period while keeping the existing page live for users.

[When to Use]
Use cases similar to SSG but where the content changes over time (e.g., e-commerce, news sites).

[Key Features]
Combines the speed of SSG with the flexibility of SSR. <- (Imp point to be noted)
Reduces server load compared to SSR.

[How to implement]

```js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60, // Regenerate the page every 60 seconds
  };
}

export default function Page({ data }) {
  return <div>{data.title}</div>;
}
```

------------------------------------------------------------


### Static Rendering with Client-Side Fetching (Hybrid Rendering)

* Pages are statically generated, but dynamic data is fetched on the client-side after the initial load.
* Static structure with dynamic content (e.g., user-specific data within a static template).
* For example - There is a header content, sidebar content, with user specific data in the middle
* Some dynamic + Some static

```js
port async function getStaticProps() {
  return { props: { initialData: null } };
}
export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return <div>{data.title}</div>;
}
```

------------------------------------------------------------

* E-commerce with Hybrid example

```js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  return { props: { products }, revalidate: 300 };
}
```
