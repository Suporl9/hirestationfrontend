import React from "react";
import { SideBar } from "./SideBar";
import imgsrc from "./1.JPG";

export const NewService = () => {
  // const Categories = [
  //   "Graphics-And-Design",
  //   "Game-Development",
  //   "Web-Programming",
  //   "Mobile-Apps",
  // ];
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg">
      <div className="sideBarAndDash">
        <SideBar servicees />
        <div className="tabpanel">
          <div className="dashboardflexnew">
            <div className="newServiceBg">
              <form encType="multipart/form-data" onSubmit={submitHandler}>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    margin: "4% 0 4% 0",
                    textTransform: "uppercase",
                  }}
                >
                  New Service :
                </span>

                <div className="gigtitle">
                  <label htmlFor="title-field" className="labelname">
                    Title
                  </label>
                  <input
                    className="gigtinput"
                    name="title"
                    type="text"
                    placeholder="Title"
                    // value={fullname}
                    // onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="gigtitle pricee">
                  <label htmlFor="price-field" className="labelname">
                    Price
                  </label>
                  <input
                    className="gigpinput"
                    placeholder="Price"
                    name="price"
                    type="number"
                  />
                  <label
                    htmlFor="youridhere"
                    className="static-value"
                    style={{ color: "black" }}
                  >
                    Rs.
                  </label>
                </div>
                <div className="gigtitle">
                  <label htmlFor="description-field" className="labelname">
                    Description
                  </label>
                  <textarea
                    id="message"
                    // value={comment}
                    name="message"
                    // onChange={(e) => setComment(e.target.value)}
                    style={{ backgroundColor: "rgb(210, 216, 216)" }}
                    placeholder="Description"
                  />
                </div>
                <div className="gigtitle1">
                  <label
                    htmlFor="category-field"
                    className="labelname categori"
                  >
                    Category
                  </label>
                  <select
                    className="gigsinput"
                    name="description"
                    type="text"
                    // value={""}
                    // value={fullname}
                    // onChange={(e) => setFullName(e.target.value)}
                  >
                    <option className="optionc">Hello</option>
                    <option className="optionc">Hello</option>
                    <option className="optionc">Hello</option>
                    <option className="optionc">Hello</option>
                    <option className="optionc">
                      World and beyong and beyond and beyond
                    </option>
                  </select>
                </div>

                <div className="gigtitle">
                  <label htmlFor="images-field" className="labelname">
                    Images:
                  </label>
                  <div className="custom-file">
                    <input
                      type="file"
                      name="service_images"
                      className="custom-file-input"
                      id="customFile"
                      multiple
                      // onChange={onChange}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="customFile"
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        backgroundColor: "rgb(210, 216, 216)",
                      }}
                    >
                      Images(less then 700kb)
                    </label>
                  </div>
                </div>
                <div className="gigtitle">
                  <div className="imgpreviewcontainer">
                    <img
                      src={imgsrc}
                      alt="ServiceImage[0]"
                      width="55"
                      height="52"
                      style={{ marginRight: "2%", borderRadius: "5px" }}
                    />

                    <img
                      src={imgsrc}
                      alt="ServiceImage[0]"
                      width="55"
                      height="52"
                      style={{ marginRight: "2%", borderRadius: "5px" }}
                    />

                    <img
                      src={imgsrc}
                      alt="ServiceImage[0]"
                      width="55"
                      height="52"
                      style={{ marginRight: "2%", borderRadius: "5px" }}
                    />
                  </div>
                </div>
                <button type="submit" className="card-btn">
                  POST SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
