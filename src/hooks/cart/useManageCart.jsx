import React, { useEffect, useState } from "react";

const useManageCart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("sonic-cart") || null)
  );

  //   const numberofCartItems =
  //     cart?.reduce((total, item) => {
  //       total += item.productQuantity;
  //       return total;
  //     }, 0) || 0;

  const [cartQuantity, setCartQuantity] = useState(
    cart?.reduce((total, item) => {
      total += item.productQuantity;
      return total;
    }, 0) || 0
  );

  const addToCart = (item) => {
    setCart((prev) => {
      return prev
        ? [...prev, { ...item, totalPrice: item.totalPrice() }]
        : [{ ...item, totalPrice: item.totalPrice() }];
    });
    setCartQuantity((prev) => prev + item.productQuantity);
  };

  console.log(cart);

  useEffect(() => {
    localStorage.setItem("sonic-cart", JSON.stringify(cart));
  }, [cart]);

  return { cartQuantity, addToCart };
};

export default useManageCart;
