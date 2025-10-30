import React from "react";
import "./Features.css"; // ✅ Import CSS

const Features = () => {
  const data = [
    {
      title: "✅ Pure & Authentic",
      desc: "Collected directly from Haridwar / Gangotri.",
    },
    {
      title: "✅ Hygienically Packed",
      desc: "Sealed for purity and long shelf life.",
    },
    {
      title: "✅ Doorstep Delivery",
      desc: "Delivered safely across India.",
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
