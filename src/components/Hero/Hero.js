import React from "react";
import "./Hero.css"; // ✅ import CSS

const Hero = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        {/* <h2>Pure Gangajal from the Holy Ganges</h2> */}
        <button onClick={scrollToProducts}>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
