import React from "react";
import logo from "/icons/ST-logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

function NavLg({ login }) {
  const { pathname } = useLocation();

  const { itemscount } = useSelector((slice) => slice.cart);

  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-white flex flex-col">
      <div className=" lg:px-28 px-4  w-full h-20 bg-pink-10 flex items-center    border-b-zinc-100 justify-between">
        <Link to="/">
          <img className=" h-9 bg-center object-cover" src={logo} alt="" />
        </Link>
        {!login ? (
          <div className="flex gap-4  items-center text-[16px]">
            <Link to={"/creataccount"}>
              <button className=" text-[#262627]">Sign up</button>
            </Link>

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
              {itemscount > 0 && (
                <div className="bg-red-600 absolute text-white text-xs flex top-0 left-5 w-4 h-4 pl-1 rounded-full items-center">
                  {itemscount}
                </div>
              )}
              <MdOutlineShoppingCart />
            </Link>
          </div>
        )}
      </div>

      <div className="lg:flex hidden justify-center items-center h-17 text-[16px] border-t  border-zinc-100  text-[#262627] gap-8 shadow-md shadow-zinc-100">
        <Link to={"/services/decoration"}>
          <p
            className={` ${
              pathname.includes("decoration")
                ? " text-red-500 font-semibold "
                : " "
            } hover:text-red-500 cursor-pointer`}
          >
            Decoration Service
          </p>
        </Link>

        <Link to={"/services/smartwall"}>
          <p
          className={` ${
            pathname.includes("smartwall")
              ? " text-red-500 font-semibold "
              : " "
          } hover:text-red-500 cursor-pointer`}
            
            >
            Smart Wall
          </p>
        </Link>

        <Link to={"/services/hobbybox"}>
          <p className={` ${
            pathname.includes("hobbybox")
              ? " text-red-500 font-semibold "
              : " "
          } hover:text-red-500 cursor-pointer`}>Hobby Box</p>
        </Link>

        <Link to={"/services/skillhub"}>
          <p className={` ${
            pathname.includes("skillhub")
              ? " text-red-500 font-semibold "
              : " "
          } hover:text-red-500 cursor-pointer`}>Skill Hub</p>
        </Link>

        <Link to={"/services/gameonwall"}>
          <p className={` ${
            pathname.includes("gameonwall")
              ? " text-red-500 font-semibold "
              : " "
          } hover:text-red-500 cursor-pointer`}>Game On The Wall</p>
        </Link>

        <Link to={"/services/primepack"}>
          <p className={` ${
            pathname.includes("primepack")
              ? " text-red-500 font-semibold "
              : " "
          } hover:text-red-500 cursor-pointer`}>Prime Pack</p>
        </Link>

        <Link to="/allproducts">
          <p className={` ${
            pathname.includes("allproducts")
              ? " text-red-500 font-semibold "
              : " "
          } hover:text-red-500 cursor-pointer`}>Products</p>
        </Link>
      </div>
    </div>
  );
}

export default NavLg;
