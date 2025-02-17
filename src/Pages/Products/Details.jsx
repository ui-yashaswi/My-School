import React from "react";
import img1 from "/others/Product-1.png";
import QuantityCard from "../../Components/Products/QuantityCard";
import Description from "../../Components/Products/Description";
import Reviews from "../../Components/Products/Reviews";
import NavLg from "../../Components/NavLg";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div>
      <NavLg />
      <div className="flex w-full h-full mt-40 py-20 lg:px-28 gap-18 justify-between">
        {/* Product Image */}
        <div className="w-[65vw] bg-rd-200 h-[70vh] border border-zinc-200 rounded-lg shadow-lg">
          <img src={img1} alt="Product" className="w-[75vw] " />
        </div>

        <div className="flex w-full flex-col bg-pnk-400 ">
          <QuantityCard />

          <button className="w-[33vw] text-center py-2 text-lg rounded-md mt-3 font-semibold text-zinc-700 border border-zinc-500">
            ADD TO CART
          </button>
          <Link to="/logindetails">
            <button className="w-[33vw] text-center py-2 text-lg rounded-md mt-3 font-semibold text-white bg-red-500">
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
