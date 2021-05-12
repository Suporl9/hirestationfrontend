import React from "react";
import "../CSS/globalcss.css";
import Footer from "./welcomepagecoponents/Footer";

import HireStationinfo from "./welcomepagecoponents/HireStationinfo";
import Navbar from "./welcomepagecoponents/NavBar";

import StuffDone from "./welcomepagecoponents/StuffDone";

function welcomepage() {
  return (
    <>
      <Navbar />
      <StuffDone />
      <HireStationinfo />
      <Footer />
    </>
  );
}

export default welcomepage;
