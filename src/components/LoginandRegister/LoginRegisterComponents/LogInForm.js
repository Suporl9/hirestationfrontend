/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";

import { Login } from "../../redux/user/userAction";
import "../CSS/LoginRegister.css";
import { Loader } from "../../layout/Loader";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const emailref = useRef(null);
  const dispatch = useDispatch();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    emailref.current.focus();
    if (isAuthenticated) {
      history.push("/");
    }
  }, [history, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Login(email, password));
  };

  return (
    <Fragment>
      <div className="split-screen">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="right">
              <form onSubmit={submitHandler}>
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
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Loginform;
