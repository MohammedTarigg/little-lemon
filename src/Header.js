import React from "react";
import logo from "./assets/Logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <img alt="logo" src={logo} />
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
