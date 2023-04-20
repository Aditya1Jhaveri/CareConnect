import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Card } from "react-bootstrap";
// import "../Component/List.css";
import Button from "react-bootstrap/Button";
import API from "./API";
// import { light } from '@mui/material/styles/createPalette';

const FilterPage = () => {
  const [data, setData] = useState(API);
  return (
    // symptactic Sugar form
    <>
      <h1
        className="text-center text-info"
        style={{ backgroundColor: "lightgreen" }}
      >
        List of Clinics
      </h1>
      <div
        className="container-fluid mx-2"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="row mt-5 mx-2">
          <div className="col-md-3"></div>
          <Card
            style={{
              width: 200,
              fontSize: 50,
              height: 900,
              marginLeft: -520,
              borderRadius: 30,
              borderColor: "black",
            }}
          >
            <FormGroup style={{ marginLeft: 20 }}>
              <FormControlLabel control={<Checkbox />} label="Dermitologist" />
              <FormControlLabel control={<Checkbox />} label="Cardiologist" />
              <FormControlLabel control={<Checkbox />} label="Audiologist" />
              <FormControlLabel control={<Checkbox />} label="Dentist" />
              <FormControlLabel control={<Checkbox />} label="Gynecologist" />
              <FormControlLabel control={<Checkbox />} label="Paediatrtion" />
              <FormControlLabel control={<Checkbox />} label="Radiologist" />
              <FormControlLabel control={<Checkbox />} label="Pulmonologist" />
              <FormControlLabel control={<Checkbox />} label="Neurologist" />
            </FormGroup>
          </Card>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const { id } = values;
                return (
                  <>
                    <Card
                      className="shadow-lg p-3 mb-5 bg-white rounded"
                      key={id}
                      style={{
                        backgroundColor: "lightgrey",
                        width: "200rem",
                        borderRadius: 10,
                        height: 500,
                        marginLeft: 250,
                      }}
                    >
                      <div style={{ alignContent: "center" }}>
                        <Card.Img
                          variant="left"
                          src="./Images/Img1.jpeg"
                          style={{
                            width: 170,
                            height: 170,
                            marginLeft: 40,
                            marginTop: 130,
                            borderRadius: 200,
                          }}
                        />
                      </div>
                      <Card.Body>
                        <div style={{ marginTop: -300, marginLeft: 210 }}>
                          <Card.Title style={{ textAlign: "", fontSize: 29 }}>
                            Name: {values.title}
                          </Card.Title>
                          <p style={{ fontSize: 20 }}>{values.work}</p>
                          <p style={{ fontSize: 19 }}>
                            <b>Age: </b>
                            {values.age}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Gender: </b>
                            {values.gender}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Mobile No.:</b> {values.mobile_no}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Degree:</b> {values.degree}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Specialisation:</b> {values.specialisation}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Adhar No.: </b>
                            {values.adhar_no}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>License Id: </b>
                            {values.license_id}
                          </p>
                        </div>

                        <div
                          style={{
                            marginLeft: 400,
                            marginTop: -350,
                            marginLeft: 750,
                          }}
                        >
                          <p style={{ fontSize: 19 }}>
                            <b>Clinic Name: </b>
                            {values.clinic_name}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Clinic Contact: </b>
                            {values.clinic_no}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Address: </b>
                            {values.clinic_name}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Date: </b>
                            {values.date}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Time: </b>
                            {values.time}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Type: </b>
                            {values.type}
                          </p>
                        </div>

                        <Button
                          style={{
                            marginLeft: 1050,
                            marginTop: 50,
                            width: 200,
                            height: 50,
                          }}
                          variant="success"
                        >
                          Book Appointment
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
              {/* <div className='col-md-8' style={{ marginBottom: 50, marginLeft: 20 }}>

                            </div> */}
              {/* <div className='col-md-8' style={{ marginBottom: 50, marginLeft: 20 }}>
                                <Card class="shadow-lg p-3 mb-5 bg-white rounded" style={{ backgroundColor: 'lightgrey', width: '115rem', borderRadius: 40 }}>
                                    <Card.Img variant="top" src="./Images/Img1.jpeg" style={{ width: 400, marginLeft: 720, marginTop: 20, borderRadius: 50 }} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: "center", fontSize: 25 }}>Dr. Hitesh Patel</Card.Title>
                                        <Card.Text style={{ fontSize: 20 }}>
                                            <b>Discription: </b>
                                            Dr. Hitesh Patel, MD is a Neurology Specialist in San Clemente, CA.
                                            He is affiliated with medical facilities such as Long Beach Memorial Medical Center and Miller Children's & Women's Hospital - Long Beach.
                                            He is accepting new patients and has indicated that he accepts telehealth appointments.
                                            Be sure to call ahead with Dr. Patel to book an appointment.
                                        </Card.Text>
                                        <Button style={{ marginLeft: 1550 }} variant="success">Preview</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-8' style={{ marginBottom: 50, marginLeft: 20 }}>
                                <Card class="shadow-lg p-3 mb-5 bg-white rounded" style={{ backgroundColor: 'lightgrey', width: '115rem', borderRadius: 40 }}>
                                    <Card.Img variant="top" src="./Images/Img1.jpeg" style={{ width: 400, marginLeft: 720, marginTop: 20, borderRadius: 50 }} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: "center", fontSize: 25 }}>Dr. Hitesh Patel</Card.Title>
                                        <Card.Text style={{ fontSize: 20 }}>
                                            <b>Discription: </b>
                                            Dr. Hitesh Patel, MD is a Neurology Specialist in San Clemente, CA.
                                            He is affiliated with medical facilities such as Long Beach Memorial Medical Center and Miller Children's & Women's Hospital - Long Beach.
                                            He is accepting new patients and has indicated that he accepts telehealth appointments.
                                            Be sure to call ahead with Dr. Patel to book an appointment.
                                        </Card.Text>
                                        <Button style={{ marginLeft: 1550 }} variant="success">Preview</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-8' style={{ marginBottom: 50, marginLeft: 20 }}>
                                <Card class="shadow-lg p-3 mb-5 bg-white rounded" style={{ backgroundColor: 'lightgrey', width: '115rem', borderRadius: 40 }}>
                                    <Card.Img variant="top" src="./Images/Img1.jpeg" style={{ width: 400, marginLeft: 720, marginTop: 20, borderRadius: 50 }} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: "center", fontSize: 25 }}>Dr. Hitesh Patel</Card.Title>
                                        <Card.Text style={{ fontSize: 20 }}>
                                            <b>Discription: </b>
                                            Dr. Hitesh Patel, MD is a Neurology Specialist in San Clemente, CA.
                                            He is affiliated with medical facilities such as Long Beach Memorial Medical Center and Miller Children's & Women's Hospital - Long Beach.
                                            He is accepting new patients and has indicated that he accepts telehealth appointments.
                                            Be sure to call ahead with Dr. Patel to book an appointment.
                                        </Card.Text>
                                        <Button style={{ marginLeft: 1550 }} variant="success">Preview</Button>
                                    </Card.Body>
                                </Card>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
