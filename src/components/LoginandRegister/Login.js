import React from "react";
import Footer from "../welcomepage/welcomepagecoponents/Footer";
import Navbar from "../welcomepage/welcomepagecoponents/NavBar";

import Loginform from "./LoginRegisterComponents/LogInForm";

export default function Login() {
  return (
    <>
      <Navbar />
      <Loginform />
      <Footer />
    </>
  );
}
