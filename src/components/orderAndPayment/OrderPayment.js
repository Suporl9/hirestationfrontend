import React from "react";
import { CheckOutSteps } from "./CheckOutSteps";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const options = {
  style: {
    fontSize: "20px",
  },
  invalid: {
    color: "#ff2424",
  },
};
export const OrderPayment = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg">
      <CheckOutSteps orderInfo confirmOrder payment />
      <div className="pwcarddiv">
        <div className="passwordcard">
          <form onSubmit={submitHandler}>
            <h4
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                margin: "0 0 8% 0",
              }}
            >
              Card Info:
            </h4>
            <h5 className="h6bold" style={{ marginBottom: "5%" }}>
              Card Number:
            </h5>
            <CardNumberElement
              type="text"
              className="oldPassword"
              options={options}
            />
            <h5 className="h6bold" style={{ marginBottom: "5%" }}>
              Card Expiry:
            </h5>
            <CardExpiryElement
              type="text"
              className="oldPassword"
              options={options}
            />
            <h5 className="h6bold" style={{ marginBottom: "5%" }}>
              Card CVC:
            </h5>
            <CardCvcElement
              type="text"
              className="oldPassword"
              options={options}
            />
            <button className="card-btn" type="submit">
              PAY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
