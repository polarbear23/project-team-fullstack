import React from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaComments, FaHome } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

const LeftMenu = () => {
  return (
    <aside>
      <nav className="aside-nav">
        <ul>
          <li>
            <FaHome />
            <Link to="/" className="aside-nav-item">
              Home
            </Link>
          </li>
          <li>
            <FaComments />
            <Link to="/" className="aside-nav-item">
              Forum
            </Link>
          </li>
          <li>
            <MdLeaderboard />
            <Link to="/" className="aside-nav-item">
              Leaderboard
            </Link>
          </li>
        </ul>
      </nav>
      <div className="dark-mode">
        <input id="checkbox" type="checkbox" className="dark-mode-input" />
        <label htmlFor="checkbox" className="mode-label">
          <div className="ball"></div>
          <FaMoon />
        </label>
      </div>
    </aside>
  );
};

export default LeftMenu;
