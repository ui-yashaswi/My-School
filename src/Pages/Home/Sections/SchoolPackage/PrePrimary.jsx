import React from 'react'

import img1 from "/schoolPackage/pre-primary-school/ppsp1.jpeg";
import img2 from "/schoolPackage/pre-primary-school/ppsp2.png";
import img3 from "/schoolPackage/pre-primary-school/ppsp3.jpeg";
import img4 from "/schoolPackage/pre-primary-school/ppsp4.jpeg";
import img5 from "/schoolPackage/pre-primary-school/ppsp1.jpeg";
import img6 from "/schoolPackage/pre-primary-school/ppsp2.png";
import img7 from "/schoolPackage/pre-primary-school/ppsp3.jpeg";
import img8 from "/schoolPackage/pre-primary-school/ppsp4.jpeg";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import banner from "/icons/footerBanner.png";

import PrimaryCard from "../../../../Components/PrimaryCard";

const cardsData = [
  { image: img1, text: "Write & Learn" },
  { image: img2, text: "Sketch Books" },
  { image: img3, text: "Educational Puzzels" },
  { image: img4, text: "Notebook Name Lables" },
  { image: img5, text: "Write & Learn" },
  { image: img6, text: "Sketch Books" },
  { image: img7, text: "Educational Puzzels" },
  { image: img8, text: "Notebook Name Lables" },
];


function PrePrimary() {
  return (
    <div>
      <NavLg />
      <h1 className="text-3xl text-center lg:mt-48 mt-20 my-20 font-semibold text-zinc-800">
        Pre-Primary School Pack
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

export default PrePrimary