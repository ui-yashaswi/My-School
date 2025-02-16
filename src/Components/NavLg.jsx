import React from "react";
import logo from "/icons/ST-logo.png";
// import { Link } from "react-router-dom";

function NavLg() {
  return (
    <div className="px-28 fixed top-0 left-0 z-20 w-full bg-white hidden lg:flex flex-col">
      <div className=" w-full h-20 bg-pink-10 flex items-center   border-b-zinc-100 justify-between">
        <img className=" h-9 bg-center object-cover" src={logo} alt="" />

        <div className="flex gap-4 text-[16px]">
          <button className=" text-[#262627]">Sign In</button>
          <button className="bg-[#e1482f] text-white px-6 py-2 rounded-sm ">
            Login
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center h-17 text-[16px] border-t border-zinc-100  text-[#262627] gap-8 shadow-md shadow-zinc-100">
        <p className=" hover:text-red-500 cursor-pointer">Decoration Service</p>
        <p className=" hover:text-red-500 cursor-pointer">Smart Wall</p>
        <p className=" hover:text-red-500 cursor-pointer">Hobby Box</p>
        <p className=" hover:text-red-500 cursor-pointer">Skill Hub</p>
        <p className=" hover:text-red-500 cursor-pointer">Game On The Wall</p>
        <p className=" hover:text-red-500 cursor-pointer">Prime Pack</p>
        <p className=" hover:text-red-500 cursor-pointer">Products</p>
      </div>
    </div>
  );
}

export default NavLg;
