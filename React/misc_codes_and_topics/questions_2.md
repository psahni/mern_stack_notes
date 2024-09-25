### React Questions
🌲 Why choose React? What sets it apart from other libraries and frameworks?

Ans
  * Performance: React's virtual DOM optimizes rendering, making it fast for complex UIs.
  * Flexibility: Can be used for web and mobile (React Native) development.
  * Big ecosystem
  * JSX advantages - Allow developers to write HTML like code within Javascript
  * React maintains backward compatibility, meaning updates rarely require massive rewrites. This 
    stability is crucial for long-term projects.


  The reason for calling React a library and not a framework is because of the independence to make the above choices on developing the app in comparison with other frameworks that have inbuilt tools bundled together. 
  
  Therefore, we have a variety of different tools to develop any kind of apps, from small scale to large scale using React. Those tools formulate multiple approaches to develop an app depending on the functional and non-functional requirements. So we can agree that React is a bitter-sweet symphony for beginners and a happy rollercoaster for experienced developers.

  `https://javascript.plainenglish.io/react-vs-other-frameworks-a-comparison-in-3-aspects-756ab84b8d95`

--------------------------------------------------------------------------------------------------------

🌲 Understanding the Virtual DOM and its benefits in React

The Virtual DOM is a lightweight copy of the actual DOM (Document Object Model) kept in memory. It's a JavaScript object that represents the structure of your UI. When changes occur in a React application, they're first made to this virtual representation rather than directly to the browser's DOM.

How it works:

React creates a virtual DOM tree when your app initializes.
When state changes occur, a new virtual DOM tree is created.
React compares the new virtual tree with the previous one (a process called "diffing").
Only the differences found are updated in the real DOM.


Advantages of the Virtual DOM:

Performance Optimization:

By minimizing direct manipulation of the real DOM, which is computationally expensive, React reduces the performance overhead.
Only necessary updates are applied to the real DOM, reducing the workload on the browser.


Efficient Update Process:

The diffing algorithm efficiently determines the minimal number of operations needed to update the real DOM.


Batch Updates:
React can batch multiple changes and update the real DOM in a single pass, further improving performance.


--------------------------------------------------------------------------------------------------------

🌲 Exploring JSX and its advantages in React development

--------------------------------------------------------------------------------------------------------


🌲 The concept of Reconciliation and its significance in React rendering

--------------------------------------------------------------------------------------------------------


🌲 Understanding the differences between State and Props in React

--------------------------------------------------------------------------------------------------------


🌲 Dive into Hooks-related questions, such as useState and useEffect

useEffect allows you to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM.

```js
useEffect(() => {
  const subscription = someAPI.subscribe();
  return () => {
    subscription.unsubscribe();
  };
}, [someAPI]);
```

Multiple effects: You can use multiple useEffect hooks in a single component.

--------------------------------------------------------------------------------------------------


🌲 Exploring the differences between useMemo and useCallback in React 

--------------------------------------------------------------------------------------------------

🌲 Understanding Code Splitting and its role in optimizing React applications

--------------------------------------------------------------------------------------------------


🌲 The importance of Accessibility considerations in React development 

--------------------------------------------------------------------------------------------------


🌲 Unidirectional behavior in React and its impact on application architecture

--------------------------------------------------------------------------------------------------


🌲 Comparing Pure Components and Higher Order Components (HOC) in React

--------------------------------------------------------------------------------------------------

🌲 Addressing security concerns such as CSRF and XSRF in React applications

--------------------------------------------------------------------------------------------------

🌲 The various use cases of useEffect in different scenarios

--------------------------------------------------------------------------------------------------

🌲 Deepening your understanding of React optimization techniques

* Lazy loading images

```js
<img src="example.jpg" loading="lazy" alt="..." />
<iframe src="example.html" loading="lazy"></iframe>
```


--------------------------------------------------------------------------------------------------

🌲 Exploring Lazy Loading and its benefits in React applications

--------------------------------------------------------------------------------------------------

🌲 Comparing Class-based and Functional-based components in React


Have access to various lifecycle methods like componentDidMount(), componentDidUpdate(), and componentWillUnmount()
These methods allow for precise control over the component's lifecycle

With hooks like useEffect(), functional components can now mimic the behavior of lifecycle methods
useEffect() can be used to perform side effects, such as data fetching, subscriptions, or manually changing the DOM

  Class Components:
    Rely on inheritance and higher-order components (HOCs) for reusability
    Composition can be achieved through render props

    Require more overhead due to the use of this and the class syntax
    Lifecycle methods and state management add complexity

  Functional Components:
    Promote composition over inheritance
    Hooks enable a more modular and composable approach to reusing functionality

    With hooks, they can achieve the same functionality as class components


--------------------------------------------------------------------------------------------------

🌲 Understanding SEO considerations and best practices in React applications

--------------------------------------------------------------------------------------------------

🌲 React Router and its role in handling client-side routing in React applications

-------------------------------------------------------------------------------------------------

🌲 Context API and how it facilitates state management in React without using Redux

--------------------------------------------------------------------------------------------------

🌲 Server-Side Rendering (SSR) and its benefits for performance and SEO in React applications

--------------------------------------------------------------------------------------------------

🌲 Error Handling and Error Boundaries in React to gracefully handle runtime errors

--------------------------------------------------------------------------------------------------

🌲 Testing React components using tools like Jest and React Testing Library

--------------------------------------------------------------------------------------------------

🌲 Form handling and validation techniques in React applications

--------------------------------------------------------------------------------------------------

🌲 Performance optimizations using memoization and shouldComponentUpdate

--------------------------------------------------------------------------------------------------

🌲 Handling asynchronous operations with async/await and Promises in React

--------------------------------------------------------------------------------------------------

🌲 Using React with popular UI libraries or frameworks like Material-UI or Bootstrap

--------------------------------------------------------------------------------------------------

🌲 React patterns and best practices for maintainable and scalable code

--------------------------------------------------------------------------------------------------

🌲 What are the major new features introduced in React 19?

--------------------------------------------------------------------------------------------------

🌲 What is concurrent rendering in React 18, and how does it improve the performance of applications?

--------------------------------------------------------------------------------------------------

🌲 Explain the concept of automatic batching in React 18.

--------------------------------------------------------------------------------------------------

🌲 What is the Transition API in React 18, and how is it used?

--------------------------------------------------------------------------------------------------

🌲 How has Suspense been improved in React 18?


