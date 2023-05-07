import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/home/hero-image.png";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>
          little lemon
          <br />
          <span>chicago</span>
        </h1>
        <p>
          We are family owned mediterranean <br />
          restaurant, focused on traditional recipes <br />
          served with a modern twist.
        </p>
        <Link to="/Booking" className="button-primary">
          Reserve a table
        </Link>
      </div>
      <aside>
        <img alt="dish" src={heroImage} className="image hero-image" />
      </aside>
    </section>
  );
}
