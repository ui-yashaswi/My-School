import React from "react";
import ExploreCard from "../../../Components/ExploreCard";
import img1 from "/schoolPackage/sp-1.jpg";
import img2 from "/schoolPackage/sp-2.jpg";
import img3 from "/schoolPackage/sp-2.jpg";
import img4 from "/schoolPackage/sp-2.jpg";

const cards = [
  { img: img1, text: "Pre-School" },
  { img: img2, text: "Pre Primary School" },
  { img: img3, text: "Primary School" },
  { img: img4, text: "High School" },
];

function SchoolPackage() {
  return (
    <div className="lg:px-28 px-4">
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        School Packages
      </h1>
      <div className="flex flex-wrap justify-between gap-6 py-4">
        {cards.map((item, index) => (
          <ExploreCard key={index} img={item.img} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default SchoolPackage;
