import axios from "axios";
import React, { useEffect, useState } from "react";
import JobForm from "./Jobs component/JobForm";
// import JobList from "./Jobs component/JobList";

export default function Jobs() {
  const [services, setServices] = useState([]);
  const getServices = async () => {
    const getServicesResp = await axios.get("http://localhost:5000/job");
    setServices(getServicesResp.data);
  };
  useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <JobForm />
      {/* <JobList services={services} /> */}
    </>
  );
}
