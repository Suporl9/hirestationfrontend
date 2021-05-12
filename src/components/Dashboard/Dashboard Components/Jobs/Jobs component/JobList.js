import React from "react";
import PropTypes from "prop-types";

export default function JobList({ services }) {
  // const renderCustomers = () => {
  //   return services.map((service, id) => {
  //     return <li key={id}>{service.name}</li>;
  //   });
  // };
  return (
    <>
      <div>
        <ul>
          {/* {services.map((service,id)=>{
            // return <li>
            //   {services.name}
            // </li>
          })} */}
        </ul>
      </div>
    </>
  );
}

JobList.propTypes = {
  //this is prototype with which we are validating the props .we can also validate srings and numbers if we want to use in props like this {name,age}
  services: PropTypes.node.isRequired,
};
