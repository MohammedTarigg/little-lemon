import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger.png";
import basket from "../assets/basket.png";

function Header() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [activeMenu, setActivemenu] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  let mode =
    windowSize.width <= 900 ? "phone-navigation" : "desktop-navigation";
  mode += activeMenu === true ? " active-menu" : "";
  return (
    <header className="header">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setActivemenu(!activeMenu);
        }}>
        <svg
          viewBox="0 0 100 100"
          width="50"
          class={
            activeMenu ? "burger active-burger phone-icon" : "burger phone-icon"
          }>
          <rect width="50" x="50" y="30" className="top"></rect>
          <rect width="100" x="1" y="50" className="mid"></rect>
          <rect width="50" x="1" y="70" className="bot"></rect>
        </svg>
      </div>
      <NavLink to="/">
        <img alt="logo" src={logo} />
      </NavLink>

      <nav className={mode}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Menu</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/Booking">
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/">
        <img alt="basket icon" src={basket} className="cart" />
      </NavLink>
    </header>
  );
}

export default Header;
