import React from "react";
import NavbarExternal from "../navbar-external/NavbarExternal";
import BodySignup from "../body-signup/BodySignup";
import Footer from "../footer/Footer";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="sign-up">
      <NavbarExternal signup={true} />
      <BodySignup />
      {/* <Footer /> */}
    </div>
  );
}

export default SignUp;
