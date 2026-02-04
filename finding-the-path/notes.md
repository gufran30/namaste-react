## useEffect()

```js
useEffect(() => {
  console.log("useEffect called");
}, []);
```

- dependency array is not necessary, but callback is.
- if no dependency array => **useEffect is called on every render**
- empty dependency array ( i.e [] ) => **useEffect called only on inital render** (just once)
- if dependency array is [btnNameReact] => **called everytime when btnNameReact is changes**

## React Router

```js
npm i react-router
```

- **createBrowserRouter** help to configure routing(router)

```js
const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/about", element: <About /> },
]);
```

- **RouterProvider** : will provide routing configuration.
- earlier we render directly

```js
root.render(<AppLayout />);
```

- Now we will do :

```js
root.render(<RouterProvider router={appRouter} />);
```

- react-router gives us access to an important hook (at the end it is Function) i.e useRouteError

```js
import { useRouteError } from "react-router";
```

- ### useRouteError

  - will give us all the error regarding path in the form of objects.

  ```js
  const err = useRouteError();
  ```

### React-Router code for now

<details>
  <summary> Click to see</summary>

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
```

</details>

### Outlet

- is a component provided by **react-router**
- will be replaced by the router children according to their path

<details>
  <summary> For Example:</summary>

```js
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

</details>

## There are 2 types of Routing in Web Apps:

1. Client Side Routing
2. Server Side Routing

### useParams() Hook

- used for handling routing
- It allows you to access and extract dynamic parameters from the URL in your functional React components

```js
  import { useParams } from "react-router-dom";
  const UserProfile = () => {
    const { userId } = useParams(); // Destructure to get the userId
    // ... use userId to fetch data or render content
  };
```

### Notes :

- how to identify hook ?
- anything starts with use... , for example, useState, useEffect, useRouteError

- never ever use an anchor tag for link (routing) cause it will make page gets reload. Instead use **Link** component import from **react-router**

  - this makes React a Single Page Application(SPA)
