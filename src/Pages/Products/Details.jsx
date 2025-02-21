import img1 from "/others/Product-1.png";
import QuantityCard from "../../Components/Products/QuantityCard";

import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import {
  decrementCount,
  incrementCount,
  incrementCountByPayload,
} from "../../rtk/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Description from "../../Components/Products/Description";
import Reviews from "../../Components/Products/Reviews";
import NavLg from "../../Components/NavLg";
import { Link } from "react-router-dom";

function Details() {
  const [count, setCount] = useState(1);
  const { itemscount } = useSelector((slice) => slice.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <NavLg login={true} />
      <div className="flex lg:flex-row flex-col w-full h-full mt-28 py-20 lg:px-28 px-4 gap-18 justify-between">
        {/* Product Image */}
        <div className="lg:w-[65vw] bg-rd-200 lg:h-[70vh] border border-zinc-200 rounded-lg shadow-lg">
          <img src={img1} alt="Product" className="w-[75vw] " />
        </div>

        <div className="flex w-full flex-col bg-pnk-400 ">
          <div className="w-[50vw] h-full flex flex-col gap-3">
            <h1 className="text-4xl">Wall Teach Alphabet Kit</h1>

            <div className="w-full flex gap-2">
              <div className="flex text-lg items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <IoIosStar key={index} className="text-amber-300" />
                ))}
              </div>
              <div className="text-zinc-500">5 reviews</div>
            </div>

            <h1 className="font-semibold text-lg">RS.150.00</h1>
            <h1 className="text-zinc-500">
              Shipping charges will be calculated at checkout
            </h1>
            <h1 className="font-semibold text-lg">Quantity</h1>

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

          <button
            className="lg:w-[33vw] text-center cursor-pointer py-2 text-lg rounded-md mt-3 font-semibold text-zinc-700 border border-zinc-500"
            onClick={() => dispatch(incrementCountByPayload({ count }))}
          >
            ADD TO CART
          </button>
          <Link to="/cartdetails">
            <button className="lg:w-[33vw] w-full cursor-pointer hover:red-600 text-center py-2 text-lg rounded-md mt-3 font-semibold text-white bg-red-500">
              BUY NOW
            </button>
          </Link>

          <Description />

          <div className="flex w-full h-full flex-col pb-2 gap-3">
            <h1 className="text-xl font-semibold">Rating and Reviews</h1>
            <h1 className="text-zinc-500">
              Genuin Reviews by parents and Kids
            </h1>
          </div>

          <Reviews />
          <Reviews />
        </div>
      </div>
    </div>
  );
}
export default Details;
