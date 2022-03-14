import React from "react";
import NavbarExternal from "../navbar-external/NavbarExternal";
import BodyLogin from "../body-login/BodyLogin";
import Footer from "../footer/Footer";
import "./Login.css";
function Login() {
  return (
    <div className="sign-in-wrapper">
      <NavbarExternal />
      <BodyLogin />
      <Footer />
    </div>
  );
}

export default Login;
