import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/LoginRegister.css";
// import axios from "axios";
// import { userContext } from "../../context/Globalcontext";

function SignUpform() {
  // const history = useHistory();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordverify, setPasswordVerify] = useState("");
  const fullnameref = useRef(null);

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     const submitfields = {
  //       fullname, //these names should be exact of the names we are using in the server side i.e when sending the data to the server as req.body
  //       email,
  //       password,
  //       passwordverify,
  //     };
  //     await axios.post(
  //       "http://localhost:5000/auth/",
  //       submitfields
  //       // , {
  //       //fetch the data from the api (server) and passing essentials fields to input to database through the server
  //       // withCredentials: true, //with this we now have token(jwt) ,cookies from the server to the browser
  //       // }
  //     );
  //     await getLoggedIn();

  //     history.push("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
    fullnameref.current.focus();
  }, []);

  return (
    <>
      <div className="split-screen">
        <div className="left">
          <section className="copy">
            <h1 className="explorecrec">Explore your creativity</h1>
            <p>Over 1000 services!!</p>
          </section>
        </div>
        <div className="right">
          <form>
            <section className="copy">
              <h2 className="h2class">Sign Up</h2>
              <div className="login-container">
                <p>
                  Already have an account?
                  <Link to="/login" className="LinkClass">
                    <strong>Log In.</strong>
                  </Link>
                </p>
              </div>
            </section>
            <div className="input-container Full Name">
              <label>Full Name</label>
              <input
                className="fname"
                name="fname"
                type="text"
                ref={fullnameref}
                value={fullname}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              ></input>
            </div>
            <div className="input-container email">
              <label>Email</label>
              <input
                className="email"
                name="email"
                type="email"
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
            <div className="input-container password">
              <label>Verify Password</label>
              <input
                className="password"
                name="passwordverify"
                type="password"
                value={passwordverify}
                onChange={(e) => {
                  setPasswordVerify(e.target.value);
                }}
              ></input>
            </div>
            <div className="input-container cta">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark">Sign Up for Email updates</span>
              </label>
            </div>
            <button className="signup-btn" type="submit">
              Sign Up
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
      </div>
    </>
  );
}

export default SignUpform;
