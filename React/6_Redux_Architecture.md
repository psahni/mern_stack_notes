### Redux Architecture
* Store is a database for the front end.

### Advantages

- Centralised state
- Data flow transparent
- Easily debug apps
- Preserve page state
- Immutability
- Don’t mutate your data in Redux

```js
const newObj = Object.assign({}, obj, {name: “Prashant”}) // OR {...obj}
```

### What is a Reducer?
Reducer takes the current state as arg, and returns the updated state.
Action are tasks, which helps reducer to update the state.


### Steps
📌4 steps to implement Redux:

- Designing the store - How store object looks like
- List actions - that can perform in the application.
- Create Reducer - function to define How to perform that action

### Implementation

1. Define the initial state
2. Define your actions
3. For example in TODO application, you can make 

`ADD_TASK, REMOVE_TASK, TASK_COMPLETED`

```js
{ type: “ADD_TASK” , payload: {task: “This is a new task”}}
```

4. Create reducer.js
5. Create reducer function
6. Create store.js

```js
  import reducer
	store = createStore(reducer)
	export store
```

```js
  store.dispatch({type: “ADD_TASK”, payload: {..}})
```

7. Create actionTypes.js to create the actions constants
8. Create actions.js to define actions functions

```js
import { legacy_createStore as createStore } from "redux";
import reducer from "./tasks";
const store = createStore(reducer); 
export default store;
```

```js
const unsubscribe = store.subscribe(() => console.log(“updated”, store.getState()))
```

### Folder structure

* You can create folder for each type of entity, where you have 
action.js, reducer.js, actionTypes.js

* Or you can create one file for each entity and have everything in it (DUCK module)



### Redux Toolkit

* Officially recommended by React doc

* Automatically enables devTools

* Redux-toolkit is a very popular and powerful library for simplifying the redux code and it is officially recommended by Redux.

* Redux-toolkit has a lot of methods configure store, createAction, createReducer and createSlice.
configureStore method is used to create a redux store and it will automatically configure redux-devTools with it. So we don’t need to use devtoolsEnhancer function.

* Then we see createAction method, which is used to create an action object with payload property

```js
import { createAction } from '@reduxjs/toolkit';
 
const addTask = createAction('ADD_TASK');
console.log(addTask({ task: 'Add new task!' }));
 
// Output in console
{ type: 'ADD_TASK', payload: { task: 'Add new task!' } }

```
- Then we see createReducer function, which is used to create the reducer function without writing switch case or If..else.

- And at the end, we have createSlice function, which is used to create actions and reducers in one function. This is very useful for making our code clean and maintainable.

```js
import { createSlice } from "@reduxjs/toolkit";
let id = 0;

const taskSlice = createSlice({
   name: "tasks",
   initialState: [],
   reducers: {
       // action: function
       addTask: (state, action) => {
           state.push({
               id: ++id,
               task: action.payload.task,
               completed: false,
           });
       },
       removeTask: (state, action) => {
           const index = state.findIndex(
               (task) => task.id === action.payload.id
           );
           state.splice(index, 1);
       },
       completedTask: (state, action) => {
           const index = state.findIndex(
               (task) => task.id === action.payload.id
           );
           state[index].completed = true;
       },
   },
});

export const { addTask, removeTask, completedTask } = taskSlice.actions;
export default taskSlice.reducer;

```

* If we are using redux-toolkit, then we can combine reducers like an object.


```js

import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import taskReducer from "./tasks";
 
const store = configureStore({
   reducer: {
       tasks: taskReducer,
       employees: employeeReducer,
   },
});
 
export default store;

```

### Configure Store React-Redux Way
```js
  <Provider store={store}>
      <App />
  </Provider>
```

### Use store in functional components

* useSelector
* useDispatch

### Middleware

- Log an action dispatch
- Middleware is between action and reducer

* In this section, we see the important concept of Redux which is middleware

#### Purpose of Middleware
- Middleware is a function that runs after our action gets dispatched and before it reaches the reducer.
- Middleware is sometimes so useful if we want to do something after action gets dispatched like
- Logging the actions
- Showing the errors
- Calling an API
- If we are using the redux toolkit for our redux code then by default we get some middleware in our applications.

* For creating middleware, we write this code in a new file.

```js
const log = (store) => (next) => (action) => {
   console.log(action);
   next(action); // This will pass action to next middleware or reducer
};
 
export default log;
```

* After we create middleware, we have to add that middleware in the configureStore function.

```js
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import taskReducer from "./tasks";
import log from "../middleware/log";
 
const store = configureStore({
   reducer: {
       tasks: taskReducer,
       employees: employeeReducer,
   },
   middleware: (getDefaultMiddleware) => [
       ...getDefaultMiddleware(),
       log, // Order of this middleware matters
   ],
});
 
export default store;

```