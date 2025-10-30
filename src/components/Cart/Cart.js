import React from "react";
import "./Cart.css";

const Cart = ({ cart, isOpen, onClose, onRemoveItem }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section
      id="cartModal"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cartTitle"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="modal-content">
        <button id="closeCartBtn" onClick={onClose}>
          &times;
        </button>

        <h3 id="cartTitle">Your Cart</h3>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul id="modalCartItems">
              {cart.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span>
                  <div>
                    <span>₹{item.price}</span>
                    <button onClick={() => onRemoveItem(index)}>×</button>
                  </div>
                </li>
              ))}
            </ul>

            <div id="modalCartTotal">Total: ₹{total}</div>

            <button id="modalCheckoutBtn">Checkout</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
