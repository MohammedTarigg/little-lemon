import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger.png";
import basket from "../assets/basket.png";

function Header() {
  return (
      <header className="header">
        <Link to="/">
          <img alt="hamburger icon" src={hamburger} className="phone-icon" />
        </Link>
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
        <Link to="/">
          <img alt="hamburger icon" src={basket} className="phone-icon" />
        </Link>
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
              <Link to="/Booking">Reservations</Link>
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
  );
}

export default Header;
