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
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentForm.css";
import Bookappoint from "../../images/Bookappointment.jpg";

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
    marginLeft: "350px",
    fontSize: "18px",
  },
  Calendar: {
    color: "red",
    marginTop: "30px",
    marginLeft: "85px",
  },
}));

const AppointmentForm = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      weight: "",
      city: "",
      address: "",
      disease: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.string().required("Age is required"),
      weight: Yup.string().required("Weight is required"),
      city: Yup.string().required("City is required"),
      address: Yup.string().required("Address is required"),
      disease: Yup.string().required("Disesase is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
      console.log("Selected date:", selectedDate);
      console.log("Selected time:", selectedTime);
      // Here you can send the data to your API or do whatever you need with it.
    },
  });

  const timeSlots = [
    { value: "10:00 AM", label: "9:00 AM - 10:00 AM" },
    { value: "11:00 AM", label: "10:00 AM - 11:00 AM" },
    { value: "12:00 PM", label: "11:00 AM - 12:00 PM" },
    { value: "1:00 PM", label: "2:00 PM - 3:00 PM" },
    { value: "2:00 PM", label: "3:00 PM - 4:00 PM" },
    { value: "3:00 PM", label: "4:00 PM - 5:00 PM" },
    { value: "4:00 PM", label: "5:00 PM - 6:00 PM" },
    { value: "5:00 PM", label: "6:00 PM - 7:00 PM" },
    { value: "6:00 PM", label: "7:00 PM - 8:00 PM" },
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
                    name="name"
                    label="Full Name"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Age"
                    name="Age"
                    label="Age"
                    fullWidth
                    value={formik.values.Age}
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
                    name="phone"
                    label="Phone"
                    fullWidth
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Weight"
                    name="Weight"
                    label="Weight"
                    fullWidth
                    value={formik.values.Weight}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helperText={formik.touched.weight && formik.errors.weight}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="City"
                    name="City"
                    label="City"
                    fullWidth
                    value={formik.values.City}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Address"
                    name="Address"
                    label="Address"
                    fullWidth
                    value={formik.values.Address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
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
                      // value={disease}
                      label="Symptoms"
                      // onChange={OnChange}
                      error={
                        formik.touched.disease && Boolean(formik.errors.disease)
                      }
                      helperText={
                        formik.touched.disease && formik.errors.disease
                      }
                    >
                      <MenuItem value={1}>Headache</MenuItem>
                      <MenuItem value={2}>Stomach Pain</MenuItem>
                      <MenuItem value={3}>Fever</MenuItem>
                      <MenuItem value={4}>Diabetes</MenuItem>
                      <MenuItem value={5}>Blood Pressure</MenuItem>
                      <MenuItem value={6}>Cholera</MenuItem>
                      <MenuItem value={7}>Chickenpox </MenuItem>
                      <MenuItem value={8}>Eye CheckUp</MenuItem>
                      <MenuItem value={9}>Regular CheckUp</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl} fullWidth>
                    <InputLabel id="time-select-label">Select Time</InputLabel>
                    <Select
                      labelId="time-select-label"
                      id="time-select"
                      value={selectedTime}
                      onChange={(e) => handleTimeChange(e.target.value)}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.selectedTime &&
                        Boolean(formik.errors.selectedTime)
                      }
                      helperText={
                        formik.touched.selectedTime &&
                        formik.errors.selectedTime
                      }
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
                      value={selectedDate}
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
