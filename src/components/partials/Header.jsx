import React from "react";
import { Link } from "react-router-dom";
import { RiMenuFill, RiShoppingCartLine } from "@remixicon/react";

import { useCartContext } from "../../hooks/cart/CartProvider";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";

import ProductCategoryLink from "../../components/shared/links/ProductCategoryLink";

const Header = ({ toggleCart, setToggleCart }) => {
  const { cartQuantity } = useCartContext();
  const { isSmallScreen, isLargeScreen } = useScreenResponsiveness();
  console.log(isLargeScreen);
  return (
    <nav className="fixed z-[999] top-0 w-full grid grid-cols-3 md:grid-cols-[0.5fr_1fr_5fr] py-6 px-4 md:px-16 items-center justify-between bg-[var(--header-color)] text-white lg:grid-cols-3 lg:justify-items-center">
      <Link
        to={"/"}
        className="text-3xl font-extrabold row-start-1 col-start-2 lg:col-start-1 text-center w-fit justify-self-center"
      >
        <p>Sonic</p>
      </Link>

      <div
        className="relative justify-self-end cursor-pointer lg:col-start-3 lg:justify-self-center"
        onClick={() => setToggleCart(!toggleCart)}
      >
        <div className="absolute left-4 w-3 h-3 bg-[var(--brand-color)] rounded-full flex items-center justify-center">
          <p className="text-[.7rem]">{cartQuantity}</p>
        </div>
        <RiShoppingCartLine className="row-start-1 col-start-3" />
      </div>

      {isSmallScreen && (
        <RiMenuFill className="cursor-pointer row-start-1 col-start-1 justify-self-start" />
      )}

      {isLargeScreen && (
        <div className="col-start-2 row-start-1 justify-self-center max-w-full lg:text-[.7rem] xl:text-sm">
          <ProductCategoryLink />
        </div>
      )}
    </nav>
  );
};

export default Header;
