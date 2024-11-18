import React, { useState } from "react";

import findProduct from "../../helpers/findProduct";
import { useCartContext } from "../cart/CartProvider";

const useCountQuantity = (
  cart,
  setCart,
  setCartQuantity,
  setCartTotalPrice
) => {
  const [count, setCount] = useState(0);
  // const { cart } = useCartContext();

  const handleQuantity = (event) => {
    const { id } = event.target;
    console.log(count);
    if (id === "desc") {
      if (count === 0) return;
      setCount((prev) => {
        return prev - 1;
      });
    }

    if (id === "asc") {
      setCount((prev) => {
        return prev + 1;
      });
    }
  };

  const handleModifyQuantity = (event, item) => {
    // const product = findProduct(cart);

    const { id } = event.target;

    if (id === "desc") {
      if (item.productQuantity === 0) return;
      setCart((prev) => {
        return prev.map((product) =>
          product.productID === item.productID
            ? {
                ...item,
                productQuantity: item.productQuantity - 1,
                totalPrice: item.totalPrice - product.productPrice,
              }
            : product
        );
      });
      setCartQuantity((prev) => prev - 1);
      setCartTotalPrice((prev) => prev - item.productPrice);
    }

    if (id === "asc") {
      setCart((prev) => {
        return prev.map((product) =>
          product.productID === item.productID
            ? {
                ...item,
                productQuantity: item.productQuantity + 1,
                totalPrice: item.totalPrice + product.productPrice,
              }
            : product
        );
      });
      setCartQuantity((prev) => prev + 1);
      setCartTotalPrice((prev) => prev + item.productPrice);
    }
  };

  return { count, setCount, handleQuantity, handleModifyQuantity };
};

export default useCountQuantity;
