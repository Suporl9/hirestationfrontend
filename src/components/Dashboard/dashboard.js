import React from "react";
import Footer from "../welcomepage/welcomepagecoponents/Footer";
import Navbar from "../welcomepage/welcomepagecoponents/NavBar";
import Dashboardody from "./Dashboard Components/dashboardody";

export default function dashboard() {
  return (
    <>
      <Navbar />
      <Dashboardody />
      <Footer />
    </>
  );
}
