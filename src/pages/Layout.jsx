import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useCartContext } from "../hooks/cart/CartProvider";
import useCountQuantity from "../hooks/count/useCountQuantity";

import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ProductQuantity from "../components/shared/buttons/ProductQuantity";

const Layout = () => {
  const { cart, cartQuantity } = useCartContext();
  const { count, setCount, handleQuantity } = useCountQuantity();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <main className="grow py-[5rem]">
        <Outlet />
      </main>
      <Footer />

      {toggle && (
        <div className="fixed w-full bg-black h-[20rem] text-white my-[5rem] p-6 rounded-b-2xl flex flex-col gap-5">
          <div className="flex items-center gap-2 font-medium uppercase">
            <h4 className="text-2xl">Cart</h4>
            <p className="tracking-widest text-xl ">({cartQuantity})</p>
          </div>
          <div className="flex flex-col gap-10 overflow-y-scroll">
            {cart?.map((cart) => {
              console.log(cart);
              return (
                <div className="flex gap-4">
                  <img
                    src={cart.productImage}
                    alt=""
                    className="w-20 h-20 rounded-md"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-white font-medium">{cart.productName}</p>
                    <p className="font-light">${cart.totalPrice}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex gap-2 items-center">
                      <ProductQuantity
                        count={cart.productQuantity}
                        handleQuantity={handleQuantity}
                      />
                      <p className="font-medium">X</p>
                    </div>
                  </div>
                </div>
              );
            }) || <p>No items in cart</p>}
            <div className="flex flex-col gap-5">
              <div className="uppercase flex justify-between items-center">
                <p className="font-medium">Total</p>
                <p>$2,000</p>
              </div>
              <Link
                to={"/checkout"}
                className="uppercase bg-[var(--brand-color)] p-2 rounded-md text-center"
              >
                <p>checkout</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
