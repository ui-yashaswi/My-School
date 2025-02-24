import React from "react";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import banner from "/icons/footerBanner.png";

function Origami() {
  return (
    <div>
      <NavLg />
      <div className="w-full h-full bg-white py-10">
        <img src={banner} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Origami;
