import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

import "./DropdownMenu.css";
function DropdownMenu() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/browse");
  };

  function DropdownItem(props) {
    return (
      <div className="menu-wrapper">
        {props.logout ? (
          <span className="menu-item" onClick={logout}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </span>
        ) : (
          <span className="menu-item">
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<CgProfile />}>My Profile</DropdownItem>
      <DropdownItem leftIcon={<IoSettingsSharp />}>Settings</DropdownItem>
      <DropdownItem leftIcon={<MdLogout />} logout={true}>
        Logout
      </DropdownItem>
    </div>
  );
}

export default DropdownMenu;
