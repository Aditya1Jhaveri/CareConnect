import React from "react";
import { Card } from "react-bootstrap";
import "./Home.css";

import { Link } from "react-router-dom";

import Clinic from "../../images/clinic.jpg";
import Appointment from "../../images/appointment.png";
import Billing from "../../images/billing icon.png";
import Security from "../../images/security icon.png";
import Record from "../../images/patient record.png";

import { Button } from "@material-ui/core";

import ellips1 from "../../images/Ellipse 1.png";
import ellips2 from "../../images/Ellipse 2.png";
import ellips3 from "../../images/Ellipse 3.png";

import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="doctorPortal">
        <div className="doctorHeading">
          <div className="row mainBody">
            <div className="col-md-5">
              <div className="doctorText">
                <h1>
                  Your New Smile
                  <br />
                  Starts Here
                </h1>
                <p>
                  Handling patient bills and appointment used to be a chaotic
                  scene in hospitals and clinics. Not anymore! With the arrival
                  of CareConnect Clinic Appointment Software, a systematic
                  process has evolved over the time. The best part of this
                  software is that it has reduced the use of paper, keeping all
                  important information in one place to access. The software has
                  helped in saving time as prescriptions, bills and other
                  calculations are maintained digitally.
                </p>
                <Link style={{ textDecoration: "none" }} to="/FilterPage">
                  <Button className="button">GET APPOINTMENT</Button>
                </Link>
              </div>
            </div>

            <div className="col-md-7">
              <div className="doctorImg">
                <img src={Clinic} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="ourServices">
          <div>
            <p>OUR SERVICES</p>
            <h2>Services We Provide</h2>
            <div className="servicesDetails">
              <div>
                <Card
                  style={{
                    width: "21rem",
                    border: "none",
                    boxShadow: "5px 5px 10px lightGray",
                  }}
                >
                  <Card.Body style={{ textAlign: "center" }}>
                    <img src={Appointment} alt="" width={150} />
                    <h3>Appointment</h3>
                    <li>Set up timings without any hurdle.</li>
                    <li>Manage patient appointments online.</li>
                    <li>Handle the queue in a waiting room instantly.</li>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card
                  style={{
                    width: "21rem",
                    border: "none",
                    boxShadow: "5px 5px 10px lightGray",
                  }}
                >
                  <Card.Body style={{ textAlign: "center" }}>
                    <img src={Billing} alt="" width={150} />
                    <h3>Billing</h3>
                    <li>
                      Systematize the recording of payments & creation of bills.
                    </li>
                    <li>Printed receipts signifying the brand name.</li>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card
                  style={{
                    width: "21rem",
                    border: "none",
                    boxShadow: "5px 5px 10px lightGray",
                  }}
                >
                  <Card.Body style={{ textAlign: "center" }}>
                    <img src={Security} alt="" width={150} />
                    <h3>Security</h3>
                    <li>We comply with the international data norms.</li>
                    <li>
                      Confidentiality is priority! With the practice management
                      software, data is safe and secure.
                    </li>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card
                  style={{
                    width: "21rem",
                    border: "none",
                    boxShadow: "5px 5px 10px lightGray",
                  }}
                >
                  <Card.Body style={{ textAlign: "center" }}>
                    <img src={Record} alt="" width={150} />
                    <h3>Patient Records</h3>
                    <li>Improved care.</li>
                    <li>Printed prescriptions for easy understanding.</li>
                    <li>
                      Keep a track of your patient visits & history easily and
                      digitally.
                    </li>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div>
            <h4>Testimonial</h4>
            <h1>
              What's Our Patients <br />
              Says
            </h1>
            <div className="testimonialDetails">
              <Card
                style={{
                  width: "21rem",
                  border: "none",
                  boxShadow: "5px 5px 10px lightGray",
                }}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Text>
                    This app is super useful and helpful for users that lack
                    advanced knowledge in Online Appointment. I liked how
                    user-friendly the app is. I would recommend this app to
                    anyone who is looking for a quick and easy Appointment. “
                  </Card.Text>
                </Card.Body>
                <Card.Header style={{ border: "none", display: "flex" }}>
                  <img src={ellips1} alt="" />
                  <div className="patientinfo">
                    <p>Robiul Islam</p>
                    <p>Barisal</p>
                  </div>
                </Card.Header>
              </Card>
              <Card
                style={{
                  width: "21rem",
                  border: "none",
                  boxShadow: "5px 5px 10px lightGray",
                }}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Text>
                    This app is super useful and helpful for users that lack
                    advanced knowledge in Online Appointment. I liked how
                    user-friendly the app is. I would recommend this app to
                    anyone who is looking for a quick and easy Appointment. “
                  </Card.Text>
                </Card.Body>
                <Card.Header style={{ border: "none", display: "flex" }}>
                  <img src={ellips2} alt="" />
                  <div className="patientinfo">
                    <p>Robina Niha</p>
                    <p>Barisal</p>
                  </div>
                </Card.Header>
              </Card>
              <Card
                style={{
                  width: "21rem",
                  border: "none",
                  boxShadow: "5px 5px 10px lightGray",
                }}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Text>
                    This app is super useful and helpful for users that lack
                    advanced knowledge in Online Appointment. I liked how
                    user-friendly the app is. I would recommend this app to
                    anyone who is looking for a quick and easy Appointment. “
                  </Card.Text>
                </Card.Body>
                <Card.Header style={{ border: "none", display: "flex" }}>
                  <img src={ellips3} alt="" />
                  <div className="patientinfo">
                    <p>Tofu Lisa</p>
                    <p>Barisal</p>
                  </div>
                </Card.Header>
              </Card>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
