import React from 'react'
import img1 from "/drawingCraft/DIY/diy1.jpeg";
import img2 from "/drawingCraft/DIY/diy2.jpeg";
import img3 from "/drawingCraft/DIY/diy3.jpeg";
import img4 from "/drawingCraft/DIY/diy4.jpeg";
import img5 from "/drawingCraft/DIY/diy1.jpeg";
import img6 from "/drawingCraft/DIY/diy2.jpeg";
import img7 from "/drawingCraft/DIY/diy3.jpeg";
import img8 from "/drawingCraft/DIY/diy4.jpeg";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import banner from "/icons/footerBanner.png";

import PrimaryCard from "../../../../Components/PrimaryCard";

const cardsData = [
  { image: img1, text: "Color & Create" },
  { image: img2, text: "Fun Learning Guide" },
  { image: img3, text: "Play & Explore" },
  { image: img4, text: "Daily Essetial Pack" },
  { image: img5, text: "Color & Create" },
  { image: img6, text: "Fun Learning Guide" },
  { image: img7, text: "Play & Explore" },
  { image: img8, text: "Daily Essetial Pack" },
];

function DIY() {
  return (
    <div>
    <NavLg />
    <h1 className="text-3xl text-center lg:mt-48 mt-20 my-20 font-semibold text-zinc-800">
      Do it Yourself
    </h1>
    <div className="flex gap-6 flex-wrap justify-center lg:px-20">
      {cardsData.map((item, index) => (
        <PrimaryCard key={index} image={item.image} text={item.text} />
      ))}
      
    </div>

    <div className="w-full h-full bg-white py-10">
      <img src={banner} alt="" />
    </div>

    <Footer />
  </div>
  )
}

export default DIY