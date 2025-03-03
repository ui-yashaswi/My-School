import React from "react";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import img1 from "/activityBlog/abp1.jpeg";
import banner from "/icons/footerBanner.png";

function DoItYourself() {
  return (
    <div>
      <NavLg />

      <h1 className="text-3xl text-center lg:mt-48 mt-20 my-20 font-semibold text-zinc-800">
       Do it Yourself
      </h1>

      <div className="flex lg:flex-row justify-between gap-28 flex-col w-full h-full lg:px-28 px-4">
        <div className="w-[40vw] lg:h-full h-[50vh]  object-cover">
          <img src={img1} alt="" className="object-cover w-full h-full"/>
        </div>
        <div className="flex flex-col w-[45vw] h-full">
          <div className="w-full h-full">
            <h1 className="text-xl font-semibold text-gray-900">
              DIY Cardboard Treat Pack – Step-by-Step Guide
            </h1>

            <h2 className="text-lg font-bold mt-4">Materials Needed</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cardboard or thick craft paper</li>
              <li>Scissors or a craft knife</li>
              <li>Ruler and pencil</li>
              <li>Glue or double-sided tape</li>
              <li>Ribbon or twine (optional)</li>
              <li>Stickers, stamps, or tags (optional)</li>
            </ul>

            <h2 className="text-lg font-bold mt-6">
              Step 1: Cut the Cardboard
            </h2>
            <p className="text-gray-700">
              Take a rectangular piece of cardboard, preferably around 8x10
              inches. Use a ruler and pencil to mark folding lines for the sides
              and flaps. Cut out any extra parts if needed to create a box-like
              shape.
            </p>

            <h2 className="text-lg font-bold mt-6">
              Step 2: Fold and Shape the Pack
            </h2>
            <p className="text-gray-700">
              Fold along the marked lines to create the box structure. Make sure
              the sides align properly and press the creases firmly. If creating
              a pouch-style pack, fold the top part into a flap.
            </p>

            <h2 className="text-lg font-bold mt-6">
              Step 3: Secure and Decorate
            </h2>
            <p className="text-gray-700">
              Use glue or double-sided tape to seal the sides of the treat pack.
              If making a box, attach the bottom flap securely. Decorate using
              stickers, stamps, or markers for a personalized touch.
            </p>

            <h2 className="text-lg font-bold mt-6">
              Step 4: Fill and Seal the Treat Pack
            </h2>
            <p className="text-gray-700">
              Place treats inside, such as chocolates, cookies, or candies. If
              using a pouch design, fold the top and punch a hole to tie a
              ribbon. If using a box design, close the top with a decorative
              sticker or twine. The DIY cardboard treat pack is now ready,
              making it perfect for gifting or party favors.
            </p>
          </div>
        </div>
      </div>



      <div className="w-full h-full bg-white py-10">
        <img src={banner} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default DoItYourself;
