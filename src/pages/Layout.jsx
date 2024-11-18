import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useCartContext } from "../hooks/cart/CartProvider";
import useCountQuantity from "../hooks/count/useCountQuantity";
import formatPrice from "../helpers/format/formatPrice";

import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ProductQuantity from "../components/shared/buttons/ProductQuantity";

const Layout = () => {
  const {
    cart,
    cartQuantity,
    cartTotalPrice,
    setCart,
    setCartQuantity,
    setCartTotalPrice,
    deleteAllCartItem,
  } = useCartContext();
  const { handleModifyQuantity } = useCountQuantity(
    cart,
    setCart,
    setCartQuantity,
    setCartTotalPrice
  );
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <main className="grow py-[5rem]">
        <Outlet />
      </main>
      <Footer />

      {toggle && (
        <div className="fixed w-full bg-black h-screen bg-opacity-20 flex flex-col py-10 items-center">
          <div className=" bg-white w-[90%] rounded-lg  max-h-[90vh] overflow-y-scroll text-black my-[5rem] p-6  flex flex-col gap-8">
            <div className="uppercase flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium ">
                <h4 className="text-lg">Cart</h4>
                <p className="text-lg ">({cartQuantity})</p>
              </div>
              {cart && cart.length > 0 && (
                <div>
                  <button
                    className="cursor-pointer"
                    onClick={deleteAllCartItem}
                  >
                    Remove all items
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-10">
              {cart?.map((item) => {
                return (
                  <div className="flex justify-between items-center">
                    <img
                      src={item.productImage}
                      alt=""
                      className="w-20 h-20 rounded-md"
                    />
                    <div className="flex flex-col gap-2 text-[.8rem]">
                      <p className="font-medium w-[6rem]">{item.productName}</p>
                      <p className="font-light">
                        ${formatPrice(item.totalPrice)}
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="flex gap-2 items-center">
                        <ProductQuantity
                          count={item.productQuantity}
                          handleQuantity={(event) =>
                            handleModifyQuantity(event, item, cart, setCart)
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              }) || (
                <div className="flex flex-col gap-10">
                  <h4 className="text-2xl">Your cart is empty</h4>
                  <p className="text-gray-400 font-light">
                    Continue shopping on the audiophile website{" "}
                    <Link
                      to={"/"}
                      className="text-[var(--brand-color)] font-medium"
                    >
                      homepage
                    </Link>
                  </p>
                </div>
              )}
              {cart && cart.length > 0 && (
                <div className="flex flex-col gap-5">
                  <div className="uppercase flex justify-between items-center font-medium">
                    <p className="">Total</p>
                    <p>${formatPrice(cartTotalPrice)}</p>
                  </div>
                  <Link
                    to={"/checkout"}
                    className="uppercase bg-[var(--brand-color)] p-2 rounded-md text-center text-white font-medium"
                  >
                    <p>checkout</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
