import axios from "axios";
import React, { useState } from "react";

export default function JobForm() {
  const [service, setService] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const servicefield = {
      name: service,
    };
    await axios.post("http://localhost:5000/job", servicefield);
    setService("");
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input
            value={service}
            onChange={(e) => {
              setService(e.target.value);
            }}
          ></input>
          <button type="submit">Post service</button>
        </form>
      </div>
    </>
  );
}
