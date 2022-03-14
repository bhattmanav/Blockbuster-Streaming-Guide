import React, { useState } from "react";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import "./NavbarExternal.css";

function NavbarExternal({ signup }) {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    // console.log(auth);
    if (currentUser) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  });

  const logout = async () => {
    await signOut(auth);
    navigate("/browse");
  };

  return (
    <div className="navbar-external">
      <img
        className="navbar-external__logo"
        src="https://i.imgur.com/zRPARCL.png"
        alt=""
        onClick={() => {
          navigate("/browse");
        }}
      />
      {userLoggedIn ? (
        <button className="navbar-external__sign-in" onClick={logout}>
          <BsFillPeopleFill className="navbar-external__sign-in-icon" />
          Sign Out
        </button>
      ) : (
        <button
          className="navbar-external__sign-in"
          onClick={() => {
            {
              signup ? navigate("/login") : navigate("/signup");
            }
          }}
        >
          <BsFillPeopleFill className="navbar-external__sign-in-icon" />
          {signup ? "Sign In" : "Sign Up"}
        </button>
      )}
    </div>
  );
}

export default NavbarExternal;
