import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RxDashboard } from "react-icons/rx";
import { FaHistory } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import "./PatSidebar.css";
import CareConnectLogo from "../../images/CareConnectLogo.jpg";

import Patprofile from "./Patprofile";

function PatientSidebar() {
  const [showNav, setShowNav] = useState(false);

  const handleMouseEnter = () => {
    setShowNav(true);
  };

  const handleMouseLeave = () => {
    setShowNav(false);
  };

  const handleClose = () => {
    setShowNav(false);
  };

  return (
    <div className={`body-area${showNav ? " body-pd" : ""}`}>
      <header className={`header${showNav ? " body-pd" : ""}`}>
        <div className="header_toggle">
          <i
            className={`bi ${showNav ? "" : "bi-list"}`}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <h2 style={{ paddingTop: 10, paddingLeft: 10 }}>CareConnect</h2>

        <Patprofile />
      </header>
      <div
        className={`l-navbar${showNav ? " show" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="nav">
          <div>
            <a href="/" className="nav_logo">
              {showNav && (
                <div className="header_toggle">
                  <BiX className="close-btn" onClick={handleClose} />
                </div>
              )}
              <img
                src={CareConnectLogo}
                alt=""
                className="navbar-icon"
                width={30}
              />
              <span className="nav_logo-name">CareConnect</span>
            </a>

            <div className="nav_list">
              <a href="/PatientDashboard" className="nav_link">
                <RxDashboard style={{ fontSize: "1.5rem" }} />
                <span className="nav_name">DashBoard</span>
              </a>

              <a href="/AppointmentForm" className="nav_link">
                <i
                  className="bi bi-person-check nav_icon"
                  style={{ fontSize: "1.5rem" }}
                />
                <span className="nav_name">
                  Book <br />
                  Appointment
                </span>
              </a>

              <a href="/MyHistory" className="nav_link">
                <FaHistory style={{ fontSize: "1.5rem" }} />
                <span className="nav_name">My History</span>
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

export default PatientSidebar;
