import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCartView = () => {
  const { pathname } = useLocation();
  const [toggleCart, setToggleCart] = useState(false);

  useEffect(() => {
    setToggleCart(false);
  }, [pathname]);

  return { toggleCart, setToggleCart };
};

export default useCartView;
