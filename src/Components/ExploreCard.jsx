import React from "react";

function ExploreCard({ image, text }) {
  return (
    <div className="flex w-full shadow-2xl ">
      <div className="relative w-[40vw] h-[35vh] rounded-lg   bg-red-600">
        {/* Image */}
        <img src={image} className="w-full h-full rounded-sm  object-cover" />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 opacity-20  h-30 w-[40vw] bg-zinc-500"></div>

        {/* Text on Top */}
        <div className=" absolute  bottom-4 text-white  left-6 flex flex-col gap-5 bg-amber-00">
          <p className="text-4xl">{text}</p>

          <button className="bg-white w-34 rounded-sm text-xl py-2 text-zinc-700">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
