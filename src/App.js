import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { getProducts } from "./components/Products/productService";

import IndexPage from "./pages/index";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import ConfirmOrder from "./pages/ConfirmOrder";
import PaymentSuccess from "./pages/PaymentSuccess";
import OrderSuccess from "./pages/OrderSuccess";
import OrderDetails from "./pages/OrderDetails";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
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
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex !== -1) {
        alert("Already in cart");
        return prevCart;
      }
      return [...prevCart, { ...product, qty: 1 }];
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
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <Router>
      {/* ✅ Fixed Header */}
      <Header
        cartCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      />

      {/* ✅ Scrollable Content Area */}
      <main
        style={{
          // paddingTop: "90px", // height of header
          paddingBottom: "90px", // height of footer
          minHeight: "100vh",
          backgroundColor: "#f5f6f6",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<IndexPage onAddToCart={handleAddToCart} useProducts={products} loading={loading} />}
          />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/confirm-order" element={<ConfirmOrder cart={cart} />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/order-details" element={<OrderDetails />} />
        </Routes>
      </main>

      {/* ✅ Fixed Footer */}
      <Footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 900,
        }}
      />

      {/* ✅ Floating Cart Modal */}
      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
      />

      <ToastContainer position="bottom-right" autoClose={2500} theme="colored" />
    </Router>
  );
}

export default App;
