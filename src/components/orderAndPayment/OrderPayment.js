import React from "react";
import { CheckOutSteps } from "./CheckOutSteps";

export const OrderPayment = () => {
  return (
    <div className="bg">
      <CheckOutSteps orderInfo confirmOrder payment />
    </div>
  );
};
