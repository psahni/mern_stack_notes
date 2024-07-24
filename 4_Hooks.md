### React Hooks

- Allows functional components to use React features without using class components
(useState, useEffect)

#### useState

- useState [name, Setname] - State variable

- `const [name, setName] = useState(“Prashant”)`

- When the state variable is updated, it triggers a re-render of the DOM


### useEffect

```
useEffect(() => {}) 		// Runs after every re-render
useEffect(() => {}, []) 		// Runs only on mount (only once)
useEffect(() => {},  [value])	// Runs on mount + when value changes
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
const UserContext = React.createContext();
```

```js
<UserContext.Provider value={currentUser}>
  <UserProfile />
</UserContext.Provider>

```

```js
const UserProfile = () => {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
};

```

### useCallback

* Cache data between route changes

### useRef
is a React Hook that lets you reference a value that’s not needed for rendering.