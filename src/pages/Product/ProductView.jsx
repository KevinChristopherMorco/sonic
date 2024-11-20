import React from "react";
import { useParams } from "react-router-dom";

import productCategory from "../../helpers/getProductCategory";
import useScrollTop from "../../hooks/useScrollTop";
import useCountQuantity from "../../hooks/count/useCountQuantity";

import BestGear from "../../components/shared/sections/BestGear";
import Products from "../../components/shared/sections/Products";
import ProductHero from "../../components/product/ProductHero";
import ProductFeatures from "../../components/product/ProductFeatures";
import ProductRecommended from "../../components/product/ProductRecommended";

const ProductView = () => {
  const { productID } = useParams();
  const { count, setCount, handleQuantity } = useCountQuantity();
  const product = productCategory().find((product) => product.id === productID);

  useScrollTop(productID);

  return (
    <div className="flex flex-col gap-40 px-4 py-16 md:px-12 lg:px-20">
      <div className="flex flex-col gap-20">
        <ProductHero
          product={product}
          count={count}
          setCount={setCount}
          handleQuantity={handleQuantity}
        />
        <ProductFeatures product={product} />
        <ProductRecommended product={product} />
      </div>
      <Products />
      <BestGear />
    </div>
  );
};

export default ProductView;
