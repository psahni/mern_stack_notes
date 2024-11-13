Development speed: Next.js provides out-of-the-box features that ease the development process for making an advanced React app. With the introduction of its own compiler in Next.js 12, the framework also increased build speeds. Compared to React, Next.js reduces the amount of time an engineer needs to wait for code to refresh, minimizing developer frustration and slowdowns.

Data fetching and load times: Next.js can traverse the React tree and query for data in the server, allowing for pre-loaded page data. This often results in lower application load times for pages served by Next.js compared to pages written in vanilla React.

Rendering and SEO: Next.js offers pre-rendering, whereas React uses client-side rendering. Pre-rendered pages enable effective SEO strategies that are challenging to achieve in a plain React app.

Routing: Next.js provides a structured, predefined file system for routing. Its system offers reduced flexibility compared to React’s various library options (e.g., React Router), but simplifies page setup and routing.

### Rendering in Next.js

Next.js provides three rendering methods—
client-side rendering (CSR), server-side rendering (SSR), and static site generation (SSG)—and the added bonus of incremental static regeneration (ISR). 
ISR combines server-side rendering with a semi-static caching mechanism that relieves server load and provides speeds similar to those achieved by a static site.


https://www.toptal.com/next-js/next-js-vs-react


We can perform SSG on Next.js pages that we want to generate statically with getStaticProps() and getStaticPaths(), the latter of which defines the routes for static pages.


https://www.toptal.com/next-js/nextjs-rendering-types-page-speed-optimization