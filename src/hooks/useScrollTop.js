import React, { useEffect } from "react";

const useScrollTop = (productID) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [productID]);
};

export default useScrollTop;
