import React from "react";
import { Link } from "react-router-dom";

import useCountQuantity from "../../hooks/count/useCountQuantity";
import { useCartContext } from "../../hooks/cart/CartProvider";
import formatPrice from "../../helpers/format/formatPrice";

import ProductQuantity from "../shared/buttons/ProductQuantity";
import Empty from "../alerts/Empty";

const CartView = () => {
  const {
    cart,
    cartQuantity,
    cartTotalPrice,
    setCart,
    setCartQuantity,
    setCartTotalPrice,
    deleteCartItem,
    deleteAllCartItem,
  } = useCartContext();
  const { handleModifyQuantity } = useCountQuantity(
    cart,
    setCart,
    setCartQuantity,
    setCartTotalPrice,
  );

  const decreaseItem = (event, item, cart, setCart) => {
    handleModifyQuantity(event, item, cart, setCart);
    deleteCartItem(item);
  };
  return (
    <div className="fixed z-[998] flex h-screen w-full flex-col items-center bg-black bg-opacity-20 py-10 md:items-end md:px-5">
      <div className="my-[5rem] flex max-h-[90vh] w-[90%] flex-col gap-8 overflow-y-scroll rounded-lg bg-white p-6 text-black md:w-[50%] xl:w-[30%]">
        <div className="flex items-center justify-between uppercase">
          <div className="flex items-center gap-2 font-medium">
            <h4 className="text-lg">Cart</h4>
            <p className="text-lg">({cartQuantity})</p>
          </div>
          {cart && cart.length > 0 && (
            <div>
              <button className="cursor-pointer" onClick={deleteAllCartItem}>
                Remove all items
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-10">
          {cart?.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-between">
                <img
                  src={item.productImage}
                  alt=""
                  className="h-20 w-20 rounded-md"
                />
                <div className="flex flex-col gap-2 text-[.8rem]">
                  <p className="w-[6rem] font-medium">{item.productName}</p>
                  <p className="font-light">${formatPrice(item.totalPrice)}</p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <ProductQuantity
                      count={item.productQuantity}
                      handleQuantity={(event) =>
                        decreaseItem(event, item, cart, setCart)
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {(!cart || cart?.length === 0) && (
            <Empty title={"Your cart is empty"} />
          )}

          {cart && cart.length > 0 && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between font-medium uppercase">
                <p className="">Total</p>
                <p>${formatPrice(cartTotalPrice)}</p>
              </div>
              <Link
                to={"/checkout"}
                className="rounded-md bg-[var(--brand-color)] p-2 text-center font-medium uppercase text-white"
              >
                <p>checkout</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartView;
