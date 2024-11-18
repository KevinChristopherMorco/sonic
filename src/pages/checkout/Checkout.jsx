import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../hooks/cart/CartProvider";

import Mainheading from "../../components/shared/Mainheading";
import formatPrice from "../../helpers/format/formatPrice";

const Checkout = () => {
  const { cart, cartQuantity, cartTotalPrice } = useCartContext();
  const inputs = {
    firstSection: [
      { name: "name", type: "text", placeholder: "Alexei Ward", label: "name" },
      {
        name: "email",
        type: "email",
        placeholder: "alexei@gmail.com",
        label: "email",
      },
      {
        name: "phone-number",
        type: "text",
        placeholder: "+1 202-555-0136",
        label: "phone number",
      },
    ],

    secondSection: [
      {
        name: "address",
        type: "text",
        placeholder: "1137 Williams Avenue",
        label: "address",
      },
      {
        name: "zip-code",
        type: "text",
        placeholder: "10001",
        label: "zip code",
      },
      {
        name: "city",
        type: "text",
        placeholder: "New York",
        label: "phone-number",
      },
    ],

    thirdSection: [
      {
        name: "payment-method",
        type: "radio",
        value: "e-money",
        label: "e-money",
      },
      {
        name: "payment-method",
        type: "radio",
        value: "cod",
        label: "cash on delivery",
      },
      {
        name: "e-money-number",
        type: "number",
        placeholder: "238521993",
        label: "e-money number",
      },
      {
        name: "e-money-pin",
        type: "number",
        placeholder: "238521993",
        label: "e-money pin",
      },
    ],
  };

  const FormHeading = ({ title }) => {
    return (
      <h4 className="uppercase tracking-widest font-medium text-[var(--brand-color)]">
        {title}
      </h4>
    );
  };

  const [checked, setChecked] = useState("");
  return (
    <div className="p-6">
      <div className="flex flex-col gap-10">
        <Mainheading title={"checkout"} />
        <form action="" className="flex flex-col gap-5">
          <FormHeading title={"billing details"} />
          {inputs.firstSection.map((input) => {
            return (
              <div className="flex flex-col gap-1">
                <label htmlFor={input.name} className="uppercase font-medium">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  id={input.name}
                  placeholder={input.placeholder}
                  className="border border-gray-500 p-3 w-full rounded-md text-lg"
                />
              </div>
            );
          })}

          <FormHeading title={"shipping info"} />

          {inputs.secondSection.map((input) => {
            return (
              <div className="flex flex-col gap-1">
                <label htmlFor={input.name} className="uppercase font-medium">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  id={input.name}
                  placeholder={input.placeholder}
                  className="border border-gray-500 p-3 w-full rounded-md text-lg"
                />
              </div>
            );
          })}

          <FormHeading title={"payment details"} />
          {inputs.thirdSection
            .filter((radio) => radio.type === "radio")
            .map((input) => {
              return (
                <div
                  className={`${
                    checked === input.value
                      ? "border-[var(--brand-color)]"
                      : "border-gray-200"
                  } flex gap-5 items-center p-4 border rounded`}
                >
                  <input
                    type={input.type}
                    name={input.name}
                    id={input.value}
                    className="w-6 h-6 accent-[var(--brand-color)] bg-gray-100 border-gray-300"
                    onClick={() => setChecked(input.name)}
                  />
                  <label
                    htmlFor={input.value}
                    className="uppercase font-medium w-full"
                  >
                    {input.label}
                  </label>
                </div>
              );
            })}

          {inputs.thirdSection
            .filter((radio) => radio.type !== "radio")
            .map((input) => {
              return (
                <div className="flex flex-col gap-1">
                  <label htmlFor={input.name} className="uppercase font-medium">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    name={input.name}
                    id={input.name}
                    placeholder={input.placeholder}
                    className="border border-gray-500 p-3 w-full rounded-md text-lg"
                  />
                </div>
              );
            })}
        </form>
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-medium">Summary</h4>
          {cart?.map((product) => {
            console.log(cart);
            return (
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src={product.productImage}
                    alt=""
                    className="rounded-md w-16 h-16"
                  />
                  <div className="font-light">
                    <p className="uppercase font-medium">
                      {product.productName}
                    </p>
                    <p className="uppercase tracking-wider">
                      ${formatPrice(product.productPrice)}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="uppercase tracking-widest font-medium">
                    {product.productQuantity}x
                  </p>
                </div>
              </div>
            );
          })}
          {/* <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img
                src="https://placehold.co/75x75"
                alt=""
                className="rounded"
              />
              <div className="font-light">
                <p className="uppercase font-medium">XX59</p>
                <p className="uppercase tracking-wider">$12,500</p>
              </div>
            </div>
            <div>
              <p className="uppercase tracking-widest font-medium">7x</p>
            </div>
          </div> */}
          <div className="uppercase font-medium flex justify-between items-center">
            <p>Total</p>
            <p>${formatPrice(cartTotalPrice)}</p>
          </div>
          <Link className="p-3 bg-[var(--brand-color)] uppercase text-white w-[60%] cursor-pointer text-center rounded-md">
            <p>continue and pay</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
