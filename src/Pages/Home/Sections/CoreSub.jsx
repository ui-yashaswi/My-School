import React from "react";
import PrimaryCard from "../../../Components/PrimaryCard";

import img1 from "/coreSubject/cs-1.png";
import img2 from "/coreSubject/cs-2.png";
import img3 from "/coreSubject/cs-3.png";
import img4 from "/coreSubject/cs-4.jpg";
import img5 from "/coreSubject/cs-5.jpg";
import img6 from "/coreSubject/cs-6.jpg";
import img7 from "/coreSubject/cs-7.png";
import img8 from "/coreSubject/cs-8.jpg";

const cardsData = [
  { image: img1, text: "Visual Work Sheet" },
  { image: img2, text: "Interactive Learning" },
  { image: img3, text: "Mathematics Fun" },
  { image: img4, text: "Mathematics Fun" },
  { image: img5, text: "Mathematics Fun" },
  { image: img6, text: "Mathematics Fun" },
  { image: img7, text: "Mathematics Fun" },
  { image: img8, text: "Mathematics Fun" },
];

function App() {
  return (
    <div>
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        COre Subject
      </h1>
      <div className="flex gap-6 flex-wrap justify-center lg:px-20">
        {cardsData.map((item, index) => (
          <PrimaryCard key={index} image={item.image} text={item.text} />
        ))}
        <div className=" w-full h-full flex justify-center my-3 ">
          <button className=" border-2 text-zinc-800 font-semibold text-lg rounded-sm w-90 py-3">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
