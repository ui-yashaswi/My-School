import React from 'react'
import img1 from "/gameOnWall/gw-1.jpeg";
import img2 from "/gameOnWall/gw-2.jpeg";
import img3 from "/gameOnWall/gw-3.jpeg";
import img4 from "/gameOnWall/gw-4.png";
import img5 from "/gameOnWall/gw-1.jpeg";
import img6 from "/gameOnWall/gw-2.jpeg";
import img7 from "/gameOnWall/gw-3.jpeg";
import img8 from "/gameOnWall/gw-4.png";
import NavLg from "../../Components/NavLg";
import Footer from "../../Components/Footer";
import banner from "/icons/footerBanner.png";
import PrimaryCard from '../../Components/PrimaryCard';

const cardsData = [
  { image: img1, text: "Target & Score " },
  { image: img2, text: "Move & Match" },
  { image: img3, text: "Race & Win " },
  { image: img4, text: "Guess & Play" },
  { image: img5, text: "Target & Score" },
  { image: img6, text: "Move & Match" },
  { image: img7, text: "Race & Win" },
  { image: img8, text: "Guess & Play" },
];

function GameOnWall() {
  return (
    <div>
    <NavLg />
    <h1 className="text-3xl  text-center my-20 lg:mt-48 mt-20 font-semibold text-zinc-800">
     Game On The Wall
      
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

export default GameOnWall