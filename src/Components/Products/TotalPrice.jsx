import React from "react";
import { MdDone } from "react-icons/md";

function TotalPrice() {
  return (
    <div>
      {" "}
      <div className="flex flex-col">
        <div className="flex flex-col bg-white w-full p-4 gap-4">
          <h1 className="fontsemibold text-lg">Price Deatils</h1>
          <div className=" flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="text-zinc-600 text-lg">Item Total</h1>
              <h1 className="text-zinc-600 text-lg">1</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-zinc-600 text-lg">Delivery Fee</h1>
              <h1 className="text-green-500 font-semibold ">Free</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-zinc-600  text-lg">Extra Discount for you</h1>
              <h1 className="text-green-500 font-semibold">Free</h1>
            </div>
          </div>

          <div className="flex justify-between text-zinc-800 font-semibold text-lg border-zinc-200 border-t bg-white p-2">
            <h1>Total Payable</h1>
            <h1>₹ 160</h1>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <h1 className="text-lg flex items-center gap-3 font-semibold text-zinc-700">
            Secure Checkout{" "}
            <span className="text-green-500 text-lg border-2 border-green-500  rounded-full">
              <MdDone />
            </span>
          </h1>
          <h1 className=" text-zinc-500">
            Safe and secure Payments. Easy returns 100% Authentic Products.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TotalPrice;
