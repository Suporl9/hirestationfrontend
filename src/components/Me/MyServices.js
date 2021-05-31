import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserServices } from "../redux/service/serviceActions";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../Home/testimgs/star.svg";
import { Loader } from "../layout/Loader";

function MyServices() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserServices());
  }, [dispatch]);

  const { loading, services } = useSelector((state) => state.services);

  return (
    <div className="myServiceCards">
      {loading ? (
        <Loader />
      ) : (
        services &&
        services.map((service) => (
          <div key={service._id} className="myServiceCard">
            <Link to="/">
              <img
                src={service.images[0].url}
                alt="serviceImg"
                className="imgservice"
              />
            </Link>
            <div className="card-content">
              <h5 className="nameh5">{service.user[0].fullname}</h5>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <h2 className="titleh2" style={{ lineHeight: "1.6" }}>
                  {service.title}
                </h2>
              </Link>
              <div className="reviewPrice">
                <div className="ratings">
                  <div className="starRating">
                    <Star />
                    <div className="serviceRating">{service.ratings}</div>
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
                <Link to="/">
                  <button className="card-btn">View details</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyServices;
