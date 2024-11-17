import React from "react";

import Hero from "../../components/home/Hero";
import Products from "../../components/home/Products";

const Home = () => {
  return (
    <div className="flex flex-col h-full gap-20">
      <Hero />
      <Products />
      <section className="px-6 flex flex-col items-center text-center gap-10">
        <h1 className="uppercase text-3xl font-bold">
          Bringing you the{" "}
          <span className="text-[var(--brand-color)]">best</span> audio gear
        </h1>
        <div className="flex flex-col gap-5">
          <img
            src="/src/assets/images/featured/best-gear.jpg"
            alt=""
            className="rounded-md"
          />
          <p>
            Located at the heart of New York City, Sonic is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available
            for you to browse and experience a wide range of our products. Stop
            by our store to meet some of the fantastic people who make Sonic the
            best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
