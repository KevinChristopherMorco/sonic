import React from "react";

import Mainheading from "../shared/Mainheading";

const ProductFeatures = ({ product }) => {
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:justify-between 2xl:justify-start 2xl:gap-52">
      <div className="flex flex-col gap-8 lg:w-[60%]">
        <Mainheading title={"features"} />
        {product.features.map((text, index) => {
          return (
            <p key={index} className="font-light leading-7 text-gray-400">
              {text}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-32 md:py-10 lg:flex-col lg:gap-8 lg:py-0">
        <Mainheading title={"In the box"} />
        <ul className="flex flex-col gap-5">
          {product.box.map((item, index) => {
            return (
              <li key={index} className="flex items-center gap-4">
                <p className="font-medium text-[var(--brand-color)]">
                  {item.quantity}x
                </p>
                <p className="font-light leading-relaxed text-gray-500">
                  {item.item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductFeatures;
