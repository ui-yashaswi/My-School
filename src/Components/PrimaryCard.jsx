import React, { useState } from "react";
import { Link } from "react-router-dom";

function PrimaryCard({ image, text }) {
  return (
    <div className="relative lg:w-[20vw] h-[38vh] border-2 shadow-md border-zinc-50 flex flex-col my-2 justify-center group">
      {/* New Button Appears on Hover */}
      <button className="absolute bottom-13 left-1/2 transform -translate-x-1/2 bg-zinc-800  lg:w-full text-lg text-white  py-3  shadow-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        {text}
      </button>

      {/* Image Section */}
      <div className="lg:w-full h-full flex items-end justify-center">
        <img
          className="lg:max-w-[16vw] w-[90vw] h-[28vh] object-cover bg-center"
          src={image}
          alt={text}
        />
      </div>

      {/* Text Section */}
      <Link to={"/details"}>
        <div className="bg-zinc-800 py-3 group-hover:bg-[#e24c30] hover:bg-[#e23039] cursor-pointer">
          <p className="text-center text-white text-lg group-hover:hidden">
            {text}
          </p>
          <p className="text-center text-white bg-[#e24c30]  text-lg hidden group-hover:block">
            Add to Cart
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PrimaryCard;
