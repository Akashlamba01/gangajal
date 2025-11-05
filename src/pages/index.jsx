import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import ReviewForm from "../components/ReviewForm/ReviewForm";
import Products from "../components/Products/Products";

const IndexPage = ({ onAddToCart, useProducts }) => {
  return (
    <>
      <Hero />
      <Features />
      <Products onAddToCart={onAddToCart} useProducts={useProducts} />
      <Reviews />
      <ReviewForm />
    </>
  );
};

export default IndexPage;
