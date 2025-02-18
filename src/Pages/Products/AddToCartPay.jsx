import React, { useState } from "react";
// import { IoStarSharp } from "react-icons/io5";

const main = "/AddToCart/main.png";
const image = "/AddToCart/image.png";
import { BiSolidPencil } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../../rtk/slices/cartSlice.js";
const AddToCard_pay = () => {
  const { itemscount } = useSelector((slice) => slice.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [payment, setPayment] = useState(true);

  return (
    <div className="container mx-auto px-28 bg-gray-100 h-screen">
      {/* Services */}
      <div className="flex gap-8 justify-center shadow-sm py-2">
        {[
          "Decoration Service",
          "Smart Wall",
          "Hobby Box",
          "Skill Hub",
          "Game on The wall",
          "Prime Pack",
          "Products",
        ].map((item, index) => (
          <h1 key={index} className="cursor-pointer px-2 py-1">
            {item}
          </h1>
        ))}
      </div>

      {/* Hero Section */}
      <div className="flex justify-center gap-7">
        <div className="w-1/2 flex  pl-20 pt-8  gap-6 items-start justify-start flex-col ">
          <div className="border  w-full p-2 bg-white">
            <h1 className="flex items-center gap-6 font-semibold text-xl py-1">
              Login Details{" "}
              <span>
                <BiSolidPencil className="text-xl" />
              </span>
            </h1>
            <h1>Shanmukha sai</h1>
            <h1>
              Contact: <span>7012220109</span>
            </h1>
          </div>
          <div className="border  w-full p-2 bg-white">
            <h1 className="flex items-center gap-6 font-semibold text-xl py-1">
              Delivery Address
              <span>
                <BiSolidPencil className="text-xl" />
              </span>
            </h1>
            <h1 className="w-[90%]">
              Plot No. 12, Road No. 5,KPHB Phase 3,Kukatpally,
              Hyderabad, Telangana, 500072.
            </h1>
          </div>
          <div className="w-full bg-white border p-2">
            <h1
              className="flex items-center  font-semibold text-xl py-1 px-2 gap-2 relative "
              onClick={() => setPayment(!payment)}
            >
              <span>
                <MdOutlinePayment className="text-xl" />
              </span>{" "}
              Choose Payment Method
              <span className="absolute right-2">
                {payment ? (
                  <IoIosArrowDown className="text-xl" />
                ) : (
                  <IoIosArrowUp className="text-xl" />
                )}
              </span>{" "}
            </h1>

            {payment && (
              <div className="bg-blue">
                <div className="flex gap-2 px-2">
                  <input type="radio" name="payment" id="" />
                  <label htmlFor="">UPI Payments</label>{" "}
                </div>
                <div className="flex gap-2 px-2">
                  <input type="radio" name="payment" id="" />
                  <label htmlFor="">Creadit / Debit / ATM card</label>{" "}
                </div>
                <div className="flex gap-2 px-2">
                  <input type="radio" name="payment" id="" />
                  <label htmlFor="">Cash on Delivery</label>{" "}
                </div>
                <div className="flex gap-2 px-2">
                  <input type="radio" name="payment" id="" />
                  <label htmlFor="">UPI Payments</label>{" "}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-1/2 h-full pt-8 flex flex-col gap-6 pr-24 ">
          <div className="flex w-auto border mr-28 p-2 gap-2 bg-white">
            <div className="p-2 border ">
              <img src={main} className="w-32" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">
                Wall Teach Alphabet Kit
              </h1>
              <h1 className="text-xl font-semibold">RS.150.00</h1>
              <h1 className="text-xl font-semibold">Quantity</h1>
              <div className="border w-32 rounded-md flex justify-evenly">
                <button
                  className="border-r size-8 text-xl"
                  onClick={() => dispatch(decrementCount())}
                >
                  -
                </button>
                <span className="border-r w-16 flex items-center justify-center">
                  {itemscount}
                </span>
                <button
                  className="size-8 text-xl"
                  onClick={() => dispatch(incrementCount())}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white mr-28 p-2 flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Price Details</h1>
            <div className="flex  justify-between ">
              <h1 className="">Item total </h1>
              {true ? (
                <span>1</span>
              ) : (
                <span className="text-red-400">Free</span>
              )}
            </div>
            <div className="flex  justify-between ">
              <h1 className="">Delivery fee</h1>
              {!true ? (
                <span>1</span>
              ) : (
                <span className="text-red-400">Free</span>
              )}
            </div>
            <div className="flex  justify-between ">
              <h1 className="">Extra Discount for you </h1>
              {!true ? (
                <span>1</span>
              ) : (
                <span className="text-red-400">Free</span>
              )}
            </div>
            <div className="flex  justify-between border-t">
              <h1 className="text-xl font-bold">Total Payable </h1>
              {true ? (
                <span>150.00</span>
              ) : (
                <span className="text-red-400">Free</span>
              )}
            </div>
          </div>
          <div className="mr-28 px-2">
            <h1 className="flex  items-center gap-2">
              Secure Checkout{" "}
              <span>
                <FaRegCircleCheck className="text-red-500" />
              </span>
            </h1>
            <p className="text-xs">
              Safe and Secure Payments. Easy returns 100% Authentic Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCard_pay;
