import React from "react";
import "./Hero.css"; // ✅ import CSS

const Hero = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // https://res.cloudinary.com/akashlamba01/video/upload/v1763492542/gangajal-pure/videos/Generated_File_October_02_2025_-_10_50AM_isabfn.mp4

  return (
    <section id="hero" className="hero">

      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="https://res.cloudinary.com/akashlamba01/video/upload/v1763492542/gangajal-pure/videos/Generated_File_October_02_2025_-_10_50AM_isabfn.mp4" type="video/mp4" />
      </video>


      <div className="hero-content">
        <h1>Pure & Authentic Gangajal Delivered to Your Home</h1>
        <p>Collected directly from the holy Ganga — purified naturally and safely packaged for every devotional need.</p>
        <button onClick={scrollToProducts}>Shop Now</button>

        <div className="hero-badges">
          <span>100% Original</span>
          <span>Pan-India Delivery</span>
          <span>Trusted by Thousands</span>
        </div>
      </div>
    </section>

  );
};

export default Hero;
