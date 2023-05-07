import testmonial1 from "../../assets/home/test-1.png";
import testmonial2 from "../../assets/home/test-2.png";
import testmonial3 from "../../assets/home/test-3.png";
import testmonial4 from "../../assets/home/test-4.png";
import React from "react";
const TestmonialCard = ({ item }) => {
  let { rating, name, image, review } = item;
  const ratingArray = [];
  for (let i = 1; i < 6; i++) {
    if (i <= rating) {
      ratingArray.push(1);
    } else {
      ratingArray.push(0);
    }
  }
  return (
    <article tabIndex="0">
      <h3>
        {ratingArray.map((item, index) =>
          item === 1 ? (
            <div className="fa fa-star checked" key={index} />
          ) : (
            <div className="fa fa-star" key={index} />
          )
        )}
      </h3>
      <img alt={"image of " + name} src={image} />
      <h4>{name}</h4>
      <p>{review}</p>
    </article>
  );
};
export default function Testmonials() {
  const testimonials = [
    {
      rating: 3,
      name: "Mohammed Saeed",
      image: testmonial1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit facilisis turpis eget laoreet.",
    },
    {
      rating: 4,
      name: "Tarig Abdelaziz",
      image: testmonial2,
      review:
        "Morbi lorem tellus, gravida nec scelerisque vel, condimentum quis sapien. Proin cursus diam id sagittis pretium.",
    },
    {
      rating: 5,
      name: "Amro Mohamed",
      image: testmonial3,
      review:
        " Donec vulputate nisl vel facilisis fermentum. Nam tortor lorem, fringilla vitae nisi quis, volutpat tincidunt turpis. Mauris tristique vehicula mauris sit amet placerat.",
    },
    {
      rating: 4,
      name: "Omar Hafiz",
      image: testmonial4,
      review:
        "Nulla consequat, velit eget placerat tempus, diam dui facilisis lacus, vitae iaculis elit ligula quis lectus. Duis non commodo lorem, vel mollis magna.",
    },
  ];
  return (
    <section className="testimonials">
      <h2>testimonials</h2>
      <div>
        {testimonials.map((item) => (
          <TestmonialCard item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}
