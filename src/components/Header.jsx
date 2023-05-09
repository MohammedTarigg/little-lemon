import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import basket from "../assets/headerNfooter/basket.png";

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

  if (activeMenu) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="header">
        <div
          className="phone-icon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setActivemenu(!activeMenu);
          }}>
          <svg
            viewBox="0 0 100 100"
            width="50"
            className={activeMenu ? "burger active-burger" : "burger"}>
            <rect width="50" x="50" y="30" rx="5" className="top"></rect>
            <rect width="100" x="1" y="50" rx="5" className="mid"></rect>
            <rect width="50" x="1" y="70" rx="5" className="bot"></rect>
          </svg>
        </div>
        <NavLink to="/">
          <h1>
            little <span>lemon</span> restaurant
          </h1>
          {/* <img alt="logo" src={logo} /> */}
        </NavLink>
        <div
          className={activeMenu ? "back-drop back-drop-active" : "back-drop"}
          onClick={() => {
            setActivemenu(!activeMenu);
          }}></div>
        <nav className={mode}>
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/little-lemon">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/little-lemon/menu">
              Menu
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/little-lemon/booking">
              Reservations
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/little-lemon/about">
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/little-lemon/contact">
              Contact us
            </NavLink>
          </div>
        </nav>
        <NavLink to="/">
          {/* <img alt="basket icon" src={basket} className="cart" /> */}
        </NavLink>
      </header>
      <div className="header-space"></div>
    </>
  );
}

export default Header;
