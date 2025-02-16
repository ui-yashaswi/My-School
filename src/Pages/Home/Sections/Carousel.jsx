import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// import img1 from "/mySchool/ms-1.jpg";
import img1 from "/slides/slide-1.png";
import img2 from "/slides/slide-2.jpg";
import img3 from "/slides/slide-3.png";

const sliderContent = [
  {
    image: img1,
    headline: "Wall Teach Alphabet Kit",
  },
  {
    image: img2,
    headline: "Story Boards",
  },
  {
    image: img3,
    headline: "Multicolor Alphabet Stickers for KIds",
  },
];

function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper mt-38 "
    >
      {sliderContent.map(({ image, headline }, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[65vh] object-cover  relative"
          />

          <div className=" absolute bottom-0 left-0 opacity-30   h-38 w-full bg-zinc-800"></div>
          <div className=" absolute bottom-8 left-6 h-28 w-full flex flex-col gap-5 text-white text-5xl bg-amber-0">
            {headline}

            <div className=" w-full flex gap-6 mt-3">
              <button className="bg-white hover:cursor-pointer text-zinc-900 text-lg w-48 rounded-sm py-3">
                Shop Now
              </button>
              <button className="bg-transparent text-white hover:cursor-pointer text-lg w-48 py-3 border-white border-2 rounded-sm">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
