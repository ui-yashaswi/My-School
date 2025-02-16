import React from "react";
import ExploreCard from "../../../Components/ExploreCard";
import img1 from "/artAndPaint/ap-1.jpg";
import img2 from "/artAndPaint/ap-2.jpg";

function ExploreSection() {
  return (
    <div className="px-28">
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        Artist & Painters
      </h1>
      <div className="flex  justify-center py-4 ">
        <ExploreCard image={img1} text="Quality Education" />
        <ExploreCard image={img2} text="Smart Learning" />
      </div>
    </div>
  );
}

export default ExploreSection;
