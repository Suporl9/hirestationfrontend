import React, { Fragment, useState } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { RiDashboardLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { DashBoardTabComponent } from "./DashBoardTabComponent";
export const DashBoard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Fragment>
      <div className="bg">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="sideBarAndDash">
            <div className="sideBarBg">
              <TabList className="tabs-container">
                <Tab
                  className={`${
                    tabIndex === 0 ? "tab-selected active" : "tab-selected"
                  }`}
                >
                  <h5 className="h6boldii">
                    <RiDashboardLine
                      color="rgb(27, 126, 255)"
                      size="25"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    DashBoard
                  </h5>
                </Tab>
                <Tab
                  className={`${
                    tabIndex === 1 ? "tab-selected active" : "tab-selected"
                  }`}
                >
                  <h5 className="h6boldii">
                    <FaLaptopCode
                      color="rgb(190, 250, 24)"
                      size="25"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Services
                  </h5>
                </Tab>
                <Tab
                  className={`${
                    tabIndex === 2 ? "tab-selected active" : "tab-selected"
                  }`}
                >
                  <h5 className="h6boldii">
                    <HiUsers
                      color="rgb(27, 255, 122)"
                      size="25"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Users
                  </h5>
                </Tab>
                <Tab
                  className={`${
                    tabIndex === 3 ? "tab-selected active" : "tab-selected"
                  }`}
                >
                  <h5 className="h6boldii">
                    <CgNotes
                      color="rgb(196, 53, 28)"
                      size="25"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Orders
                  </h5>
                </Tab>
              </TabList>
            </div>
            <div className="tabpanel">
              <TabPanel>
                <DashBoardTabComponent />
              </TabPanel>
              <TabPanel>Services</TabPanel>
              <TabPanel>Users</TabPanel>
              <TabPanel>Orders</TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </Fragment>
  );
};
