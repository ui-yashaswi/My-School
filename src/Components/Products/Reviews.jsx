import React from "react";
import imgcs1 from "/others/customer-3.png";
import { IoIosStar } from "react-icons/io";

function Reviews() {
  return (
    <div className="lg:w-[35vw] py-2 h-full flex flex-col border-2 mt-4 rounded-xl border-zinc-100 p-3">
      <div className="flex gap-2 items-center  ">
        <img
          src={imgcs1}
          className="w-[60px] h-[60px] object-cover rounded-full "
          alt=""
        />

        <h1 className="text-xl text-zinc-700 font-bold">Manasa</h1>
      </div>

      <div className="flex text-lg py-2 items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <IoIosStar key={index} className="text-amber-300" />
        ))}
      </div>

      <p className="text-zinc-600">
        As a parent, I love how these Alphabet Train Learning Sticks make
        learning fun! My child enjoys connecting the pieces while recognizing
        letters effortlessly.
      </p>
    </div>
  );
}

export default Reviews;
