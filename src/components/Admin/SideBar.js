/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { FaLaptopCode, FaPlus } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";
export const SideBar = ({ dashBoard, servicees, users, orders }) => {
  return (
    <Fragment>
      <div className="sideBarBg">
        <div className="tabs-container">
          {dashBoard ? (
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="tab-selected active">
                <h5 className="h6boldii">
                  <RiDashboardLine
                    color="rgb(27, 126, 255)"
                    size="25"
                    style={{ marginRight: "5px" }}
                  />{" "}
                  DashBoard
                </h5>
              </div>
            </Link>
          ) : (
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {" "}
              <div className="tab-selected">
                <h5 className="h6boldii">
                  <RiDashboardLine
                    color="rgb(27, 126, 255)"
                    size="25"
                    style={{ marginRight: "5px" }}
                  />{" "}
                  DashBoard
                </h5>
              </div>
            </Link>
          )}
          {servicees ? (
            <Fragment>
              <Link
                to="/dashboard/services"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div className="tab-selected1 active">
                  <h5 className="h6boldii">
                    <FaLaptopCode
                      color="rgb(190, 250, 24)"
                      size="25"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Services
                  </h5>
                </div>
              </Link>
              <Link
                to="/dashboard/services/new"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div className="tab-selected1 active1">
                  <h5 className="h6boldii1">
                    <FaPlus
                      color="rgb(190, 250, 24)"
                      size="17"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    New
                  </h5>
                </div>
              </Link>
            </Fragment>
          ) : (
            <Link
              to="/dashboard/services"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {" "}
              <div className="tab-selected">
                <h5 className="h6boldii">
                  <FaLaptopCode
                    color="rgb(190, 250, 24)"
                    size="25"
                    style={{ marginRight: "5px" }}
                  />{" "}
                  Services
                </h5>
              </div>
            </Link>
          )}
          {users ? (
            <Link
              to="/dashboard/users"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="tab-selected active" style={{ marginTop: "5%" }}>
                <h5 className="h6boldii">
                  <HiUsers
                    color="rgb(27, 255, 122)"
                    size="25"
                    style={{ marginRight: "5px" }}
                  />{" "}
                  Users
                </h5>
              </div>
            </Link>
          ) : (
            <Link
              to="/dashboard/users"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {" "}
              <div className="tab-selected" style={{ marginTop: "5%" }}>
                <h5 className="h6boldii">
                  <HiUsers
                    color="rgb(27, 255, 122)"
                    size="25"
                    style={{ marginRight: "5px" }}
                  />{" "}
                  Users
                </h5>
              </div>
            </Link>
          )}
          {orders ? (
            <Link
              to="/dashboard/orders"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {" "}
              <div className="tab-selected active">
                <h5 className="h6boldii">
                  <CgNotes
                    color="rgb(196, 53, 28)"
                    size="25"
                    style={{ marginRight: "5px" }}
                  />{" "}
                  Orders
                </h5>
              </div>
            </Link>
          ) : (
            <Link
              to="/dashboard/orders"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="tab-selected">
                <h5 className="h6boldii">
                  <CgNotes
                    color="rgb(196, 53, 28)"
                    size="25"
                    style={{ marginRight: "5px" }}
                  />{" "}
                  Orders
                </h5>
              </div>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};
