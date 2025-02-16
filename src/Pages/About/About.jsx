import React from "react";
import NavLg from "../../Components/NavLg";
import img1 from "/icons/abtUs-1.jpg";
import img2 from "/icons/footerBanner.png";
import Footer from "../../Components/Footer";

function About() {
  return (
    <div>
      <NavLg />

      <div className="w-full h-full flex justify-center mt-20 py-10 bg-white">
        <img src={img1} alt="" />
      </div>

      <div className="flex flex-col pb-10 justify-center items-center gap-8">
        <h1 className="text-3xl text-center  font-semibold text-zinc-800 ">
          About Us
        </h1>

        <p className="text-zinc-600 w-[50vw] text-lg leading-8">
          Once, learning felt dull with just books and notes. Kids needed
          something more—fun, colorful, and interactive! That’s why the school
          store was born, bringing exciting reads and practical posters to make
          learning playful. With every click, little explorers found stories to
          read, charts to discover, and lessons that came to life. Soon,
          learning wasn’t just about studying,it became an adventure full of
          wonder.
        </p>
      </div>

      <img className="h-[34vh] my-10" src={img2} alt="" />

      <Footer />
    </div>
  );
}

export default About;
