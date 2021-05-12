import React from "react";
import Footer from "../welcomepage/welcomepagecoponents/Footer";
import Navbar from "../welcomepage/welcomepagecoponents/NavBar";

import SignUpform from "./LoginRegisterComponents/SignUpForm";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <SignUpform />
      <Footer />
    </>
  );
}
