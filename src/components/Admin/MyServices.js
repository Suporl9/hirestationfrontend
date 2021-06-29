import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserServices } from "../redux/service/serviceActions";
import { Link } from "react-router-dom";
import { Loader } from "../layout/Loader";
import { FaStar } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { SideBar } from "./SideBar";
import { MdModeEdit } from "react-icons/md";

export const MyServices = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserServices());
  }, [dispatch]);

  const { loading, services } = useSelector((state) => state.services);
  return (
    <Fragment>
      <div className="bg">
        <div className="sideBarAndDash">
          <SideBar servicees />
          <div className="tabpanel">
            <div className="dashboardflex">
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  marginTop: "4%",
                }}
              >
                My Services:
              </span>
              <div className="myServiceCards" style={{ marginTop: "5%" }}>
                {loading ? (
                  <Loader />
                ) : (
                  services &&
                  services.map((service) => (
                    <div key={service._id} className="myServiceCard1">
                      <Link to={`/service/${service._id}`}>
                        <img
                          src={service.images[0].url}
                          alt="serviceImg"
                          className="imgservice"
                        />
                      </Link>
                      <div className="card-content">
                        <h5 className="nameh5">{service.user[0].fullname}</h5>
                        <Link
                          to={`/service/${service._id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <h2 className="titleh2" style={{ lineHeight: "1.6" }}>
                            {service.title}
                          </h2>
                        </Link>
                        <div className="reviewPrice">
                          <div className="ratings">
                            <div className="starRating">
                              {/* <Star /> */}
                              <FaStar size="25" color="orange" />
                              <div className="serviceRating">
                                {service.ratings}
                              </div>
                            </div>
                            <br />
                            <div className="no_of_reviews">
                              {" "}
                              ({service.numOfReviews} Reviews)
                            </div>
                          </div>
                          <h2 className="priceh2">Rs.{service.price}</h2>
                        </div>
                        <div
                          className="cardetailsbtn"
                          style={{ margin: "1rem 0 0.5rem 0" }}
                        >
                          <Link to={`/service/${service._id}`}>
                            <button className="card-btn">View details</button>
                          </Link>
                          <Link to={`/service/${service._id}`}>
                            <button className="edit-btn">
                              <MdModeEdit
                                color="#d1c51c"
                                size="25"
                                style={{ marginRight: "5%" }}
                              />
                              <span>Edit</span>
                            </button>
                          </Link>
                          <Link to={`/service/${service._id}`}>
                            <button className="delete-btn">
                              <AiFillDelete
                                color="#fd4c4c"
                                size="25"
                                style={{ marginRight: "5%" }}
                              />
                              <span>Delete</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
