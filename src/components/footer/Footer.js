import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [footerCategories, setFooterCategories] = useState([
    {
      categorieName: "Legal",
      linkToPage: "",
    },
    {
      categorieName: "Privacy Center",
      linkToPage: "",
    },
    {
      categorieName: "Privacy Policy",
      linkToPage: "",
    },
    {
      categorieName: "Cookies",
      linkToPage: "",
    },
  ]);
  return (
    <div className="footer-wrapper">
      <div className="footer__logo-wrapper">
        <img
          src="https://i.imgur.com/nL6oVYq.png"
          alt=""
          className="footer__logo"
        />
        <span className="footer__copyright">
          ©2022 Blockbuster. All Rights Reserved.
        </span>
      </div>
      <div className="footer__categories">
        {footerCategories.map((item) => {
          return (
            <span className="footer__categorie">{item.categorieName}</span>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
