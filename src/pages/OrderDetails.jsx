import React from "react";
import "../components/Cart/Cart.css"; // Ensure your cart.css path is correct

export default function OrderDetailsPage() {
  const order = {
    id: "ORD-987654",
    customerName: "Rajan Kumar",
    email: "myemail@example.com",
    phone: "9876543210",
    address: "House No. 22, Delhi, India",
    pincode: "110001",
    items: [
      { name: "Premium Gangajal 1L", qty: 2, price: 120, basePrice: 150 },
      { name: "Pure Copper Kalash", qty: 1, price: 450, basePrice: 500 },
    ],
    totalAmount: 690,
  };

  const shareOrderDetails = () => {
    const msg = `📦 *Order Details*\n\nOrder ID: ${order.id}\nName: ${order.customerName}\nPhone: ${order.phone}\nAddress: ${order.address}\n\nItems:\n${order.items
      .map((i) => `- ${i.name} x${i.qty} (₹${i.price})`)
      .join("\n")}\n\nTotal Amount: ₹${order.totalAmount}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="order-page">
      <h1 className="page-title">Your Order Details</h1>

      <div className="amazon-checkout">
        {/* LEFT SIDE */}
        <div className="checkout-left">
          {/* CUSTOMER INFO */}
          <div className="section">
            <h3>Customer Information</h3>
            <p>
              <strong>Name:</strong> {order.customerName}
            </p>
            <p>
              <strong>Phone:</strong> {order.phone}
            </p>
            <p>
              <strong>Email:</strong> {order.email}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Pincode:</strong> {order.pincode}
            </p>
          </div>

          {/* SHIPPING */}
          <div className="section">
            <h3>Shipping Details</h3>
            <p>
              Your order will be delivered within <strong>3–5 days</strong>.
            </p>
            <p>
              We deliver pure, lab-tested <strong>Gangajal</strong> with safe
              packaging.
            </p>
          </div>

          <div className="section">
            <h3>Previous Orders</h3>
            <ul className="order-items">
              <li className="order-item">
                <div className="item-info">
                  <span>Order ID: ORD-123456</span>
                  <span>₹540</span>
                </div>
                <p className="item-qty">Delivered on: 15 Jan 2025</p>
              </li>


              <li className="order-item">
                <div className="item-info">
                  <span>Order ID: ORD-987321</span>
                  <span>₹320</span>
                </div>
                <p className="item-qty">Delivered on: 03 Jan 2025</p>
              </li>


              <li className="order-item">
                <div className="item-info">
                  <span>Order ID: ORD-654789</span>
                  <span>₹890</span>
                </div>
                <p className="item-qty">Delivered on: 27 Dec 2024</p>
              </li>
            </ul>
          </div>


        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="checkout-right">
          <div className="summary-box">
            <h3>Order Summary</h3>
            <ul className="summary-items">
              {order.items.map((item, i) => (
                <li key={i}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>Qty: {item.qty}</p>
                  </div>
                  <span>
                    <span className="base-price">
                      ₹{(item.basePrice) * item.qty}
                    </span>
                    <span style={{ fontWeight: "bold" }}>
                      ₹{item.price * item.qty}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <ul className="summary-items">
              <li>
                <span>Subtotal</span>
                <span>₹{order.totalAmount}</span>
              </li>
              <li>
                <span>Delivery Charges</span>
                <span style={{ color: "green", fontWeight: 600 }}>FREE</span>
              </li>
              <li>
                <span>Packaging</span>
                <span>₹0</span>
              </li>
            </ul>

            <div className="summary-totals">
              <h4>
                <span>Total Amount</span> <span>₹{order.totalAmount}</span>
              </h4>
            </div>

            <button className="confirm-btn" onClick={shareOrderDetails}>
              Share Order Details
            </button>
            <p className="secure-text">Safe & Secure Information</p>
          </div>
        </div>
      </div>
    </div>
  );
}