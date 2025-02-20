import React from "react";
import ExploreCard from "../../../Components/ExploreCard";
import img2 from "/drawingCraft/dc-1.png";
import img1 from "/drawingCraft/dc-2.jpg";

const cards = [
  { img: img2, text: "Smart Learning" },
  { img: img1, text: "DIY-Do It YourSelf" },
];

function DrawingCraft() {
  return (
    <div className="lg:px-28 px-4">
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        Drawing & cart
      </h1>
      <div className="flex flex-wrap justify-between gap-6 py-4">
        {cards.map((item, index) => (
          <ExploreCard key={index} img={item.img} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default DrawingCraft;
