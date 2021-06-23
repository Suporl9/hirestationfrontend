import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Loader } from "../layout/Loader";
import { myOrders } from "../redux/order/orderActions";
import editpng from "./edit.png";

export const MyOrders = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.getMyOrders);

  useEffect(() => {
    dispatch(myOrders());
    if (error) {
      alert.error(error);
    }
  }, [dispatch, error, alert]);

  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "Order Id",
          field: "id",
          sort: "asc",
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
        },
      ],
      rows: [],
    };

    orders.forEach((order) => {
      data.rows.push({
        id: order._id,
        amount: `Rs.${order.totalPrice}`,
        status:
          order.orderStatus &&
          String(order.orderStatus).includes("Delivered") ? (
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "green" }}>
              {order.orderStatus}
            </p>
          ) : (
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "red" }}>
              {order.orderStatus}
            </p>
          ),

        action: (
          <Link to={`/order/${order._id}`}>
            <img
              src={editpng}
              alt="editPng"
              style={{ height: "35px", width: "35px" }}
            ></img>
          </Link>
        ),
      });
    });
    return data;
  };
  return (
    <Fragment>
      <div className="bg">
        <div className="myprofilebodytable">
          <span style={{ fontSize: "30px", marginBottom: "2%" }}>
            My Orders:
          </span>

          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <MDBDataTable
                data={setOrders()}
                striped
                // bordered
                // hover
              />
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};
