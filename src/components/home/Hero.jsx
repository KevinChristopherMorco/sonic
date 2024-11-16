import React from "react";

import headphones from "../../assets/images/headphones.png";

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col shrink-0 items-center justify-center relative bg-[var(--hero-color)] text-white bg-[length:450px_600px] bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${headphones})` }}
    >
      <div className="absolute w-full h-full bg-black bg-opacity-60"></div>

      <div className="relative flex flex-col text-center items-center gap-4">
        <p className="relative uppercase tracking-[.275em] font-light">
          New product
        </p>
        <div className="flex flex-col items-center gap-8">
          <p className="text-5xl font-bold">XX99 Mark II Headphones</p>
          <p className="text-lg font-light text-gray-300">
            Experience natural, lifelike audio and exceptional build quality for
            the passionate music enthusiast.
          </p>
          <button className="font-medium uppercase bg-[var(--brand-color)] py-4 px-2 w-[45%] rounded-md">
            See Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
