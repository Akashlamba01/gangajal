import "./Products.css"; // ✅ Import the CSS

const Products = ({ onAddToCart, useProducts, loading }) => {

  // const products = [
  //   { name: "Gangajal 250ml", price: 99, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
  //   { name: "Gangajal 500ml", price: 149, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
  //   { name: "Gangajal 1 Litre", price: 199, img: "https://m.media-amazon.com/images/I/71POXRccXcL._UF1000,1000_QL80_.jpg" },
  // ];

  return (
    <section id="products" className="products">
      <h2 className="about-heading">Our Products</h2>
      {loading ? (

        <div className="product-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="product skeleton-card">
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-price"></div>
              <div className="skeleton skeleton-btn"></div>
            </div>
          ))}
        </div>

      ) : (

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
                <p className="product-desc">
                  Ideal for puja, home purification, Griha Pravesh & festivals.
                </p>

                <p className="price">
                  {p.discount > 0 && (
                    <span className="base-price">₹{p.basePrice}</span>
                  )}
                  <div className="final-price">₹{discountedPrice.toFixed(2)}</div>
                </p>

                <button
                  onClick={() =>
                    onAddToCart({
                      id: p._id,
                      name: p.name,
                      basePrice: p.basePrice,
                      price: discountedPrice,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>

      )}


    </section>

  );
};

export default Products;
