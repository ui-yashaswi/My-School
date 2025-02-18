import React from "react";
import { Link } from "react-router-dom";

function PrimaryCard({ image, text }) {
  return (
    <div className="lg:w-[20vw] h-[38vh] border-2 shadow-md  border-zinc-50 flex flex-col my-2 justify-center">
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
        <div className="bg-zinc-800 py-3 hover:bg-zinc-700 cursor-pointer">
          <p className="text-center text-white text-lg">{text}</p>
        </div>
      </Link>
    </div>
  );
}

export default PrimaryCard;
