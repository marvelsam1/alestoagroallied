import React from "react";
import Button from "../../auth/Button";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Product = ({ title, icon }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="200"
      className="bg-white py-8 px-8 rounded-2xl shadow-xl w-[18rem] md:w-[15rem] h-[18rem] justify-between flex flex-col items-center"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-white bg-middleGreen rounded-full p-4 text-2xl">
          {icon}
        </p>
        <p className="font-semibold text-lg text-middleGreen">{title}</p>
        <p className="text-[0.8rem] text-center font-light">
          It is a long established fact that a reader will be distracted by the
          readable.
        </p>
      </div>
      <Button
        text={"Contact Us"}
        css={"font-semibold py-2 px-7 text-white bg-deepGreen text-sm z-10"}
      />
    </div>
  );
};

export default Product;
