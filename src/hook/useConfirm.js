import { useRef, useState } from "react";

export default function useConfirm() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [onConfirm, setOnConfirm] = useState(() => () => { });
  const [onCancel, setOnCancel] = useState(() => () => { });
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState("");
  const whatsappRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // allow only digits
    setWhatsapp(value);
  };

  const confirm = (msg) =>
    new Promise((resolve) => {
      setMessage(msg);
      setIsOpen(true);
      setWhatsapp("");
      setError("");

      setOnConfirm(() => () => {
        const number = whatsappRef.current?.value.trim() || "";
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(number)) {
          setError("Please enter a valid WhatsApp number (10–15 digits).");
          return;
        }

        setIsOpen(false);
        resolve(true);
      });

      setOnCancel(() => () => {
        setIsOpen(false);
        resolve(false);
      });
    });

  const ConfirmDialog = () =>
    isOpen ? (
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
            <button onClick={onConfirm} className="confirm-btn">
              Confirm
            </button>
          </div>
        </div>
      </div>
    ) : null;

  return { confirm, ConfirmDialog };
}
