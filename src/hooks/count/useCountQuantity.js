import React, { useState } from "react";

const useCountQuantity = () => {
  const [count, setCount] = useState(0);

  const handleQuantity = (event) => {
    const { id } = event.target;
    if (id === "desc") {
      if (count === 0) return;
      setCount((prev) => {
        return prev - 1;
      });
    }

    if (id === "asc") {
      setCount((prev) => {
        return prev + 1;
      });
    }
  };

  return { count, setCount, handleQuantity };
};

export default useCountQuantity;
