import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // state variables
    this.state = {
      count: 0,
      count2: 0,
    };

    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child Component Mount")

    // API calls
  }

  render() {
    const { name, location, email } = this.props;
    const { count, count2 } = this.state;

    console.log("Child render");


    return (
      <div className="userInfo-container">
        <div>
          <h1>Count: {count}</h1>
          <h1>Count2: {count2}</h1>
          <button
            onClick={() => {
              // NEVER UPDATE STATE VARIABLE DIRECTLY
              this.setState({
                count: this.state.count + 1,
                count2: this.state.count + 1,
              });
            }}
          >
            Increase Count
          </button>
        </div>
        <div>
          <h3>name: {name}</h3>
          <h3>location: {location}</h3>
          <h3>email: {email}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
