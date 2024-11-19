import React from "react";

import Hero from "../../components/home/Hero";
import Products from "../../components/shared/sections/Products";
import BestGear from "../../components/shared/sections/BestGear";
import FeaturedProducts from "../../components/home/FeaturedProducts";

const Home = () => {
  return (
    <div className="flex flex-col h-full gap-20">
      <Hero />
      <Products />
      <FeaturedProducts />
      <BestGear />
    </div>
  );
};

export default Home;
