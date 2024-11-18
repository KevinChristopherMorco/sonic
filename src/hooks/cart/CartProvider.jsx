import React, { createContext, useContext, useEffect, useState } from "react";

import useCountQuantity from "../count/useCountQuantity";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("sonic-cart") || null)
  );

  const [cartQuantity, setCartQuantity] = useState(
    cart?.reduce((total, item) => {
      total += item.productQuantity;
      return total;
    }, 0) || 0
  );

  const { count, setCount, handleQuantity } = useCountQuantity();

  // const addToCart = (item) => {
  //   setCart((prev) => {
  //     return prev
  //       ? [...prev, { ...item, totalPrice: item.totalPrice() }]
  //       : [{ ...item, totalPrice: item.totalPrice() }];
  //   });
  //   setCartQuantity((prev) => prev + item.productQuantity);
  // };

  const addToCart = (item) => {
    console.log(item);
    if (cart?.some((x) => x.productID)) {
      const findProduct = cart.find((x) => x.productID);
      setCart((prev) => {
        return prev.map((product) =>
          product.productID === findProduct.productID
            ? {
                ...product,
                productQuantity: product.productQuantity + item.productQuantity,
                totalPrice:
                  product.productPrice *
                  (product.productQuantity + item.productQuantity),
              }
            : product
        );
      });
      setCartQuantity((prev) => prev + item.productQuantity);
      return;
    }
    setCart((prev) => {
      return prev
        ? [...prev, { ...item, totalPrice: item.totalPrice() }]
        : [{ ...item, totalPrice: item.totalPrice() }];
    });
    setCartQuantity((prev) => prev + item.productQuantity);
  };

  const deleteCartItem = () => {};

  useEffect(() => {
    localStorage.setItem("sonic-cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, cartQuantity, addToCart, handleQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
