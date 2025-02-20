import React, { useState } from "react";
import { BsCreditCard } from "react-icons/bs";
import { Link } from "react-router-dom";

function PaymentDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const paymentOptions = [
    { catName: "UPI Payments", modes: ["Phone Pe", "Your Own Upi Id"] },
    { catName: "Debit Card", modes: ["Phone Pe", "Your Own Upi Id"] },
    { catName: "PayPal", modes: ["Phone Pe", "Your Own Upi Id"] },
    { catName: "UPI", modes: ["Phone Pe", "Your Own Upi Id"] },
  ];
  const [mode, setMode] = useState("");
  return (
    <div className="relative lg:w-full ">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-4  bg-white  font-semibold text-lg rounded-sm flex items-center justify-between cursor-pointer"
      >
        {/* Icon + Text */}

        <span className="flex items-center gap-3">
          <BsCreditCard className="text-gray-600 " />
          {selectedPayment ? selectedPayment : " Choose Payment Method"}
        </span>
        {/* </Link> */}

        <span className="text-gray-600">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className=" w-full bg-white border border-gray-300  rounded-md mt-1 z-10">
          {paymentOptions.map((option, idx) => (
            <div
              className="flex gap-2 flex-col border border-zinc-200 bg-blue-50 px-3 cursor-pointer justify-center"
              onClick={() => {
                setMode(idx);
              }}
            >
              <div className="flex gap-2 items-center">
                <input type="radio" checked={idx == mode} />
                <h1 className="p-2">{option.catName}</h1>
              </div>
              {mode == idx && (
                <div className=" p-2 flex  items-center  gap-4">
                  {mode === 0 && (
                    <div className=" p-2 flex  items-center  gap-4 ">
                      <div className="flex items-center gap-4 mb-2 p-2">
                        <input type="radio" name="pay-options" />

                        <h2>Paytm</h2>
                      </div>
                      <div className="flex items-center gap-4 mb-2 p-2">
                        <input type="radio" name="pay-options" />

                        <h2>Your Own UPI</h2>
                      </div>
                    </div>
                  )}

                  {mode == 1 && (
                    <div className="flex flex-col gap-4 w-[300px] lg:w-full    p-4">
                      <label htmlFor="">Enter Card Number</label>
                      <input
                        type="password"
                        className="h-10 rounded-lg  pl-2 border border-zinc-400 outline-none focus:outline-none"
                      />
                      <div className="flex w-full justify-between gap-5  item-center">
                        <div className="flex w-full items-centerborder border rounded-sm px-4 border-zinc-400">
                          <input
                            type="text"
                            placeholder="valid up to "
                            className=" pl-2 w-full   outline-none focus:outline-none h-10"
                          />
                          <select
                            name=""
                            id=""
                            className="h-10 px-2 rounded-lg  pl-2 outline-none focus:outline-none"
                          >
                            <option className="text-zinc-400" value="">
                              M
                            </option>
                            <option value="">1</option>
                            <option value="">3</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                          </select>
                          <select
                            name=""
                            id=""
                            className="h-10 rounded-lg  px-2  outline-none focus:outline-none"
                          >
                            <option className="text-zinc-400" value="">
                              Y
                            </option>
                            <option value="">29</option>
                            <option value="">30</option>
                            <option value="">01</option>
                            <option value="">02</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          className="h-10 pl-2 rounded-lg border border-zinc-400 outline-none focus:outline-none"
                          placeholder="CVV"
                        />
                      </div>

                      <button className="w-full text-white bg-red-200 hover:bg-red-600 py-3 rounded-lg">
                        {" "}
                        pay 150
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaymentDropdown;
