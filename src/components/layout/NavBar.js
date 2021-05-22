import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import img1 from "../welcomepage/welcomepagecoponents/imgs/logo.png";
// import axios from "axios";
// import { useHistory } from "react-router";

import "../welcomepage/welcomepagecoponents/css/welcomestyles.css";
// import { userContext } from "../../context/Globalcontext";
function Navbar() {
  const Categories = [
    "Graphics-And-Design",
    "Game-Development",
    "Web-Programming",
    "Mobile-Apps",
  ];
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
          {/* no to added here fix at last */}
          <Link className="listyleLink ct">
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
        {/* <li className="listyle">
          <Link to="/welcome" className="listyleLink">
            Become a seller
          </Link>
        </li> */}
      </ul>

      <Link to="/login">
        <button className="LogInBtn">Log In</button>
      </Link>
    </nav>
  );
}

export default Navbar;
