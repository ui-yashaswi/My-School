import React from "react";
import NavLg from "../../../../Components/NavLg";
import Footer from "../../../../Components/Footer";
import img1 from "/activityBlog/abp1.jpeg";
import banner from "/icons/footerBanner.png";
function Origami() {
  return (
    <div>
      <NavLg />

      <h1 className="text-3xl text-center lg:mt-48 mt-20 my-20 font-semibold text-zinc-800">
        Origami
      </h1>

      <div className="flex lg:flex-row justify-between gap-28 flex-col w-full h-full lg:px-28 px-4">
        <div className="w-[40vw] lg:h-full h-[50vh]  object-cover">
          <img src={img1} alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="max-w-3xl mx-auto p-6 bg-white ">
          <h2 className="text-lg text-gray-700">
            Here's a simple step-by-step guide to making an origami dinosaur
            (T-Rex):
          </h2>

          <h3 className="text-xl font-bold mt-4">Materials Needed:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>One square sheet of origami paper</li>
          </ul>

          <h3 className="text-lg font-bold mt-6">Step-by-Step Instructions:</h3>

          <div className="mt-4">
            <h4 className="text-lg font-bold">Step 1: Make the Base Fold</h4>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Start with a square paper, colored side facing down.</li>
              <li>
                Fold the paper diagonally in both directions to form an “X”
                crease.
              </li>
              <li>
                Fold it in half vertically and horizontally to create a “+”
                crease.
              </li>
              <li>
                Collapse into a triangle by bringing two opposite corners
                together (forming a waterbomb base).
              </li>
            </ol>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-bold">Step 2: Shape the Body</h4>
            <ol className="list-decimal list-inside text-gray-600">
              <li>
                With the triangle’s open end facing downward, fold the right
                corner toward the top, making a sharp diagonal crease.
              </li>
              <li>Repeat with the left corner to form a kite-like shape.</li>
              <li>
                Unfold both folds and tuck them inside along the crease (reverse
                fold).
              </li>
            </ol>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-bold">
              Step 3: Form the Head and Tail
            </h4>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Fold one of the top flaps down to form the head.</li>
              <li>
                Make a small reverse fold at the tip to create the dinosaur’s
                snout.
              </li>
              <li>
                For the tail, fold the other top flap downward and shape it into
                a pointed end.
              </li>
            </ol>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-bold">Step 4: Make the Legs</h4>
            <ol className="list-decimal list-inside text-gray-600">
              <li>
                Fold the lower part of the body slightly outward to shape the
                legs.
              </li>
              <li>Adjust the balance so the dinosaur can stand on its legs.</li>
            </ol>
            <p className="mt-2 text-gray-700">
              Your origami T-Rex is complete! You can draw eyes or add details
              for extra effect.
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

export default Origami;
