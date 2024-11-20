import React, { createContext, useContext, useEffect, useState } from "react";

import { SuccessToast } from "../../components/alerts/Toast";

import useCountQuantity from "../count/useCountQuantity";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("sonic-cart") || null),
  );

  const [cartQuantity, setCartQuantity] = useState(
    cart?.reduce((total, item) => {
      total += item.productQuantity;
      return total;
    }, 0) || 0,
  );

  const [cartTotalPrice, setCartTotalPrice] = useState(
    cart?.reduce((total, item) => {
      total += item.totalPrice;
      return total;
    }, 0) || 0,
  );

  const [isPayedCheckout, setPayedCheckout] = useState(false);

  const addToCart = (item) => {
    if (!item.productQuantity) return;
    if (cart?.some((x) => x.productID === item.productID)) {
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
            : product,
        );
      });
      setCartQuantity((prev) => prev + item.productQuantity);
      setCartTotalPrice(
        (prev) => prev + item.productPrice * item.productQuantity,
      );
      SuccessToast(
        `${item.productQuantity} item(s) added to your cart.`,
        `You have now ${cartQuantity + item.productQuantity} item(s) in your cart. `,
      );
      return;
    }

    setCart((prev) => {
      return prev
        ? [...prev, { ...item, totalPrice: item.totalPrice() }]
        : [{ ...item, totalPrice: item.totalPrice() }];
    });
    setCartQuantity((prev) => prev + item.productQuantity);
    setCartTotalPrice(
      (prev) => prev + item.productPrice * item.productQuantity,
    );
    SuccessToast(
      `${item.productQuantity} item(s) added to your cart.`,
      `You have now ${cartQuantity + item.productQuantity} item(s) in your cart. `,
    );
  };

  const deleteCartItem = (item) => {
    const { productID } = item;
    const findProduct = cart.find((cart) => cart.productID === productID);

    if (findProduct.productQuantity === 1) {
      setCart((prev) =>
        prev.filter((cart) => cart.productID !== findProduct.productID),
      );
    }
  };

  const deleteAllCartItem = () => {
    setCart(null);
    setCartQuantity(0);
    setCartTotalPrice(0);
  };

  const handlePayCheckout = (event) => {
    event.preventDefault();
    setPayedCheckout(true);
  };

  useEffect(() => {
    localStorage.setItem("sonic-cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        cartTotalPrice,
        isPayedCheckout,
        addToCart,
        deleteCartItem,
        deleteAllCartItem,
        handlePayCheckout,
        setCart,
        setCartQuantity,
        setCartTotalPrice,
        setPayedCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
