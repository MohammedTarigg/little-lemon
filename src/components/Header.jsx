import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger.png";
import basket from "../assets/basket.png";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img alt="hamburger icon" src={hamburger} className="phone-icon" />
      </NavLink>
      <NavLink to="/">
        <img alt="logo" src={logo} />
      </NavLink>
      <NavLink to="/">
        <img alt="hamburger icon" src={basket} className="phone-icon" />
      </NavLink>
      <nav className="desktop-navigation">
        <ul>
          <li>
            <NavLink className={({isActive})=> isActive ? "active-link" : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Menu</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "active-link" : ""} to="/Booking">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
