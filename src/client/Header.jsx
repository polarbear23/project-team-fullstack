import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar-container">
        <Link to="/" className="navbar__logo">
          <img
            className="logo"
            src="/assets/pokemon/pokeball.png"
            alt="pokeball"
          />
          <span>Pokimo & King</span>
        </Link>

        <ul className="navbar__lists">
          <li className="navbar__lists--item">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="navbar__lists--item">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
