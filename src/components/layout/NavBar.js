import React, { Fragment, useEffect, useRef, useState } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import img1 from "../welcomepage/welcomepagecoponents/imgs/logo.png";
import wishlist from "../Home/testimgs/wishlist.svg";

import "../welcomepage/welcomepagecoponents/css/welcomestyles.css";
import { useSelector } from "react-redux";
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const onCLickHandler = () => {
    setIsActive(!isActive);
  };

  const Categories = [
    "Graphics-And-Design",
    "Game-Development",
    "Web-Programming",
    "Mobile-Apps",
  ];
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
  // const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
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
          {/* Fix later: Uncaught Error: Unable to find node on an unmounted component. */}
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
        <div className="cartanditems">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <img src={wishlist} alt="wishlist" style={{ paddingRight: "1%" }} />
          </Link>
          <Link to="/cart" className="linkcart">
            <h4 className="h4cart">2</h4>
          </Link>
        </div>
        {user ? (
          <Fragment>
            <div className="menu-container">
              <button className="menu-trigger" onClick={onCLickHandler}>
                <div className="insidetriggerbtn">
                  <span style={{ color: "white", fontWeight: "bold  " }}>
                    {/* {user && user.fullname.split(" ")[0]} */}
                    Suman
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
                    <Link to="/" className="listyleLink">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Fragment>
        ) : (
          !loading && (
            <Link to="/login">
              <button className="LogInBtn">Log In</button>
            </Link>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
