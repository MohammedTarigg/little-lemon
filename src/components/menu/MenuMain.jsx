import React, { useRef, useState } from "react";
import MenuItem from "./MenuItem";
import { dishes } from "../../api";

function MenuMain() {
  const [filteredDishes, setFilteredDishes] = useState(dishes[0]);
  const [activeCategory, setActiveCategory] = useState("starters");
  const menuCategories = useRef(null);

  const scrollToCategories = () => menuCategories.current.scrollIntoView();
  function filterDishes(category) {
    setActiveCategory(category);
    switch (category) {
      case "starters":
        setFilteredDishes(dishes[0]);
        break;
      case "salads":
        setFilteredDishes(dishes[1]);
        break;
      case "mains":
        setFilteredDishes(dishes[2]);
        break;
      case "sides":
        setFilteredDishes(dishes[3]);
        break;
      case "desserts":
        setFilteredDishes(dishes[4]);
        break;
      default:
        setFilteredDishes(dishes[0]);
        break;
    }
  }
  return (
    <section>
      <div className="menu-header">
        <div className="highlight-overlay"></div>
        <h1>
          little lemon restaurant
          <br /> welcomes you
        </h1>
        <p>A wide variety of dishes can be found in little lemon Restaurant</p>
        <button className="scroll-to-menu" onClick={scrollToCategories}>
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </button>
      </div>
      <div className="menu-categories" ref={menuCategories}>
        <button
          id="starters"
          className={activeCategory === "starters" ? "active-category" : null}
          onClick={() => {
            filterDishes("starters");
          }}>
          Starters
        </button>
        <button
          id="salads"
          className={activeCategory === "salads" ? "active-category" : null}
          onClick={() => {
            filterDishes("salads");
          }}>
          Salads
        </button>
        <button
          id="mains"
          className={activeCategory === "mains" ? "active-category" : null}
          onClick={() => {
            filterDishes("mains");
          }}>
          Mains
        </button>
        <button
          id="sides"
          className={activeCategory === "sides" ? "active-category" : null}
          onClick={() => {
            filterDishes("sides");
          }}>
          Side Orders
        </button>
        <button
          id="desserts"
          className={activeCategory === "desserts" ? "active-category" : null}
          onClick={() => {
            filterDishes("desserts");
          }}>
          Desserts
        </button>
      </div>
      <div className="menu-dishes-container">
        {filteredDishes.map((dish) => (
          <MenuItem dish={dish} key={dish.name} />
        ))}
      </div>
    </section>
  );
}

export default MenuMain;
