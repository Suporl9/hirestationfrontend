import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import img1 from "../welcomepage/welcomepagecoponents/imgs/logo.png";
// import axios from "axios";
// import { useHistory } from "react-router";

import "../welcomepage/welcomepagecoponents/css/welcomestyles.css";
// import { userContext } from "../../context/Globalcontext";
function Navbar() {
  return (
    <div className="header">
      <Link to="/welcome">
        <img className="logo" src={img1} alt="logo" />
      </Link>
      <nav>
        <ul className="nav_links">
          <li className="listyle">
            <Link to="/" className="listyleLink">
              Explore
            </Link>
          </li>{" "}
          <li className="listyle">
            <Link to="/welcome" className="listyleLink">
              Become a seller
            </Link>
          </li>
          <li className="listyle">
            <Link to="/" className="listyleLink">
              Categories
            </Link>
            {/* <ul>
              <li>Graphics-And-Design</li>
              <li>Game-Development</li>
              <li>Web-Programming</li>
              <li>Mobile-Apps</li>
            </ul> */}
          </li>
        </ul>
      </nav>
      <Link to="/login">
        <button className="LogInBtn">Log In</button>
      </Link>
    </div>
  );
}

export default Navbar;
