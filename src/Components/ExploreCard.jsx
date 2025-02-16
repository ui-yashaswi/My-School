import React from "react";

function ExploreCard({ img, text }) {
  // Change "image" to "img"
  return (
    <div className="relative lg:w-[41vw] w-[90vw] h-[35vh] rounded-lg">
      <img
        src={img} // Here also, change "image" to "img"
        alt={text}
        className="w-full h-full rounded-sm object-cover"
      />

      <div className="absolute bottom-0 left-0 opacity-20 h-30 w-full bg-zinc-500"></div>

      <div className="absolute bottom-4 left-6 flex flex-col gap-5 text-white">
        <p className="text-4xl">{text}</p>
        <button className="bg-white w-34 rounded-sm text-xl py-2 text-zinc-700">
          Explore
        </button>
      </div>
    </div>
  );
}
export default ExploreCard;
