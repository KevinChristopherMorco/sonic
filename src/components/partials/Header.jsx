import React from "react";
import { Link } from "react-router-dom";
import { RiMenuFill, RiShoppingCartLine } from "@remixicon/react";

import { useCartContext } from "../../hooks/cart/CartProvider";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";

import ProductCategoryLink from "../../components/shared/links/ProductCategoryLink";

const Header = ({
  toggleCart,
  setToggleCart,
  setToggleSidebar,
  setSidebarVisible,
}) => {
  const { cartQuantity } = useCartContext();
  const { isSmallScreen, isLargeScreen } = useScreenResponsiveness();

  const handleSidebar = () => {
    setToggleSidebar(true);
    setSidebarVisible(true);
  };

  return (
    <nav className="fixed top-0 z-[999] grid w-full grid-cols-3 items-center justify-between bg-[var(--header-color)] px-4 py-6 text-white md:grid-cols-[0.5fr_1fr_5fr] md:px-16 lg:grid-cols-3 lg:justify-items-center">
      <Link
        to={"/"}
        className="col-start-2 row-start-1 w-fit justify-self-center text-center text-3xl font-extrabold lg:col-start-1"
      >
        <p>Sonic</p>
      </Link>

      <div
        className="relative cursor-pointer justify-self-end lg:col-start-3 lg:justify-self-center"
        onClick={() => setToggleCart(!toggleCart)}
      >
        {cartQuantity !== 0 && (
          <div className="absolute left-4 flex h-3 w-3 items-center justify-center rounded-full bg-[var(--brand-color)]">
            <p className="text-[.7rem]">{cartQuantity}</p>
          </div>
        )}

        <RiShoppingCartLine className="col-start-3 row-start-1" />
      </div>

      {isSmallScreen && (
        <RiMenuFill
          className="col-start-1 row-start-1 cursor-pointer justify-self-start"
          onClick={handleSidebar}
        />
      )}

      {isLargeScreen && (
        <div className="col-start-2 row-start-1 max-w-full justify-self-center lg:text-[.7rem] xl:text-sm">
          <ProductCategoryLink />
        </div>
      )}
    </nav>
  );
};

export default Header;
