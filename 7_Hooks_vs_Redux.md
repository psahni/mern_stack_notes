### Hooks Vs Redux

* If your app is moderately complex and needs a substantial amount of "global" state management, then I'd just go with Redux. 

* Context is not really THAT much simpler (you'll probably still end up writing the same kind of reducers and actions, etc).

* The problem with Context is that it's not that smart about what to re-render, it will often just re-render the whole component tree - Redux does that a lot better, and in the end it's not really harder to use (especially not if you use the great Redux Toolkit, which means you're going to write a LOT less boilerplate).

### Links

https://dev.to/qbentil/react-hooks-vs-redux-51p7
https://www.frontendmag.com/tutorials/types-of-hooks-in-react/
