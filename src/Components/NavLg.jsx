import React from "react";
import logo from "/icons/ST-logo.png";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

function NavLg({ login }) {
  const { itemscount } = useSelector((slice) => slice.cart);

  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-white hidden lg:flex flex-col">
      <div className=" px-28  w-full h-20 bg-pink-10 flex items-center   border-b-zinc-100 justify-between">
        <Link to="/">
          <img className=" h-9 bg-center object-cover" src={logo} alt="" />
        </Link>
        {!login ? (
          <div className="flex gap-4 text-[16px]">
            <button className=" text-[#262627]">Sign In</button>
            <Link to="/login">
              <button className="bg-[#e1482f] text-white px-6 py-2 rounded-sm">
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex text-3xl text-zinc-500 gap-5 items-center">
            <Link to={"/search"}>
              <IoSearch />
            </Link>
            <Link to="/profile">
              <FaRegUserCircle />
            </Link>
            <Link to={"/cartdetails"} className="relative">
              <div className="bg-red-600 absolute text-white text-xs flex bottom-0  w-4 h-4 pl-1 rounded-full items-center">
                {itemscount}
              </div>
              <MdOutlineShoppingCart />
            </Link>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center h-17 text-[16px] border-t border-zinc-100  text-[#262627] gap-8 shadow-md shadow-zinc-100">
        <p className=" hover:text-red-500 cursor-pointer">Decoration Service</p>
        <p className=" hover:text-red-500 cursor-pointer">Smart Wall</p>
        <p className=" hover:text-red-500 cursor-pointer">Hobby Box</p>
        <p className=" hover:text-red-500 cursor-pointer">Skill Hub</p>
        <p className=" hover:text-red-500 cursor-pointer">Game On The Wall</p>
        <p className=" hover:text-red-500 cursor-pointer">Prime Pack</p>
        <Link to="/allproducts">
          <p className=" hover:text-red-500 cursor-pointer">Products</p>
        </Link>
      </div>
    </div>
  );
}

export default NavLg;
