### Render props

Render props is a React pattern that allows sharing code between components by passing a "function as a prop". This function, known as a render prop, takes certain arguments (usually state or props from the parent component) and returns React elements that describe what should be rendered. 

This pattern is particularly useful for reusing component logic in scenarios where higher-order components (HOCs) or hooks might not be ideal.

So you have a class component, with some state
Now you are using this class component at multiple places but want different behaviour on the UI with the same state

Then you can pass the custom function logic to this class component


---------------------------------------------------------------------------------------------------------------------

<DataFetcher
  url="https://jsonplaceholder.typicode.com/posts/1"
  render={({ data, loading, error }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data!</p>;
    return <p>Data: {data.title}</p>;
  }}
/>


---------------------------------------------------------------------------

Render props are essentially a technique for sharing code between React components using a prop whose value is a function. This function is called during the rendering process, allowing the component to determine what to render dynamically. The term "render prop" does not have to be literally named "render"; it can be named anything, such as children or component

---------------------------------------------------------------------------

#### Advantages of Render Props

* Reusability: Render props allow for code reuse without creating higher-order components (HOCs) or using inheritance.

* Separation of Concerns: They help separate logic from presentation, making components cleaner and more focused on their specific tasks2.

* Flexibility: You can easily modify what gets rendered based on different conditions without altering the underlying component logic45.

#### Drawbacks of Render Props
* Performance Issues: Using functions as props can lead to unnecessary re-renders if not managed correctly. 

* Memoization techniques like React.memo or useCallback can mitigate this issue13.

* Complexity: If functions passed as render props are too complex or lengthy, it can reduce code readability. Extracting them into separate functions or components may help improve clarity


---------------------------------------------------------------------------
