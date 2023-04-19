import React from "react";
import { Link } from "react-router-dom";
import restaurantFood from "../../assets/restauranfood.png";

export default function Hero() {
  const heroText = {
    title: `little lemon`,
    subtitle: `chicago`,
    describtion: `We are family owned mediterranean restaurant,
        focused on traditional recipes served with a modern twist.`,
  };
  return (
    <section className="hero">
      <div>
        <h1>
          {heroText.title}
          <br />
          <span>{heroText.subtitle}</span>
        </h1>
        <p>{heroText.describtion}</p>
        <Link to="/Booking" className="button-primary">Reserve a table</Link>
      </div>
      <aside>
        <img alt="dish" src={restaurantFood} className="image" />
      </aside>
    </section>
  );
}
