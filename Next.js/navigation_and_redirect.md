### redirect function

The `redirect` function allows you to redirect the user to another URL. You can call redirect in Server Components, Route Handlers, and Server Actions.

```js
'use server'
 
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export async function createPost(id: string) {
  try {
  } catch (error) {
  }
 
  revalidatePath('/posts') // Update cached posts
  redirect(`/post/${id}`) // Navigate to the new post page
}
```

* https://nextjs.org/docs/app/building-your-application/routing/redirecting