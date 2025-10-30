import React from "react";
import "../components/Products/Products.css"; // ✅ Import the CSS

const Products = ({ onAddToCart }) => {
  const products = [
    { name: "Gangajal 250ml", price: 99 },
    { name: "Gangajal 500ml", price: 149 },
    { name: "Gangajal 1 Litre", price: 199 },
  ];

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.name} className="product">
            <img
              src="https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg"
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
