import React from "react";
import "../components/Products/Products.css"; // ✅ Import the CSS

const Products = ({ onAddToCart }) => {
  const products = [
    { name: "Gangajal 250ml", price: 99, image: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
    { name: "Gangajal 500ml", price: 149, image: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
    { name: "Gangajal 1 Litre", price: 199, image: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
  ];

  return (
    <section id="products" className="products">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.name} className="product">
            <img
              src={p.image}
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
