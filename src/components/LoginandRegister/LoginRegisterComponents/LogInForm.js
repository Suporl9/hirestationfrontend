import axios from "axios";
import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { userContext } from "../../context/Globalcontext";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setloading] = useState(false);
  // const history = useHistory();
  const emailref = useRef(null);
  // const { getLoggedIn } = useContext(userContext);
  // const submithandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const submitfields = {
  //       email, //again these must be exact of the names used in the api
  //       password,
  //     };
  //     // setloading(true);
  //     await axios.post(
  //       "http://localhost:5000/auth/login",
  //       submitfields
  //       // , {
  //       //   withCredentials: true, //geting the token from the server(check in application tab in inspect mode!!)
  //       // }
  //     );
  //     await getLoggedIn();
  //     history.push("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // setloading(false);
  // };
  useEffect(() => {
    emailref.current.focus();
  }, []);
  return (
    <>
      <div className="split-screen">
        <div className="right">
          <form>
            <section className="copy">
              <h2 className="h2class">Log In</h2>
              <div className="login-container">
                <p>
                  Donot have an account?
                  <Link to="/signup" className="LinkClass">
                    <strong>Sign Up.</strong>
                  </Link>
                </p>
              </div>
            </section>

            <div className="input-container email">
              <label>Email</label>
              <input
                className="email"
                name="email"
                type="text"
                ref={emailref}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="input-container password">
              <label>Password</label>
              <input
                className="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className="input-container cta">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark">Remember me.</span>
              </label>
            </div>
            <button className="signup-btn" type="submit">
              Log In
            </button>
            <section className="copy legal">
              <p>
                <span className="small">
                  By Continuing, you agree to accept our
                  <br />
                  <Link to="/loginRegister" className="LinkClass">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/loginRegister" className="LinkClass">
                    Terms of Services
                  </Link>
                </span>
              </p>
            </section>
          </form>
        </div>
        <div className="left">
          <section className="copy">
            <h1 className="explorecrec">Explore your creativity</h1>
            <p>Over 1000 services!!</p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Loginform;
