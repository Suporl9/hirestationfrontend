import React from "react";
import "../CSS/globalcss.css";

import HireStationinfo from "./welcomepagecoponents/HireStationinfo";

import StuffDone from "./welcomepagecoponents/StuffDone";

function Welcomepage() {
  return (
    <>
      <StuffDone />
      <HireStationinfo />
    </>
  );
}

export default Welcomepage;
