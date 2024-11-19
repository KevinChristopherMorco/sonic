import React from "react";

const BestGear = () => {
  return (
    <section className="px-6 flex flex-col-reverse items-center text-center gap-10 lg:flex-row lg:items-start lg:items-center lg:text-start">
      <div className="flex flex-col gap-10 lg:w-[50%]">
        <h1 className="uppercase text-3xl font-bold md:text-4xl md:px-20 tracking-wider lg:px-0">
          Bringing you the{" "}
          <span className="text-[var(--brand-color)]">best</span> audio gear
        </h1>
        <p className="font-light text-gray-400">
          Located at the heart of New York City, Sonic is the premier store for
          high end headphones, earphones, speakers, and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Sonic the best
          place to buy your portable audio equipment.
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:justufy-between lg:flex-row lg:w-[50%]">
        <img
          src="/src/assets/images/featured/best-gear.jpg"
          alt=""
          className="rounded-md w-full h-[350px] xl:h-[500px]"
        />
      </div>
    </section>
  );
};

export default BestGear;
