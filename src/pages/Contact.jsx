import React, { useState } from "react";
import "../components/Contact/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    bulkOrder: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bulkText = formData.bulkOrder
      ? "Yes, interested in a bulk order."
      : "No bulk order selected.";

    const whatsappMessage = encodeURIComponent(
      `Hello! \nI would like to get in touch.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Message: ${formData.message}\n` +
      `Bulk Order: ${bulkText}`
    );

    window.open(`https://wa.me/917037585801?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="contact">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <p>
            Have a question about our products, pricing, or your recent order?
            Our team would love to hear from you! Please use the form below to
            reach out for general inquiries, feedback, or support.
          </p>

          <p>
            <strong>Interested in placing a bulk order?</strong>
            We offer special pricing for corporate clients, events, and
            wholesale buyers. Simply check the <em>“Bulk Order”</em> box below
            and include your requirements — our sales team will get back to you
            with a custom quote within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="bulkOrder"
              checked={formData.bulkOrder}
              onChange={handleChange}
            />{" "}
            Interested in Bulk Order
          </label>

          <button type="submit">Send via WhatsApp</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
