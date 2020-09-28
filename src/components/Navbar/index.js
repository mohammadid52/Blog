import React, { useState } from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const onSubmit = (e) => {
  e.preventDefault();
  alert("done");
};
const Navbar = () => {
  const [search, setSearch] = useState(false);
  const onSearch = () => {
    setSearch(!search);
  };
  const searchClass = search ? "search__input active" : "search__input";
  return (
    <div className="navbar">
      <ul className="navbar__menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/post">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Search" className={searchClass} />
          <div className="icon" onClick={onSearch}>
            <AiOutlineSearch />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
