import React from "react";

const BestGear = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-10 px-6 text-center lg:flex-row lg:items-start lg:items-center lg:px-20 lg:text-start">
      <div className="flex flex-col gap-10 lg:w-[50%]">
        <h1 className="text-3xl font-bold uppercase tracking-wider md:px-20 md:text-4xl lg:px-0">
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

      <div className="lg:justufy-between flex flex-col gap-5 lg:w-[50%] lg:flex-row">
        <img
          src="/src/assets/images/featured/best-gear.jpg"
          alt=""
          className="h-[350px] w-full rounded-md xl:h-[500px]"
        />
      </div>
    </section>
  );
};

export default BestGear;
