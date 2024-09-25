### React Saga And Thunk

* For applications that require handling a lot of asynchronous operations, Redux-saga is a recommended middleware in the React best architecture practices.
Redux-saga simplifies side effects (like data fetching and impure things like accessing the browser cache) in your React application.

* It helps in managing complex asynchronous operations more easily compared to Redux thunks.


### Thunk

- It’s a middleware. In general it’s a piece of code, that does some delay work
- You can call api and save data into store. 
- You can write your async code.
- You  can apply complex logic + async task in redux
- Library => `redux-thunk`

```js
  import { legacy_createStore as createStore, applyMiddleware } from “redux”;

  const store = createStore(reducer, applyMiddleware(thunk)

  dispatch(fetchTodo())

```

```js
  export const fetchTodo = () => async (dispatch) => {
    const response = await fetch("..");
    const task = await response.json();
    dispatch(addTask(task.title));
  }
```

### Links
https://www.udemy.com/course/the-ultimate-redux-course-state-management-library/learn/lecture/34755874
