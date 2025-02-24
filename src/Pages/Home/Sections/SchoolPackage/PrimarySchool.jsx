import React from 'react'
import img1 from "/schoolPackage/primary-school/ps1.png";
import img2 from "/schoolPackage/primary-school/ps2.jpeg";
import img3 from "/schoolPackage/primary-school/ps3.jpeg";
import img4 from "/schoolPackage/primary-school/ps4.jpeg";
import img5 from "/schoolPackage/primary-school/ps1.png";
import img6 from "/schoolPackage/primary-school/ps2.jpeg";
import img7 from "/schoolPackage/primary-school/ps3.jpeg";
import img8 from "/schoolPackage/primary-school/ps4.jpeg";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import banner from "/icons/footerBanner.png";

import PrimaryCard from "../../../../Components/PrimaryCard";

const cardsData = [
  { image: img1, text: "Read & Learn" },
  { image: img2, text: "Learn & Play" },
  { image: img3, text: "Project Essentials" },
  { image: img4, text: "Spell & Speak" },
  { image: img5, text: "Read & Learn" },
  { image: img6, text: "Learn & Play" },
  { image: img7, text: "Project Essentials" },
  { image: img8, text: "Spell & Speak" },
];

function PrimarySchool() {
  return (
    <div>   
    <NavLg />
    <h1 className="text-3xl text-center lg:mt-48 mt-20 my-20 font-semibold text-zinc-800">
      Primary School Pack
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

export default PrimarySchool