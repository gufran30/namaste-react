import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header rendered");

  // if no dependency array => useEffect is called on every rendered (in this header component).
  // if dependency array empty => useEffect is called on initial render of this header component (just once).
  // if we put btnNameReact => it will only be called when btnNameReact (depencency) changes
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
