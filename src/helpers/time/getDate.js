import React from "react";

const getDate = () => {
  const currentYear = new Date().toLocaleString("en-US", {
    year: "numeric",
    timeZone: "UTC",
  });

  return { currentYear };
};

export default getDate;
