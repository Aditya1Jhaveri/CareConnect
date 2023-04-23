import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "@material-ui/core";

import "./PatientDashboard.css";
import PatientSidebar from "./PatSidebar";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
// import { height } from "@mui/system";

function PatientDashboard() {
  return (
    <div className="stat" style={{ backgroundColor: "lightblue" }}>
      <div className="pt-4 pb-4">
        <PatientSidebar />
        {/* <section style={{ backgroundColor: "#eee" }}> */}
        <MDBContainer className="py-5">
          <MDBRow>
            {/* <MDBCol lg="4">


          </MDBCol> */}
            <MDBCol lg="8">
              <p
                style={{
                  marginLeft: 500,
                  marginBottom: 50,
                  marginTop: 1,
                  fontWeight: "bolder",
                  fontSize: 30,
                  textDecoration: "underline",
                }}
              >
                Your Appointment Status
              </p>

              <MDBCard
                className="mb-8 "
                style={{
                  width: 1250,
                  marginLeft: 70,
                  borderColor: "black",
                  borderWidth: 5,
                }}
              >
                <MDBCardBody>
                  {/* Patient information */}

                  <h4 style={{ margin: 20, marginLeft: 500 }}>
                    Patient Information
                  </h4>

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Priyansh Soni
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr className="hr-line" />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Gender:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Male</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr className="hr-line" />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Age:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">21</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr className="hr-line" />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email Id:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        priyanshsoni186@gmail.com
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Contact No.:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        0987654321
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        B-101,Swagat Rain Forest-3, Sargasan, Gandhinagar.
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  {/* Doctor Information */}

                  <h4 style={{ margin: 60, marginLeft: 500, marginBottom: 30 }}>
                    Doctor Information
                  </h4>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Dr.Name:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Dr.Naman Om Tyagi
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Gender:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Male</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Age:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">55</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email Id:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        naman@gmail.com
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Contact No.:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        8783463298
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        B-101,Swagat Rain Forest-3, Sargasan, Gandhinagar.
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  {/* Date and Time */}

                  <h4 style={{ margin: 60, marginLeft: 450, marginBottom: 30 }}>
                    Date and Time of Appointment
                  </h4>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Date:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        24th April 2023
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Time:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        10:00-11:00AM
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  {/* Status */}

                  <h4
                    style={{
                      margin: 60,
                      marginLeft: 500,
                      marginBottom: 30,
                      marginTop: 40,
                    }}
                  >
                    Appointment Status
                  </h4>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Appointment Status:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <span className="red-text">
                          <b>CONFIRMED</b>
                        </span>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  {/* Button */}

                  <Button
                    style={{
                      marginTop: 60,
                      marginLeft: 750,
                      backgroundColor: "green",
                      fontSize: 15,
                      color: "white",
                    }}
                  >
                    Preview Priscription
                  </Button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* </section> */}
      </div>
    </div>
  );
}

export default PatientDashboard;
