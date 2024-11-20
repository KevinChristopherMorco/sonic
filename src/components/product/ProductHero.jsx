import React from "react";
import { RiShoppingCartLine } from "@remixicon/react";

import { useCartContext } from "../../hooks/cart/CartProvider";
import formatPrice from "../../helpers/format/formatPrice";

import ProductQuantity from "../shared/buttons/ProductQuantity";

const ProductHero = ({ product, count, setCount, handleQuantity }) => {
  const { addToCart } = useCartContext();

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
    <section className="flex flex-col gap-8 md:h-[55vh] md:flex-row md:gap-20 lg:items-center">
      <div className="flex items-center bg-[#F1F1F1] md:w-[60%] lg:h-[26rem] lg:w-[26rem]">
        <img
          src={product.image}
          alt=""
          className="rounded md:h-[80%] md:w-full"
        />
      </div>
      <div className="flex flex-col gap-8 md:w-[50%] md:self-center lg:gap-14">
        <p className="text-3xl font-bold uppercase tracking-wider lg:text-4xl lg:leading-[1.3em]">
          {product.label}
        </p>
        <p className="font-light leading-7 text-gray-400">{product.detail}</p>

        <div className="flex flex-col gap-8 lg:gap-14">
          <p className="text-lg font-bold tracking-widest">
            ${formatPrice(product.price)}
          </p>
          <div className="flex w-fit items-center">
            <ProductQuantity
              count={count}
              view={"productView"}
              handleQuantity={handleQuantity}
            />
            <button
              className="flex items-center gap-1 bg-[var(--brand-color)] p-3 uppercase text-white"
              onClick={handleAddToCart}
            >
              <RiShoppingCartLine className="h-5 w-5" />
              <p className="text-sm">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
