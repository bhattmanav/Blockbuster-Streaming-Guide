import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import "./BodyLogin.css";
function BodyLogin() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [handleErrors, setHandleErrors] = useState("");

  const loginUser = async () => {
    try {
      const loginUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/browse");
    } catch (error) {
      // setHandleErrors(error.message);

      if (error.message === "Firebase: Error (auth/user-not-found).") {
        setHandleErrors(
          "The email address that you've entered doesn't match any Blockbuster accounts. Enter a different email address or create a new account."
        );
      } else if (error.message === "Firebase: Error (auth/wrong-password).") {
        setHandleErrors("Incorrect password. Please re-enter and try again.");
      }
    }
  };

  const handleSubmit = (event) => {
    loginUser();
    event.preventDefault();
  };

  return (
    <div className="body-login">
      <div className="body-login__create">
        <h1 className="body-login__heading">Login</h1>
        <span className="body-login__sub-heading">
          Enter your email and password to get started.
        </span>
        {handleErrors && (
          <div className="body-login__error">{handleErrors}</div>
        )}
        <form
          className="body-login__create-account-details"
          onSubmit={handleSubmit}
        >
          <label htmlFor="" className="body-login__email-label">
            Email address:
          </label>
          <input
            type="email"
            name=""
            required
            id=""
            className="body-login__email"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <label htmlFor="" className="body-login__password-label">
            Password:
          </label>
          <input
            type="password"
            name=""
            required
            id=""
            className="body-login__password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <div className="body-login__submit-container">
            <button className="body-login__submit">Sign In</button>
            <p className="body-login__account-exists">
              Don't have an account?{" "}
              <span
                className="body-login__transfer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create one now!
              </span>{" "}
            </p>
          </div>
        </form>
      </div>
      <div className="body-login__images">
        <img
          alt=""
          className="body-login__images-logo"
          src="https://i.imgur.com/aTQIvAN.png"
        />

        <div className="body-login__images-heading">
          Same old feeling now online!
        </div>
      </div>
    </div>
  );
}

export default BodyLogin;
