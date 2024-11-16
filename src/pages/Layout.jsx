import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="grow pb-[5rem]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
