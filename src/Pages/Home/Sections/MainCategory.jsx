import React from "react";
import PrimaryCard from "../../../Components/PrimaryCard";

import img1 from "/mainCategory/mc-1.jpg";
import img2 from "/mainCategory/mc-2.jpg";
import img3 from "/mainCategory/mc-3.jpg";
import img4 from "/mainCategory/mc-4.jpg";
import img5 from "/mainCategory/mc-5.jpg";
import img6 from "/mainCategory/mc-6.jpg";
import img7 from "/mainCategory/mc-7.jpg";
import img8 from "/mainCategory/mc-8.png";

const cardsData = [
  { image: img1, text: "Visual Work Sheet" },
  { image: img2, text: "Interactive Learning" },
  { image: img3, text: "Mathematics Fun" },
  { image: img4, text: "Mathematics Fun" },
  { image: img5, text: "Mathematics Fun" },
  { image: img6, text: "Mathematics Fun" },
  { image: img7, text: "Mathematics Fun" },
  { image: img8, text: "Mathematics Fun" },
];

function MainCategory() {
  return (
    <div>
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        Artist & Painters
      </h1>
      <div className="flex gap-6 flex-wrap justify-center lg:px-20">
        {cardsData.map((item, index) => (
          <PrimaryCard key={index} image={item.image} text={item.text} />
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

export default MainCategory;
