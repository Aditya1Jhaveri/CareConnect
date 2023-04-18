import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from '@material-ui/core'

import "./pdash.css";
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
    <div className="stat"  style={{backgroundColor: "lightblue"}}>
    <div className="pt-4 pb-4">

      <PatientSidebar />
      {/* <section style={{ backgroundColor: "#eee" }}> */}
      <MDBContainer className="py-5">


        <MDBRow>
          {/* <MDBCol lg="4">


          </MDBCol> */}
          <MDBCol lg="8">

            <p style={{marginLeft: 800,marginBottom: 50, marginTop: 1, fontWeight: 'bolder', fontSize: 30, textDecoration: 'underline'}}>Your Appointment Status</p>
            
            <MDBCard className="mb-8 " style={{ width: 1750, marginLeft: 70, borderColor: "black", borderWidth: 5}}>
              <MDBCardBody style={{ width: 1700, height: 1340 }}>
                
                                  {/* Patient information */}
              
              <h4 style={{margin: 20, marginLeft: 700}}>Patient Information</h4>
                
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Naman Om Tyagi
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
                    <MDBCardText className="text-muted">45</MDBCardText>
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
                
                <h4 style={{margin: 60, marginLeft: 700, marginBottom: 30}}>Doctor Information</h4>
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

                <h4 style={{margin: 60, marginLeft: 650, marginBottom: 30}}>Date and Time of Appointment</h4>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      25th January 2023
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Time:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">10:00-11:00AM</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                                                 {/* Status */}

                <h4 style={{margin: 60, marginLeft: 750, marginBottom: 30, marginTop: 40}}>Appointment Status</h4>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Appointment Status:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      <span className="red-text"><b>CONFIRMED</b></span>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr/>

                                                 {/* Button */}

                <Button style={{marginTop: 60, marginLeft: 750, backgroundColor: 'green', fontSize: 15, color: 'white'}}>
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