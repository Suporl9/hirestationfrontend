import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/LoginRegister.css";
import defaultImg from "../img/default.png";
import { Register } from "../../redux/user/userAction";
import { Loader } from "../../layout/Loader";
// import axios from "axios";
// import { userContext } from "../../context/Globalcontext";

function SignUpform() {
  const history = useHistory();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    passwordverify: "",
  });

  const [avatar, setAvatar] = useState("");

  const [avatarPreview, setAvatarPreview] = useState(defaultImg);
  const { fullname, email, password, passwordverify } = user;
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [history, isAuthenticated]);
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("fullname", fullname);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("passwordverify", passwordverify);
    formData.set("avatar", avatar);
    dispatch(Register(formData));
    // console.log(formData.fullname);
    // console.log(avatar);
  };
  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
          // console.log("result", reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
      // console.log("reader:", reader.readAsDataURL);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <div className="split-screen">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="left">
              <section className="copy">
                <h1 className="explorecrec">Explore your creativity</h1>
                <p>Over 1000 services!!</p>
              </section>
            </div>
            <div className="right">
              <form onSubmit={submitHandler} encType="multipart/form-data">
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
                  <label htmlFor="fullname-field">Full Name</label>
                  <input
                    className="fname"
                    name="fullname"
                    type="text"
                    value={fullname}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="input-container email">
                  <label htmlFor="email-field">Email</label>
                  <input
                    className="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="input-container password">
                  <label htmlFor="password-field">Password</label>
                  <input
                    className="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="input-container password">
                  <label htmlFor="verify-password-field">Verify Password</label>
                  <input
                    className="password"
                    name="passwordverify"
                    type="password"
                    value={passwordverify}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="input-container password">
                  <label htmlFor="Avatar_upload">Avatar</label>
                  <div className="avatarsection">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="Avatar Preview"
                      style={{
                        height: "40px",
                        width: "40px",
                        marginRight: "1rem",
                      }}
                    />

                    <div className="custom-file">
                      <input
                        type="file"
                        name="avatar"
                        className="custom-file-input"
                        id="customFile"
                        accept="image/*"
                        onChange={onChange}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="customFile"
                        style={{ fontWeight: "bold" }}
                      >
                        Choose Avatar
                      </label>
                    </div>
                  </div>
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
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default SignUpform;
