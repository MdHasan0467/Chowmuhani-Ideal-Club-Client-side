// components/BloodMultiSelect.jsx
import { useState, useRef, useEffect } from "react";

/*
🧠 Logic:
1. Dropdown open/close state
2. Selected blood array passed from parent
3. Checkbox toggle → add/remove selected blood
4. Click outside → dropdown auto close
5. Selected values badge হিসেবে trigger এ দেখাবে
*/

const bloodOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodMultiSelect = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  // Click outside dropdown → close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle selection
  const handleSelect = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="relative w-full" ref={ref}>
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="select select-bordered w-full cursor-pointer flex items-center justify-between"
      >
        <span className="truncate">
          {selected.length > 0 ? selected.join(", ") : "Blood Select করুন"}
        </span>
        <span>▼</span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white border rounded-xl shadow p-3 max-h-60 overflow-y-auto">
          {bloodOptions.map((b) => (
            <label
              key={b}
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100 rounded"
            >
              <input
                type="checkbox"
                checked={selected.includes(b)}
                onChange={() => handleSelect(b)}
              />
              {b}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default BloodMultiSelect;