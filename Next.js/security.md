### DOMPurify

dangerouslySetInnerHTML={{__html: '..'}}

With vanilla JavaScript, you can use the innerHTML Web API. To set the inner HTML in React, you use the dangerouslySetInnerHTML property, which uses the innerHTML property under the hood. When you render text in React, it sanitizes it by default. It does not sanitize text rendered using dangerouslySetInnerHTML.

https://sentry.io/answers/using-dangerouslysetinnerhtml-in-next-js/


If the HTML string comes from user input or a third-party source, you need to sanitize the input. A popular sanitizer library for HTML is DOMPurify. The library also provides a demo of how `DOMPurify` works, where you can see how dirty HTML is cleaned by removing dangerous HTML like <script> tags.


DOMPurify requires a DOM tree to work. To use it in Next.js, you can use it in a Client Component. Note that Client Components pre-render static HTML on the server. To prevent this pre-rendering, dynamically import the component and set server-side rendering to false so that the import only occurs on the client.


### Allowed origins (advanced)
Since Server Actions can be invoked in a <form> element, this opens them up to CSRF attacks.

Behind the scenes, Server Actions use the POST method, and only this HTTP method is allowed to invoke them. This prevents most CSRF vulnerabilities in modern browsers, particularly with SameSite cookies being the default.

* As an additional protection, Server Actions in Next.js also compare the Origin header to the Host header (or X-Forwarded-Host). If these don't match, the request will be aborted. In other words, Server Actions can only be invoked on the same host as the page that hosts it.

For large applications that use reverse proxies or multi-layered backend architectures (where the server API differs from the production domain), it's recommended to use the configuration option `serverActions.allowedOrigins` option to specify a list of safe origins. The option accepts an array of strings.

next.config.js

module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
    },
  },
}

https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#allowed-origins-advanced