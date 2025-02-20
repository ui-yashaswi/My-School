import React from "react";
import NavLg from "../../Components/NavLg";
import Carousel from "../Home/Sections/Carousel";
import MySchool from "../Home/Sections/MySchool";
import Resource from "../Home/Sections/Resource";
import CoreSub from "../Home/Sections/CoreSub";
import MainCategory from "../Home/Sections/MainCategory";
import SelectedMat from "../Home/Sections/SelectedMat";
import DrawingCraft from "../Home/Sections/DrawingCraft";
import ActivityBlog from "../Home/Sections/ActivityBlog";
import Footer from "../../Components/Footer";
import banner from "/icons/footerBanner.png";
import SchoolPackage from "../Home/Sections/SchoolPackage";

function AllProducts() {
  return (
    <div>
      <NavLg login={true} />
      <Carousel />
      <MySchool />
      <SchoolPackage />
      <Resource />
      <CoreSub />
      <MainCategory />
      <SelectedMat />
      <DrawingCraft />
      <ActivityBlog />

      <div className="w-full h-full bg-white py-10">
        <img src={banner} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default AllProducts;
