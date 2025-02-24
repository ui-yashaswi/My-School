import React from 'react'


import PrimaryCard from "../../Components/PrimaryCard";

import img1 from "/printableGall/pg-1.jpeg";
import img2 from "/printableGall/pg-2.jpeg";
import img3 from "/printableGall/pg-3.png";
import img4 from "/printableGall/pg-4.jpeg";
import img5 from "/printableGall/pg-1.jpeg";
import img6 from "/printableGall/pg-2.jpeg";
import img7 from "/printableGall/pg-3.png";
import img8 from "/printableGall/pg-4.jpeg";
import NavLg from "../../Components/NavLg";
import Footer from "../../Components/Footer";
import banner from "/icons/footerBanner.png";

const cardsData = [
  { image: img1, text: "Think & Solve" },
  { image: img2, text: "Build & innovate" },
  { image: img3, text: "Express & Create" },
  { image: img4, text: "Play & Perform" },
  { image: img5, text: "Think & Solve" },
  { image: img6, text: "Build & innovate" },
  { image: img7, text: "Express & Create" },
  { image: img8, text: "Play & Perform" },
];


function PrintGall() {
  return (
    <div>
    <NavLg />
    <h1 className="text-3xl  text-center my-20 lg:mt-48 mt-20 font-semibold text-zinc-800">
     Printable Gallery
      
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

export default PrintGall