import React from "react";
import { CheckOutSteps } from "./CheckOutSteps";
import img from "../Home/testimgs/b.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const OrderConfirm = () => {
  const { orderInfo } = useSelector((state) => state.getCart);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="bg">
      <CheckOutSteps orderInfo confirmOrder />
      <div className="myprofilebody1">
        <div className="h1andmyitemscardleft">
          <span style={{ fontWeight: "bold", fontSize: "28px" }}>
            Order Info:
          </span>
          <div className="infoclass">
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "4%",
              }}
            >
              Name : {user && user.fullname}
            </h6>
            <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
              Phone Number : {orderInfo.phoneNumber}
            </h6>
          </div>
          {/* <span style={{ fontWeight: "bold", fontSize: "30px" }}>
            Order Info:
          </span> */}
          <div className="myitemscardleft">
            <div className="gigstitleandphoto">
              <div className="cardleft">
                <div className="titleandphoto1">
                  <img
                    src={img}
                    alt="gig"
                    style={{
                      height: "100px",
                      width: "120px",
                      borderRadius: "5px",
                    }}
                  />
                  <span className="titlerow1">
                    I will play games so you dont have to.
                  </span>
                </div>

                <h2 style={{ marginTop: "20px", color: "#fd4c4c" }}>Rs.5656</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="myitemscardright1">
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>Summary:</span>
          <div className="hl" style={{ marginBottom: "10%" }}></div>
          <div className="subtotal">
            <h5 className="h6bold">Subtotal:</h5>
            <h5 className="h6bold">(unit)</h5>
          </div>
          <div className="subtotal">
            <h5 className="h6bold">Total Price:</h5>
            <h5 className="h6bold">
              Rs.
              {/* {cartItems.reduce((acc, item) => item.service.price + acc, 0)} */}
            </h5>
          </div>
          <Link to="/order/payment">
            <button className="card-btn">Proceed to payment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
