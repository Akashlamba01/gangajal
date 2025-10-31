import React from "react";
import "./Products.css"; // ✅ Import the CSS

const Products = ({ onAddToCart }) => {
  const products = [
    { name: "Gangajal 250ml", price: 99, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
    { name: "Gangajal 500ml", price: 149, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
    { name: "Gangajal 1 Litre", price: 199, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
  ];

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.name} className="product">
            <img
              src={p.img}
              alt={p.name}
            />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => onAddToCart(p.name, p.price)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
