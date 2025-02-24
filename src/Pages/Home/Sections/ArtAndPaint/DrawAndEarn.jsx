import React from "react";

import img1 from "/artAndPaint/draw&Earn/de-1.jpeg";
import img2 from "/artAndPaint/draw&Earn/de-2.jpeg";
import img3 from "/artAndPaint/draw&Earn/de-3.jpeg";
import img4 from "/artAndPaint/draw&Earn/de-4.jpeg";
import img5 from "/artAndPaint/draw&Earn/de-1.jpeg";
import img6 from "/artAndPaint/draw&Earn/de-2.jpeg";
import img7 from "/artAndPaint/draw&Earn/de-3.jpeg";
import img8 from "/artAndPaint/draw&Earn/de-4.jpeg";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import banner from "/icons/footerBanner.png";

import PrimaryCard from "../../../../Components/PrimaryCard";

const cardsData = [
  { image: img1, text: "Paint And Shine" },
  { image: img2, text: "Finish the Sketch" },
  { image: img3, text: "Outline $ Express" },
  { image: img4, text: "Crative Journy" },
  { image: img5, text: "Paint And Shine" },
  { image: img6, text: "Finish the Sketch" },
  { image: img7, text: "Outline $ Express" },
  { image: img8, text: "Crative Journy" },
];

function DrawAndEarn() {
  return (
    <div>
      <NavLg />
      <h1 className="text-3xl text-center lg:mt-48 mt-20 my-20 font-semibold text-zinc-800">
        Draw & Earn
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
  );
}

export default DrawAndEarn;
