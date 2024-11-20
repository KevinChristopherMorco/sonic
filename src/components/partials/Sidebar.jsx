import React from "react";
import { RiCloseFill } from "@remixicon/react";

import ProductCategoryLink from "../shared/links/ProductCategoryLink";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div
      className={`${toggleSidebar ? "animate-slideIn" : "animate-slideOut"} fixed z-[999] flex h-screen w-full -translate-x-[100%] flex-col gap-24 bg-black p-10 text-white`}
    >
      <div className="flex h-fit w-full items-center justify-between">
        <p className="text-3xl font-bold">Sonic</p>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-color)]"
          onClick={() => setToggleSidebar(false)}
        >
          <RiCloseFill className="h-7 w-7" />
        </button>
      </div>
      <div className="animate-fadeIn flex flex-col justify-center gap-12 text-center">
        <p className="text-xl font-bold">Our Products</p>
        <ProductCategoryLink />
      </div>
    </div>
  );
};

export default Sidebar;
