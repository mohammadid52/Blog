import React from "react";
import "./style.css";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Header = () => {
  return (
    <header className="header">
      <nav className="header__menu">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
      </nav>
      <div className="social-icons">
        <ul>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <AiOutlineTwitter />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
