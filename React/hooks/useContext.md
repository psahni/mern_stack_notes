
```
// UserContext.js
import React from 'react';

const UserContext = React.createContext();

export default UserContext;
```

Now, in the parent component, we'll use the UserContext.Provider to wrap the child components and pass down the data:


```
// ParentComponent.js
import React from 'react';
import UserContext from './UserContext';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

function ParentComponent() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  return (
    <UserContext.Provider value={user}>
      <ChildComponentA />
      <ChildComponentB />
    </UserContext.Provider>
  );
}

export default ParentComponent;
```

```
// ChildComponentA.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

function ChildComponentA() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Child Component A</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ChildComponentA;
```

```
// ChildComponentB.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

function ChildComponentB() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Child Component B</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ChildComponentB;
```

In this example, both ChildComponentA and ChildComponentB can access the user object provided by the ParentComponent through the UserContext. This allows for easy sharing of data between components without having to pass props down through multiple levels of the component tree.
The useContext hook provides a way to access the context value from any component in the component tree, making it a powerful tool for managing state and sharing data in React applications.
