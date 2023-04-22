import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  Card,
  Paper,
  Container,
  FormControl,
  Grid,
  InputLabel,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentForm.css";
import Bookappoint from "../../images/Bookappointment.jpg";
import { useNavigate } from "react-router-dom";

const paperStyle = {
  padding: "20px 10px",
  width: 650,
  innerHeight: 100,
  outerHeight: 500,
  margin: "20px auto",
  marginLeft: "40px",
  // backgroundColor:"rgba(255,255,255,0.2)",
  Opacity: "1px",
};

const outerpaper = {
  padding: "20px 10px",
  width: 1450,
  innerHeight: 110,
  outerHeight: 500,
  margin: "20px auto",
  marginLeft: "40px",
  background: "linear-gradient(to right, #d4eaf0, #a3d2e4)",
  Opacity: "1px",
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  button: {
    color: "white",
    backgroundColor: "green",
    marginLeft: "450px",
    fontSize: "18px",
  },
  Calendar: {
    color: "red",
    marginTop: "30px",
    marginLeft: "85px",
  },
}));

const AppointmentForm = () => {
  const navigate = useNavigate();

  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleDateChange = (date) => {
    setDate(date);
    formik.setFieldValue("date", date);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
    formik.setFieldValue("time", selectedTime);
  };

  const isoDate = date.toISOString().slice(0, 10);
  const formik = useFormik({
    initialValues: {
      patientname: "",
      email: "",
      mobileNo: "",
      age: "",
      weight: "",
      city: "",
      address: "",
      symtoms: "",
      time: "",
      date: "",
      status: "STATUS_PENDING",
    },
    validationSchema: Yup.object({
      patientname: Yup.string().required("Name is required"),
      age: Yup.string().required("Age is required"),
      weight: Yup.string().required("Weight is required"),
      city: Yup.string().required("City is required"),
      address: Yup.string().required("Address is required"),
      symtoms: Yup.string().required("Disesase is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mobileNo: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .required("Phone number is required"),
      date: Yup.date()
        .required("Date is required")
        .min(new Date(), "Date cannot be in the past")
        .test(
          "futureDate",
          "Cannot select past date",
          (value) => value >= new Date()
        ),
      time: Yup.string()
        .required("Time is required")
        .matches(
          /^(1[0-2]|0?[1-9]):([0-5]\d)\s?(AM|PM)$/,
          "Invalid time format"
        ),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
      console.log("Selected date:", date);
      console.log("Selected time:", time);
      // Here you can send the data to your API or do whatever you need with it.
      axios
        .post("http://localhost:9595/api/v1/booking", {
          patientname: values.patientname,
          email: values.email,
          mobileNo: values.mobileNo,
          age: values.age,
          weight: values.weight,
          city: values.city,
          address: values.address,
          symtoms: values.symtoms,
          time: time,
          date: isoDate,
          status: values.status,
        })
        .then((response) => {
          console.log("API response:", response);
          toast.success("Login successful!");
          navigate("/PatientLogin");

          // Handle successful response here, if needed
        })
        .catch((error) => {
          console.error("API error:", error);
          toast.error("Please enter valid details !!!");
          // Handle error response here, if needed
        });
    },
  });

  const timeSlots = [
    { value: "9:00 AM", label: "9:00 AM - 10:00 AM" },
    { value: "10:00 AM", label: "10:00 AM - 11:00 AM" },
    { value: "11:00 PM", label: "11:00 AM - 12:00 PM" },
    { value: "2:00 PM", label: "2:00 PM - 3:00 PM" },
    { value: "3:00 PM", label: "3:00 PM - 4:00 PM" },
    { value: "4:00 PM", label: "4:00 PM - 5:00 PM" },
    { value: "5:00 PM", label: "5:00 PM - 6:00 PM" },
    { value: "6:00 PM", label: "6:00 PM - 7:00 PM" },
    { value: "7:00 PM", label: "7:00 PM - 8:00 PM" },
  ];

  return (
    <Paper elevation={10} style={outerpaper} width={200}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={Bookappoint}
          className="Bookappoint"
          alt="Book appointment"
          style={{
            width: "50%",
            flexWrap: "wrap",
            display: "block",
            borderRadius: "2%",
          }}
        />
        <Paper elevation={10} style={paperStyle} width={200}>
          <Container maxWidth="md">
            <form onSubmit={formik.handleSubmit}>
              <ToastContainer />
              <Grid container spacing={2}>
                <div>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        marginLeft: "170px",
                        color: "black",
                        fontFamily: "cursive",
                        fontSize: "50px",
                      }}
                      variant="h4"
                      className="mb-4"
                    >
                      Make An <span className="red-text">Appointment</span>
                    </Typography>
                  </Grid>
                </div>
                <Grid item xs={12} sm={6}>
                  <TextField
                    style={{ fontFamily: "monospace" }}
                    id="name"
                    name="patientname"
                    label="Full Name"
                    fullWidth
                    value={formik.values.patientname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.patientname &&
                      Boolean(formik.errors.patientname)
                    }
                    helperText={
                      formik.touched.patientname && formik.errors.patientname
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Age"
                    name="age"
                    label="Age"
                    fullWidth
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={formik.touched.age && Boolean(formik.errors.age)}
                    helperText={formik.touched.age && formik.errors.age}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="phone"
                    name="mobileNo"
                    label="Mobile No"
                    fullWidth
                    value={formik.values.mobileNo}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.mobileNo && Boolean(formik.errors.mobileNo)
                    }
                    helperText={
                      formik.touched.mobileNo && formik.errors.mobileNo
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="weight"
                    name="weight"
                    label="Weight"
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helperText={formik.touched.weight && formik.errors.weight}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">Kg</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Address"
                    name="address"
                    label="Address"
                    fullWidth
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="City"
                    name="city"
                    label="City"
                    fullWidth
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Symptoms
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="symtoms"
                      label="Symptoms"
                      value={formik.values.symtoms}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.symtoms && Boolean(formik.errors.symtoms)
                      }
                      helperText={
                        formik.touched.disease && formik.errors.disease
                      }
                    >
                      <MenuItem value={"Headache<"}>Headache</MenuItem>
                      <MenuItem value={"Stomach Pain"}>Stomach Pain</MenuItem>
                      <MenuItem value={"Fever"}>Fever</MenuItem>
                      <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
                      <MenuItem value={"Blood Pressure"}>
                        Blood Pressure
                      </MenuItem>
                      <MenuItem value={"Cholera"}>Cholera</MenuItem>
                      <MenuItem value={"Chickenpox"}>Chickenpox </MenuItem>
                      <MenuItem value={"Eye CheckUp"}>Eye CheckUp</MenuItem>
                      <MenuItem value={"Regular CheckUp"}>
                        Regular CheckUp
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <input
                  style={{ display: "none" }}
                  disabled
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  error={formik.touched.status && Boolean(formik.errors.status)}
                  helperText={formik.touched.status && formik.errors.status}
                ></input>

                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl} fullWidth>
                    <InputLabel id="time-select-label">Select Time</InputLabel>
                    <Select
                      labelId="time-select-label"
                      id="time-select"
                      value={time}
                      onChange={formik.handleChange && handleTimeChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.time && Boolean(formik.errors.time)}
                      helperText={formik.touched.time && formik.errors.time}
                    >
                      {timeSlots.map((slot) => (
                        <MenuItem key={slot.value} value={slot.value}>
                          {slot.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <div className={classes.Calendar}>
                  <Grid style={{ color: "black" }} item xs={15} sm={9}>
                    <Calendar
                      className="cal"
                      onChange={handleDateChange}
                      value={date}
                      minDate={new Date()}
                    />
                  </Grid>
                </div>

                <Grid item xs={12}>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Paper>
      </div>
    </Paper>
  );
};

export default AppointmentForm;
