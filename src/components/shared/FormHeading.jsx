import React from "react";

const FormHeading = ({ title }) => {
  return (
    <h4 className="font-medium uppercase tracking-widest text-[var(--brand-color)]">
      {title}
    </h4>
  );
};

export default FormHeading;
