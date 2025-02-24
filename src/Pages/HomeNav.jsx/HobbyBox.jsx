import React from 'react'
import img1 from "/hobbyBox/hb-1.jpeg";
import img2 from "/hobbyBox/hb-2.jpeg";
import img3 from "/hobbyBox/hb-3.jpeg";
import img4 from "/hobbyBox/hb-4.png";
import img5 from "/hobbyBox/hb-1.jpeg";
import img6 from "/hobbyBox/hb-2.jpeg";
import img7 from "/hobbyBox/hb-3.jpeg";
import img8 from "/hobbyBox/hb-4.png";
import NavLg from "../../Components/NavLg";
import Footer from "../../Components/Footer";
import banner from "/icons/footerBanner.png";
import PrimaryCard from '../../Components/PrimaryCard';
const cardsData = [
  { image: img1, text: "Craft & Create " },
  { image: img2, text: "Build & Play" },
  { image: img3, text: "Sketch & Shade " },
  { image: img4, text: "Explore & Learn" },
  { image: img5, text: "Craft & Create e" },
  { image: img6, text: "Sketch & Code" },
  { image: img7, text: "Express & Create" },
  { image: img8, text: "Explore & Learn" },
];

function HobbyBox() {
  return (
    <div>
    <NavLg />
    <h1 className="text-3xl  text-center my-20 lg:mt-48 mt-20 font-semibold text-zinc-800">
     Hobby Box
      
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

export default HobbyBox