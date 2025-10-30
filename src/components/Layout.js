// Layout.js
import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";

const Layout = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (name, price) => {
    setCart((prev) => [...prev, { name, price }]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleCartClick = () => setIsCartOpen(true);

  return (
    <>
      <Header cartCount={cart.length} onCartClick={handleCartClick} />
      <main>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { onAddToCart: handleAddToCart })
        )}
      </main>
      <Footer />
      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
      />
    </>
  );
};

export default Layout;
