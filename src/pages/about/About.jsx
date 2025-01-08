import React from "react";
import Button from "../../auth/Button";

const About = () => {
  return (
    <div>
      <section className=" relative flex flex-col items-center gap-5 text-center justify-center h-[100vh] bg-[url('/assets/alesto-hero-2.jpeg')] bg-center bg-cover text-white">
        {/* Overlay */}
        <div className="absolute top-0  bg-deepGreen/45 backdrop-blur-lg h-[100vh] w-[100%]"></div>
        <h1
          data-aos="zoom-in"
          className="lg:text-[3.5rem] text-4xl md:text-5xl md:w-[70%] md:leading-[4rem] lg:w-[60%] w-[85%] text-center font-semibold z-10 lg:leading-[4.5rem]"
        >
          About Us
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className=" lg:w-[45%] md:w-[40%] w-[80%] text-sm  z-10 font-light md:leading-[1.7rem]"
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

      <section className="lg:px-24 md:px-16 px-4 py-20 ">
        <h1
          data-aos="zoom-in"
          className="text-center text-3xl font-semibold pb-10"
        >
          Our Mission
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex md:flex-row flex-col gap-10 lg:gap-0 items-center justify-between"
        >
          <div className="flex order-2 md:order-1 flex-col items-center md:items-start gap-5 md:w-[50%] w-[100%]">
            <h1 className="lg:text-4xl text-2xl w-[100%] text-center md:text-left font-bold text-middleGreen lg:w-[80%] lg:leading-[2.5rem]">
              Eradicating poverty in Nigeria with our unique organic offerings
            </h1>
            <p className="lg:text-[0.75rem] text-[0.65rem] md:text-left text-center font-light text-deepGrey lg:w-[70%] w-[100%] lg:leading-[1.3rem] ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>

            <Button
              text={"Learn more"}
              css={
                "font-semibold bg-deepGreen py-2 lg:px-7 px-5 text-white hover:text-deepGreen hover:bg-lightGreen lg:text-sm text-[0.7rem] z-10 lg:w-[9rem] w-[6.6rem] transition"
              }
            />
          </div>

          <div className="md:w-[50%] w-[100%] order-1 md:order-2">
            <img
              data-aos="fade-up"
              src="assets/alesto-img-3.jpeg"
              className="w-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* vision */}
      <section className="lg:px-24 md:px-16 px-4 py-20 ">
        <h1
          data-aos="zoom-in"
          className="text-center text-3xl font-semibold pb-10"
        >
          Our Vision
        </h1>
        <div className="flex md:flex-row flex-col gap-10 lg:gap-0 items-center justify-between">
          <div className="md:w-[50%] w-[100%]">
            <img
              src="assets/alesto-img-2.jpeg"
              className="w-[30rem]"
              alt=""
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex  flex-col items-center md:items-start gap-5 md:w-[50%] w-[100%]"
          >
            <h1 className="lg:text-4xl text-2xl w-[100%] text-center md:text-left font-bold text-middleGreen lg:w-[80%] lg:leading-[2.5rem]">
              Eradicating poverty in Nigeria with our unique organic offerings
            </h1>
            <p className="lg:text-[0.75rem] text-[0.65rem] md:text-left text-center font-light text-deepGrey lg:w-[70%] w-[100%] lg:leading-[1.3rem] ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>

            <Button
              text={"Learn more"}
              css={
                "font-semibold bg-deepGreen py-2 lg:px-7 px-5 text-white hover:text-deepGreen hover:bg-lightGreen lg:text-sm text-[0.7rem] z-10 lg:w-[9rem] w-[6.6rem] transition"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
