import React, { useState, useEffect } from "react";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import API from "./API";
// import { light } from '@mui/material/styles/createPalette';

const FilterPage = () => {
  const navigate = useNavigate();
  const bookappoint = () => {
    navigate("/AppointmentForm");
  };

  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9595/api/v1/approvedclinic")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(img);

  useEffect(() => {
    fetch("http://localhost:9595/api/v1/image")
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        setImg(objectURL);
      });
  }, []);

  return (
    <>
      <h1
        className="text-center text-info"
        style={{ backgroundColor: "white", marginBottom: -60 }}
      >
        List of Clinics
      </h1>
      <div
        className="container-fluid mx-2"
        style={{
          backgroundColor: "lightblue",
          borderRadius: 20,
          marginTop: 80,
        }}
      >
        <div className="row mt-5 mx-2">
          <div className="col-md-3"></div>
          <Card
            style={{
              width: 200,
              fontSize: 50,
              height: 500,
              marginLeft: -350,
              borderRadius: 30,
              borderColor: "black",
              marginTop: 50,
            }}
          >
            <FormGroup style={{ marginLeft: 20, width: 50, marginTop: 50 }}>
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
                // const { id } = values
                return (
                  <>
                    <Card
                      className="shadow-lg p-3 mb-5 bg-white rounded"
                      key={data.indexOf(values) + 1}
                      style={{
                        backgroundColor: "lightgrey",
                        width: "300rem",
                        borderRadius: 10,
                        height: 500,
                        marginLeft: 100,
                        marginTop: 50,
                      }}
                    >
                      <div style={{ alignContent: "center" }}>
                        {/* <img src={img} alt="API Image" /> */}
                        <Card.Img
                          variant="left"
                          src={img}
                          alt="myimage"
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
                        <div style={{ marginTop: -280, marginLeft: 210 }}>
                          <Card.Title style={{ textAlign: "", fontSize: 29 }}>
                            Name:
                            {"Dr " +
                              values.firstname +
                              " " +
                              values.middlename +
                              " " +
                              values.lastname}
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
                            <b>Mobile No.:</b> {values.mobileNo}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Degree:</b> {values.degree}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Specialisation:</b> {values.speciallization}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Experience of Year: </b>
                            {values.experience}
                          </p>
                        </div>
                        {/* right side details */}
                        <div
                          style={{
                            marginLeft: 400,
                            marginTop: -330,
                            marginLeft: 750,
                          }}
                        >
                          <p style={{ fontSize: 19 }}>
                            <b>Clinic Name: </b>
                            {values.clinic_name}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Clinic Contact: </b>
                            {values.clinic_contact}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Address: </b>
                            {values.street}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>City: </b>
                            {values.city}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>State: </b>
                            {values.state}
                          </p>

                          <p style={{ fontSize: 19 }}>
                            <b>Fees: </b>
                            {values.fees}
                          </p>
                          <p style={{ fontSize: 19 }}>
                            <b>Time: 8:00 Am to 9:00AM </b>
                          </p>

                          <p style={{ fontSize: 19 }}>
                            <b>Type: </b>
                            {values.type}
                          </p>
                        </div>
                        <Button
                          style={{
                            marginLeft: 800,
                            marginTop: 2,
                            width: 190,
                            height: 50,
                          }}
                          variant="success"
                          onClick={bookappoint}
                        >
                          Book Appointment
                        </Button>
                      </Card.Body>
                    </Card>
                    ;
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
