import React from "react";
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

const ProductView = () => {
  const { productID } = useParams();
  const { count, setCount, handleQuantity } = useCountQuantity();
  const { addToCart } = useCartContext();
  useScrollTop();
  const product = productCategory().find((product) => product.id === productID);

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
    <div className="px-4 py-16 flex flex-col gap-10">
      <section className="flex flex-col gap-8">
        <div>
          <img src={product.image} alt="" className="rounded-md" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-4xl font-medium uppercase">{product.item}</p>
          <p className="font-light leading-relaxed">{product.detail}</p>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium tracking-widest">
              ${formatPrice(product.price)}
            </p>
            <div className="flex items-center w-fit">
              <div className="flex items-center gap-8 bg-[var(--light-gray-color)] w-fit p-3">
                <button id="desc" onClick={handleQuantity}>
                  -
                </button>
                <p className="w-[1.5rem] text-center">{count}</p>
                <button id="asc" onClick={handleQuantity}>
                  +
                </button>
              </div>
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
      <section className="flex flex-col gap-8">
        <Mainheading title={"features"} />
        {product.features.map((text, index) => {
          return (
            <p key={index} className="font-light leading-relaxed">
              {text}
            </p>
          );
        })}
        <Mainheading title={"In the box"} />
        {product.box.map((item, index) => {
          return (
            <div key={index} className="flex gap-4 items-center">
              <p className="text-[var(--brand-color)] font-medium">
                {item.quantity}x
              </p>
              <p className="font-light leading-relaxed">{item.item}</p>
            </div>
          );
        })}
      </section>
      <section className="flex flex-col items-center gap-6">
        <Mainheading title={"you may also like"} />
        <div className="flex flex-col items-center gap-4">
          {product.similar.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 items-center">
                <img src={item.image} alt="" className="w-[500px] h-[300px]" />
                <p className="font-light leading-relaxed text-2xl font-medium">
                  {item.item}
                </p>
                <SeeProduct link={`/${item.category}/${item.id}`} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductView;
