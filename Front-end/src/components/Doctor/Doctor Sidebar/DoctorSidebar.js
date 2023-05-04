import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RxDashboard } from "react-icons/rx";
import { FaHistory } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import "./DSidebar.css";
import CareConnectLogo from "../../../images/CareConnectLogo.jpg";
import Docprofile from "./Docprofile";

function Sidebar() {
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
    <>
      <header className="header">
        <div className="header_toggle">
          <i
            className={`bi ${showNav ? "" : "bi-list"}`}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <h2 style={{ paddingTop: 10, paddingLeft: 10 }}>CareConnect</h2>
        <Docprofile />
      </header>
      <div
        className={`l-navbar${showNav ? " show" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="nav">
          <div>
            {showNav && (
              <div className="header_toggle">
                <BiX className="close-btn" onClick={handleClose} />
              </div>
            )}
            <div className="nav_logo">
              <img
                src={CareConnectLogo}
                alt=""
                className="navbar-icon"
                width={30}
              />
              <span className="nav_logo-name">CareConnect</span>
            </div>

            <div className="nav_list">
              <a href="/DoctorDashboard" className="nav_link">
                <RxDashboard style={{ fontSize: "1.5rem" }} />
                <span className="nav_name">DashBoard</span>
              </a>

              <a href="/PendingAppointment" className="nav_link">
                <BiCalendarCheck style={{ fontSize: "1.5rem" }} />
                <span className="nav_name">
                  Pending <br />
                  Appointment
                </span>
              </a>

              <a href="/AppointmentForm" className="nav_link">
                <i
                  className="bi bi-person-check nav_icon"
                  style={{ fontSize: "1.5rem" }}
                />
                <span className="nav_name">
                  Add <br />
                  Appointment
                </span>
              </a>

              <a href="/DHistory" className="nav_link">
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
    </>
  );
}

export default Sidebar;
