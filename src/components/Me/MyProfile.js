import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader } from "../layout/Loader";
import MyServices from "./MyServices";

export const MyProfile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <div className="bg">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="myprofilebody">
            <div className="profilecardsleft">
              <div className="firstprofilecard">
                <div className="usercredentials">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt="ProfileP"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      marginBottom: "10%",
                    }}
                  />
                  <h2>{user.fullname}</h2>
                  <h6 style={{ marginBottom: "15%" }}>{user.email}</h6>
                </div>

                <div className="locationfrom">
                  <h6 className="h6bold">From:</h6>
                  <h6 className="h6bold">kathmandu</h6>
                </div>
                <div className="locationfrom">
                  <h6 className="h6bold">Joined On:</h6>
                  <h6 className="h6bold">3/23/2016</h6>
                </div>
              </div>
              <div className="secondprofilecard">
                <Link to="/orders" style={{ textDecoration: "none" }}>
                  <h6 className="ordersh6 a">My Orders</h6>
                </Link>
                <Link to="/orders" style={{ textDecoration: "none" }}>
                  <h6 className="ordersh6">DashBoard</h6>
                </Link>
              </div>
            </div>
            <div className="profilecardsright">
              <div className="descriptionprofile">
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    margin: "0 0 3% 0",
                  }}
                >
                  description
                </h4>
                <h6 style={{ fontWeight: "bold", lineHeight: "1.6" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                  placeat blanditiis veritatis consequuntur enim soluta
                  voluptatibus doloribus aliquam nihil, atque alias ipsa autem
                  suscipit unde sed assumenda architecto quas quae.
                </h6>
              </div>
              <div className="myservice">
                <div className="myserviceprofile">
                  <h5
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    My services:
                  </h5>
                </div>
                <MyServices />
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
