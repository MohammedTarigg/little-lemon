import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger.png";
import basket from "../assets/basket.png";

function Header() {
  return (
    <>
      <header className="header">
        <img alt="hamburger icon" src={hamburger} className="phone-icon" />
        <img alt="logo" src={logo} />
        <img alt="hamburger icon" src={basket} className="phone-icon" />
        <nav className="desktop-navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/">Reservations</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
