import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import ReviewForm from "../components/ReviewForm/ReviewForm";
import Products from "../components/Products/Products";
import About from "../components/About/About";
import Process from "../components/Process/Process";

const IndexPage = ({ onAddToCart, useProducts, loading }) => {
  return (
    <>
      <Hero />
      <Features />

      <About />
      <Process />

      <Products onAddToCart={onAddToCart} useProducts={useProducts} loading={loading} />
      <Reviews />
      <ReviewForm />
    </>
  );
};

export default IndexPage;
