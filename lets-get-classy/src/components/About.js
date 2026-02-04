import React from "react";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is About Page</p>

//       <UserClass
//       name={"Albert Einstein (class)"}
//       location={"Germany (class)"}
//       email={"em2@123 (class)"}
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component Mount")
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Page</h1>
        <p>This is About Page</p>

        <UserClass
          name={"Albert Einstein (class)"}
          location={"Germany (class)"}
          email={"em2@123 (class)"}
        />
      </div>
    );
  }
}

export default About;
