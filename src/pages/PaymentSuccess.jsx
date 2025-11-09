import React from "react";
import "../components/About/About.css"; // ✅ Import the CSS
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get('reference')

  return (
    <section id="about">
      <h1>Payment Successful</h1>
      <p>Thank you for your order! Your payment has been successfully processed.</p>
      <p>Founded in 2025, we have delivered pure Gangajal to thousands of happy customers.</p>
      <p>Your payment reference number is: <strong>{reference}</strong></p>
    </section>
  );
};

export default PaymentSuccess;
