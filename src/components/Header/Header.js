import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // ✅ Import here

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header>
      <div className="site-title">Pure Gangajal</div>
      <div className="header-controls">
        <button
          className="cart-btn"
          id="cartBtn"
          aria-label="Open cart"
          title="Cart"
          type="button"
          onClick={onCartClick}
        >
          🛒
          <span className="cart-count" id="cartCount">
            {cartCount}
          </span>
        </button>

        <button
          className="menu-btn"
          id="menuBtn"
          aria-controls="navMenu"
          aria-expanded="false"
          type="button"
        >
          ☰
        </button>

        <nav id="navMenu">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
