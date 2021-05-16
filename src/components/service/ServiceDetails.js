/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import meImg from "../Home/testimgs/me.JPG";
import { ReactComponent as Star } from "../Home/testimgs/star.svg";

import { useDispatch, useSelector } from "react-redux";
import { getServiceDetails } from "../redux/service/serviceActions";
import "../Home/CSS/home.css";
import aimg from "../Home/testimgs/a.jpg";
import bimg from "../Home/testimgs/b.jpg";
import cimg from "../Home/testimgs/c.jpg";
import dimg from "../Home/testimgs/d.png";
import eimg from "../Home/testimgs/e.jpg";
import fimg from "../Home/testimgs/f.jpg";

const ServiceDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, service } = useSelector((state) => state.serviceDetails);

  useEffect(() => {
    dispatch(getServiceDetails(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <Fragment>
      <div className="bg">
        <div className="detailsflexrow">
          <div className="detailsflexleft">
            <div className="serviceDetails">
              <h1 className="servicetitleh1">
                I will do professional video editing and post production within
                hours
              </h1>
              <div className="userandreviewflexrow">
                <img src={meImg} alt="user" className="meimg" />
                <h5 className="userh5">Suman Pokharel</h5>
                <div className="vl"></div>
                <div className="starRating">
                  <Star />
                  <div className="serviceRating">4.5</div>
                  <div className="no_of_reviews">(20 Reviews)</div>
                </div>
              </div>
              <div className="imgcarousel">
                <Carousel>
                  <Carousel.Item className="itemcarousel">
                    <img
                      className="imgcaroussel"
                      src={dimg}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="itemcarousel">
                    <img
                      className="imgcaroussel"
                      src={bimg}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="itemcarousel">
                    <img
                      className="imgcaroussel"
                      src={cimg}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="itemcarousel">
                    <img
                      className="imgcaroussel"
                      src={aimg}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="itemcarousel">
                    <img
                      className="imgcaroussel"
                      src={eimg}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="itemcarousel">
                    <img
                      className="imgcaroussel"
                      src={fimg}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>

              <div className="gigdescription">
                <h1>About This Gig</h1>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                  voluptates, laudantium fugit magnam omnis numquam voluptas.
                  Quam nisi dignissimos magni dolor iusto est architecto quidem
                  dolores voluptate. Enim, magni ab! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eius, dolor repudiandae culpa
                  aliquam harum libero a iusto totam expedita voluptas
                  architecto, tempora, perspiciatis minima corporis. Accusamus
                  sed ipsam soluta laudantium?
                </p>

                <div className="hl"></div>
              </div>
              <div className="reviewpanel">
                <h3 className="reviewfieldh3">REVIEW(2 total)</h3>
                <div className="starRating">
                  <Star />
                  <div className="serviceRating">4.5</div>
                </div>
                <div className="userswithreview">
                  <div className="firstuser">
                    <div className="userpicandname">
                      <div className="userpic">
                        <img src={meImg} alt="user" className="meimg" />
                      </div>
                      <div className="username">Suman Pokharel</div>
                    </div>
                    <div className="reviewfield">
                      <h3 className="reviewfieldh3">his ismy firstt review</h3>
                    </div>
                  </div>
                  <div className="firstuser">
                    <div className="userpicandname">
                      <div className="userpic">
                        <img src={meImg} alt="user" className="meimg" />
                      </div>
                      <div className="username">Suman Pokharel</div>
                    </div>
                    <div className="reviewfield">
                      <h3 className="reviewfieldh3">his ismy second review</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detailsflexright"></div>
        </div>
      </div>
    </Fragment>
  );
};
// ServiceDetails.propTypes = {
//   children: PropTypes.any,
//   onClickOut: PropTypes.func,
// };

export default ServiceDetails;
