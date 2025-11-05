import React, { useState } from "react";
import "../Cart/Cart.css";

const ConfirmDialog = ({ isOpen, message, whatsapp, setWhatsapp, cart, onCancel, onConfirm }) => {

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setWhatsapp(value);
  };

  const handleConfirm = () => {
    if (whatsapp.length !== 10) {
      setError("Please enter a valid 10-digit number.");
      return;
    }
    setError("");
    onConfirm(whatsapp, cart);
  };

  if (!isOpen) return null; // Don't render when closed

  return (
    <div
      id="confirmModal"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className="confirm-box">
        <h3>Confirm Order</h3>
        <p>{message}</p>

        <div className="form-group">
          <label htmlFor="whatsapp">Enter Your WhatsApp Number:</label>
          <input
            id="whatsapp"
            type="tel"
            placeholder="e.g. 9876543210"
            value={whatsapp}
            onChange={handleChange}
            // ref={whatsappRef}
            required
          />
          {error && <p className="error-text">{error}</p>}
        </div>

        <div className="confirm-actions">
          <button onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
          <button onClick={handleConfirm} className="confirm-btn">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
};

export default ConfirmDialog;
