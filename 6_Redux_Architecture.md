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

