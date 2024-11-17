import React from "react";
import { Link, useParams } from "react-router-dom";

import useScrollTop from "../../hooks/useScrollTop";
import productType from "../../helpers/getProductCategory";

import PageTitleCard from "../../components/shared/PageTitleCard";
import SeeProduct from "../../components/shared/buttons/SeeProduct";

const ProductCategory = () => {
  const { productCategory } = useParams();
  useScrollTop();

  return (
    <div className="flex flex-col gap-10">
      <PageTitleCard />
      <div className="p-4 flex flex-col gap-20">
        {productType().map((product) => {
          return (
            <div className="flex flex-col gap-6 items-center">
              <div className="">
                <img src={product?.image} alt="" />
              </div>
              <div className="text-center flex flex-col gap-4 items-center">
                <p className="text-4xl font-medium w-[95%]">{product.item}</p>
                <p className="font-light">{product.detail}</p>
              </div>
              <SeeProduct link={`/${productCategory}/${product.id}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
