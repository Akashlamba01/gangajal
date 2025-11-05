import "./Products.css"; // ✅ Import the CSS

const Products = ({ onAddToCart, useProducts }) => {

  // const products = [
  //   { name: "Gangajal 250ml", price: 99, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
  //   { name: "Gangajal 500ml", price: 149, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
  //   { name: "Gangajal 1 Litre", price: 199, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
  // ];


  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {useProducts.map((p) => {
          const discountedPrice = p.discount
            ? (p.basePrice - p.discount)
            : p.basePrice;

          return (
            <div key={p._id} className="product">
              {p.images && p.images[0] && (
                <img src={p.images[0]} alt={p.name} />
              )}
              <h3>{p.name}</h3>

              <p className="price">
                {p.discount > 0 && (
                  <>
                    <span className="base-price">₹{p.basePrice}</span>
                    {/* <span className="discount">-₹{p.discount}</span> */}
                  </>
                )}
                <div className="final-price">₹{discountedPrice.toFixed(2)}</div>
              </p>

              <button
                onClick={() =>
                  onAddToCart({ id: p._id, name: p.name, price: discountedPrice })
                }
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>

  );
};

export default Products;
