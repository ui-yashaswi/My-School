import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";

// import img1 from "/mySchool/ms-1.jpg";
import img1 from "/slides/slide-1.jpeg";
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
      className="mySwiper mt-20  lg:mt-38"
    >
      {sliderContent.map(({ image, headline }, index) => (
        <SwiperSlide key={index} >
          <div className="flex w-full h-full pjustify-center">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className=" h-[65vh] w-full object-cover bg-center relative  "
          />
          </div>

          <div className=" absolute bottom-0 left-0 opacity-90  h-40 w-full bg-white"></div>
          <div className=" absolute bottom-10 left-1 lg:left-6 h-28 w-full flex flex-col lg:gap-5 gap-2 text-zinc-800 text-3xl lg:text-5xl bg-amber-0">
            {headline}

            <div className=" w-full flex gap-2 lg:gap-6 mt-3">
              <Link to="/details">
                <button className="bg-[#e24c30] hover:cursor-pointer hover:bg-transparent hover:border-[#e24c30] hover:border-2 hover:text-[#e24c30] text-white text-lg w-40 lg:w-48 rounded-sm py-3">
                  Shop Now
                </button>
              </Link>
              <Link to={"/about"}>



                <button className="bg-transparent text-[#e24c30] hover:border-none hover:bg-[#e24c30] hover:text-white hover:cursor-pointer text-lg w-40 lg:w-48 py-3 border-[#e24c30] border-2 rounded-sm">
                  Explore More
                </button>
              </Link>
            </div>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
