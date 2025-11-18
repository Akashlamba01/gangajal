import React from "react";
import "./Features.css"; // ✅ Import CSS

const Features = () => {
  const data = [
    {
      title: "💧 100% Pure & Original Gangajal",
      desc: "Directly sourced from Haridwar/Rishikesh – no chemicals, no mixing.",
    },
    {
      title: "🛡️ Hygienically Packed",
      desc: "Filtered naturally and sealed in food-grade bottles.",
    },
    {
      title: "🚚 Fast Pan-India Delivery",
      desc: "Delivered safely to your doorstep with secure packaging.",
    },
    {
      title: "🙏 Spiritual Assurance",
      desc: "Perfect for daily puja, Griha Pravesh, Hawan & rituals.",
    },
  ];


  return (
    <section className="features" id="features">
      {data.map((f, i) => (
        <div key={i} className="feature">
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
