### React Hooks

#### When to Use Hooks

* Hooks are best when you need to share logic like fetching data, handling events, or managing state without adding extra nesting to the component tree.
Avoiding Wrapper Hell:

* Hooks simplify the component tree, avoiding the “wrapper hell” that can occur with nested HOCs, making the code easier to read and debug.
Composing Multiple Pieces of Logic:

* Hooks are highly composable and can be combined directly within a component, enabling you to build complex functionality by stacking hooks like useEffect, useMemo, useReducer, or custom hooks.

* For any functional component, hooks are the primary method of handling state, side effects, and lifecycle events, and they can keep the code lightweight and more readable.

- Allows functional components to use React features without using class components
(useState, useEffect)

#### useState

- useState [name, Setname] - State variable

- `const [name, setName] = useState(“Prashant”)`

- When the state variable is updated, it triggers a re-render of the DOM


### useEffect

```
useEffect(() => {}) 		          // Runs after every re-render
useEffect(() => {}, []) 		      // Runs only on mount (only once)
useEffect(() => {},  [value])	    // Runs on mount + when value changes
```

* In the following code, resize event is registered when component is mounted

```
  useEffect(() => {
    window.AddEventListener("resize", handleResize)
  }, [])
```

### useContext

* React’s Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

* While powerful, it’s best to avoid using a single global context for everything.

* Divide your context based on different aspects of your application. This ensures better separation of concerns and improves performance.

```js
const UserContext = React.createContext(); // 1
```

```js
<UserContext.Provider value={currentUser}> 
  <UserProfile />
</UserContext.Provider>            // 2
```

```js
const UserProfile = () => {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
};          // 3

```

### useCallback
`Refer:- practice_react_project_2024\src\hooks\useCallbackExample.jsx`

When you have two components, with diff state and a diff state update functions
then one component renders, it may lead to render of another component.
To prevent this you can use useCallback hook. Wrap the state update function in useCallback
and the target component using React.memo. 

useCallback(() => {
  ...
}, [state_variable])

When state_variable will change, only then the component will re render. Doesnt matter if parent
component re-renders

### useRef
is a React Hook that lets you reference a value that’s not needed for rendering.

### React.memo

`React.memo` is a higher-order component (HOC) in React that can be used to memoize, or cache, the output of a functional component. This can help improve performance in certain situations by reducing unnecessary re-renders.

Here's how React.memo works:

`Memoization`: When a functional component wrapped with React.memo is rendered, React will memoize (or cache) the result of the component's render function. This means that on subsequent renders, if the props of the component have not changed, React will skip the re-rendering of the component and instead use the cached result.

`Comparison`: React.memo performs a shallow comparison of the component's props to determine if the component should be re-rendered. If the props have not changed, the memoized result will be used instead of re-rendering the component.


```
const MyComponent = React.memo(({ message }) => {
  console.log('Rendering MyComponent');
  return <div>{message}</div>;
});

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <MyComponent message="Hello, world!" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
```

In this example, the MyComponent is wrapped with React.memo. When the App component re-renders due to the count state change, MyComponent will only re-render if its message prop has changed. If the message prop remains the same, MyComponent will use the memoized result, which can improve performance, especially for expensive render operations.




