import React from "react";

const findProduct = (cart) => {
  return cart.find((x) => x.productID);
};

export default findProduct;
