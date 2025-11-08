import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, isOpen, onClose, onIncreaseQty, onDecreaseQty }) => {
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const checkoutHandler = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    console.log(cart, 'final cart')

    onClose()
    navigate("/confirm-order");
  };

  //When user confirms inside dialog
  // const handleConfirm = async (mobile, cart) => {
  //   try {
  //     // 🟢 Build the product summary string (optional for debugging/logging)
  //     const productList = cart
  //       .map(
  //         (item) =>
  //           `• ${item.name} — ₹${item.price} × ${item.qty} = ₹${item.price * item.qty}`
  //       )
  //       .join("\n");

  //     console.log("📱 WhatsApp:", mobile);
  //     console.log("🛒 Cart Items:", cart);
  //     console.log("🧾 Product List:\n", productList);

  //     // 🟢 Call your checkout API or function
  //     await checkoutProduct(mobile, cart);

  //     // Optional: show success feedback
  //     alert("✅ Order confirmed successfully please check your whatsapp!");
  //   } catch (error) {
  //     console.error("❌ Checkout failed:", error);
  //     alert("Something went wrong while confirming your order. Please try again.");
  //   }
  // };

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

      {/* <ConfirmOrder isOpen={isOpenConfirm} cart={cart} onCancel={handleCancel} /> */}

    </>
  );
};

export default Cart;
