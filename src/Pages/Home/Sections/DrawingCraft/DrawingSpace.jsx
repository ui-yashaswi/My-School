import React from 'react'
import img1 from "/drawingCraft/DrawingSpace/drs1.jpeg";
import img2 from "/drawingCraft/DrawingSpace/drs2.jpeg";
import img3 from "/drawingCraft/DrawingSpace/drs3.jpeg";
import img4 from "/drawingCraft/DrawingSpace/drs4.jpeg";
import img5 from "/drawingCraft/DrawingSpace/drs1.jpeg";
import img6 from "/drawingCraft/DrawingSpace/drs2.jpeg";
import img7 from "/drawingCraft/DrawingSpace/drs3.jpeg";
import img8 from "/drawingCraft/DrawingSpace/drs4.jpeg";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import banner from "/icons/footerBanner.png";

import PrimaryCard from "../../../../Components/PrimaryCard";

const cardsData = [
  { image: img1, text: "Fine Art Drawing" },
  { image: img2, text: "Illustration Design" },
  { image: img3, text: "Mindfull Drwing" },
  { image: img4, text: "Architectural Drawing" },
  { image: img5, text: "Fine Art Drawing" },
  { image: img6, text: "Illustration Design" },
  { image: img7, text: "Mindfull Drwing" },
  { image: img8, text: "Architectural Drawing" },
];

function DrawingSpace() {
  return (
    <div>
    <NavLg />
    <h1 className="text-3xl text-center lg:mt-48 mt-20 my-20 font-semibold text-zinc-800">
      Drawing Space
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

export default DrawingSpace