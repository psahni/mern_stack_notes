
### Why Frameworks?
Frameworks provide things like routing, data fetching, and server-side rendering out of the box, which is something you need to set in react code yourself


### React Basic Philosophy
* Component based architecture

* Small reusable components, easy to maintain, test and scale

* ‘Separation of concerns’

* Each comp should do specific task

* Stateful components, Stateless components

### Stateful components: 
These components, also known as ‘Container components’, maintain a state that stores the information of the components. These are usually the parent components and provide data to the child components through props.

### Stateless components
Also referred to as ‘Presentational components’, these components are primarily responsible for the UI and do not manage or store any state. They receive data from the stateful components through props and render it to the DOM.

* Unidirectional Flow
* Keep business logic and UI logic separate

```
The react architectures brilliance lies in this balance of stateful and stateless components, with stateful components managing the ‘how things work’, and stateless components taking care of ‘how things look

```


### Virtual DOM
* A critical part of the react architecture is the Virtual DOM. It’s an abstraction of the actual DOM and provides React with its super-fast rendering capabilities. When a component’s state changes, React creates a new Virtual DOM and compares it with the old one. It then updates only the parts of the real DOM that changed in the Virtual DOM, rather than updating the whole DOM, thus increasing performance.

* Virtual DOM reduces unnecessary updates and re-renders, improving application performance.

* The diffing algorithm compares the new Virtual DOM with the old one to apply only the necessary updates, further enhancing performance.

### Implementation

Identify the components
Break them into hierarchy
Identify the data flow between components
Data is flowed from parent to child
You can use callback passed to child components, to update the state in parent




