import React from "react";
import logo from "/icons/ST-logo.png";

function NavLg() {
  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-white">
      <div className=" w-full h-20 bg-pink-10 flex items-center px-24 border-2 border-b-zinc-100 justify-between">
        <img className=" h-9 bg-center object-cover" src={logo} alt="" />

        <div className="flex gap-4 text-[16px]">
          <button className=" text-[#262627]">Sign In</button>
          <button className="bg-[#e1482f] text-white px-6 py-2 rounded-sm ">
            Login
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center h-17 text-[16px]  text-[#262627] gap-8 shadow-md shadow-zinc-100">
        <p>Decoration Service</p>
        <p>Smart Wall</p>
        <p>Hobby Box</p>
        <p>Skill Hub</p>
        <p>Game On The Wall</p>
        <p>Prime Pack</p>
        <p>Products</p>
      </div>
    </div>
  );
}

export default NavLg;
