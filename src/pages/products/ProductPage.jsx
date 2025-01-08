import React from "react";
import Products from "./Products";
import Button from "../../auth/Button";

const ProductPage = () => {
  return (
    <div>
      <section className=" relative flex flex-col items-center gap-5 text-center justify-center h-[100vh] bg-[url('/assets/alesto-hero-2.jpeg')] bg-center bg-cover text-white">
        {/* Overlay */}
        <div className="absolute top-0  bg-deepGreen/65 backdrop-blur-lg h-[100vh] w-[100%]"></div>
        <h1
          data-aos="zoom-in"
          className="lg:text-[3.5rem] text-4xl md:text-5xl md:w-[70%] md:leading-[4rem] lg:w-[60%] w-[85%] text-center font-semibold z-10 lg:leading-[4.5rem]"
        >
          Our Products
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className=" lg:w-[45%] md:w-[40%] w-[80%] md:text-sm  text-[0.65rem]  z-10 font-extralight md:leading-[1.7rem]"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <Button
            text={"Read more"}
            css={"font-semibold bg-white py-2 px-7 text-deepGreen text-sm z-10"}
          />
        </div>
      </section>

      <Products />
    </div>
  );
};

export default ProductPage;
