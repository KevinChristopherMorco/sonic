import React from "react";
import { useParams } from "react-router-dom";

import products from "../json/products.json";

const getProductCategory = () => {
  const { productCategory } = useParams();

  if (productCategory === "headphones") {
    return products.headphones;
  }

  if (productCategory === "speakers") {
    return products.speakers;
  }

  if (productCategory === "earphones") {
    return products.earphones;
  }
};

export default getProductCategory;
