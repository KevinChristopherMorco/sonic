import React from "react";
import { Link } from "react-router-dom";
import { RiMenuFill, RiShoppingCartLine } from "@remixicon/react";

import { useCartContext } from "../../hooks/cart/CartProvider";

const Header = ({ toggle, setToggle }) => {
  const { cartQuantity } = useCartContext();
  return (
    <nav className="fixed z-[999] top-0 w-full grid grid-cols-3 py-6 px-4 items-center justify-between place-items-center	 bg-[var(--header-color)] text-white">
      <Link
        to={"/"}
        className="text-3xl font-extrabold row-start-1 col-start-2"
      >
        <p>Sonic</p>
      </Link>
      <div
        className="relative justify-self-end cursor-pointer "
        onClick={() => setToggle(!toggle)}
      >
        <div className="absolute left-4 w-3 h-3 bg-[var(--brand-color)] rounded-full flex items-center justify-center">
          <p className="text-[.7rem]">{cartQuantity}</p>
        </div>
        <RiShoppingCartLine className="row-start-1 col-start-3 justify-self-end" />
      </div>
      <RiMenuFill className="cursor-pointer row-start-1 col-start-1 justify-self-start" />
    </nav>
  );
};

export default Header;
