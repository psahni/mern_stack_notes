### Code Splitting 

Code Splitting is the practice of breaking down your application code into smaller chunks (or bundles) which can then be loaded on demand or in parallel. Instead of loading the entire app before users can use it, code splitting allows you to split your code into small units which you can then load as needed.


### Advantages

#### Improved Initial Load Time:

Reduces the size of the initial bundle, allowing the app to load faster.
Users only download the code necessary for the current page or functionality.


#### Better Performance:

Smaller bundles lead to faster parsing and execution times.
Reduces the amount of JavaScript that needs to be processed on initial load.


#### Efficient Resource Utilization:

Loads resources only when they're needed, saving bandwidth and improving performance on low-end devices.

### Implementation

#### 1) Lazy and Suspense

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  );
}

```

#### 2) Route-based Code Splitting:
Commonly used with React Router to load components for different routes on demand.

This is more imp

https://github.com/monsterlessonsacademy/monsterlessonsacademy/blob/238-lazy-loading-react/src/App.js


From above example, it is clear that by using React.lazy and Suspense you can do component level splitting and route based splitting.


#### 3) Component-based Splitting:
Loading components conditionally based on certain conditions or user interactions.

Basic Concept:
Instead of loading all components upfront, you load components dynamically as they're required.

Identify Splittable Components:
Look for large or infrequently used components that are good candidates for splitting.


#### Common Use Cases:

- Modal Components:
  Load modal content only when the modal is opened.
- Tab Components:
  Load tab content as tabs are selected.
- Complex Form Elements:
  Load advanced form components when needed.
- Data Visualization:
  Load heavy charting libraries on demand.
- Admin Panels:
  Load less frequently used admin features separately.

#### Library Splitting:
Separating large third-party libraries into separate chunks.

Tools and Support:

* Webpack: Most common tool for implementing code splitting in React apps
* Create React App: Supports code splitting out of the box
* Next.js: Provides automatic code splitting for pages
