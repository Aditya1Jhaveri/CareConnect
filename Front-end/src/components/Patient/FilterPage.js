import React, { useState, useEffect } from "react";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./FilterPage.css"; // Import a separate CSS file for custom styles

const FilterPage = () => {
  const navigate = useNavigate();
  const bookAppointment = () => {
    navigate("/AppointmentForm");
  };

  const [data, setData] = useState([]);
  const [img, setImg] = useState("");

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

  useEffect(() => {
    fetch("http://localhost:9595/api/v1/image")
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        setImg(objectURL);
      });
  }, []);

  return (
    <div className="filter-page">
      <h1 className="page-heading">List of Clinics</h1>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-3">
            <Card className="filter-card">
              <FormGroup className="filter-form-group">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Dermatologist"
                />
                <FormControlLabel control={<Checkbox />} label="Cardiologist" />
                <FormControlLabel control={<Checkbox />} label="Audiologist" />
                <FormControlLabel control={<Checkbox />} label="Dentist" />
                <FormControlLabel control={<Checkbox />} label="Gynecologist" />
                <FormControlLabel control={<Checkbox />} label="Paediatrtion" />
                <FormControlLabel control={<Checkbox />} label="Radiologist" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Pulmonologist"
                />
                <FormControlLabel control={<Checkbox />} label="Neurologist" />
              </FormGroup>
            </Card>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => (
                <Card className="clinic-card" key={values.id}>
                  <div className="clinic-card__image">
                    <img
                      src={img}
                      alt="Clinic"
                      className="clinic-card__image-img"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="clinic-card__title">
                      {`Dr ${values.firstname} ${values.middlename} ${values.lastname}`}
                    </Card.Title>
                    <p className="clinic-card__subtitle">{values.work}</p>
                    <div className="clinic-card__details">
                      <div className="clinic-card__details-left">
                        <p className="clinic-card__detail">
                          <span className="clinic-card__detail-label">
                            Age:
                          </span>{" "}
                          {values.age}
                        </p>
                        <p className="clinic-card__detail">
                          <span className="clinic-card__detail-label">
                            Gender:
                          </span>{" "}
                          {values.gender}
                        </p>
                        <p className="clinic-card__detail">
                          <span className="clinic-card__detail-label">
                            Mobile No.:
                          </span>{" "}
                          {values.mobileNo}
                        </p>
                        <p className="clinic-card__detail">
                          <span className="clinic-card__detail-label">
                            Degree:
                          </span>{" "}
                          {values.degree}
                        </p>
                      </div>
                      <div className="clinic-card__details-right">
                        <p className="clinic-card__detail">
                          <span className="clinic-card__detail-label">
                            Clinic Name:
                          </span>{" "}
                          {values.clinic_name}
                        </p>
                        <p className="clinic-card__detail">
                          <span className="clinic-card__detail-label">
                            Clinic Contact:
                          </span>{" "}
                          {values.clinic_contact}
                        </p>
                        <p className="clinic-card__detail">
                          <span className="clinic-card__detail-label">
                            Address:
                          </span>{" "}
                          {values.street}, {values.city}, {values.state}
                        </p>
                        <p className="clinic-card__detail">
                          <span className="clinic-card__detail-label">
                            Fees:
                          </span>{" "}
                          {values.fees}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="clinic-card__button"
                      variant="success"
                      onClick={bookAppointment}
                    >
                      Book Appointment
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
