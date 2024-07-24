### Pure Component


React normally re-renders a component whenever its parent re-renders. As an optimization, you can create a component that React will not re-render when its parent re-renders so long as its new props and state are the same as the old props and state. 

Class components can opt into this behaviour by extending PureComponent. Whenever parent comp render, it renders child comp also unnecessarily, to counter this issue, we make pure component


```js
class Greeting extends PureComponent {
 render() {
   return <h1>Hello, {this.props.name}!</h1>;
 }
}
```

* Using functional components, you can imitate the behaviour by using Higher Order Component

### Higher Order Component
A higher-order component is a function that takes in a component and returns a new component.

```js
const withEnhancement = (BaseComponent) => {
 return function EnhancedComponent(props) {
   const [count, setCount] = useState(0);
   useEffect(() => {
     // Perform side effects here
   }, [count]);
   return (
     <BaseComponent {...props} enhancedProp="someValue" />
   );
 };
};
```

```js
const EnhancedComponent = withEnhancement(BaseComponent);

function App() {
 return (
   <div>
     <EnhancedComponent prop1="value1" prop2="value2" />
   </div>
 );
}
```

* A good use case style component. Wrap your components with style components


