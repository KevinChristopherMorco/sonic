import React from "react";

const ProductQuantity = ({ count, handleQuantity, view }) => {
  return (
    <div
      className={`${
        view === "productView" ? "p-3 gap-8" : "p-1 gap-4"
      } flex items-center bg-[var(--light-gray-color)] w-fit  text-black`}
    >
      <button id="desc" onClick={handleQuantity}>
        -
      </button>
      <p className="w-[1.5rem] text-center">{count}</p>
      <button id="asc" onClick={handleQuantity}>
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
