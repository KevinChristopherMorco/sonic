import React from "react";

import Mainheading from "../shared/Mainheading";
import SeeProduct from "../shared/buttons/SeeProduct";

const ProductRecommended = ({ product }) => {
  return (
    <section className="flex flex-col items-center gap-8">
      <Mainheading title={"you may also like"} />
      <div className="flex flex-col items-center gap-20 md:flex-row md:gap-4">
        {product.similar.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-8">
              <img src={item.image} alt="" className="h-[300px] w-[500px]" />
              <p className="text-2xl font-medium leading-relaxed">
                {item.item}
              </p>
              <SeeProduct link={`/${item.category}/${item.id}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductRecommended;
