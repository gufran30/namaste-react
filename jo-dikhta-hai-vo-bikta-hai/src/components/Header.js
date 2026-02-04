import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header rendered");

  // if no dependency array => useEffect is called on every rendered (in this header component).
  // if dependency array empty => useEffect is called on initial render of this header component (just once).
  // if we put btnNameReact => it will only be called when btnNameReact (depencency) changes
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header px-20 py-2 bg-stone-300 flex justify-between items-center">
      <div className="logo-container">
        <img className="logo w-25" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex gap-5 items-center">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
            <Link to="/grocery">Grocery</Link>
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
