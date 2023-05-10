import React from "react";
import { NavLink } from "react-router-dom";

function NoMatch() {
  return (
    <section id="nomatch">
      <div>
        <h2>404</h2>
        <p>Whoops... Chef Not Found !!!</p>
        <NavLink to="/little-lemon">Go Home</NavLink>
      </div>
    </section>
  );
}

export default NoMatch;
