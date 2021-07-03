import React, { Fragment } from "react";
import { SideBar } from "./SideBar";
import { Link } from "react-router-dom";
import sudjpg from "./sud.JPG";
import editpng from "./edit.png";

export const MyServiceOrders = () => {
  return (
    <Fragment>
      <div className="bg">
        <div className="sideBarAndDash">
          <SideBar myOrders />
          <div className="tabpanel">
            <div className="dashboardflex">
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  marginTop: "4%",
                }}
              >
                Orders:
              </span>

              <div className="myitemscardleftorder">
                <div className="flexdownorder">
                  <div className="ordernoandhl">
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      Order No: #899787987879879868787
                    </span>
                    <div className="hl3"></div>
                  </div>
                  <div className="cardleftorder">
                    <div className="titleandphotoorder">
                      <Link
                        // to={`/service/${
                        //   cartItem.service && cartItem.service._id
                        // }`}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <img
                          src={sudjpg}
                          //   src={
                          //     cartItem.service &&
                          //     cartItem.service.images[0].url
                          //   }
                          alt="gig"
                          style={{
                            height: "100px",
                            width: "120px",
                            borderRadius: "5px",
                          }}
                        />
                      </Link>

                      <span className="titlerow">
                        <Link
                          //   to={`/service/${
                          //     cartItem.service && cartItem.service._id
                          //   }`}
                          className="liTitle"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          {/* {cartItem.service && cartItem.service.title} */}
                          hello i name is miyasunimaas
                        </Link>
                      </span>

                      {/* </Link> */}
                    </div>
                    <div className="midstatus">
                      <h5
                        className="h6bold"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Status:
                      </h5>
                      <h5
                        className="h6bold"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Processing
                      </h5>
                    </div>
                    <div className="btns">
                      <Link
                      //  to={`/order/${order._id}`}
                      >
                        <img
                          src={editpng}
                          alt="editPng"
                          style={{ height: "35px", width: "35px" }}
                        ></img>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
