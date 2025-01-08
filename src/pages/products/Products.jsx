import React from "react";
import Product from "./Product";
import { GiFarmTractor } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";
import { PiBowlFoodLight } from "react-icons/pi";
import { TbBaguette } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const product = [
  { id: 1, title: "Farm Inputs", icon: <GiFarmTractor /> },
  { id: 2, title: "Farm Produce", icon: <PiBowlFoodLight /> },
  { id: 3, title: "Garri Processing", icon: <TbBaguette /> },
  { id: 4, title: "Farm Supplements", icon: <GiPlantRoots /> },
];

const Products = () => {
  return (
    <section className="lg:px-24 md:px-16 px-4 py-20 flex flex-col gap-5 bg-lightGreen items-center">
      <h1
        className="font-semibold lg:text-4xl text-2xl "
        data-aos="zoom-in-down"
      >
        What We Do
      </h1>

      {/* products */}
      <div className="flex items-center justify-between">
        <div className="grid grid-flow-row lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
          {product.map((item) => (
            <Product key={item.id} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
