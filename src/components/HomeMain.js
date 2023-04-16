import React from "react";
import restaurantFood from "../assets/restauranfood.png";
import delivery from "../assets/delivery.png";
import greekSaladImage from "../assets/greeksalad.png";
import bruchettaImage from "../assets/bruchetta.png";
import lemonDessertImage from "../assets/lemondessert.png";

const Hero = ({ heroText }) => {
  return (
    <section className="hero">
      <div>
        <h1>
          {heroText.title}
          <br />
          <span>{heroText.subtitle}</span>
        </h1>
        <p>{heroText.describtion}</p>
        <button className="button-primary">Reserve a table</button>
      </div>
      <aside>
        <img alt="dish" src={restaurantFood} className="image" />
      </aside>
    </section>
  );
};

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
const Specials = ({dishes}) => {
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
};
function HomeMain() {
  const heroText = {
    title: `little lemon`,
    subtitle: `chicago`,
    describtion: `We are family owned mediterranean restaurant,
    focused on traditional recipes served with a modern twist.`,
  };
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
    <main>
      <Hero heroText={heroText} />
      <Specials dishes={dishes}/>
      <section className="testimonials">
      <h2>testimonials</h2>
      </section>
      <section></section>
    </main>
  );
}

export default HomeMain;
