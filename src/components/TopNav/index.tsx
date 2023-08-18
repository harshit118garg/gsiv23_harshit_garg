import React from "react";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { MdHome, MdSearch } from "react-icons/md";

export const TopNav = () => {
  return (
    <>
      <div className="top-nav-bar">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />
          <MdSearch className="icon search-icon" />
        </div>
        <div className="return-home-icon">
          <Link to="/">
            <span className="icon home-icon">
              <MdHome />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
