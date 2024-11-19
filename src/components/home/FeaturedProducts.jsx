import React from "react";
import { Link } from "react-router-dom";

import zx9 from "../../assets/images/speakers/zx9.png";
import zx7 from "../../assets/images/speakers/zx7.png";
import yx1 from "../../assets/images/earphones/yx1.jpg";

const FeaturedProducts = () => {
  return (
    <section className="flex flex-col gap-20 px-6 md:px-12 lg:px-20 xl:px-52 2xl:px-60">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center bg-[var(--brand-color)] rounded-lg text-white py-6 px-4 text-center lg:flex-row lg:py-20 lg:text-start lg:gap-20">
          <img
            src={zx9}
            alt=""
            className="md:w-[18rem] md:h-[18rem] lg:w-[25rem] lg:h-[25rem]"
          />
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <div className="flex flex-col gap-4 items-center md:gap-10 lg:items-start">
              <div className="text-4xl font-bold md:text-5xl xl:text-6xl">
                <p>ZX9</p>
                <p>Speaker</p>
              </div>
              <p className="font-light text-gray-200 tracking-wider md:w-[50%] lg:w-full xl:text-lg 2xl:text-xl">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
            </div>
            <Link
              to={"/speakers/spk-076b0e48-5020-484e-827b-922102dc2c8c"}
              className="py-4 px-8 cursor-pointer rounded-md bg-black text-white uppercase"
            >
              See Product
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col items-start justify-start rounded-lg text-black py-6 bg-[#EAEAEA] bg-[75px] bg-no-repeat px-4 h-[25rem] bg-[length:400px] md:bg-right md:justify-center md:px-6 2xl:px-20 2xl:bg-[length:650px]"
          style={{ backgroundImage: `url(${zx7})` }}
        >
          <div className="flex flex-col items-center gap-8 py-10">
            <div className="text-center flex flex-col gap-4">
              <p className="text-3xl uppercase font-medium 2xl:text-5xl">
                ZX7 Speaker
              </p>
            </div>
            <Link
              to={"/speakers/spk-dd12b862-7315-43f5-8df8-906ec313fadc"}
              className="py-4 px-8 cursor-pointer rounded-md border border-black text-black uppercase hover:bg-black hover:text-white transition-colors"
            >
              See Product
            </Link>
          </div>
        </div>

        <div className="flex flex-col  bg-[#EAEAEA] rounded-lg text-black lg:flex-row">
          <img
            src={yx1}
            alt=""
            className="rounded-lg lg:w-[50%] lg:h-[25rem]"
          />
          <div className="flex flex-col items-start gap-8 px-4 py-6 md:py-10 md:px-6 lg:items-center lg:w-full lg:justify-center">
            <div className="flex flex-col gap-4">
              <p className="text-3xl uppercase font-medium 2xl:text-5xl">
                YX1 Earphones
              </p>
            </div>
            <Link
              to={"/earphones/erp-79123b51-7a31-47bc-a423-93a6225cb921"}
              className="py-4 px-8 cursor-pointer rounded-md border border-black text-black uppercase hover:bg-black hover:text-white transition-colors"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
