import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

import IndexPage from "./pages/index";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (name, price) => {
    setCart((prev) => [...prev, { name, price }]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

      <Routes>
        <Route path="/" element={<IndexPage onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/*  */}
      </Routes>

      <Footer />

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
      />
    </Router>
  );
}

export default App;



