import React from "react";
import overview1 from "../../assets/overview-photo-1.png";
import overview2 from "../../assets/overview-photo-2.png";

export default function Overview() {
  return (
    <section className="overview">
      <div>
        <h2>
          little lemon
          <br /> <span>Chicago</span>
        </h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
          <br />
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <img
          alt="overview little lemon employees"
          src={overview1}
          className="image"
        />
        <img
          alt="overview little lemon bakers"
          src={overview2}
          className="image"
        />
      </div>
    </section>
  );
}
