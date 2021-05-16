/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getServiceDetails } from "../redux/service/serviceActions";

const ServiceDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, service } = useSelector((state) => state.serviceDetails);

  useEffect(() => {
    dispatch(getServiceDetails(match.params.id));
  }, [dispatch, match.params.id]);
  return <div>afesefefsefsefesfs</div>;
};
// ServiceDetails.propTypes = {
//   children: PropTypes.any,
//   onClickOut: PropTypes.func,
// };

export default ServiceDetails;
