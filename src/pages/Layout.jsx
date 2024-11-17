import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { useCartContext } from "../hooks/cart/CartProvider";

import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

const Layout = () => {
  const { cart } = useCartContext();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <main className="grow py-[5rem]">
        <Outlet />
      </main>
      <Footer />

      {toggle && (
        <div className="fixed w-full bg-black h-[20rem] text-white my-[5rem] p-10 rounded-b-2xl">
          <p>Items In cart</p>
          {cart?.map((cart) => {
            return <p className="text-white">{cart.productName}</p>;
          }) || <p>No items in cart</p>}
        </div>
      )}
    </>
  );
};

export default Layout;
