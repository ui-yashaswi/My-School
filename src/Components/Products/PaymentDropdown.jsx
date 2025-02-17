import React, { useState } from "react";
import { BsCreditCard } from "react-icons/bs";

function PaymentDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const paymentOptions = ["Credit Card", "Debit Card", "PayPal", "UPI"];

  return (
    <div className="relative w-[38vw] ">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-4  bg-white  font-semibold text-lg rounded-sm flex items-center justify-between"
      >
        {/* Icon + Text */}
        <span className="flex items-center gap-3">
          <BsCreditCard className="text-gray-600" />
          {selectedPayment ? selectedPayment : "  Payment Method"}
        </span>

        <span className="text-gray-600">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className=" w-full bg-white border border-gray-300 shadow-md rounded-md mt-1 p-2 z-10">
          {paymentOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            >
              <input
                type="radio"
                name="payment"
                value={option}
                checked={selectedPayment === option}
                onChange={() => {
                  setSelectedPayment(option);
                  setIsOpen(false);
                }}
                className="cursor-pointer "
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaymentDropdown;
