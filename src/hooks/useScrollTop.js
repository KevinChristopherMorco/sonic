import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = (productID) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [productID, pathname]);
};

export default useScrollTop;
