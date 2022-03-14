import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import "./BodySignup.css";
function BodySignup() {
  const navigate = useNavigate();
  const [handleUserEmailInput, setHandleUserEmailInput] = useState("");
  const [handleUserPasswordInput, setHandleUserPasswordInput] = useState("");
  const [handleErrors, setHandleErrors] = useState("");

  const handleSubmit = (event) => {
    registerUser();
    event.preventDefault();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate("/browse");
      }
    });
  };

  const registerUser = async () => {
    try {
      const registerUser = await createUserWithEmailAndPassword(
        auth,
        handleUserEmailInput,
        handleUserPasswordInput
      );
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setHandleErrors(
          `A user with the email ${handleUserEmailInput} already exists. Use an address that you own, and only have access to, don't use a group or generic email. `
        );
      } else if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        setHandleErrors(`Your password must be at least 6 characters.`);
      } else if (error.message === "Firebase: Error (auth/missing-email).") {
        setHandleErrors(
          "Sorry, something went wrong while creating your account. Please try again by entering/re-entering a valid email address."
        );
      } else {
        setHandleErrors(error.message);
      }
      // console.log(error.message);
    }
  };

  return (
    <div className="body-signup">
      <form className="body-signup__details" onSubmit={handleSubmit}>
        <span className="body-signup__step">Step 1 of 2</span>
        <h3 className="body-signup__heading">
          Enter your email address and password.
        </h3>
        {handleErrors && (
          <div className="body-signup__error">{handleErrors}</div>
        )}
        <input
          type="email"
          required
          name=""
          className="body-signup__email"
          placeholder="Email address"
          onChange={(e) => {
            setHandleUserEmailInput(e.target.value);
          }}
        />
        <input
          type="password"
          required
          name=""
          className="body-signup__password"
          placeholder="Password"
          onChange={(e) => {
            setHandleUserPasswordInput(e.target.value);
          }}
        />
        <div className="body-signup__agree">
          <input
            type="checkbox"
            name=""
            className="body-signup__agree-checkbox"
          />
          <span className="body-signup__text">
            Yes! I would like to receive, by electronic means, updates,
            information, and offers about Blockbuster and other products.
          </span>
        </div>
        <button className="body-signup__next">Next</button>
      </form>
    </div>
  );
}

export default BodySignup;
