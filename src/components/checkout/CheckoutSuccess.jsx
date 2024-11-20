import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiCheckFill } from "@remixicon/react";

import { useCartContext } from "../../hooks/cart/CartProvider";
import formatPrice from "../../helpers/format/formatPrice";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const { cart, cartTotalPrice, setPayedCheckout, setCartQuantity } =
    useCartContext();
  console.log(cart);

  const handleBack = () => {
    navigate("/");
    setCartQuantity(0);
    setPayedCheckout(false);
  };
  return (
    <div className="fixed z-[998] flex h-screen w-full flex-col items-center bg-black bg-opacity-20 py-2 md:px-5 lg:justify-center">
      <div className="mt-[5rem] flex max-h-[90vh] w-[90%] flex-col gap-8 overflow-y-scroll rounded-lg bg-white p-6 text-black md:w-[70%] xl:h-full xl:w-[30%] xl:w-[40%]">
        <div className="flex flex-col justify-between gap-5">
          <div className="flex h-16 w-16 items-center justify-center gap-2 rounded-full bg-[var(--brand-color)] font-medium text-white">
            <RiCheckFill className="h-10 w-10" />
          </div>
          <div className="text-lg font-bold uppercase leading-7">
            <p>Thank you</p>
            <p>for your order</p>
          </div>
          <p className="text-sm font-light tracking-wide text-gray-400">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="flex flex-col">
          {cart?.map((cart) => {
            return (
              <div className="flex items-center gap-4 rounded-t-lg bg-[#F2F2F2] p-4">
                <img
                  src={cart.productImage}
                  alt=""
                  className="h-[75px] w-[75px]"
                />
                <div className="flex w-full items-center justify-between uppercase leading-6">
                  <div className="flex flex-col">
                    <p className="font-medium tracking-wider">
                      {cart.productName}
                    </p>
                    <p className="text-[.7rem] font-light tracking-widest text-gray-400">
                      ${formatPrice(cart.totalPrice)}
                    </p>
                  </div>
                  <p>{cart.productQuantity}x</p>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col gap-2 rounded-b-lg bg-black p-4 uppercase">
            <p className="text-sm font-medium text-gray-500">grand total</p>
            <p className="text-sm font-medium text-white">
              ${formatPrice(cartTotalPrice)}
            </p>
          </div>
        </div>

        <button
          onClick={handleBack}
          className="rounded-md bg-[var(--brand-color)] p-3 text-center font-medium uppercase text-white"
        >
          <p>back to home</p>
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
