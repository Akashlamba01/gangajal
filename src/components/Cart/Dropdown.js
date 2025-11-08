import { useState } from "react";
import './Dropdown.css'

const Dropdown = ({ label, options, value, onChange, disabled }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown ${disabled ? "disabled" : ""}`} onClick={() => !disabled && setOpen(!open)}>
      <div className="dropdown-selected">
        {value || label}
        <span className={`arrow ${open ? "up" : "down"}`}>▼</span>
      </div>

      {open && (
        <div className="dropdown-menu">
          {options.map((opt) => (
            <div
              key={opt}
              className={`dropdown-item ${opt === value ? "active" : ""}`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown