import React, { useContext, useEffect } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import img1 from "./imgs/logo.png";
import axios from "axios";
import { useHistory } from "react-router";

import "./css/welcomestyles.css";
import { userContext } from "../../context/Globalcontext";
function Navbar() {
  // const [loading, setloading] = useState(false);

  const { loggedIn, getLoggedIn } = useContext(userContext);

  useEffect(() => {
    async function loggedInn() {
      await getLoggedIn();
    }
    loggedInn(); //check in later for subscribe and unsubscribe methods in useEffect !important
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();
  // const { getLoggedIn } = useContext(userContext);
  const getLoggedOut = async () => {
    // setloading(true);
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    history.push("/login");

    // setloading(false);
  };

  return (
    <div className="header">
      <Link to="/welcome">
        <img className="logo" src={img1} alt="logo" />
      </Link>
      <nav>
        <ul className="nav_links">
          <li className="listyle">
            <Link to="/welcome" className="listyleLink">
              Explore
            </Link>
          </li>
          {loggedIn === true && (
            <>
              {" "}
              <li className="listyle">
                <Link to="/welcome" className="listyleLink">
                  Become a seller
                </Link>
              </li>
            </>
          )}

          <li className="listyle">
            <Link to="/welcome" className="listyleLink">
              About
            </Link>
          </li>
        </ul>
      </nav>
      {/* <Link to="/login">
        <button className="LogInBtn">Log In</button>
      </Link> */}
      {!loggedIn ? (
        <>
          <Link to="/login">
            <button className="LogInBtn">Log In</button>
          </Link>
        </>
      ) : (
        <>
          <button className="LogInBtn" onClick={getLoggedOut}>
            Log Out
          </button>{" "}
        </>
      )}
      {/* {loggedIn === undefined && (
        <>
          <Link to="/login">
            <button className="LogInBtn">Log In</button>
          </Link>
        </>
      )}
      {loggedIn === true && (
        <button className="LogInBtn" onClick={getLoggedOut}>
          Log Out
        </button>
      )} */}
      {/* <Link to="/login">
        <button className="LogInBtn">Log In</button>
      </Link>
      <button className="LogInBtn" onClick={getLoggedOut}>
        Log Out
      </button> */}
    </div>
  );
}

export default Navbar;
