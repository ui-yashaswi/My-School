import React from "react";
import img1 from "/resourcePackage/rp-1.jpg";

// ✅ Image & Text Array
const resources = [
  { image: img1, text: "KG" },
  { image: img1, text: "LKG" },
  { image: img1, text: "UKG" },
  { image: img1, text: "1ST CLASS" },
  { image: img1, text: "2ND CLASS" },
  { image: img1, text: "3RD CLASS" },
  { image: img1, text: "4TH CLASS" },
  { image: img1, text: "5TH CLASS" },
  { image: img1, text: "HIGH SCHOOLS" },
  { image: img1, text: "OTHER LERNINGS" },
];

function Resource() {
  return (
    <div>
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        Artist & Painters
      </h1>

      {/* ✅ Flex wrap with 5 images per row */}
      <div className="w-full h-full my-20 px-28 flex flex-wrap justify-center gap-4">
        {resources.map((item, index) => (
          <div
            key={index}
            className="relative w-[19%] h-[34vh] border-zinc-100 my-2 border-2 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover object-center"
              src={item.image}
              alt={item.text}
            />

            {/* Overlay */}
            <div className="absolute bottom-0 w-full h-[26%] bg-black opacity-50"></div>

            {/* Text */}
            <p className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-white text-lg text-nowrap font-semibold z-10">
              {item.text}
            </p>
          </div>
        ))}
        <div className=" w-full h-full flex justify-center my-3 ">
          <button className=" border-2 text-zinc-800 font-semibold text-lg rounded-sm w-90 py-3">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resource;
