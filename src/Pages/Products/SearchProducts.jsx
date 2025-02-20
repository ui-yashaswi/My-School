import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import img1 from "/icons/indiaMap.jpg";
import PrimaryCard from "../../Components/PrimaryCard";
import Footer from "../../Components/Footer";
import { IoSearch } from "react-icons/io5";
import NavLg from "../../Components/NavLg";

const productcard = [
  { image: img1, text: " Map Pointing" },
  { image: img1, text: " Map Pointing" },
  { image: img1, text: " Map Pointing" },
  { image: img1, text: " Map Pointing" },
  { image: img1, text: " Map Pointing" },
  { image: img1, text: " Map Pointing" },
  { image: img1, text: " Map Pointing" },
  { image: img1, text: " Map Pointing" },
];
function SearchProducts() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <NavLg login={true} />
      <div className="w-full h-full flex flex-col mt-[200px]  pb-20 justify-center items-center">
        <div className="flex items-center gap-2">
          <input
            className="text-zinc-400 text-lg border-red-500 w-[40vw] py-2 border rounded-sm flex justify-between items-center px-2"
            placeholder="india maps"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <IoSearch size={25} className="text-zinc-400 cursor-pointer" />
        </div>

        {/* <RxCross2 className="text-zinc-400" /> */}

        {!searchInput ? (
          <div>
            <img src="/icons/school.png" className="w-[50vw]" alt="" />
          </div>
        ) : (
          <div className="lg:px-20 ">
            <h1 className="text-zinc-400 text-2xl py-10 text-center">
              Showing results for{" "}
              <span className="  text-black font-semibold">Maps</span>
            </h1>
            <div className="flex gap-6 flex-wrap justify-center   ">
              {productcard.map((item, index) => (
                <PrimaryCard key={index} image={item.image} text={item.text} />
              ))}
              <div className=" w-full h-full flex justify-center my-3 ">
                <button className=" border-2 text-zinc-800 font-semibold text-lg rounded-sm w-90 py-3">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default SearchProducts;
