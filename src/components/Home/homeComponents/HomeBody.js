/* eslint-disable react/prop-types */

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import { Link, Route, useParams } from "react-router-dom";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
import { ReactComponent as Star } from "../testimgs/star.svg";
import "../CSS/home.css";
import MetaData from "../../layout/metaData";
import { getAllServices } from "../../redux/service/serviceActions";

import { Loader } from "../../layout/Loader";

import PropTypes from "prop-types";
import Search from "../../layout/Search";

export default function HomeBody({ match }) {
  //match params  id does not work rightnow fix later
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { keyword } = useParams();
  // const keyword = match.params.keyword;  //didn't work for some reason check later on

  // const { loading, services, error, servicesCount } = useSelector(     //use this  later on
  const { loading, services, servicesCount, resDataPerPage } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    dispatch(getAllServices(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Fragment>
      <div className="bg">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={`Freelance services`} />

            <div className="servicesearch">
              <Route render={({ history }) => <Search history={history} />} />
            </div>

            <div className="bgbody">
              <div className="gigstitle">
                <h1 className="servicetittleh1">Latest Gigs:</h1>
              </div>

              <div className="cards">
                {services &&
                  services.map((service) => (
                    <div key={service._id} className="card">
                      <Link to={`/${service._id}`}>
                        <img
                          src={service.images[0].url}
                          alt="serviceImg"
                          className="imgservice"
                        />
                      </Link>
                      <div className="card-content">
                        <h5 className="nameh5">{service.user[0].fullname}</h5>
                        <Link
                          to={`/${service._id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <h2 className="titleh2" style={{ lineHeight: "1.6" }}>
                            {service.title}
                          </h2>
                        </Link>
                        <div className="reviewPrice">
                          <div className="ratings">
                            <div className="starRating">
                              <Star />
                              <div className="serviceRating">
                                {service.ratings}
                              </div>
                            </div>
                            <br />
                            <div className="no_of_reviews">
                              ({service.numOfReviews} Reviews)
                            </div>
                          </div>
                          <h2 className="priceh2">Rs.{service.price}</h2>
                        </div>
                        <div
                          className="cardetailsbtn"
                          style={{ margin: "1rem 0 0.5rem 0" }}
                        >
                          <Link to={`/${service._id}`}>
                            <button className="card-btn">View details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {resDataPerPage < servicesCount && (
              <div className="paginationsection">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resDataPerPage}
                  totalItemsCount={servicesCount}
                  onChange={setCurrentPageNo}
                  nextPageText={"Next"}
                  prevPageText={"Prev"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  linkClassPrev="page-link-prev"
                  linkClassNext="page-link-prev"
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

Pagination.propTypes = {
  totalItemsCount: PropTypes.number,
};
