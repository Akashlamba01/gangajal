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
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.name === name);

      if (existingItemIndex !== -1) {
        // If item already exists, show alert instead of increasing qty
        alert("Already in cart");
        return prevCart; // return the same cart without changes
      } else {
        // Add new item with qty = 1
        return [...prevCart, { name, price, qty: 1 }];
      }
    });
  };

  const handleIncreaseQty = (name) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecreaseQty = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0) // remove item if qty becomes 0
    );
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
      </Routes>

      <Footer />

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
      />
    </Router>
  );
}

export default App;