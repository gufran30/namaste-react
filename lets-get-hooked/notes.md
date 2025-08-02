### Why we do use React ?

- we can achieve same result via pure html, css, js but why React ?
- React makes development easy
- React optimizes things in a better way

### File Structure

- best practice to break our app in multiple files.
- **src** folder have all these files(source code)
- to make more readable we make multiple files.
- in React, we usually make components folder to store files(source)

- put **Header**, **Body**, **RestaurantCard**, components in src/components file

```js
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurants Container
 *    - Restaurant cards
 *      - Res. Image
 *      - Res. Name, cuisine, ratings etc
 * Footer
 *  - Copyrights
 *  - Address
 *  - Contacts
 */
```

### Two Ways to Export/Import

1. Default Export/Import

   - export default Component;
   - import Component from "path";

2. Named Export/Import

   - export const Component;
   - import {Component} from "path";

- **Example:** for default export, import using without {} but for normal export you shpuld use {}

```js
import Header from "./components/Header";

import { LOGO_URL } from "../utils/constants";
```

## React Hooks ?

- When we say React is fast
  - means React is fast / efficient in DOM Manipulationn
  - react help to link/sync data layer with UI
  - means when **data changes <==> UI changes**
- **React Hooks**:
  - hooks are super powerful variables
  - normal js function is given by React
  - with some extra functionalities.
  - written in utility, when we do npm react, in react these things come with.
- **Hooks**:

  - **useState()** [80% you will be writting this]
  - **useEffect()** [20% you will be writting this]

- #### Why React is FAST ?

  - React is fast because it **do DOM Manipulation Fast Efficiently and rerender UI alot.**
  - React maintain it's own DOM called as **Virtual DOM**

### **useState() :**

- useState is used to create **local State Variable**.
- because it's maintain the state variable inside that component where it declared.
- this state variable is recognized by React, so when this variable change it will reflect in UI
- react help to link/sync data layer with UI
  means when data changes <==> UI changes
- **whenever a state variable changes/updated then react will rerender the component**
- ### creating useState:
  ```js
  const [change, setChange] = useState(<value>);
  ```

## **Reconciliation Algorithm** (React Fiber)

- ### **Reconciliation**:
  - the process by which React efficiently updates the user interface (UI) in response to changes in a component's state or props.
  - Instead of re-rendering the entire UI.
- ### core steps involved in React reconciliation are:

  - **Virtual DOM Comparison:**
  - **Diffing Algorithm:**

- ## Virtual DOM Comparison:

  - When a component's state or props change, - React creates a new Virtual DOM tree,
  - which is a lightweight, in-memory representation of the UI.
  - This new Virtual DOM is then compared with the previous Virtual DOM snapshot.

- ## Diffing Algorithm:

  - React employs a diffing algorithm to identify the differences between the old and new Virtual DOM trees.
  - This algorithm efficiently determines which elements have been added, removed, or modified.

  - **Different Element Types:**
    - If the element type changes (e.g. a `<div>` becomes a `<p>`),
    - React discards the old element and its children and creates a new one from scratch.
  - **Same Element Types:**
    - If elements are of the same type,
    - React only updates the attributes or content that have changed,
    - rather than recreating the entire element.
  - **Keys in Lists:**
    - For lists of elements, React uses a special key attribute to identify individual list items.
    - This helps React efficiently track changes within lists, ensuring that only the necessary items are added, removed, or reordered

- React maintain it's own DOM called as **Virtual DOM**

- ## Virtual DOM

  - represantation of actual DOM not an actual DOM
  - Actual DOM is nothing but **js object**

  ```js
  <div>
    <div>
      <div></div>
    </div>
  </div>;

  or;

  console.log(<Component />);
  ```

- ### What is Diff Algorithm
  - find out difference b/w **Actual DOM** and **Virtual DOM**
  - find out the differnce and then update or rerender the component
    > **for expample:** we have 12 Restaurant Card but when we filter restaurant on the basis of Rest. Rating => now we got 3 rest. cards only

### NOTE

- never ever put your hardcode data in your component files
  - like here don't put **restaurantData** directly in **Body** component
  - keep this kind of code in separate file.
  - some people make **utils** or **common** folder and put this kind of file
- one way to export is **default export**
  -for default export, import using without {} but for normal export you shpuld use {}
  > import Header from "./components/Header";
  > import { LOGO_URL } from "../utils/constants";
