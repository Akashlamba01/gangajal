import React, { useState } from "react";
import "./Cart.css";
import ConfirmDialog from "../Products/ConfirmDialog.js";
import { checkoutProduct } from "./cartService.js";

const Cart = ({ cart, setCart, isOpen, onClose, onIncreaseQty, onDecreaseQty }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  // const [toMobile, setToMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [msg, setMsg] = useState("");
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const checkoutHandler = () => {
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

    setMsg(`Do you want to place this order?\n\nTotal: ₹${totalPrice}`);
    setIsOpenConfirm(true);
  };

  // 🟢 When user confirms inside dialog
  const handleConfirm = async (mobile, cart) => {
    try {
      // 🟢 Build the product summary string (optional for debugging/logging)
      const productList = cart
        .map(
          (item) =>
            `• ${item.name} — ₹${item.price} × ${item.qty} = ₹${item.price * item.qty}`
        )
        .join("\n");

      console.log("📱 WhatsApp:", mobile);
      console.log("🛒 Cart Items:", cart);
      console.log("🧾 Product List:\n", productList);

      // 🟢 Call your checkout API or function
      await checkoutProduct(mobile, cart);

      // 🟢 Reset UI state after successful checkout
      // setCart([]);
      setIsOpenConfirm(false);

      // Optional: show success feedback
      alert("✅ Order confirmed successfully please check your whatsapp!");
    } catch (error) {
      console.error("❌ Checkout failed:", error);
      alert("Something went wrong while confirming your order. Please try again.");
    }
  };


  // const message =
  //   `Hello!\n` +
  //   `I would like to place an order for the following items:\n\n` +
  //   `${productList}\n\n` +
  //   `Total Amount: ₹${total}\n\n` +
  //   `Please confirm the availability.\n` +
  //   `Thank you!`;

  // const whatsappMessage = encodeURIComponent(message);
  // // 🟢 open WhatsApp with entered number
  // // window.open(`https://wa.me/91${mobile}?text=${whatsappMessage}`, "_blank");


  // };

  // 🟢 Cancel confirm dialog
  const handleCancel = () => {
    setIsOpenConfirm(false);
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
        onClick={handleOverlayClick}
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

      {/* Confirm dialog */}
      <ConfirmDialog
        isOpen={isOpenConfirm}
        message={msg}
        cart={cart}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        setWhatsapp={setWhatsapp}
        whatsapp={whatsapp}
      />
    </>
  );
};

export default Cart;
