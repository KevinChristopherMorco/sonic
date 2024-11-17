import React, { useEffect } from "react";

const useScrollTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
};

export default useScrollTop;
