### how to start project

- it's a **industry standard** to make scripts for start, build your project

  ```js
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  }

  you just have to type:
  npm start - to start your project(server)
  npm run build - to build your project
  ```

## What is JSX ?

- JSX is not a **core react** part
- JSX makes react code readable.
- JSX is convention where we merge **html** & **Js**
- JSX is not **html in js**
- but it looks like **HTML** or **XML** syntax
- JSX is not understand by JS Engine
  - because JSX is not pure javascript
  - JS Engine only understand ECMAScript or ES6
  - So, **How JSX is compiled ?**
    - JSX code is transpiled before it reaches the JS Engine
    - **transpiled** done by **PARCEL** thorugh package called as **BABEL**
- JSX converted into **React Element** => **JS Object** => **HTML** (render)
- JSX is a react element
- you can inject any js code into JSX using curly-brackets

  ```js
  const Description = () => {
    return (
      <div>
        <Title />
        <h2>{10 + 20}</h2>  <------------------
        <p id="desc">This is description</p>
      </div>
    );
  };
  ```

## Babel :

- is a Package.
- when you download Parcel, you got babel with it.
- Babel is JS compiler (also known as transpiler)
- Babel is not created by facebook.
- Babel compiles JSX into React.createElement => react Element => JS

## React Component

1. Class Based Compnent - OLD
2. **Functional Based Compnent** - NEW

- ### Functional Component
  - just a normal JS Function
  - **A Function which returns JSX is a Functional component**
  - should start with Capital letter

### Component composition

```js
const Description = () => {
  return (
    <div>
      <Title />
      <p id="desc">This is description</p>
    </div>
  );
};
```

- Component composition in React is a fundamental concept that involves building complex user interfaces by **combining smaller, independent, and reusable components.**
- key aspects :
  - Modularity and Reusability:
  - Hierarchical Structure:
  - Flexibility and Maintainability:
  - Data Flow via Props:
  - **Techniques**: Common techniques include:
    - **Parent-Child Composition:**
      - A parent component renders one or more child components and passes data to them through props.
    - **Render Props:**
      - A component receives a function as a prop, which it then calls to render a specific part of its output, allowing for flexible rendering logic.
    - **Higher-Order Components (HOCs):**
      - A function that takes a component and returns a new component with enhanced functionality.
- you can use react element into react elements as well as functional compnent and vice-versa

## NOTES

- it's a good practice to add some text (like "Not Rendered") in root element

  ```js
  <body>
    <div id="root">
      **<h1>Not Rendered</h1>**
    </div>

    <script type="module" src="app.js"></script>
  </body>
  ```
