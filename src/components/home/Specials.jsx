import React from "react";
import delivery from "../../assets/delivery.png";
import greekSaladImage from "../../assets/menu/salads/greeksalad.png";
import bruchettaImage from "../../assets/menu/mains/bruchetta.png";
import lemonDessertImage from "../../assets/menu/desserts/lemondessert.png";

function SpecialsCard({ image, name, price, describtion }) {
  return (
    <article>
      <img alt={name + " dish"} src={image} className="image" />
      <div className="card-container">
        <div>
          <h3>{name}</h3>
          <h3>
            <span>${price}</span>
          </h3>
        </div>
        <p>{describtion}</p>
        <h4>
          Order for Delivery <img alt="delivery icon" src={delivery} />
        </h4>
      </div>
    </article>
  );
}

export default function Specials() {
  const dishes = {
    greekSalad: {
      image: greekSaladImage,
      name: "Greek Salad",
      describtion:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      price: "12.99",
    },
    bruchetta: {
      image: bruchettaImage,
      name: "Bruchetta",
      describtion:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      price: "5.99",
    },
    lemonDessert: {
      image: lemonDessertImage,
      name: "Lemon Dessert",
      describtion:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "5.00",
    },
  };
  return (
    <section className="specials">
      <div>
        <h1 style={{ display: "inline-block" }}>This week's Specials!</h1>
        <button className="button-primary">Order Menu</button>
      </div>
      <div>
        <SpecialsCard
          image={dishes.greekSalad.image}
          name={dishes.greekSalad.name}
          describtion={dishes.greekSalad.describtion}
          price={dishes.greekSalad.price}
        />
        <SpecialsCard
          image={dishes.bruchetta.image}
          name={dishes.bruchetta.name}
          describtion={dishes.bruchetta.describtion}
          price={dishes.bruchetta.price}
        />
        <SpecialsCard
          image={dishes.lemonDessert.image}
          name={dishes.lemonDessert.name}
          describtion={dishes.lemonDessert.describtion}
          price={dishes.lemonDessert.price}
        />
      </div>
    </section>
  );
}
