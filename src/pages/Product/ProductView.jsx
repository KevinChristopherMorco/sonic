import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RiShoppingCartLine } from "@remixicon/react";

import productCategory from "../../helpers/getProductCategory";
import formatPrice from "../../helpers/format/formatPrice";
import useScrollTop from "../../hooks/useScrollTop";
import useCountQuantity from "../../hooks/count/useCountQuantity";
import useManageCart from "../../hooks/cart/useManageCart";

import Mainheading from "../../components/shared/Mainheading";
import SeeProduct from "../../components/shared/buttons/SeeProduct";
import { useCartContext } from "../../hooks/cart/CartProvider";
import ProductQuantity from "../../components/shared/buttons/ProductQuantity";
import BestGear from "../../components/shared/sections/BestGear";
import Products from "../../components/shared/sections/Products";

const ProductView = () => {
  const { productID } = useParams();
  const { count, setCount, handleQuantity } = useCountQuantity();
  const { addToCart } = useCartContext();
  const product = productCategory().find((product) => product.id === productID);

  useScrollTop(productID);

  const item = {
    productID: product.id,
    productName: product.item,
    productImage: product.image,
    productPrice: product.price,
    productQuantity: count,
    totalPrice: function totalPrice() {
      return this.productPrice * this.productQuantity;
    },
  };

  const handleAddToCart = () => {
    addToCart(item);
    setCount(0);
  };

  return (
    <div className="px-4 py-16 flex flex-col gap-40  md:px-12 lg:px-20">
      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-8 md:flex-row md:h-[55vh] md:gap-20 lg:items-center">
          <div className="md:w-[60%] bg-[#F1F1F1] flex items-center lg:w-[26rem] lg:h-[26rem]">
            <img
              src={product.image}
              alt=""
              className="rounded md:w-full md:h-[80%]"
            />
          </div>
          <div className="flex flex-col gap-8 md:w-[50%] md:self-center lg:gap-14">
            <p className="text-3xl font-bold uppercase lg:text-4xl lg:leading-[1.3em] tracking-wider">
              {product.label}
            </p>
            <p className="font-light leading-7 text-gray-400">
              {product.detail}
            </p>

            <div className="flex flex-col gap-8 lg:gap-14">
              <p className="text-lg font-bold tracking-widest">
                ${formatPrice(product.price)}
              </p>
              <div className="flex items-center w-fit">
                <ProductQuantity
                  count={count}
                  view={"productView"}
                  handleQuantity={handleQuantity}
                />
                <button
                  className="uppercase bg-[var(--brand-color)] text-white p-3 flex gap-1 items-center"
                  onClick={handleAddToCart}
                >
                  <RiShoppingCartLine className="w-5 h-5" />
                  <p className="text-sm">Add to cart</p>
                </button>
              </div>
            </div>
          </div>
        </section>
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
          <div className="flex flex-col gap-8 md:flex-row md:gap-32 md:py-10 lg:flex-col lg:py-0 lg:gap-8">
            <Mainheading title={"In the box"} />
            <ul className="flex flex-col gap-5">
              {product.box.map((item, index) => {
                return (
                  <li key={index} className="flex gap-4 items-center">
                    <p className="text-[var(--brand-color)] font-medium ">
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
        <section className="flex flex-col items-center gap-8">
          <Mainheading title={"you may also like"} />
          <div className="flex flex-col items-center gap-20 md:flex-row md:gap-4">
            {product.similar.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-8 items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[500px] h-[300px]"
                  />
                  <p className="font-medium leading-relaxed text-2xl font-medium">
                    {item.item}
                  </p>
                  <SeeProduct link={`/${item.category}/${item.id}`} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Products />
      <BestGear />
    </div>
  );
};

export default ProductView;
