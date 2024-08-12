import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Paper,
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
import "react-toastify/dist/ReactToastify.css";
import Bookappoint from "../../images/Bookappointment.jpg";
import { useNavigate } from "react-router-dom";
import "./AppointmentForm.css";

const useStyles = makeStyles((theme) => ({
  appointmentPaper: {
    padding: theme.spacing(4),
    maxWidth: 600,
    marginTop: 25,
    marginBottom: 25,
  },
  appointmentTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "28px",
    color: "#333",
    textAlign: "center",
  },
  appointmentImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: theme.spacing(2),
  },
  formControl: {
    minWidth: "100%",
    marginBottom: theme.spacing(2),
  },
  button: {
    color: "white",
    backgroundColor: "#1e90ff",
    fontSize: "18px",
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#1a79c7",
    },
  },
  calendar: {
    marginTop: theme.spacing(2),
  },
}));

const AppointmentForm = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
    formik.setFieldValue("date", date);
  };

  // console.log("Test: ", date);

  // Adjust for local time zone
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  const isoDate = localDate.toISOString().slice(0, 10).replace("T", " ");

  // console.log("Test2:", isoDate);

  const [time, setTime] = useState("");

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
    formik.setFieldValue("time", selectedTime);
  };

  const formik = useFormik({
    initialValues: {
      patientname: "",
      email: "",
      mobileNo: "",
      age: "",
      weight: "",
      city: "",
      address: "",
      symptoms: "",
      time: "",
      date: "",
      status: "STATUS_PENDING",
    },
    validationSchema: Yup.object({
      patientname: Yup.string().required("Name is required"),
      age: Yup.number()
        .typeError("Age must be a number")
        .positive("Age must be a positive number")
        .required("Age is required"),
      weight: Yup.number()
        .typeError("Weight must be a number")
        .positive("Weight must be a positive number")
        .required("Weight is required"),
      city: Yup.string().required("City is required"),
      address: Yup.string().required("Address is required"),
      symptoms: Yup.string().required("Disease is required"),
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
        .min(new Date(), "Date cannot be in the past"),
      time: Yup.string().required("Time is required"),
    }),
    onSubmit: (values) => {
      axios
        .post("http://localhost:9595/api/v1/booking", {
          patientname: values.patientname,
          email: values.email,
          mobileNo: values.mobileNo,
          age: values.age,
          weight: values.weight,
          city: values.city,
          address: values.address,
          symtoms: values.symptoms,
          time: time,
          date: isoDate,
          status: values.status,
        })
        .then((response) => {
          toast.success("Appointment booked successfully!");
          setTimeout(() => {
            navigate("/PatientLogin");
          }, 3000);
        })
        .catch((error) => {
          console.error("API error:", error);
          toast.error("Please enter valid details!");
        });
    },
  });

  const timeSlots = [
    { value: "9:00 AM", label: "9:00 AM - 10:00 AM" },
    { value: "10:00 AM", label: "10:00 AM - 11:00 AM" },
    { value: "11:00 AM", label: "11:00 AM - 12:00 PM" },
    { value: "2:00 PM", label: "2:00 PM - 3:00 PM" },
    { value: "3:00 PM", label: "3:00 PM - 4:00 PM" },
    { value: "4:00 PM", label: "4:00 PM - 5:00 PM" },
    { value: "5:00 PM", label: "5:00 PM - 6:00 PM" },
    { value: "6:00 PM", label: "6:00 PM - 7:00 PM" },
    { value: "7:00 PM", label: "7:00 PM - 8:00 PM" },
  ];

  return (
    <Container maxWidth="sm">
      <Paper elevation={10} className={classes.appointmentPaper}>
        <Typography variant="h4" className={classes.appointmentTitle}>
          Make an Appointment
        </Typography>
        <img
          src={Bookappoint}
          className={classes.appointmentImage}
          alt="Book appointment"
        />
        <form onSubmit={formik.handleSubmit}>
          <ToastContainer />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="patientname"
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
                id="age"
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
                id="mobileNo"
                name="mobileNo"
                label="Mobile No"
                fullWidth
                value={formik.values.mobileNo}
                onChange={formik.handleChange}
                error={
                  formik.touched.mobileNo && Boolean(formik.errors.mobileNo)
                }
                helperText={formik.touched.mobileNo && formik.errors.mobileNo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="weight"
                name="weight"
                label="Weight (Kg)"
                fullWidth
                value={formik.values.weight}
                onChange={formik.handleChange}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                helperText={formik.touched.weight && formik.errors.weight}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                name="address"
                label="Address"
                fullWidth
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="city"
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
                <InputLabel id="symptoms-label">Symptoms</InputLabel>
                <Select
                  labelId="symptoms-label"
                  id="symptoms"
                  name="symptoms"
                  label="Symptoms"
                  value={formik.values.symptoms}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.symptoms && Boolean(formik.errors.symptoms)
                  }
                  helperText={formik.touched.symptoms && formik.errors.symptoms}
                >
                  <MenuItem value="Headache">Headache</MenuItem>
                  <MenuItem value="Stomach Pain">Stomach Pain</MenuItem>
                  <MenuItem value="Fever">Fever</MenuItem>
                  <MenuItem value="Diabetes">Diabetes</MenuItem>
                  <MenuItem value="Blood Pressure">Blood Pressure</MenuItem>
                  <MenuItem value="Chickenpox">Chickenpox</MenuItem>
                  <MenuItem value="Eye CheckUp">Eye CheckUp</MenuItem>
                  <MenuItem value="Regular CheckUp">Regular CheckUp</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="time-select-label">Select Time</InputLabel>
                <Select
                  labelId="time-select-label"
                  id="time-select"
                  value={time}
                  onChange={(event) => {
                    formik.handleChange(event);
                    handleTimeChange(event);
                  }}
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
            <Grid item xs={10} sm={10} className="cal">
              <Typography variant="subtitle1">Select Date:</Typography>
              <Calendar
                className={classes.calendar}
                onChange={handleDateChange}
                value={date}
                minDate={new Date()}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AppointmentForm;
