import "./Process.css";

export default function Process() {
  const steps = [
    { step: "01", title: "Collection", desc: "Fresh Gangajal collected from Haridwar/Rishikesh every morning." },
    { step: "02", title: "Natural Filtration", desc: "Visible particles removed without chemicals." },
    { step: "03", title: "Sealed Packaging", desc: "Filled in hygienic food-grade bottles." },
    { step: "04", title: "Safe Delivery", desc: "Securely packed & delivered across India." },
  ];

  return (
    <section className="process">
      <h2>How We Deliver Pure Gangajal</h2>
      <div className="process-grid">
        {steps.map((s, i) => (
          <div key={i} className="process-box">
            <span className="step-number">{s.step}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
