import React from "react";
import { useParams } from "react-router-dom";

const PageTitleCard = () => {
  const { productCategory } = useParams();
  return (
    <div className="h-[20vh] bg-[#0E0E0E] flex justify-center items-center text-white">
      <h1 className="uppercase text-4xl font-medium">{productCategory}</h1>
    </div>
  );
};

export default PageTitleCard;
