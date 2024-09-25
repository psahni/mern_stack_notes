### Top level scope

In browsers, the top-level scope is the global scope. That means that in browsers if you're in the global scope var something will define a global variable. In Node.JS this is different. The top-level scope is not the global scope; var something inside a Node.JS module will be local to that module.

Each JS file is treated as a module. Node automatically wraps the code of a JS file in a self IIFE with `exports, require, module, __filename, __dirname` as parameters to the function.



```js
 var context = (function (exports, require, module, __filename, __dirname) {
       console.log(this) //This is my code
  });
```

If you run the below code, prints true which means this refers to exports in node.js. Best explained in this answer.

`console.log(this === exports);`

(function(){
  console.log(this);
}());

prints the global object and in use strict mode prints undefined

In browser the function is not wrapped by IIFE wrapper function context as done in Node.JS, it's directly executed on window object. Hence the calling context varies for Node.JS and Browser


Link:-
https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs