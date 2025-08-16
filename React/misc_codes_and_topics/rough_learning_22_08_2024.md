```
console.log(score);  // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score);  // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score);  // 0
setScore(score + 1); // setScore(0 + 1);
console.log(score);  // 0
```

```
You can fix this by passing an updater function when setting state.
Notice how replacing setScore(score + 1) with setScore(s => s + 1) fixes the “+3” button.
This lets you queue multiple state updates.
```

```js
setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);
```

```
React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all these setNumber() calls.
This might remind you of a waiter taking an order at the restaurant. A waiter doesn’t run to the kitchen at the mention of your first dish! Instead, they let you finish your order, let you make changes to it, and even take orders from other people at the table.

```

https://react.dev/learn/state-as-a-snapshot

https://react.dev/learn/queueing-a-series-of-state-updates


------

{[key]: value}

key can anyhting like

"category"

"name"

"sort_by"


const [sort, setSort] = useState({
  by: "default",
  order: "asc"
})

For following you have to use vite-plugin-svgr


import {ReactComponent as Sun} from "./Sun.svg"

<Sun/>


useTheme = function(themse) {
  return {
    setTheme
  }
}

const [theme, setTheme] = useTheme("dark")

useParams - to get the param in URL. Example /products/:id, you will get the id parameter
useSearchParams - to set and get query params

NavLink component will automatically add active class

Nested routing
Route
  route

<Outlet> in the parent route

const navigate = useNavigate()

const handleBack = () => {
  navigate(-1)
}

React strict mode will render the component twice in the development env


useEffect(() => {
  return () => {
    console.log("this function will be called when comp is unmount")
  }
}) // Subscribe/Unsubcribe

Mount - rerender - Unmount

{isLoading && <Loader/>}

----------------

import axios from "axios"

export default axios.create({
  baseURL: "..."

})
