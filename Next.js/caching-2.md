### generateStaticParams
To statically render all paths at build time, supply the full list of paths to generateStaticParams:

```js
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```
To statically render all paths the first time they're visited, return an empty array 

```js
export async function generateStaticParams() {
  return []
}
```

`export const dynamic = 'force-static'`


### Dynamic Routes with Cached Data

In most websites, routes are not fully static or fully dynamic - it's a spectrum. For example, you can have an e-commerce page that uses cached product data that's revalidated at an interval, but also has uncached, personalized customer data.

In Next.js, you can have dynamically rendered routes that have both cached and uncached data. This is because the RSC Payload and data are cached separately. This allows you to opt into dynamic rendering without worrying about the performance impact of fetching all the data at request time.

As a developer, you do not need to choose between static and dynamic rendering as Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used. 

Instead, you choose when to cache or revalidate specific data, and you may choose to stream parts of your UI.

https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering
