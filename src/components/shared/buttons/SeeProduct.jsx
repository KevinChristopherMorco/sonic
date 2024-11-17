import React from "react";
import { Link } from "react-router-dom";

const SeeProduct = ({ link }) => {
  return (
    <Link to={link}>
      <p className="uppercase bg-[var(--brand-color)] text-white px-6 py-4 rounded-md">
        See Product
      </p>
    </Link>
  );
};

export default SeeProduct;
