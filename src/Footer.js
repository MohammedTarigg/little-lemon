import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <img alt="bottom logo" src="" />
        <div className="footer-block">
          <h3>
            Doormat
            <br /> Navigation
          </h3>
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
        </div>
        <div className="footer-block">
          <h3>Contact</h3>
          <p>address</p>
          <p>phone number</p>
          <p>email</p>
        </div>
        <div className="footer-block">
          <h3>Social Media links</h3>
          <p>address</p>
          <p>phone number</p>
          <p>email</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
