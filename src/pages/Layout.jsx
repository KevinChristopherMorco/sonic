import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { useCartContext } from "../hooks/cart/CartProvider";
import useCartView from "../hooks/cart/useCartView";

import CheckoutSuccess from "../components/checkout/CheckoutSuccess";
import Sidebar from "../components/partials/Sidebar";
import CartView from "../components/cart/CartView";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";

const Layout = () => {
  const { toggleCart, setToggleCart } = useCartView();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const { isPayedCheckout } = useCartContext();

  return (
    <>
      <Header
        toggleCart={toggleCart}
        setToggleSidebar={setToggleSidebar}
        setSidebarVisible={setSidebarVisible}
        setToggleCart={setToggleCart}
      />
      <main className="grow py-[5rem]">
        <Outlet />
      </main>
      <Footer />

      {toggleCart && <CartView />}
      {isPayedCheckout && <CheckoutSuccess />}
      {isSidebarVisible && (
        <Sidebar
          toggleSidebar={toggleSidebar}
          isSidebarVisible={isSidebarVisible}
          setToggleSidebar={setToggleSidebar}
        />
      )}
    </>
  );
};

export default Layout;
