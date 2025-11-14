import React, { useState } from "react";
import "../components/Cart/Cart.css";
import indianStates from "../hook/stateAndCitys.json";
import Dropdown from "../components/Cart/Dropdown";
import { validateForm } from "../utils/formValidateion";
import { toast } from "react-toastify";
import { checkoutCart } from "../components/Cart/cartService";
import { API_ROOT } from "../config/config";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = ({ cart }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    landmark: "",
    city: "",
    dist: "",
    state: "",
    pincode: "",
    paymentMethod: "COD",
    cart: cart,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryCharge = 0;
  const finalTotal = total + deliveryCharge;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm(formData);
    if (error) {
      toast.error(error.message);
      return;
    }

    setLoading(true);

    try {
      const data = await checkoutCart(formData, finalTotal);
      console.log(data, "checkout response");

      if (!data.razorOrder) {
        toast.success("Order placed successfully with COD");
        navigate("/order-success", { state: { order: data } });
        return;
      }

      const options = {
        key: "rzp_test_4UrA9vSVORBo7q",
        amount: data.razorOrder.amount,
        currency: "INR",
        name: "Namami Gange",
        description: "Order Payment - Namami Gange",
        image: "https://yourdomain.com/logo.png",
        order_id: data.razorOrder.id,
        callback_url: `${API_ROOT}/paymentverification`,
        prefill: {
          name: data.orderData?.fullName,
          email: data.orderData?.email,
          contact: data.orderData?.phone,
        },
        notes: {
          orderId: data.orderData?._id,
          address: data.orderData?.address,
          product_details: data.orderData?.cart
            .map((item) => `${item.name} - ₹${item.price}`)
            .join(", "),
        },
        theme: {
          color: "#ff9933",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();

      razor.on("payment.failed", (response) => {
        toast.error("Payment failed. Please try again.");
        console.error("Payment failed:", response.error);
      });

      //whatsapp full setup down ->
      // const addressMsg = `
      //   Name: ${formData.fullName}
      //   Phone: ${formData.phone}
      //   Address: ${formData.address}
      //   ${formData.landmark ? `Landmark: ${formData.landmark}` : ""}
      //   City: ${formData.city}
      //   State: ${formData.state}
      //   Pincode: ${formData.pincode}
      //   Payment Method: ${formData.paymentMethod}
      // `.trim();
      // const whatsappMessage = `
      //   🛍️ *New Order from Pure Gangajal*
      //   --------------------------------
      //   ${productList}

      //   --------------------------------
      //   *Subtotal:* ₹${total}
      //   *Delivery Charges:* ₹${deliveryCharge}
      //   *Total Payable:* ₹${finalTotal}

      //   --------------------------------
      //   📦 *Delivery Address:*
      //   ${addressMsg}

      //   Thank you for shopping with us 🙏
      // `.replace(/\n/g, "%0A");
      // const whatsappNumber = "919876543210"; // Replace with your WhatsApp number
      // window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    } catch (err) {
      toast.error(err.message || "Something went wrong during checkout.");
    } finally {
      setLoading(false);
    }
  };

  if (!cart || cart.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        Your cart is empty.
      </p>
    );

  return (
    <section className="order-page">
      <h2 className="page-title">Review and Confirm Your Order</h2>

      <form onSubmit={handleSubmit} className="amazon-checkout">
        <div className="checkout-left">
          <div className="section">
            <h3>1. Delivery Address</h3>
            <div className="address-form">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="address"
                placeholder="Flat, House no., Building, Company, Apartment... *"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City or Town *"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="landmark"
                placeholder="Landmark (Optional)"
                value={formData.landmark}
                onChange={handleChange}
              />

              <Dropdown
                label="Select State"
                options={Object.keys(indianStates)}
                value={formData.state}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    state: value,
                    city: "",
                  }))
                }
                disabled={false}
              />

              <Dropdown
                label="Select District"
                options={formData.state ? indianStates[formData.state] : []}
                value={formData.dist}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, dist: value }))
                }
                disabled={!formData.state}
              />

              <input
                type="number"
                name="pincode"
                placeholder="Pincode *"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="section">
            <h3>2. Payment Method</h3>
            <div className="payment-method">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={formData.paymentMethod === "COD"}
                  onChange={handleChange}
                />
                Cash on Delivery (Pay when you receive)
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online"
                  checked={formData.paymentMethod === "Online"}
                  onChange={handleChange}
                />
                Pay Online (UPI / Card)
              </label>
            </div>
          </div>
        </div>

        <div className="checkout-right">
          <div className="section summary-box">
            <h3>3. Order Summary</h3>
            <ul className="summary-items">
              {cart.map((item, i) => (
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

            <hr />
            <div className="summary-totals">
              <p>Subtotal: ₹{total}</p>
              <p className="base-price">Delivery: ₹{deliveryCharge}</p>
              <h4>Total: ₹{finalTotal}</h4>
            </div>

            <button
              type="submit"
              className="confirm-btn"
              disabled={loading}
              style={{
                opacity: loading ? 0.6 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Processing..." : "Place Your Order 💬"}
            </button>

            <p className="secure-text">
              🔒 Safe & Secure Checkout via Razorpay / COD
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ConfirmOrder;