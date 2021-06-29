import React, { Fragment } from "react";

export const DashBoardTabComponent = () => {
  return (
    <Fragment>
      <div className="dashboardflex">
        {/* <div className="mgTopdashb"> */}
        <span
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            margin: "4% 0 2% 0",
          }}
        >
          DashBoard:
        </span>

        <div className="amountdiv">
          <h2 className="totalAmountdiv">Total Amount:</h2>
          <h2 className="totalAmountdiv">Rs.6776</h2>
        </div>
        <div className="secondflexrow">
          <div className="servicediv">
            <h2 className="totalAmountdiv">Services:</h2>
            <h2 className="totalAmountdiv">Rs.6776</h2>
          </div>
          <div className="usersdiv">
            <h2 className="totalAmountdiv">Users:</h2>
            <h2 className="totalAmountdiv">Rs.6776</h2>
          </div>
          <div className="ordersdiv">
            <h2 className="totalAmountdiv">Orders:</h2>
            <h2 className="totalAmountdiv">Rs.6776</h2>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Fragment>
  );
};
