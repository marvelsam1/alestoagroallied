import React from "react";
import Button from "../auth/Button";

const Footer = () => {
  return (
    <div className="bg-lightGrey py-10 lg:px-24 mt-8 md:px-16 px-4 flex md:flex-row flex-col gap-5 md:gap-0 items-center justify-between">
      <div className="flex items-center md:items-start flex-col gap-4">
        <h1 className="font-bold text-deepGreen lg:text-4xl md:text- text-xl">
          alesto
        </h1>
        <p className="text-[0.7rem] text-deepGrey text-center md:text-left md:text-[0.6rem] lg:text-[0.7rem]">
          {" "}
          Providing quality farm produce, inputs, and premium Garri processing
          services.
        </p>
      </div>

      {/* company's prducts/contacts */}
      <div className="flex md:flex-row flex-col items-center lg:gap-12 md:gap-8">
        <div className="flex lg:flex-row flex-col lg:gap-0 items-center md:text-left text-center justify-between  md:py-16 py-4">
          <ul className="flex flex-col gap-3 text-[0.7rem] md:text-[0.6rem] lg:text-[0.7rem] text-black font-normal">
            <li className="lg:text-base font-semibold text-black pb-2">
              Products
            </li>
            <li>Farm Inputs</li>
            <li>Farm Produce</li>
            <li>Garri Processing</li>
            <li>Farm Supplements</li>
          </ul>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 items-center md:text-left text-center justify-between  md:py-16 py-4">
          <ul className="flex flex-col gap-3 md:text-[0.6rem] lg:text-[0.7rem] text-[0.7rem] text-black font-normal">
            <li className="lg:text-base font-semibold text-black pb-2">
              Contact
            </li>
            <li>+234 903 065 2905</li>
            <li>marvellousabiola701@gmail.com</li>
            <li>alestoagroallied.com</li>
            <li>Okaka, Iseyin along saki road, Oyo state Nigeria</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
