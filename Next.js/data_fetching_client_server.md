### Server Actions

Server Actions are asynchronous functions that are executed on the server. They can be called in Server and Client Components to handle form submissions and data mutations in Next.js applications.

---------------------------------------------------------------

To call a Server Action in a Client Component, create a new file and add the "use server" directive at the top of it. All exported functions within the file will be marked as Server Actions that can be reused in both Client and Server Components:

```js
'use server'
 
export async function create() {}
```
---------------------------------------------------------------

```js
'use client'
 
import { create } from '@/app/actions'
 
export function Button() {
  return <button onClick={() => create()}>Create</button>
}
```

---------------------------------------------------------------


* https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations