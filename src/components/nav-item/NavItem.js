import React, { useState } from "react";
import "./NavItem.css";
import { IoMdArrowDropdown } from "react-icons/io";

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        className="icon-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <IoMdArrowDropdown className="nav-item__drop-down" />
        {open && props.children}
      </a>
    </li>
  );
}

export default NavItem;
