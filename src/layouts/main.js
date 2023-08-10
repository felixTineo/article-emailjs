import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children }) => {
  return (
    <div className="main-layout-cont">
      <header>
        <a href="/" className="logo">
          <img src={require("../assets/logo.png")} alt="Logo" />
        </a>
        <ul className="social-links">
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </header>
      {children}
    </div>
  );
};

export default Layout;
