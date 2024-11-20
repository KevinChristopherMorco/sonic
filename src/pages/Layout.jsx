import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import CartView from "../components/cart/CartView";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import { useCartContext } from "../hooks/cart/CartProvider";
import CheckoutSuccess from "../components/checkout/CheckoutSuccess";

const Layout = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const { isPayedCheckout } = useCartContext();

  return (
    <>
      <Header toggleCart={toggleCart} setToggleCart={setToggleCart} />
      <main className="grow py-[5rem]">
        <Outlet />
      </main>
      <Footer />

      {toggleCart && <CartView />}
      {isPayedCheckout && <CheckoutSuccess />}
      {/* <CheckoutSuccess /> */}
    </>
  );
};

export default Layout;
