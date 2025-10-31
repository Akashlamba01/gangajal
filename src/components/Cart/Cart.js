import React from "react";
import "./Cart.css";
import useConfirm from "../../hook/useConfirm";

const Cart = ({ cart, isOpen, onClose, onIncreaseQty, onDecreaseQty }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const { confirm, ConfirmDialog } = useConfirm();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close when clicking on the overlay
    }
  };

  const checkoutHandler = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const productList = cart
      .map(
        (item) =>
          `• ${item.name} — ₹${item.price} × ${item.qty} = ₹${item.price * item.qty}`
      )
      .join("\n");

    const totalPrice = total;

    const message =
      `Hello!\n` +
      `I would like to place an order for the following items:\n\n` +
      `${productList}\n\n` +
      `Total Amount: ₹${totalPrice}\n\n` +
      `Please confirm the availability.\n` +
      `Thank you!`;

    const confirmed = await confirm(
      `Do you want to place this order?\n\nTotal: ₹${totalPrice}`
    );
    if (!confirmed) return;

    const whatsappMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917037585801?text=${whatsappMessage}`, "_blank");
  };

  return (
    <>
      <section
        id="cartModal"
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cartTitle"
        style={{ display: isOpen ? "flex" : "none" }}
        onClick={handleOverlayClick} // 👈 added overlay click handler
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
                    <span>
                      {item.name} - ₹{item.price}
                    </span>
                    <div className="cart-item-controls">
                      <button onClick={() => onDecreaseQty(item.name)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onIncreaseQty(item.name)}>+</button>
                    </div>
                  </li>
                ))}
              </ul>

              <div id="modalCartTotal">Total: ₹{total}</div>

              <button id="modalCheckoutBtn" onClick={checkoutHandler}>
                Checkout
              </button>
            </>
          )}
        </div>
      </section>

      <ConfirmDialog />
    </>
  );
};

export default Cart;
