### DOMPurify

dangerouslySetInnerHTML={{__html: '..'}}

With vanilla JavaScript, you can use the innerHTML Web API. To set the inner HTML in React, you use the dangerouslySetInnerHTML property, which uses the innerHTML property under the hood. When you render text in React, it sanitizes it by default. It does not sanitize text rendered using dangerouslySetInnerHTML.

https://sentry.io/answers/using-dangerouslysetinnerhtml-in-next-js/


If the HTML string comes from user input or a third-party source, you need to sanitize the input. A popular sanitizer library for HTML is DOMPurify. The library also provides a demo of how `DOMPurify` works, where you can see how dirty HTML is cleaned by removing dangerous HTML like <script> tags.


DOMPurify requires a DOM tree to work. To use it in Next.js, you can use it in a Client Component. Note that Client Components pre-render static HTML on the server. To prevent this pre-rendering, dynamically import the component and set server-side rendering to false so that the import only occurs on the client.