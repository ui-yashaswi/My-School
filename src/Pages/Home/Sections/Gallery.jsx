import React from "react";
import img1 from "/gallery/gal-1.jpg";
import img2 from "/gallery/gal-2.jpg";
import img3 from "/gallery/gal-3.jpg";
import img4 from "/gallery/gal-4.jpg";

const images = [img1, img2, img3, img4];

function Gallery() {
  return (
    <div className="lg:px-28 px-4">
      <h1 className="text-3xl text-center my-10 font-semibold text-zinc-800">
        Student Gallery
      </h1>

      <div className="w-full lg:h-[40vh] bg-gren-800 gap-8 flex lg:flex-row flex-col">
        <div>
          <img
            className="lg:w-[40vw] lg:h-[42vh] object-cover"
            src={img1}
            alt=""
          />
        </div>

        <div className=" flex flex-col gap-7">
          <div className="gap-8 flex lg:flex-row flex-col ">
            <img
              className="lg:w-[20vw] h-[19vh] object-cover"
              src={img2}
              alt=""
            />
            <img
              className="lg:w-[20vw] h-[19vh] object-cover"
              src={img3}
              alt=""
            />
          </div>
          <div>
            <img
              className="lg:w-[42vw] w-full h-[19vh] object-cover"
              src={img4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
