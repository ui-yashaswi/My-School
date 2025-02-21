import React from "react";
import { useState } from "react";
import NavLg from "../../Components/NavLg.jsx";
import { MdOutlineModeEdit } from "react-icons/md";
import img1 from "/others/Product-1.png";
import PaymentDropdown from "../../Components/Products/PaymentDropdown.jsx";
import TotalPrice from "../../Components/Products/TotalPrice.jsx";
import Footer from "../../Components/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../../rtk/slices/cartSlice.js";

function Cartdetails() {
  const [count, setCount] = useState(1);
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [editAddress, setEditAddress] = useState(false);
  const { itemscount } = useSelector((slice) => slice.cart);
  const dispatch = useDispatch();
  const [editLoginDetail, setEditLoginDetail] = useState(false);

  return (
    <div className="">
      <NavLg login={true} />
      <div className="w-full h-full lg:flex-row flex-col flex justify-between bg-[#f5f5f5] lg:px-44 px-4 mt-36 lg:gap-10 ">
        {/* _________________left_____________ */}
        <div className="flex h-full w-full  lg:w-[50vw] flex-col  my-18 gap-4">
          <div className="flex flex-col bg-white gap-2  p-2 rounded-sm ">
            <div className="flex items-center text-zinc-700 text-lg gap-4 ">
              <h1 className="font-semibold">Login Details</h1>

              <MdOutlineModeEdit
                className="text-xl cursor-pointer"
                onClick={() => setEditLoginDetail(true)}
              />
            </div>

            <input
              className="text-lg text-zinc-600"
              value={username}
              placeholder="Enter User name"
              disabled={!editLoginDetail}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="text-lg text-zinc-600"
              value={contact}
              placeholder="Contact Number"
              onChange={(e) => setContact(e.target.value)}
              disabled={!editLoginDetail}
            />

            {editLoginDetail && (
              <button
                className={`px-6 max-w-40 py-2 ${
                  contact && username ? "bg-red-600" : "bg-red-300"
                } cursor-pointer rounded-md text-white`}
                disabled={!username || !contact}
                onClick={() => setEditLoginDetail(false)}
              >
                save
              </button>
            )}
          </div>
          <div className="flex flex-col bg-white gap-2  p-2 rounded-sm ">
            <div className="flex items-center text-lg gap-4 ">
              <h1 className="font-semibold ">Delivery Address</h1>
              <MdOutlineModeEdit
                className="text-xl"
                onClick={() => setEditAddress(true)}
              />
            </div>

            <input
              className=" text-zinc-600"
              value={address}
              placeholder="Please enter Your address"
              disabled={!editAddress}
              onChange={(e) => setAddress(e.target.value)}
            />

            {editAddress && (
              <button
                className={`px-6 max-w-40 py-2 ${
                  address ? "bg-red-600" : "bg-red-300"
                } cursor-pointer rounded-md text-white`}
                disabled={!address}
                onClick={() => setEditAddress(false)}
              >
                save address
              </button>
            )}
          </div>

          <PaymentDropdown />
        </div>

        {/* _________________right_____________ */}

        <div className="flex lg:h-[90vh] w-full lg:w-[50vw]  bg-rd-400 flex-col  mt-17   gap-4">
          <div className="flex lg:flex-row flex-col bg-white gap-4 p-4 item-start">
            <img
              src={img1}
              alt=""
              className="lg:w-[12vw] w-full border border-zinc-300 "
            />

            <div className=" flex flex-col gap-2">
              <h1 className="text-2xl">Wall Teach Alphabet Kit</h1>
              <h1 className="text-xl">
                Rs.<span className="font-semibold"> 150.00</span>
              </h1>
              <h1 className="font-semibold text-lg text-zinc-600">Quantity</h1>

              <div className="w-54 h-14 bg-zinc-100 flex items-center justify-evenly border border-zinc-300 rounded-lg">
                <button
                  onClick={() => {
                    count > 1 && setCount((prev) => prev - 1);
                  }}
                  className="text-xl font-bold w-10 h-14 flex items-center justify-center border-r pr-5 border-zinc-300 cursor-pointer"
                >
                  -
                </button>

                <h1 className="text-lg  font-semibold w-10 text-center">
                  {count}
                </h1>

                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="text-xl font-bold w-10 h-14 flex items-center justify-center border-l pl-5 border-zinc-200   cursor-pointer "
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Price-Details */}

          <TotalPrice />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cartdetails;
