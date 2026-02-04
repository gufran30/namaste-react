## Single Responsibility Principal (SRP)

- #### states that
  - a class, module, or function should have only one reason to change,
  - meaning it should have only one responsibility or purpose.
- #### By adhering to SRP,

  - developers create more modular, maintainable, and understandable code,
  - as changes are isolated, reducing the risk of unintended side effects in other parts of the system.

  - using SRP, your code become more
    - reusable
    - maintainable
    - testable

- #### This principle
  - is a core tenet of object-oriented design and is part of the broader **SOLID principles**.

## Custom Hooks

- #### what are hooks ?
  - Hooks are basically special JS Function given by React
  - for example, useState(), useEffect(), useParams() etc.
  - At the end, Hooks are just a utility function
  - **we can also make our own custom hooks.**
- #### Why hooks are used ?

  - allow developers to use state and other React features within functional components,
  - eliminating the need to write class components for managing state and lifecycle

- ### Custom hooks

  - Creating a custom hooks is not a mandatory thing, but its a very good thing, because it will make your code look more:
    - modular
    - readable
    - reusable, etc

### let's see how custom hooks can be usable :

- RestaurantMenu component : ther is two major responsibilty of this RestaurantMenu component

  - 1. Fetching the data
  - 2. Displaying the data onto the ui

  - So don't you think RestaurantMenu component should only be concerned about displaying the data.
  - it should not worry
    - where,how the data is coming from,
    - what is that api being called

## Creating Custom hooks Example

```js
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;
```

# Important Topic

### To optimize our app

- you can't develop large scale production ready frontend application without bundler.
- we break down our application into smaller bundle.
- This process is known as
  - Chunking
  - Code spliting,
  - Dynamic Bundling
  - Dynamic Importing
  - On demand loading
  - Lazy Loading
- this helps to reduce load on our application.
- all the code will not come at once.

### we add Grocery to show how we will do lazy loading when required.

- this is also aka On Demand Loading

- we use lazy() given by react.
- read this article [React Lazy](https://react.dev/reference/react/lazy)

```js
const Grocery = lazy(() => import("./components/Grocery"));

{
  path: "/grocery",
  element: (
    <Suspense fallback= {<h1>Loading Grocery Store...</h1>}>
      <Grocery />
    </Suspense>
  ),
},
```
