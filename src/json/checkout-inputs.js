export const checkoutInputs = {
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
      label: "city",
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
