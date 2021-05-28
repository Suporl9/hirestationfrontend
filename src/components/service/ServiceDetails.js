/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import meImg from "../Home/testimgs/me.JPG";
import { ReactComponent as Star } from "../Home/testimgs/star.svg";
// import { ReactComponent as Calendar } from "../Home/testimgs/calendar.svg";
// import { ReactComponent as Cart } from "../Home/testimgs/shopping-cart.svg";
// import { ReactComponent as Comment } from "../Home/testimgs/comment.svg";
import { Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getServiceDetails } from "../redux/service/serviceActions";
import "../Home/CSS/home.css";

import { Link } from "react-router-dom";
import { Loader } from "../layout/Loader";

const ServiceDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, service } = useSelector((state) => state.serviceDetails);

  useEffect(() => {
    dispatch(getServiceDetails(match.params.id));
  }, [dispatch, match.params.id]);
  console.log(service); // comes 3rd time //first two rimeempty object
  return (
    <Fragment>
      <div className="bg">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="marginauto80">
              <div className="detailsflexrow">
                <div className="detailsflexleft">
                  <div className="serviceDetails">
                    <h1 className="servicetitleh1">{service.title}</h1>
                    <div className="userandreviewflexrow">
                      <img src={meImg} alt="user" className="meimg" />
                      <h5 className="userh5">{service.seller}</h5>
                      <div className="vl"></div>
                      <h6
                        className="h6bold"
                        style={{ marginTop: "0.6rem", marginRight: "3%" }}
                      >
                        Category : &nbsp;&nbsp; {service.category}
                      </h6>
                      <div className="vl"></div>
                      <div
                        className="starRating1"
                        style={{ marginLeft: "-0.5rem" }}
                      >
                        <Star />
                        <div className="serviceRating1">{service.ratings}</div>
                        <div className="no_of_reviews1">
                          {service.numOfReviews > 1 ? (
                            <Fragment>
                              ({service.numOfReviews} Reviews)
                            </Fragment>
                          ) : (
                            <Fragment>({service.numOfReviews} Review)</Fragment>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="imgcarousel">
                      <Carousel pause="hover">
                        {service.images &&
                          service.images.map((image) => (
                            <Carousel.Item
                              key={image.public_id}
                              className="itemcarousel"
                            >
                              <img
                                className="imgcaroussel"
                                src={image.url}
                                alt="First slide"
                              />
                            </Carousel.Item>
                          ))}
                      </Carousel>
                    </div>

                    <div className="gigdescription">
                      <h1 className="servicetitleh1">About This Gig</h1>

                      <p className="descriptp" style={{ fontWeight: "bold" }}>
                        {service.description}
                      </p>

                      <div className="hl"></div>
                    </div>
                  </div>
                </div>
                <div className="detailsflexright">
                  <div className="twoCards">
                    <div className="servicedetailscard">
                      <Card
                        style={{ width: "22rem" }}
                        className="cardServiceDetails"
                      >
                        <Card.Body>
                          <div className="cardtitle">
                            <div className="starRating">
                              <Star />
                              <div
                                className="serviceRating"
                                style={{ fontWeight: "bold" }}
                              >
                                {service.ratings}
                              </div>
                            </div>
                            <div className="pricecardtitle">
                              Rs.{service.price}
                            </div>
                          </div>
                        </Card.Body>
                        <div className="hl2"></div>
                        <Card.Body>
                          <div className="contbeforeOrder">
                            <h6
                              className="h6bold"
                              style={{ lineHeight: "1.6" }}
                            >
                              Contact Me Before Ordering for your project
                              estimate. This package includes only 25 hours
                              dev.work.
                            </h6>
                          </div>
                        </Card.Body>
                        <div className="hl2"></div>
                        <Card.Body>
                          <div className="bodydetails">
                            <div className="leftdetails">
                              <div className="starRating">
                                <Star />
                              </div>
                              <h6 className="h6bold li">Overall Rate</h6>
                            </div>
                            <h6 className="h6bold">{service.ratings}</h6>
                          </div>
                          <div className="bodydetails">
                            <div className="leftdetails">
                              <div className="starRating">
                                <Star />
                              </div>
                              <h6 className="h6bold li">Reviews</h6>
                            </div>
                            <h6 className="h6bold">{service.numOfReviews}</h6>
                          </div>
                          <div className="bodydetails">
                            <div className="leftdetails">
                              <div className="starRating">
                                <Star />
                              </div>
                              <h6 className="h6bold li">Orders</h6>
                            </div>
                            <h6 className="h6bold">0</h6>
                          </div>
                          <div className="bodydetails">
                            <div className="leftdetails">
                              <div className="starRating">
                                <Star />
                              </div>
                              <h6 className="h6bold li">Time of Delivery</h6>
                            </div>
                            <h6 className="h6bold">2 weeks</h6>
                          </div>
                        </Card.Body>
                        <div className="hl2"></div>
                        <Card.Body>
                          <Link to={`/${service._id}`}>
                            <button className="card-btn">
                              Order Now(Rs.{service.price})
                            </button>
                          </Link>
                        </Card.Body>
                        <div className="hl2"></div>
                        <Card.Footer>
                          <h4 style={{ fontWeight: "bold" }}>Extra</h4>
                          <h6>No extra services right now.</h6>
                        </Card.Footer>
                      </Card>
                    </div>
                    <div className="aboutsellercard">
                      <Card
                        style={{ width: "22rem" }}
                        className="cardServiceDetails"
                      >
                        <Card.Body>
                          <div className="userpp">
                            <img src={meImg} alt="me" className="meimg"></img>
                            <h6 className="h6bold" style={{ marginTop: "5%" }}>
                              {service.seller}
                            </h6>
                          </div>
                        </Card.Body>
                        <div className="hl2"></div>
                        <Card.Body>
                          <div className="bodydetails">
                            <div className="leftdetails">
                              <div className="starRating">
                                <Star />
                              </div>
                              <h6 className="h6bold li">From</h6>
                            </div>
                            <h6 className="h6bold li">Kahmandu</h6>
                          </div>
                          <div className="bodydetails">
                            <div className="leftdetails">
                              <div className="starRating">
                                <Star />
                              </div>
                              <h6 className="h6bold li">Member Since</h6>
                            </div>
                            <h6 className="h6bold li">May 18,2021</h6>
                          </div>
                        </Card.Body>
                        <div className="hl2"></div>
                        <Card.Body>
                          <div className="bodydetails">
                            <div className="leftdetails">
                              <div className="starRating">
                                <Star />
                              </div>
                              <h5
                                className="h6bold"
                                style={{ marginLeft: "15%" }}
                              >
                                Bio
                              </h5>
                            </div>
                          </div>
                          <div
                            className="biodescription"
                            style={{
                              fontWeight: "600",
                              marginTop: "5%",
                              lineHeight: "1.6",
                            }}
                          >
                            {service.sellerBio}
                          </div>
                        </Card.Body>
                        <div className="hl2"></div>
                        <Card.Footer>
                          <Link to={`/${service._id}`}>
                            <button className="card-btn">Contact Me</button>
                          </Link>
                          <Link to={`/${service._id}`}>
                            <button className="card-btn">View Profile</button>
                          </Link>
                        </Card.Footer>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviewdiv">
                <div className="reviewpanel">
                  <div className="reviewcontent">
                    <h1 className="servicetitleh1">Reviews(2 total)</h1>

                    <div className="userswithreview">
                      {service.reviews &&
                        service.reviews.map((review, i) => (
                          <div key={i} className="userborder">
                            <div className="firstuser">
                              <div className="userpicandname">
                                <div className="userpic">
                                  <img
                                    src={meImg}
                                    alt="user"
                                    className="meimg"
                                  />
                                </div>
                                <div className="username">{review.name}</div>
                              </div>
                              <div className="reviewfield">
                                <div className="starRating">
                                  <Star />
                                  <div className="serviceRating3">
                                    {review.rating}
                                  </div>
                                </div>
                                <h6 className="h6boldreview">
                                  {review.comment}
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
// ServiceDetails.propTypes = {
//   children: PropTypes.any,
//   onClickOut: PropTypes.func,
// };

export default ServiceDetails;
