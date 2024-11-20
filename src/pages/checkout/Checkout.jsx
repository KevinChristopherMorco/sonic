import React from "react";

import { useCartContext } from "../../hooks/cart/CartProvider";
import { checkoutInputs } from "../../json/checkout-inputs";
import useScrollTop from "../../hooks/useScrollTop";

import Mainheading from "../../components/shared/Mainheading";
import Empty from "../../components/alerts/Empty";
import BillingDetails from "../../components/checkout/form/BillingDetails";
import ShippingDetails from "../../components/checkout/form/ShippingDetails";
import PaymentDetails from "../../components/checkout/form/PaymentDetails";
import SummaryDetails from "../../components/checkout/form/SummaryDetails";

const Checkout = () => {
  const { cart, handlePayCheckout } = useCartContext();

  useScrollTop();

  if (!cart || cart?.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center text-center md:text-start md:text-lg">
        <Empty title={"No items available for checkout"} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 bg-[#F2F2F2] p-6 md:p-12 lg:flex-row">
      <div className="flex flex-col gap-10 rounded-xl bg-white p-6 md:p-10 lg:w-full">
        <Mainheading title={"checkout"} />
        <form
          onSubmit={handlePayCheckout}
          className="flex w-full flex-col gap-5 md:gap-10 lg:flex-row"
        >
          <div className="flex w-full flex-col gap-5 lg:w-[70%]">
            <BillingDetails checkoutInputs={checkoutInputs} />
            <ShippingDetails checkoutInputs={checkoutInputs} />
            <PaymentDetails checkoutInputs={checkoutInputs} />
          </div>
          <SummaryDetails cart={cart} />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
