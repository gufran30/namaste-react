import "./reactDependencies/react.js";
import "./reactDependencies/reactDOM.js";

const subHeading = React.createElement(
  "div",
  { id: "container" },
  React.createElement("h1", { id: "title" }, "Title one")
);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(typeof subHeading);
console.log(subHeading.props.children.props.children);
root.render(subHeading);
