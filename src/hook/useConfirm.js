import { useState } from "react";

export default function useConfirm() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [onConfirm, setOnConfirm] = useState(() => () => { });
  const [onCancel, setOnCancel] = useState(() => () => { });

  const confirm = (msg) =>
    new Promise((resolve) => {
      setMessage(msg);
      setIsOpen(true);
      setOnConfirm(() => () => {
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
