import React from "react";
import { useState } from "react";
import NavLg from "../../Components/NavLg";
import { MdOutlineModeEdit } from "react-icons/md";
import img1 from "/others/Product-1.png";
import PaymentDropdown from "../../Components/Products/PaymentDropdown";

function Logindetails() {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <NavLg />
      <div className="w-full h-full flex justify-between bg-[#f5f5f5] px-44 mt-36 gap-10 ">
        {/* _________________left_____________ */}
        <div className="flex h-full w-[50vw] flex-col  my-18 gap-4">
          <div className="flex flex-col bg-white gap-2  p-2 rounded-sm ">
            <div className="flex items-center text-zinc-700 text-lg gap-4 ">
              <h1 className="font-semibold">Login Details</h1>
              <MdOutlineModeEdit className="text-xl" />
            </div>

            <h1 className="text-lg text-zinc-600">Enter User name</h1>
            <h1 className="text-lg text-zinc-400">Contact Number</h1>
          </div>
          <div className="flex flex-col bg-white gap-2  p-2 rounded-sm ">
            <div className="flex items-center text-lg gap-4 ">
              <h1 className="font-semibold ">Delivery Address</h1>
              <MdOutlineModeEdit className="text-xl" />
            </div>

            <h1 className=" text-zinc-600">Please enter Your address</h1>
          </div>

          <PaymentDropdown />
        </div>

        {/* _________________right_____________ */}

        <div className="flex h-[90vh] w-[50vw]  bg-rd-400 flex-col  mt-17   gap-4">
          <div className="flex bg-white gap-4 p-4 item-start">
            <img
              src={img1}
              alt=""
              className="w-[12vw] border border-zinc-300 "
            />

            <div className=" flex flex-col gap-2">
              <h1 className="text-2xl">Wall Teach Alphabet Kit</h1>
              <h1 className="text-xl">
                Rs.<span className="font-semibold"> 150.00</span>
              </h1>
              <h1 className="font-semibold text-lg text-zinc-600">Quantity</h1>

              <div className="w-54 h-14 bg-zinc-100 flex items-center justify-evenly border border-zinc-300 rounded-lg">
                <button
                  onClick={() => setCount((prev) => Math.max(0, prev - 1))}
                  className="text-xl font-bold w-10 h-10 flex items-center justify-center  bg-white hover:bg-gray-200"
                >
                  -
                </button>

                <h1 className="text-lg  font-semibold w-10 text-center">
                  {count}
                </h1>

                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="text-xl font-bold w-10 h-10 flex items-center justify-center  border-zinc-400  bg-white hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logindetails;
