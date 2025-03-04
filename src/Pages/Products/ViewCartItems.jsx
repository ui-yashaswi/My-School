import React from "react";
import NavLg from "../../Components/NavLg";
import Footer from "../../Components/Footer";
import { IoSearch } from "react-icons/io5";
import EmptyCart from "/others/EmptyCart1.jpg";

function ViewCartItems() {
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center items-center">
        <NavLg login={true} />

        <h1 className="text-3xl font-semibold text-zinc-700 lg:mt-60">
          MY Orders
        </h1>

        <div className="flex items-center border border-zinc-400 rounded-sm justify-center my-14  w-[30vw]  gap-2 px-8">
          <input
            className="text-zinc-400 text-lg  w-[40vw] py-2 focus:outline-none  rounded-sm flex justify-between items-center px-2"
            placeholder="Search for ordered products"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <IoSearch size={25} className="text-zinc-400 cursor-pointer" />
        </div>

        <div className="w-full h-full flex justify-center items-center mt-20 mb-60">
          <img src={EmptyCart} alt="" className="w-[40vh]" />
        </div>

        <div></div>

        <Footer />
      </div>
    </div>
  );
}

export default ViewCartItems;
