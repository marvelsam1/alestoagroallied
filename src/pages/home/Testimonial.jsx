import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonial = [
  {
    id: 1,
    img: "assets/Avatar.png",
    name: "Sarah Ali Khan",
    category: "Cardiologist patient",
  },
  {
    id: 2,
    img: "assets/Avatar.png",
    name: "Simon Targett",
    category: "Neurologistgist patient",
  },
  {
    id: 3,
    img: "assets/Avatar.png",
    name: "Sarah Ali Khan",
    category: "Cardiologist patient",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="font-semibold lg:text-2xl w-[60%] mx-auto md:w-[100%] text-black text-center text-xl "
      >
        What Our Customers are Saying
      </h1>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture Swiper instance
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          clickable: true,
        }}
      >
        {/* Swiper Slides */}
        {testimonial.map((item) => (
          <SwiperSlide className="bg-white py-5 my-3 px-10" key={item.id}>
            <div className="flex flex-col gap-2 text-center items-center">
              <img src={item.img} className="md:w-[6rem] w-[4rem]" alt="" />
              <div>
                <h1 className="md:text-xl text-sm font-semibold font-rufina">
                  {item.name}
                </h1>
                <p className="py-1 text-[0.75rem]">{item.category}</p>
                <p className="lg:text-xl lg:w-[70%] mx-auto text-sm text-deepGrey py-1">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Purus lorem id penatibus imperdiet. Turpis egestas ultricies
                  purus Lorem ipsum dolor sit amet.”
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <IoIosArrowBack
          //   ref={prevRef}
          className="swiper-button-prev text-2xl md:text-4xl cursor-pointer md:left-14 left-2 absolute bottom-20 !bg-deepGreen !text-white md:!px-2  !px-2 md:!w-[2rem] !w-[1.7rem] !h-[1.7rem] md:!h-[2rem] !rounded-full z-10"
        />
        <IoIosArrowForward
          //   ref={nextRef}
          className="swiper-button-next text-2xl md:text-4xl cursor-pointer md:right-14 right-2 absolute bottom-20 !bg-deepGreen !text-white md:!px-2  !px-2 md:!w-[2rem] !w-[1.7rem] !h-[1.7rem] md:!h-[2rem] !rounded-full z-10"
        />

        {/* <div className="swiper-pagination z-10">
          <div className="!w-[1rem] !bg-deepGrey !h-[1rem]"></div>
        </div> */}
      </Swiper>
      {/* Custom Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonial.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-deepGreen" : "bg-middleGrey"
            }`}
            onClick={() => {
              setActiveIndex(index);
              swiperInstance.slideTo(index); // Navigate to the respective slide
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
