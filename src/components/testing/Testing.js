import React, { useState } from "react";
import NavbarTesting from "../navbar-testing/NavbarTesting";
import NavItem from "../nav-item/NavItem";
import { IoMdArrowDropdown } from "react-icons/io";
import DropdownMenu from "../dropdown-menu/DropdownMenu";

import Navbar from "../navbar/Navbar";

function Testing() {
  return (
    <div className="testing-wrapper">
      {/* <NavbarTesting>
        <NavItem icon={IoMdArrowDropdown}>
          <DropdownMenu />
        </NavItem>
      </NavbarTesting> */}
      <Navbar />
      {/* <DropdownMenu /> */}
    </div>
  );
}

export default Testing;
