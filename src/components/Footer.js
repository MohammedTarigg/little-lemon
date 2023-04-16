import React from "react";
import footerLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <img alt="bottom logo" src={footerLogo} />
        <div className="footer-block">
          <h2>
            Doormat
            <br /> Navigation
          </h2>
          <nav>
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
        </div>
        <div className="footer-block">
          <h2>Contact</h2>
          <p>address</p>
          <p>phone number</p>
          <p>email</p>
        </div>
        <div className="footer-block">
          <h2>Social Media links</h2>
          <p>address</p>
          <p>phone number</p>
          <p>email</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
