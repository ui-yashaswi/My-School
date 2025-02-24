import React from 'react'
import img1 from "/schoolPackage/high-school/hs1.png";
import img2 from "/schoolPackage/high-school/hs2.jpeg";
import img3 from "/schoolPackage/high-school/hs3.png";
import img4 from "/schoolPackage/high-school/hs4.png";
import img5 from "/schoolPackage/high-school/hs1.png";
import img6 from "/schoolPackage/high-school/hs2.jpeg";
import img7 from "/schoolPackage/high-school/hs3.png";
import img8 from "/schoolPackage/high-school/hs4.png";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import banner from "/icons/footerBanner.png";

import PrimaryCard from "../../../../Components/PrimaryCard";

const cardsData = [
  { image: img1, text: "Geometry Box & Calculators" },
  { image: img2, text: "Digital Learning" },
  { image: img3, text: "Study Essentials" },
  { image: img4, text: "Exam Pack Kit" },
  { image: img5, text: "Geometry Box & Calculators" },
  { image: img6, text: "Digital Learning" },
  { image: img7, text: "Study Essentials" },
  { image: img8, text: "Exam Pack Kit" },
];

function HighSchool() {
  return (
    <div>   
    <NavLg />
    <h1 className="text-3xl text-center lg:mt-48 mt-20 my-20 font-semibold text-zinc-800">
      High School Pack
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

export default HighSchool