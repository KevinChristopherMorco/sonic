import React from "react";
import { Link, useLocation } from "react-router-dom";

import useScreenResponsiveness from "../../../hooks/useScreenResponsiveness";

const ProductCategoryLink = () => {
  const { pathname } = useLocation();

  const { isSmallScreen } = useScreenResponsiveness();
  return (
    <ul
      className={`${isSmallScreen ? "flex-col" : "flex-row"} flex items-center gap-8 tracking-widest`}
    >
      <li
        className={`${pathname === "/" ? "border-b-2 border-[var(--brand-color)] font-bold" : ""} flex w-fit py-1 font-medium uppercase`}
      >
        <Link to={"/"}>
          <p>home</p>
        </Link>
      </li>
      <li
        className={`${pathname === "/headphones" ? "border-b-2 border-[var(--brand-color)] font-bold" : ""} w-fit py-1 font-medium uppercase`}
      >
        <Link to={"/headphones"}>
          <p>headphones</p>
        </Link>
      </li>
      <li
        className={`${pathname === "/speakers" ? "border-b-2 border-[var(--brand-color)] font-bold" : ""} w-fit py-1 font-medium uppercase`}
      >
        <Link to={"/speakers"}>
          <p>speakers</p>
        </Link>
      </li>
      <li
        className={`${pathname === "/earphones" ? "border-b-2 border-[var(--brand-color)] font-bold" : ""} w-fit py-1 font-medium uppercase`}
      >
        <Link to={"/earphones"}>
          <p>earphones</p>
        </Link>
      </li>
    </ul>
  );
};

export default ProductCategoryLink;
