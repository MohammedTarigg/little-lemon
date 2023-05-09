import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/home/hero-image.png";

export default function Hero() {
  return (
    <section className="hero">
      <aside>
        <img alt="dish" src={heroImage} className="image hero-image" />
      </aside>
      <aside>
        <img alt="dish" src={heroImage} className="image hero-image" />
      </aside>
      <aside>
        <img alt="dish" src={heroImage} className="image hero-image" />
      </aside>
      <aside>
        <img alt="dish" src={heroImage} className="image hero-image" />
      </aside>
      <div className="hero-text">
        <h1>
          little lemon
          <span>chicago</span>
        </h1>
        <p>
          We are family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/little-lemon/booking" className="button-primary">
          Reserve a table
        </Link>
      </div>
    </section>
  );
}
