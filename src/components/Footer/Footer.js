import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // ✅ Import CSS

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Brand / Description */}
        <div className="footer-col">
          <h3>Pure Gangajal</h3>
          <p>
            Delivering authentic Gangajal from Haridwar & Gangotri to your
            doorstep with purity and devotion.
          </p>
          <div className="footer-social">
            <Link to="#">🔵</Link>
            <Link to="#">🔴</Link>
            <Link to="#">🟣</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#products">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:support@puregangajal.com">support@puregangajal.com</a></p>
          <p>Phone: +91-7037585801</p>
          <p>Haridwar, Uttarakhand, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Pure Gangajal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
