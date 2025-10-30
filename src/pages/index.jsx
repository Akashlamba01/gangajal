import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Products from "../components/Products/Products";
import Reviews from "../components/Reviews/Reviews";
import ReviewForm from "../components/ReviewForm/ReviewForm";

const IndexPage = ({ onAddToCart }) => {
  return (
    <>
      <Hero />
      <Features />
      <Products onAddToCart={onAddToCart} />
      <Reviews />
      <ReviewForm />
    </>
  );
};

export default IndexPage;
