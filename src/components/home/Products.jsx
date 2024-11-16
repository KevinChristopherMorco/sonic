import React from "react";
import { RiArrowRightSLine } from "@remixicon/react";

import category from "../../json/product-category.json";

import Mainheading from "../shared/Mainheading";
import headphones from "../../assets/images/headphones.png";
import speakers from "../../assets/images/speakers.png";
import wireless from "../../assets/images/wireless.png";
import zx9 from "../../assets/images/zx9.png";
import zx7 from "../../assets/images/zx7.png";
import yx1 from "../../assets/images/yx1.jpg";

const Products = () => {
  return (
    <section className="flex flex-col gap-40 px-6">
      <Mainheading title={"Our Products"} />
      <div className="flex flex-col gap-28">
        {category.products.map((product, index) => {
          const images = [headphones, speakers, wireless];
          return (
            <div className="text-center flex flex-col justify-end items-center bg-gray-200 w-full relative h-[10rem] rounded-lg py-4">
              <img
                src={images[index]}
                alt={product.item}
                className="absolute -top-[7rem] w-[15rem] h-[12rem]"
              />
              <div className="z-[10] flex flex-col items-center gap-4">
                <p className="uppercase font-bold">{product.item}</p>
                <div className="flex items-center group">
                  <p>Shop</p>
                  <RiArrowRightSLine className="w-5 h-5 group-hover:text-[var(--brand-color)] transition-colors" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center bg-[var(--brand-color)] rounded-lg text-white py-6 px-4">
          <img src={zx9} alt="" />
          <div className="flex flex-col items-center gap-8">
            <div className="text-center flex flex-col gap-4">
              <div>
                <p className="text-4xl font-medium">ZX9</p>
                <p className="text-4xl font-medium">Speaker</p>
              </div>
              <p className="font-light">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
            </div>
            <button className="py-4 px-8 cursor-pointer rounded-md bg-black text-white uppercase">
              See Product
            </button>
          </div>
        </div>

        <div
          className="flex flex-col items-start justify-start  rounded-lg text-black py-6 bg-[#EAEAEA] bg-[75px] bg-no-repeat px-4 h-[25rem] bg-[length:400px]"
          style={{ backgroundImage: `url(${zx7})` }}
        >
          {/* <img src={zx7} alt="" className="translate-x-10" /> */}
          <div className="flex flex-col items-center gap-8 py-10">
            <div className="text-center flex flex-col gap-4">
              <p className="text-3xl uppercase font-medium">ZX7 Speaker</p>
            </div>
            <button className="py-4 px-8 cursor-pointer rounded-md border border-black text-black uppercase hover:bg-black hover:text-white transition-colors">
              See Product
            </button>
          </div>
        </div>

        <div className="flex flex-col  bg-[#EAEAEA] rounded-lg text-black">
          <img src={yx1} alt="" className="rounded-lg" />
          <div className="flex flex-col items-start gap-8 px-4 py-6">
            <div className="flex flex-col gap-4">
              <p className="text-3xl uppercase font-medium">YX1 Earphones</p>
            </div>
            <button className="py-4 px-8 cursor-pointer rounded-md border border-black text-black uppercase hover:bg-black hover:text-white transition-colors">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
