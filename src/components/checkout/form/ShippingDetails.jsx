import React from "react";

import FormHeading from "../../shared/FormHeading";

const ShippingDetails = ({ checkoutInputs }) => {
  return (
    <div className="flex flex-col gap-5">
      <FormHeading title={"shipping info"} />
      <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
        {checkoutInputs.secondSection.map((input, index) => {
          return (
            <div key={index} className="flex flex-col gap-1">
              <label
                htmlFor={input.name}
                className="text-sm font-medium capitalize"
              >
                {input.label}
              </label>
              <input
                type={input.type}
                name={input.name}
                id={input.name}
                placeholder={input.placeholder}
                className="w-full rounded-md border border-gray-400 p-4 text-sm text-gray-400"
                required
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShippingDetails;
