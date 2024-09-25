### DevTools

- Install extension in browser and install redux dev extensions library

```js
import { devToolsEnhancer } from "redux-devtools-extension";
const store = createStore(reducer, devToolsEnhancer({ trace: true }));
```

🚀How to configure redux-devTools

Install the library with npm i redux-devtools-extension and import devToolsEnhancer from this library in configureStore file.

```js
import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./tasks";
const store = createStore(reducer, devToolsEnhancer({ trace: true }));
export default store;

```

