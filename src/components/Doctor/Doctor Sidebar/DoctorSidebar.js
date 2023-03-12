import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RxDashboard } from "react-icons/rx";
import { FaHistory } from "react-icons/fa";

import "./DSidebar.css";
import CareConnectLogo from "../../../images/CareConnectLogo.jpg";

import Clickout from "../Clickout";
import Docprofile from "./Docprofile";

function DoctorSidebar() {
  const [showNav, setShowNav] = useState(false);

  const handelClose = () => {
    setShowNav(false);
  };

  return (
    <div className={`body-area${showNav ? " body-pd" : ""}`}>
      <header className={`header${showNav ? " body-pd" : ""}`}>
        <div className="header_toggle">
          <Clickout onClickOutside={handelClose}>
            <i
              className={`bi ${showNav ? "bi-x" : "bi-list"}`}
              onClick={() => setShowNav(!showNav)}
            />
          </Clickout>
        </div>
        <h2 style={{ paddingTop: 10, paddingLeft: 10 }}>CareConnect</h2>

        <Docprofile />
      </header>
      <div className={`l-navbar${showNav ? " show" : ""}`}>
        <nav className="nav">
          <div>
            <a href="/" className="nav_logo">
              <img
                src={CareConnectLogo}
                alt=""
                className="navbar-icon"
                width={30}
              />
              <span className="nav_logo-name">CareConnect</span>
            </a>

            <div className="nav_list">
              <a href="/DoctorDashboard" className="nav_link">
                <RxDashboard style={{ fontSize: "1.5rem" }} />
                <span className="nav_name">DashBoard</span>
              </a>

              <a href="/" className="nav_link">
                <i
                  className="bi bi-person-check nav_icon"
                  style={{ fontSize: "1.5rem" }}
                />
                <span className="nav_name">Add Appointment</span>
              </a>

              <a href="/" className="nav_link">
                <FaHistory style={{ fontSize: "1.5rem" }} />
                <span className="nav_name">Patient History</span>
              </a>
            </div>
          </div>
          <a href="/" className="nav_link">
            <i
              className="bi bi-box-arrow-left nav_icon"
              style={{ fontSize: "1.5rem" }}
            />
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default DoctorSidebar;
