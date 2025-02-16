import React from "react";
import { RxCross2 } from "react-icons/rx";
import img1 from "/icons/indiaMap.jpg";
import PrimaryCard from "../../Components/PrimaryCard";
import Footer from "../../Components/Footer";

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
  return (
    <div>
      <div className="w-full h-full flex flex-col py-20 justify-center items-center">
        <div className="border-red-500 w-[40vw] py-2 border rounded-sm flex justify-between items-center px-2 ">
          <h1 className="text-zinc-400 text-lg">
            india maps <span className="text-black">|</span>
          </h1>
          <RxCross2 className="text-zinc-400" />
        </div>

        <h1 className="text-zinc-400 text-xl py-10">
          Showing results for <span className="  text-black">Maps</span>
        </h1>

        <div className="flex gap-6 flex-wrap justify-center lg:px-20">
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

      <Footer />
    </div>
  );
}

export default SearchProducts;
