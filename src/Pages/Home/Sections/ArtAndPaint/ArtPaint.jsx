import React from "react";
import ExploreCard from "../../../../Components/ExploreCard";
import img1 from "/artAndPaint/ap-1.jpg";
import img2 from "/artAndPaint/ap-2.jpg";

const cards = [
  { img: img1, text: "Artist at Your Service", path:"/arts-and-paints"},
  { img: img2, text: "Draw & Earn", path:"/draw-and-earn" },
];

function ArtPaint() {
  return (
    <div className="lg:px-28 px-4">
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        Artist & Painters
      </h1>
      <div className="flex  justify-between lg:flex-row flex-col gap-6 py-4">
        {cards.map((item, index) => (
          <ExploreCard key={index} img={item.img} text={item.text} path={item.path} />
        ))}
      </div>
    </div>
  );
}

export default ArtPaint;
