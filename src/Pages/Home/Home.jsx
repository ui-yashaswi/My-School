import React from "react";
import NavLg from "../../Components/NavLg";
import Carousel from "./Sections/Carousel";
import MySchool from "./Sections/MySchool";
import ArtPaint from "./Sections/ArtPaint";
import Resource from "./Sections/Resource";
import CoreSub from "./Sections/CoreSub";
import MainCategory from "./Sections/MainCategory";
import SelectedMat from "./Sections/SelectedMat";
import DrawingCraft from "./Sections/DrawingCraft";
import ActivityBlog from "./Sections/ActivityBlog";
import Footer from "../../Components/Footer";
import banner from "/icons/footerBanner.png";
import SchoolPackage from "./Sections/SchoolPackage";
// import AddToCart from "../../AddToCard";

function Home() {
  return (
    <div>
      <NavLg />
      <Carousel />
      <MySchool />
      <ArtPaint />
      <SchoolPackage />
      <Resource />
      <CoreSub />
      <MainCategory />
      <SelectedMat />
      <DrawingCraft />
      <ActivityBlog />

      {/* <AddToCart /> */}
      <div className="w-full h-full bg-white py-10">
        <img src={banner} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
