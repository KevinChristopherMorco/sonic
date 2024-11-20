import React from "react";
import { Link } from "react-router-dom";

const Empty = ({ title }) => {
  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-2xl font-medium">{title}</h4>
      <p className="font-light text-gray-400">
        Continue shopping on the audiophile website{" "}
        <Link to={"/"} className="font-medium text-[var(--brand-color)]">
          homepage
        </Link>
      </p>
    </div>
  );
};

export default Empty;
