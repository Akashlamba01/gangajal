import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ cartCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="site-title">
        <h3>Pure Gangajal</h3>
      </div>
      <div className="header-controls">
        <button
          className="cart-btn"
          aria-label="Open cart"
          title="Cart"
          type="button"
          onClick={onCartClick}
        >
          🛒
          <span className="cart-count">{cartCount}</span>
        </button>

        <button
          className="menu-btn"
          aria-controls="navMenu"
          aria-expanded={menuOpen}
          type="button"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav id="navMenu" className={menuOpen ? "show" : ""}>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
