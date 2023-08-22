import { MdHome, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { TopNavPropTypes } from "../../types/types";
import "./styles/index.scss";

export const TopNav = ({ navProp, changeHandler, query }: TopNavPropTypes) => {
  return (
    <>
      <div className="top-nav-bar">
        {navProp ? (
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={query}
              onChange={changeHandler}
            />
            <MdSearch className="icon search-icon" />
          </div>
        ) : (
          <div className="movie-details">
            <h3>Movie Details</h3>
          </div>
        )}
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
