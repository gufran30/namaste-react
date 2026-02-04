import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading1" }, "I'm heading 1"),
  React.createElement("h2", { id: "heading2" }, "I'm heading 2"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
