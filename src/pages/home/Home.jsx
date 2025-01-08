import { useState } from "react";
import Button from "../../auth/Button";
import ScrollTrigger from "react-scroll-trigger";
import CounterUp from "../../components/CounterUp";
import Products from "../products/Products";
import Testimonial from "./Testimonial";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <section className=" relative flex flex-col items-center gap-5 text-center justify-center h-[100vh] bg-[url('/assets/alesto-hero-2.jpeg')] bg-center bg-cover text-white">
        {/* Overlay */}
        <div className="absolute top-0  bg-deepGreen/65 backdrop-blur-lg h-[100vh] w-[100%]"></div>
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="lg:text-[3.5rem] text-4xl md:text-5xl md:w-[70%] md:leading-[4rem] lg:w-[60%] w-[85%] text-center font-semibold z-10 lg:leading-[4.5rem]"
        >
          Transforming <span className="text-lightGreen">Agriculture</span>, One
          <span className="text-lightGreen"> Harvest</span> at a Time
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="800"
          className=" lg:w-[35%] md:w-[40%] w-[80%] text-sm z-10 font-light"
        >
          Providing quality farm produce, inputs, and premium Garri processing
          services.
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <Button
            data-aos="fade-up"
            data-aos-delay="400"
            text={"Explore Our Products"}
            css={"font-semibold bg-white py-2 px-7 text-deepGreen text-sm z-10"}
          />
        </div>
      </section>

      {/* company's data */}
      <CounterUp
        ScrollTrigger={ScrollTrigger}
        counterOn={counterOn}
        setCounterOn={setCounterOn}
      />

      <section className="lg:px-24 md:px-16 px-4 py-20 flex md:flex-row flex-col gap-10 lg:gap-0 items-center justify-between">
        <div className="md:w-[50%] w-[100%]">
          <img
            src="assets/alesto-img-2.jpeg"
            className="w-[30rem]"
            alt=""
            data-aos="fade-up"
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 md:w-[50%] w-[100%]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="lg:text-4xl text-2xl w-[100%] text-center md:text-left font-bold text-middleGreen lg:w-[80%] lg:leading-[2.5rem]">
            Experience the freshness of our unique organic offerings
          </h1>
          <p className="lg:text-[0.75rem] text-[0.65rem] md:text-left text-center font-light text-deepGrey lg:w-[70%] w-[100%] lg:leading-[1.3rem] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>

          <Button
            text={"Learn more"}
            css={
              "font-semibold bg-deepGreen py-2 lg:px-7 px-5 text-white hover:text-deepGreen hover:bg-lightGreen lg:text-sm text-[0.7rem] z-10 lg:w-[9rem] w-[6.6rem] transition"
            }
          />
        </div>
      </section>

      {/* Products */}
      <Products />

      <section className="lg:px-24 md:px-16 px-4 py-20 flex md:flex-row flex-col gap-10 lg:gap-0 items-center justify-between">
        <div
          data-aos="fade-up"
          className="flex order-2 md:order-1 flex-col items-center md:items-start gap-5 md:w-[50%] w-[100%]"
        >
          <h1 className="lg:text-4xl text-2xl w-[100%] text-center md:text-left font-bold text-middleGreen lg:w-[80%] lg:leading-[2.5rem]">
            Eradicating poverty in Nigeria with our unique organic offerings
          </h1>
          <p className="lg:text-[0.75rem] text-[0.65rem] md:text-left text-center font-light text-deepGrey lg:w-[70%] w-[100%] lg:leading-[1.3rem] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>

          <Button
            text={"Learn more"}
            css={
              "font-semibold bg-deepGreen py-2 lg:px-7 px-5 text-white hover:text-deepGreen hover:bg-lightGreen lg:text-sm text-[0.7rem] z-10 lg:w-[9rem] w-[6.6rem] transition"
            }
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-[50%] w-[100%] order-1 md:order-2"
        >
          <img src="assets/alesto-img-3.jpeg" className="w-[30rem]" alt="" />
        </div>
      </section>

      <section className="pb-20 pt-10">
        <h1
          data-aos="zoom-in"
          className="font-bold pb-5 text-deepGreen text-center lg:text-2xl md:text- text-xl"
        >
          Our Partners
        </h1>
        <marquee behavior="" direction="">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lightGreen lg:text-xl  text-sm">
              alesto agroallied
            </p>
            <p className="font-bold text-lightGreen lg:text-xl text-sm">
              alesto agroallied
            </p>
            <p className="font-bold text-lightGreen lg:text-xl  text-sm">
              alesto agroallied
            </p>
            <p className="font-bold text-lightGreen lg:text-1xl md:text- text-xl hidden lg:block">
              alesto agroallied
            </p>
            <p className="font-bold text-lightGreen lg:text-1xl md:text- text-xl hidden lg:block">
              alesto agroallied
            </p>
          </div>
        </marquee>
      </section>

      <section
        data-aos="fade-down"
        className="relative mx-auto mb-20  flex md:flex-row flex-col items-center gap-5 text-center justify-between lg:h-[20rem] md:h-[15rem] h-[40rem] w-[100%] md:w-[70%] bg-[url('/assets/alesto-hero-2.jpeg')] bg-center bg-cover text-white"
      >
        <div className="absolute top-0  bg-deepGreen/75 lg:h-[20rem] md:h-[15rem] h-[40rem] w-[100%] md:w-[70%]"></div>
        <div className="flex md:w-[60%] h-[60%] md:h-full w-[100%] px-6 flex-col gap-4 items-center justify-center text-white z-10">
          <p className="text-yellow text-2xl lg:text-2xl md:text-base font-semibold">
            Why Choose Us
          </p>
          <p className="md:text-[0.7rem] lg:text-base">
            We supply organic farm produce, premium garri processing services
            and production of farm supplements.
          </p>
        </div>
        <div className="md:w-[40%] w-full md:h-full h-[40%] bg-lightGreen z-20 flex-col gap-2 items-center justify-center text-deepGreen flex">
          <p className="text-3xl md:text-2xl font-bold">2025</p>
          <p className="font-semibold md:text-sm lg:text-lg">Fresh Products</p>
        </div>
      </section>

      {/* newsletter */}
      <section className="lg:px-24 md:px-16 px-4 py-20 flex flex-col gap-6 bg-middleGreen items-center my-20">
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="font-semibold lg:text-4xl text-center text-white text-2xl "
        >
          Subscribe to Our Newsletter
        </h1>
        <p
          data-aos="fade-up"
          className="lg:text-[0.75rem] text-[0.65rem] text-center font-light text-white lg:w-[30%] w-[100%] lg:leading-[1.3rem] "
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>

        <form
          action=""
          className="flex flex-col md:flex-row items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input
            type="text"
            placeholder="Enter your email here"
            className="py-3 px-6 border-[1px] lg:w-[20rem] border-deepGrey bg-lightGreen placeholder-black outline-none"
          />

          <Button
            text={"Subscribe"}
            css={
              "font-semibold  py-3 md:px-[2.5rem] px-[5rem] w-[15.8rem] md:w-[10rem] text-center font-rufina bg-deepGreen text-white"
            }
          />
        </form>
      </section>

      <Testimonial />
    </div>
  );
};

export default Home;
