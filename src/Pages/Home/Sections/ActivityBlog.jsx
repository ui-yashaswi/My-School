import React from "react";

import img2 from "/activityBlog/ab-1.jpg";
import img1 from "/activityBlog/ab-2.jpg";

const cards = [
  { img: img2, text: "Origami Practice" },
  { img: img1, text: "DIY-Do It YourSelf" },
];

function ActivityBlog() {
  return (
    <div className=" lg:px-28 px-4">
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        Activity Blog{" "}
      </h1>

      <div className="flex flex-wrap justify-between gap-6 py-4 ">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative lg:w-[41vw] w-[90vw] h-[35vh] rounded-lg "
          >
            <img
              src={item.img}
              alt={`Card ${index + 1}`}
              className="w-full h-full rounded-sm object-cover"
            />

            <div className="absolute bottom-0 left-0 opacity-20  h-30 w-full bg-zinc-500"></div>

            <div className=" absolute  bottom-4 text-white  left-6 flex flex-col gap-5 bg-amber-00">
              <p className="text-4xl">{item.text}</p>

              <button className="bg-white w-34 rounded-sm text-xl py-2 text-zinc-700">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityBlog;
