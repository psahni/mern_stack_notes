Reserved filenames

layout.js
icon.png
page.js (setup a route)

for creating a route you just create a folder with page.js file.


jsconfig file for relative importing


{
    compilerOptions: {
    paths: {
      "@/*": ["./*"]
    }
  }
}


page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about )

layout.js => Create a new layout that wraps sibling and nested pages

not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

blog/[slug]/page.js
You can dynamically create urls, which have different slug, that slug will be available as a props




### Optimizing Image with Next.js

<Image> -> Lazy loading images under the hood.
Adds the attr loading="lazy" width height decoding 
srcset -> diff sizes are loaded as per the viewport
Image is returned as .webp format in content disposition header if you check
Add the priority property to load as soon as possible, no flickering

Image slide show component - Client side component
You get the urls from the server and build and render the component on the client side.

------
Imp: By default all react components, are react server components
Advantage: Less client side JS and great for SEO

Client side comp
useState, useEffect are only available on the client

You have to explicity tell that its a client side component

'use client';

const path = usePathname(); // Can only be used with client components

path.startsWith("/route_name") ? classes.active : undefined


----
Css modules in next.js

------

lib/meals.js

It's a normal JS file - a service, where i will put my DB calls
I'll import the funciton in my component, and pass the output to my component

------
Suspense Component

Fallback state

<Suspense fallback={FallbackComponent}>
 <Meals/>
</Suspense>

You have to show loading as per the component or where the compo that is loading.

---------
meals/error.js

function getData() {
  const data = await axios('./');
  throw new Error("error loading");

  return data;
}

'use-client';
export default function Error({error}) {
  return <main className="error"><h1>An error occured</h1></main>
}

----

Handling Not found states

create file not-found.js

function NotFound() {
  return (
    <main>
      <h1>Not found</h1>
    </main>
  )
}

----

### Dynamic Route loading

get details page - slug 

function DetailPage({params}) {
  const meal = getMeal(params.mealSlug)

  if (!meal) {
    notFound(); // imported from next navigation (react-the-complete-guide-incl-redux/learn/lecture/41718160)
  }
}

----------------------------------------------------------------


* You can execute a function on server like this:-
* You can only add it in the server side components


async function shareMeal(formData) {
    'use server';

    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    console.log(meal);
    // FROM HERE YOU CAN SAVE TO DATABASE
}



lib/actions.js

'use server';

export function yourFunction() {

}

Now in your client component

'use client';

you can use this function

So you can use server side function in the client side component or file
but that server side function has to be in the different file

---

useFormStatus -> 'react-dom'

const status = useFormStatus();

---------------------------------------------

### Link and img

<Link>
  <img src.. alt../>
  Click here
</Link>

