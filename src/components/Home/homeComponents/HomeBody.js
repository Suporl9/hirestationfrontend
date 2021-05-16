import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Star } from "../testimgs/star.svg";

import "../CSS/home.css";
import MetaData from "../../layout/metaData";
import { getAllServices } from "../../redux/service/serviceActions";
import { Link } from "react-router-dom";
import { Loader } from "../../layout/Loader";

export default function HomeBody() {
  const dispatch = useDispatch();

  // const { loading, services, error, servicesCount } = useSelector(     //use this  later on
  const { loading, services } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="bg">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={`Freelance services`} />

            <div className="bgbody">
              <div className="gigstitle">
                <h1>Latest Gigs:</h1>
              </div>

              <div className="cards">
                {services &&
                  services.map((service) => (
                    <div key={service._id} className="card">
                      <Link to={`/services/${service._id}`}>
                        <img
                          src={service.images[0].url}
                          alt="serviceImg"
                          className="imgservice"
                        />
                      </Link>
                      <div className="card-content">
                        <h5 className="nameh5">{service.user[0].fullname}</h5>
                        <Link
                          to={`/services/${service._id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <h2 className="titleh2">{service.title}</h2>
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
                        <Link to={`/${service._id}`}>
                          <button className="card-btn">View details</button>
                        </Link>
                        <p></p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
