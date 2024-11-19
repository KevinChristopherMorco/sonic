import React from "react";
import { Link, useParams } from "react-router-dom";

import useScrollTop from "../../hooks/useScrollTop";
import productType from "../../helpers/getProductCategory";

import PageTitleCard from "../../components/shared/PageTitleCard";
import SeeProduct from "../../components/shared/buttons/SeeProduct";
import BestGear from "../../components/shared/sections/BestGear";
import Products from "../../components/shared/sections/Products";

const ProductCategory = () => {
  const { productCategory } = useParams();
  useScrollTop();

  return (
    <div className="flex flex-col gap-28">
      <PageTitleCard />
      <div className="p-4 flex flex-col gap-20 md:px-12 lg:px-20">
        {productType().map((product, index) => {
          const remainder = index % 2;
          return (
            <div
              className={`${
                remainder ? "lg:flex-row-reverse" : "lg:flex-row"
              } flex flex-col gap-12 items-center lg:gap-32`}
            >
              <div className="w-full bg-[#F1F1F1] flex items-center justify-center py-5 rounded-xl">
                <img
                  src={product?.image}
                  alt=""
                  className="md:w-[22rem] md:h-[22rem] rounded-lg lg:w-full lg:h-auto"
                />
              </div>
              <div className="text-center flex flex-col gap-10 items-center md:gap-12 lg:items-start lg:text-start">
                <p className="text-4xl font-medium uppercase lg:leading-[3.5rem] lg:w-[20rem] lg:break-words">
                  {product.label}
                </p>
                <p className="font-light text-gray-400 tracking-wide">
                  {product.detail}
                </p>
                <SeeProduct link={`/${productCategory}/${product.id}`} />
              </div>
            </div>
          );
        })}
      </div>
      <Products />
      <BestGear />
    </div>
  );
};

export default ProductCategory;
