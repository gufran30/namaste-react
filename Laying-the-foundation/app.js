import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element - JS Object => HTMLElement(render)

// React Element
const heading = React.createElement("h1", { id: "heading1" }, "I am heading1");
console.log(heading);

// JSX - (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTMLElement(render)

// const jsxHeading = (
//   <h1 className="head" tabIndex={5}>
//     Heading 1 using JSX
//   </h1>
// );
// console.log(jsxHeading);

//  React Functional Component
// const HeadingComponent = () => {
//   return <h1 className="heading">Heading 1 from Functional Component</h1>;
// };

const hello = "Hello";

const Title = () => {
  return (
    <h1 id="title">
      <span>{hello}</span> World!
    </h1>
  );
};

// Component composition
const Description = () => {
  return (
    <div id="container">
      <Title />
      <h2>{10 + 20}</h2>
      <p id="desc">This is description</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Description />);
