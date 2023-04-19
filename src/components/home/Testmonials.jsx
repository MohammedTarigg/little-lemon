import testmonial1 from "../../assets/test-1.png";
import testmonial2 from "../../assets/test-2.png";
import testmonial3 from "../../assets/test-3.png";
import testmonial4 from "../../assets/test-4.png";
import React from "react";
const TestmonialCard = ({ image }) => {
  return (
    <article>
      <h3>rating</h3>
      <img alt="" src={image} />
      <h4>name</h4>
      <p>Review text</p>
    </article>
  );
};
export default function Testmonials() {
  return (
    <section className="testimonials">
      <h2>testimonials</h2>
      <div>
        <TestmonialCard image={testmonial1} />
        <TestmonialCard image={testmonial2} />
        <TestmonialCard image={testmonial3} />
        <TestmonialCard image={testmonial4} />
      </div>
    </section>
  );
}
