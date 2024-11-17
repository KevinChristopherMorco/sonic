import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCategoryLink = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex flex-col gap-8">
      <li className="uppercase font-medium">
        <Link to={"/"}>
          <p>home</p>
        </Link>
      </li>
      <li className="uppercase font-medium">
        <Link to={"/headphones"}>
          <p>headphones</p>
        </Link>
      </li>
      <li className="uppercase font-medium">
        <Link to={"/speakers"}>
          <p>speakers</p>
        </Link>
      </li>
      <li className="uppercase font-medium">
        <Link to={"/earphones"}>
          <p>earphones</p>
        </Link>
      </li>
    </ul>
  );
};

export default ProductCategoryLink;
