import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/Cart/Cart.css";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const order = state?.order; // received order data
  console.log("Order Data:", order);

  return (
    <section className="order-page" style={{ overflowY: "unset" }}>
      <div className="modal-content" style={{ textAlign: "center", maxWidth: "480px" }}>
        <button id="closeCartBtn" onClick={() => navigate("/")}>&times;</button>

        <h2 id="cartTitle">🎉 Order Placed Successfully!</h2>

        <p style={{ color: "#333", marginTop: "10px", fontSize: "15px" }}>
          Thank you for shopping with <strong>Namami Gange</strong> 🙏
          Your order has been received and is now being processed.
        </p>

        <div className="order-summary" style={{ marginTop: "20px", background: "#fffbe6" }}>
          <h3 style={{ color: "#c45500", marginBottom: "10px" }}>Order Details</h3>
          <ul className="order-items">
            <li className="order-item">
              <div className="item-info">
                <span>Order ID</span>
                <span>{order?._id || "N/A"}</span>
              </div>
            </li>
            <li className="order-item">
              <div className="item-info">
                <span>Payment Method</span>
                <span>{order?.paymentMethod || "COD"}</span>
              </div>
            </li>
            <li className="order-item">
              <div className="item-info">
                <span>Total Amount</span>
                <span>₹{order?.totalAmount || 0}</span>
              </div>
            </li>
            <li className="order-item">
              <div className="item-info">
                <span>Estimated Delivery</span>
                <span>3–5 Business Days</span>
              </div>
            </li>
          </ul>

          <div className="order-total">
            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: "green", fontWeight: "600" }}>Confirmed</span>
            </p>
          </div>
        </div>

        <button id="modalCheckoutBtn" onClick={() => navigate("/")}>
          Continue Shopping 🛍️
        </button>

        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          You will receive a confirmation email and WhatsApp update shortly.
        </p>
      </div>
    </section>
  );
};

export default OrderSuccess;
