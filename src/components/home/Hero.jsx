import React from "react";

import headphones from "../../assets/images/headphones.png";

const Hero = () => {
  return (
    <section className="h-screen xl:h-screen md:h-[75vh] lg:h-[50vh] w-full flex flex-col shrink-0 items-center bg-blend-lighten bg-[url(/src/assets/images/hero.png)] justify-center relative bg-[var(--hero-color)] text-white bg-[length:650px_750px] md:bg-[length:1000px_1000px] bg-no-repeat bg-center lg:items-start lg:bg-right lg:bg-[length:500px_750px] xl:bg-[length:700px_700px] 2xl:bg-[length:1000px_1000px] ">
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative flex flex-col text-center items-center gap-10 lg:text-start lg:items-start lg:px-20 lg:w-[80%] xl:w-[60%]">
        <p className="relative uppercase tracking-[0.6em] text-gray-300 font-light md:text-xl lg:text-base 2xl:text-xl">
          New product
        </p>
        <div className="flex flex-col items-center gap-8 w-full lg:items-start lg:gap-10 2xl:gap-14">
          <p className="text-5xl font-bold md:text-6xl uppercase md:tracking-wider 2xl:text-7xl">
            XX99 Mark II Headphones
          </p>
          <p className="text-gray-400 leading-8 md:leading-9 md:tracking-wider px-4 md:px-0 md:w-[55%] xl:w-full 2xl:text-xl 2xl:w-[70%]">
            Experience natural, lifelike audio and exceptional build quality for
            the passionate music enthusiast.
          </p>
          <button className="font-medium uppercase bg-[var(--brand-color)] py-4 px-2 w-[45%] rounded-md md:w-[30%]">
            See Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
