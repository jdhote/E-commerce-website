import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaSearch, FaCamera, FaMicrophone } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-light nav-bar">
          <div className="nav-content">
            <button className="menu-btn">
              fwd <FaChevronDown className="dropdown-icon" />
            </button>
            <div className="insider">
              <span className="crown-icon">👑</span>
              <span className="select-insider">
                SELECT <span className="insider-highlight">INSIDER</span>
              </span>
            </div>
          </div>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              className="search"
              type="search"
              placeholder="Search for Casual Coords Women"
              aria-label="Search"
            />
            <FaCamera className="camera-icon" />
            <FaMicrophone className="microphone-icon" />
          </div>
          <div>
            <IoMdNotificationsOutline className="icon" />
            <IoIosHeartEmpty className="icon" />
            <LiaShoppingBagSolid className="icon" />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
