import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "@remixicon/react";

import category from "../../../json/product-category.json";

import Mainheading from "../Mainheading";
import headphones from "../../../assets/images/headphones.png";
import speakers from "../../../assets/images/speakers.png";
import wireless from "../../../assets/images/wireless.png";

const Products = () => {
  return (
    <section className="flex flex-col gap-40 px-6 text-center md:px-12 md:justify-center lg:px-20">
      <Mainheading title={"Our Products"} />
      <div className="flex flex-col gap-28 md:flex-row md:gap-5 md:justify-center 2xl:gap-20">
        {category.products.map((product, index) => {
          const images = [headphones, speakers, wireless];
          return (
            <div
              key={index}
              className="text-center flex flex-col justify-end items-center bg-gray-200 w-full relative h-[10rem] rounded-lg py-4 md:w-[20rem] 2xl:h-[12rem] 2xl:w-[25rem]"
            >
              <img
                src={images[index]}
                alt={product.item}
                className="absolute -top-[7rem] w-[15rem] h-[12rem] md:w-[10rem] md:h-[10rem] md:-top-[5rem] 2xl:h-[14rem] 2xl:w-[14rem] 2xl:-top-[8rem]"
              />
              <div className="z-[10] flex flex-col items-center gap-4">
                <p className="uppercase font-medium 2xl:text-lg">
                  {product.item}
                </p>
                <Link
                  to={product.link}
                  className="flex items-center group font-light text-gray-500 2xl:text-lg"
                >
                  <p>Shop</p>
                  <RiArrowRightSLine className="w-5 h-5 group-hover:text-[var(--brand-color)] transition-colors" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
