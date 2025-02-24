import React from "react";

import img2 from "/activityBlog/ab-1.jpg";
import img1 from "/activityBlog/ab-2.jpg";
import ExploreCard from "../../../../Components/ExploreCard";
const cards = [
  { img: img2, text: "Origami Practice" , path:"/origami"},
  { img: img1, text: "DIY-Do It YourSelf" , path:"/diy-doityourself"},
];

function ActivityBlog() {
  return (
    <div className="lg:px-28  px-4">
    <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
      School Packages
    </h1>
    <div className="w-full flex lg:flex-row flex-col flex-wrap justify-between   gap-6 py-4">
      {cards.map((item, index) => (
        <ExploreCard key={index} img={item.img} text={item.text} path={item.path} />
      ))}
    </div>
  </div>
  );
}

export default ActivityBlog;
