import React from "react";

function PrimaryCard({ image, text }) {
  return (
    <div className="w-[20vw] h-[38vh] border-2 shadow-md  border-zinc-50 flex flex-col my-2 justify-center">
      {/* Image Section */}
      <div className="w-full h-full flex items-end justify-center">
        <img
          className="max-w-[16vw] h-[28vh] object-cover bg-center"
          src={image}
          alt={text}
        />
      </div>

      {/* Text Section */}
      <div className="bg-zinc-800 py-3">
        <p className="text-center text-white text-lg">{text}</p>
      </div>
    </div>
  );
}

export default PrimaryCard;
