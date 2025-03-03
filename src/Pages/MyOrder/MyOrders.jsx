import React from "react";
import NavLg from "../../Components/NavLg";
import Footer from "../../Components/Footer";
import img1 from "/others/EmptyCart1.jpg"
import { IoSearch } from "react-icons/io5";
function MyOrders() {
  return (
    <div className="flex w-full h-full  items-center flex-col">
      <NavLg />
      <div className="flex  gap-2 border-zinc-300 justify-between   rounded-sm items-center px-2 w-[30vw] py-2 border-2 lg:mt-48">
        <input
          className="text-zinc-500 text-lg  "
          placeholder="Search for oredered products"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <IoSearch size={25} className="text-zinc-400 cursor-pointer" />
      </div>

      <img src={img1} alt=""  className="w-[25vw] mb-28"/>

      <Footer/>
    </div>
  );
}

export default MyOrders;
