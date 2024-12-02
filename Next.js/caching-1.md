### Caching in Next.js
By default, Next.js will cache as much as possible to improve performance and reduce cost. This means routes are statically rendered and data requests are cached unless you opt out. 

4 Mechanisms:-
- Request Memoization
- Data Cache
- Full Route Cache
- Router Cache

### Request Memoization

React extends the fetch API to automatically memoize requests that have the same URL and options. This means you can call a fetch function for the same data in multiple places in a React component tree while only executing it once.

For example, if you need to use the same data across a route (e.g. in a Layout, Page, and multiple components), you do not have to fetch data at the top of the tree, and forward props between components. 

Instead, you can fetch data in the components that need it without worrying about the performance implications of making multiple requests across the network for the same data.

```js
const item = await getItem() // cache MISS
const item = await getItem() // cache HIT
```

Memoization only applies to the React Component tree, this means:

  It applies to fetch requests in generateMetadata, generateStaticParams, Layouts, Pages, and other Server Components.

  It doesn't apply to fetch requests in Route Handlers as they are not a part of the React component tree.


https://nextjs.org/docs/app/building-your-application/caching#request-memoization



#### React Cache Function

The React cache function allows you to memoize the return value of a function, allowing you to call the same function multiple times while only executing it once.

You can use cache to manually memoize data requests for use cases when the fetch API is not suitable. For example, some database clients, CMS clients, or GraphQL clients.

```js
import { cache } from 'react'
import db from '@/lib/db'
 
export const getItem = cache(async (id: string) => {
  const item = await db.item.findUnique({ id })
  return item
})
```

It is only valid till one server request

https://nextjs.org/docs/app/building-your-application/caching#react-cache-function



#### Data Cache | Fetch

Next.js has a built-in Data Cache that persists the result of data fetches across incoming server requests and deployments. This is possible because Next.js extends the native fetch API to allow each request on the server to set its own persistent caching semantics.

If a route has a fetch request that is not cached, this will opt the route out of the Full Route Cache. The data for the specific fetch request will be fetched for every incoming request.

-> Default behavior: Cache data for the lifetime of the request.

```js
  fetch({}, { cache: 'force-cache' })
  fetch({}, { cache: 'no-store' })
```

This config option will opt all fetches out of the Data Cache (i.e. no-store):
`const fetchCache = 'default-no-store'`

"Whether the data is cached or uncached, the requests are always memoized to avoid making duplicate requests for the same data during a React render pass."

So, caching is happening at two level, client and server.
Client side, requests are memomized within one request life cycle
On Server side, the cache can persist over one deployment

* The Data Cache is persistent across incoming requests and deployments unless you revalidate or opt-out.
* Data cache persists across deployments
* Full route cache is cleared on deployments
* Revalidating or opting out of the Data Cache will invalidate the Full Route Cache, as the render output depends on data.
* Invalidating or opting out of the Full Route Cache does not affect the Data Cache.
* You can dynamically render a route that has both cached and uncached data.
* fetch requests that do not opt out of caching will still be cached in the Data Cache. 
This allows for a hybrid of cached and uncached data.

* V Imp Topic
https://nextjs.org/docs/app/building-your-application/caching#data-cache



### How to cache a function for Cache for 1 hour

We can cache api response using `unstable_cache`

```js
import { unstable_cache } from 'next/cache'
import { db, posts } from '@/lib/db'
 
const getPosts = unstable_cache(
  async () => {
    return await db.select().from(posts)
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)
 
export default async function Page() {
  const allPosts = await getPosts()
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```
This example caches the result of the database query for 1 hour (3600 seconds). It also adds the cache tag posts which can then be invalidated with `Incremental Static Regeneration`.



### Invalidating/Expiring Cache

* Time based
`fetch('https://...', { next: { revalidate: 3600 } })`

* On Demand
`revalidatePath('/')`

`revalidatePath vs. router.refresh:`

Calling router.refresh will clear the Router cache, and re-render route segments on the server without invalidating the Data Cache or the Full Route Cache.

The difference is that revalidatePath purges the Data Cache and Full Route Cache, whereas router.refresh() does not change the Data Cache and Full Route Cache, as it is a client-side API.

-> So, it means router.refresh operates from client side.

`revalidateTag`
We can cache, and give it a tag, then we can revalidate(expire) that cache by tag

fetch(`https://...`, { next: { tags: ['a'] } })

revalidateTag('a') => This will purge the cache. And on next request, the new data is fetched and cached again

Please read from following:

How On-Demand Revalidation Works
https://nextjs.org/docs/app/building-your-application/caching#revalidating-1

revalidatePath
https://nextjs.org/docs/app/building-your-application/caching#revalidatepath

### Full Route Cache


* Dynamic routes are not cached
Whether a route is cached or not at build time depends on whether it's statically or dynamically rendered. Static routes are cached by default, whereas dynamic routes are rendered at request time, and not cached.

* By default, the Full Route Cache is persistent. This means that the render output is cached across user requests.

* Data cache persists across deployments

* Full route cache is cleared on deployments



#### Opt out Full route cache (RSC payload + HTML)

`dynamic = 'force-dynamic'` or
`revalidate = 0`

* This will skip the Full Route Cache and the Data Cache. Meaning components will be rendered and data fetched on every incoming request to the server. 
* The Router Cache will still apply as it's a client-side cache.

* Dynamic APIs like `cookies` and `headers`, and the `searchParams` prop in Pages depend on runtime incoming request information. Using them will opt a route out of the Full Route Cache, in other words, the route will be dynamically rendered.

https://nextjs.org/docs/app/building-your-application/caching#segment-config-options

### Router Cache (Client-side)


Next.js has an in-memory client-side router cache that stores the RSC payload of route segments, split by layouts, loading states, and pages.

When a user navigates between routes, Next.js caches the visited route segments and prefetches the routes the user is likely to navigate to. This results in instant back/forward navigation, no full-page reload between navigations, and preservation of React state and browser state

With the Router Cache:

Layouts are cached and reused on navigation (partial rendering).
Loading states are cached and reused on navigation for instant navigation.
Pages are not cached by default, but are reused during browser backward and forward navigation. 


Good to read:- https://web.dev/articles/bfcache (Browser backword and forward cache)

Duration
https://nextjs.org/docs/app/building-your-application/caching#duration-3

* Default Prefetching (prefetch={null} or unspecified): not cached for dynamic pages, 5 minutes for static pages.

* Full Prefetching (prefetch={true} or router.prefetch): 5 minutes for both static & dynamic pages.

* page refresh will clear all cached segments, even though it has automatic invalidation period

* Router Cache will continue to serve the previous payload until a hard refresh, or the automatic invalidation period has elapsed, even though Data cache in invalidated


### router.refresh
The refresh option of the useRouter hook can be used to manually refresh a route. This completely clears the Router Cache, and makes a new request to the server for the current route. refresh does not affect the Data or Full Route Cache.

* The difference is that `revalidatePath` purges the Data Cache and Full Route Cache, whereas `router.refresh()` does not change the Data Cache and Full Route Cache, as it is a client-side API.

* `router.refresh` is a method provided by Next.js App Router (introduced in Next.js 13) to programmatically refresh the data on a page, effectively reloading the server-side components without performing a full page reload. Page will reflect updated data.

* It is specific to the App Router. If you’re using the traditional Pages Router (/pages directory), consider other methods like window.location.reload() or manually updating state.

#### Prefetching Routes
Prefetching is a way to preload a route in the background before the user visits it.

[Two ways]
* <Link> component

By default, the <Link> component automatically prefetches routes from the Full Route Cache and adds the React Server Component Payload to the Router Cache.

To disable prefetching, you can set the prefetch prop to false

* router.prefetch()


https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching

### Caching API's
https://nextjs.org/docs/app/building-your-application/caching#apis


### Some Misc points:-

You can dynamically render a route that has both cached and uncached data. This is useful when most of your page uses cached data, but you have a few components that rely on data that needs to be fetched at request time.

The default behavior of Next.js is to cache the rendered result (RSC Payload and HTML) of a route on the server. This applies to statically rendered routes at build time, or during revalidation.
