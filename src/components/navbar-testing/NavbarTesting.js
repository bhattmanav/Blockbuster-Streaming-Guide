import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import NavItem from "../nav-item/NavItem";
import DropdownMenu from "../dropdown-menu/DropdownMenu";

import "./NavbarTesting.css";
function NavbarTesting(props) {
  const navigate = useNavigate();
  const [userScrolled, setUserScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [navbarCategories, setNavbarCategories] = useState([
    { categorieName: "Home", linkTo: "/browse" },
    { categorieName: "TV Shows", linkTo: "/browse/tv" },
    { categorieName: "Movies", linkTo: "/browse/movies" },
    { categorieName: "New & Popular", linkTo: "" },
  ]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setUserScrolled(true);
    } else {
      setUserScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  onAuthStateChanged(auth, (CurrentUser) => {
    if (CurrentUser) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  });

  return (
    <nav className="navbar-testing-wrapper">
      <img
        className="navbar__logo"
        src="https://i.imgur.com/zRPARCL.png"
        alt=""
        onClick={() => {
          navigate("/browse");
        }}
      />
      <ul className="navbar-nav">{props.children}</ul>

      <div className="navbar__categories">
        {navbarCategories.map((item) => {
          return (
            <span
              onClick={() => {
                navigate(item.linkTo);
              }}
              className="navbar__categorie"
            >
              {item.categorieName}
            </span>
          );
        })}
      </div>
      <div className="navbar__functionality">
        <span
          className="navbar__search"
          onClick={() => {
            navigate("/search");
          }}
        >
          Search
        </span>
        <span className="navbar__wishlist">Watchlist</span>
      </div>
      {!userLoggedIn ? (
        <button
          className="navbar__sign-in"
          onClick={() => {
            navigate("/signup");
          }}
        >
          <BsFillPeopleFill className="navbar__sign-in-icon" />
          Sign Up
        </button>
      ) : (
        <div className="navbar__user-profile">
          <img
            className="navbar__user"
            src="https://i.imgur.com/Y6p1nNG.png"
            alt=""
          />
          {/* <IoMdArrowDropdown
            className="navbar__user-arrow"
            onClick={() => {
              setOpen(!open);
            }}
          /> */}
          <NavItem icon={IoMdArrowDropdown}>
            <DropdownMenu />
          </NavItem>
        </div>
      )}
    </nav>
  );
}

export default NavbarTesting;
