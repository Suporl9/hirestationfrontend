import React, { Fragment } from "react";

import { SideBar } from "./SideBar";
export const DashBoard = () => {
  // const [tabIndex, setTabIndex] = useState(0);

  return (
    <Fragment>
      <div className="bg">
        <div className="sideBarAndDash">
          <SideBar dashBoard />
          <div className="tabpanel">
            <div className="dashboardflex">
              {/* <div className="mgTopdashb"> */}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  margin: "4% 0 4% 0",
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

                <div className="ordersdiv">
                  <h2 className="totalAmountdiv">Orders:</h2>
                  <h2 className="totalAmountdiv">Rs.6776</h2>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
