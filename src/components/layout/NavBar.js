import React, { Fragment, useEffect, useRef, useState } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import img1 from "../welcomepage/welcomepagecoponents/imgs/logo.png";
// import wishlist from "../Home/testimgs/wishlist.svg";
import { ReactComponent as Cart } from "./cart.svg";

import "../welcomepage/welcomepagecoponents/css/welcomestyles.css";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/user/userAction";

//(problem to be solved : dropdown is showing whne  registering or logging in(fix later))
//understand how click event is working in dropdown

function Navbar() {
  const { user, loading } = useSelector((state) => state.auth);
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { cartItemsCount } = useSelector((state) => state.getCart);
  // const { cartItem, isAdded, loadin } = useSelector((state) => state.addToCart);
  const onCLickHandler = () => {
    setIsActive(!isActive);
  };
  const logOutHandler = () => {
    dispatch(logOutUser());
  };
  const Categories = [
    "Graphics-And-Design",
    "Game-Development",
    "Web-Programming",
    "Mobile-Apps",
  ];

  // const string = "abc bcd";
  // console.log("abc", string.split(" ")[0]);
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <nav>
      <Link to="/welcome">
        <img className="logo" src={img1} alt="logo" />
      </Link>

      <ul className="nav_links">
        <li className="listyle">
          <Link to="/" className="listyleLink">
            Explore
          </Link>
        </li>{" "}
        <li className="listyle">
          <Link to="/" className="listyleLink ct">
            Categories &nbsp;
            <i className="fa fa-sort-desc" aria-hidden="true"></i>
          </Link>
          <ul className="innerul">
            {Categories.map((categori) => (
              <li className="innerulli" key={categori}>
                <Link to={`/category/${categori}`} className="listyleLink">
                  {categori}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="listyle">
          <Link to="/welcome" className="listyleLink">
            Become a seller
          </Link>
        </li>
      </ul>

      <div className="loginandcart">
        {user && (
          <div className="cartanditems">
            <Link to="/myWishList">
              <div className="icon-button">
                <span className="material-icons">
                  <Cart />
                </span>
                <span className="icon-button_badge">{cartItemsCount}</span>
              </div>
            </Link>
            {/* <Link to="/cart" className="linkcart">
            <h4 className="h4cart">2</h4>
          </Link> */}
          </div>
        )}
        {user ? (
          <Fragment>
            <div className="menu-container">
              <button className="menu-trigger" onClick={onCLickHandler}>
                <div className="insidetriggerbtn">
                  <span style={{ color: "white", fontWeight: "bold  " }}>
                    {/* {user && hello()} */}
                    {user.fullname && user.fullname.split(" ")[0]}
                  </span>
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.fullname}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </button>
              <div
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
              >
                <ul>
                  <li>
                    <Link to="/me" className="listyleLink">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="listyleLink">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders" className="listyleLink">
                      Orders
                    </Link>
                  </li>

                  <li className="libg">
                    <Link
                      to="/"
                      className="listyleLink"
                      onClick={logOutHandler}
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Fragment>
        ) : (
          !loading && (
            <div className="loginbtndiv">
              <Link to="/login">
                <button className="LogInBtn">Log In</button>
              </Link>
            </div>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
