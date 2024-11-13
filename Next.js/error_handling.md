### Error Handling (Documentation)
Errors can be divided into two categories: expected errors and uncaught exceptions:

* Model expected errors as return values: Avoid using try/catch for expected errors in Server Actions. Use useFormState to manage these errors and return them to the client.

* Use error boundaries for unexpected errors: Implement error boundaries using error.tsx and global-error.tsx files to handle unexpected errors and provide a fallback UI.

https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-expected-errors-from-server-actions

Use the useFormState hook to manage the state of Server Actions, including handling errors. This approach avoids try/catch blocks for expected errors, which should be modeled as return values rather than thrown exceptions.

-------------------------------------------------------

** Using Error Boundaries
Next.js uses error boundaries to handle uncaught exceptions. Error boundaries catch errors in their child components and display a fallback UI instead of the component tree that crashed.
