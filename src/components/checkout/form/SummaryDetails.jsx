import React from "react";

import formatPrice from "../../../helpers/format/formatPrice";
import { useCartContext } from "../../../hooks/cart/CartProvider";

const SummaryDetails = ({ cart }) => {
  const { cartTotalPrice } = useCartContext();
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-white md:gap-8 lg:h-fit lg:w-[40%] lg:p-0">
      <h4 className="text-lg font-medium">Summary</h4>
      <div className="flex flex-col gap-5">
        {cart?.map((product, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={product.productImage}
                  alt=""
                  className="h-16 w-16 rounded-md"
                />
                <div className="font-light">
                  <p className="text-sm font-medium capitalize">
                    {product.productName}
                  </p>
                  <p className="font-light uppercase tracking-wider text-gray-500">
                    ${formatPrice(product.productPrice)}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-medium uppercase tracking-widest">
                  {product.productQuantity}x
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 text-sm font-medium capitalize">
        <div className="flex items-center justify-between">
          <p className="uppercase tracking-wider text-gray-400">Total</p>
          <p>${formatPrice(cartTotalPrice)}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="uppercase tracking-wider text-gray-400">Shipping fee</p>
          <p>$0</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <p className="uppercase tracking-wider text-gray-400">Grand Total</p>
        <p className="font-bold text-[var(--brand-color)]">
          ${formatPrice(cartTotalPrice)}
        </p>
      </div>
      <input
        type="submit"
        className="w-[60%] w-full cursor-pointer rounded-md bg-[var(--brand-color)] p-3 text-center uppercase text-white"
        value="continue and pay"
      />
    </div>
  );
};

export default SummaryDetails;
