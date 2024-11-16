import React from "react";

import Hero from "../../components/home/Hero";
import Products from "../../components/home/Products";

const Home = () => {
  return (
    <div className="flex flex-col h-full gap-20">
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
