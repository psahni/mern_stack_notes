* Below React will batch together the state updates, react does it for performance reasons



```
function increment() {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
}

```

```
function decrement() {
  setCount(count - 1)
}

```