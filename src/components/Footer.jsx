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
            Helpful
            <br /> Links
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
        </div>
        <div className="footer-block">
          <h2>Contact</h2>
          <p>Doha,Qatar</p>
          <p>(974)55428912</p>
          <p>mohamed.tarigsd@gmail.com</p>
        </div>
        <div className="footer-block">
          <h2>Social Media links</h2>
          <a href="https://www.linkedin.com/in/mohamed-tarigg/" target="_blank">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/97455428912" target="_blank">
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/MohammedTarigg" target="_blank">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
