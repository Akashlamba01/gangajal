import { useState, useEffect } from "react";
import "./About.css";

export default function About() {
  const images = [
    "https://images.assettype.com/english-sentinelassam/import/wp-content/uploads/2018/05/vaastu.jpg",
    "https://static.india.com/wp-content/uploads/2019/05/The-beautiful-Ganga-river-in-Hariddwar.-.jpg?impolicy=Medium_Resize&w=1200&h=800",
    "https://i.pinimg.com/564x/38/c4/ce/38c4ce35e2f9dc94eaa96d111e2bfb3c.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="about-section">

      {/* 🔥 SECTION HEADING (Now above both cards) */}
      <h2 className="about-heading">About Pure Gangajal</h2>

      <div className="about-row about-container">
        {/* LEFT CARD */}
        <div className="about-card about-text-card" style={{ border: "none", backgroundColor: "#f9f9f9" }}>

          <h3 className="sub-heading">Who We Are</h3>
          <p>
            Pure Gangajal is dedicated to delivering the sacred essence of <strong>Maa Ganga </strong>
            to every devotee across India. We collect fresh Gangajal directly from
            <strong> Haridwar & Rishikesh</strong>, ensuring divine purity is preserved
            exactly the way nature offers it.
          </p>

          <h3 className="sub-heading">Our Commitment</h3>
          <p>
            For us, Gangajal is not a product — it is a spiritual blessing. Every bottle
            undergoes a careful natural filtration process without chemicals, followed by
            hygienic packaging in food-grade bottles to maintain its sanctity.
          </p>

          <h3 className="sub-heading">Why Choose Pure Gangajal?</h3>
          <ul>
            <li>✔ Fresh collection daily from Haridwar/Rishikesh</li>
            <li>✔ 100% original & untouched — no mixing, no dilution</li>
            <li>✔ Natural filtration only (no chemicals used)</li>
            <li>✔ Packed in clean, leak-proof food-grade bottles</li>
            <li>✔ Trusted by thousands of families across India</li>
            <li>✔ Fast & safe delivery nationwide</li>
          </ul>

          {/* <h3 className="sub-heading">Perfect For Every Ritual</h3>
          <p>
            Our Gangajal is ideal for daily puja, hawan, Griha Pravesh, temple offerings,
            festivals, spiritual ceremonies, and home purification. Devotees also use it
            for Ayurvedic purposes, sprinkling rituals, and sanctifying holy spaces.
          </p> */}

          {/* <h3 className="sub-heading">Our Vision</h3>
          <p>
            To preserve and deliver the purity of Maa Ganga to every home with honesty,
            devotion, and respect. Our goal is to ensure that every devotee gets
            <strong>authentic Gangajal</strong> without compromise.
          </p> */}
        </div>


        {/* RIGHT CARD */}
        <div className="about-card about-slider-card">
          <div className="about-slider">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={`slide ${index === current ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
