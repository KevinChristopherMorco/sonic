import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useCartContext } from "../hooks/cart/CartProvider";
import useCountQuantity from "../hooks/count/useCountQuantity";
import formatPrice from "../helpers/format/formatPrice";

import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ProductQuantity from "../components/shared/buttons/ProductQuantity";
import CartView from "../components/cart/CartView";

const Layout = () => {
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <>
      <Header toggleCart={toggleCart} setToggleCart={setToggleCart} />
      <main className="grow py-[5rem]">
        <Outlet />
      </main>
      <Footer />

      {toggleCart && <CartView />}
    </>
  );
};

export default Layout;
