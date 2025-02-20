import React from 'react'
import PrimaryCard from "../../Components/PrimaryCard";

import img1 from "/smartWall/sw-1.jpeg";
import img2 from "/smartWall/sw-2.jpeg";
import img3 from "/smartWall/sw-3.png";
import img4 from "/smartWall/sw-4.png";
import img5 from "/smartWall/sw-1.jpeg";
import img6 from "/smartWall/sw-2.jpeg";
import img7 from "/smartWall/sw-3.png";
import img8 from "/smartWall/sw-4.png";
import NavLg from "../../Components/NavLg";
import Footer from "../../Components/Footer";
import banner from "/icons/footerBanner.png";

const cardsData = [
  { image: img1, text: "Wall Brand Decoration" },
  { image: img2, text: "Selling Wall Hangings" },
  { image: img3, text: "Classrooom Enhencement" },
  { image: img4, text: "Craft And DIY Material" },
  { image: img5, text: "Wall Brand Decoration" },
  { image: img6, text: "Selling Wall Hangings" },
  { image: img7, text: "Classrooom Enhencement" },
  { image: img8, text: "Craft And DIY Material" },
];

function SmartWall() {
  return (
    <div>
      <NavLg />
      <h1 className="text-3xl  text-center my-20 font-semibold text-zinc-800">
       Smart Walls
        
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

      <div className="w-full h-full bg-white py-10">
        <img src={banner} alt="" />
      </div>

      <Footer />
    </div>  
  )
}

export default SmartWall