import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

import IndexPage from "./pages/index";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import { getProducts } from "./components/Products/productService";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingItemIndex !== -1) {
        alert("Already in cart");
        return prevCart;
      } else {
        return [...prevCart, { ...product, qty: 1 }];
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

  if (loading) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        color: "#333",
        fontFamily: "Arial, sans-serif"
      }}>
        <div className="loader" style={{
          width: "50px",
          height: "50px",
          border: "5px solid #f3f3f3",
          borderTop: "5px solid #007bff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: "16px"
        }}></div>
        <h3 style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          color: "#555",
          letterSpacing: "0.5px"
        }}>
          Loading Yours Gangajal...
        </h3>

        <style>
          {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
        </style>
      </div>
    );
  }

  return (
    <Router>
      <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={<IndexPage onAddToCart={handleAddToCart} useProducts={products} />}
        />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/confirm-order" element={<ConfirmOrder cart={cart} />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>

      <Footer />

      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
      />

      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </Router>
  );
}

export default App;