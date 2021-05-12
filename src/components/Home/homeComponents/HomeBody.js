import React, { Fragment } from "react";
import testimg from "../testimgs/test.jpg";
import "../CSS/home.css";
import MetaData from "../../layout/metaData";
export default function HomeBody() {
  return (
    <Fragment>
      <MetaData title={`Freelance services`} />
      <div className="bg">
        <div className="bgbody">
          <div className="gigstitle">
            <h1>Latest Gigs:</h1>
          </div>
          <div className="cards">
            <div className="card">
              <img src={testimg} alt="serviceImg"></img>
              <div className="card-content">
                <h5 className="nameh5">Sudin bodhi</h5>
                <h2 className="titleh2">
                  This is a title for the user!and his gig with which{" "}
                </h2>
                <h5 className="reviewh5">This is review</h5>
                <h2 className="priceh2">Rs.10,000</h2>
                <button className="card-btn">View details</button>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
