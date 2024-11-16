import {
  RiMenuFill,
  RiShoppingCartLine,
  RiUserFill,
  RiUserLine,
} from "@remixicon/react";
import React from "react";

const Header = () => {
  return (
    <nav className="grid grid-cols-3 py-6 px-4 items-center justify-between place-items-center	 bg-[var(--header-color)] text-white">
      <div className="text-3xl font-extrabold row-start-1 col-start-2">
        Sonic
      </div>
      <RiShoppingCartLine className="cursor-pointer row-start-1 col-start-3 justify-self-end" />
      <RiMenuFill className="cursor-pointer row-start-1 col-start-1 justify-self-start" />

      {/* <div className="flex items-center gap-5">
        <RiShoppingCartLine className="cursor-pointer" />

        <div className="w-7 h-7 rounded-full flex items-center justify-center border-gray-200 border-2 cursor-pointer">
          <RiUserLine className="w-5 h-5" />
        </div>
      </div> */}
    </nav>
  );
};

export default Header;
