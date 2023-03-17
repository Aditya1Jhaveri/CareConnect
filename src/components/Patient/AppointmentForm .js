import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import {
  Button,
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
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
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      mobileNo: "",
      role: "ROLE_DOC",
      password: "",
      // date: selectedDate,
      // time: selectedTime,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Name is required"),
      middlename: Yup.string().required("Name is required"),
      lastname: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      role: Yup.string().required("Role is required"),
      mobileNo: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .required("Phone number is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
      // console.log("Selected date:", selectedDate);
      // console.log("Selected time:", selectedTime);

      // Send the form data to the API endpoint using Axios
      axios
        .post("http://localhost:9595/api/v1/user", {
          firstname: values.firstname,
          middlename: values.middlename,
          lastname: values.lastname,
          email: values.email,
          mobileNo: values.mobileNo,
          role: values.role,
          password: values.password,
          // date: selectedDate,
          // time: selectedTime,
        })
        .then((response) => {
          console.log("API response:", response);
          toast.success("SignUp successfull");
          // Handle successful response here, if needed
        })
        .catch((error) => {
          console.error("API error:", error);
          // Handle error response here, if needed
        });
    },
  });

  const timeSlots = [
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
    { value: "12:00 PM", label: "12:00 PM" },
    { value: "1:00 PM", label: "1:00 PM" },
    { value: "2:00 PM", label: "2:00 PM" },
    { value: "3:00 PM", label: "3:00 PM" },
    { value: "4:00 PM", label: "4:00 PM" },
    { value: "5:00 PM", label: "5:00 PM" },
    { value: "6:00 PM", label: "6:00 PM" },
  ];

  return (
    <Container maxWidth="md">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" className="mb-4">
              Book a Doctor Appointment
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              name="firstname"
              label="First Name"
              variant="standard"
              fullWidth
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="middlename"
              name="middlename"
              label="Middle Name"
              variant="standard"
              fullWidth
              value={formik.values.middlename}
              onChange={formik.handleChange}
              error={
                formik.touched.middlename && Boolean(formik.errors.middlename)
              }
              helperText={formik.touched.middlename && formik.errors.middlename}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="lastname"
              name="lastname"
              label="Last Name"
              variant="standard"
              fullWidth
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="standard"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="mobileNo"
              name="mobileNo"
              label="mobile No"
              variant="standard"
              fullWidth
              value={formik.values.mobileNo}
              onChange={formik.handleChange}
              error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
              helperText={formik.touched.mobileNo && formik.errors.mobileNo}
            />
          </Grid>

          <input
            // type={Hidden}
            id="role"
            name="role"
            label="Role"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
          ></input>

          <TextField
            id="password"
            type="password"
            name="password"
            className="form-control mt-1"
            variant="standard"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Grid item xs={12}>
            <Typography variant="h6">Select date and time</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              minDate={new Date()}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="time-label">Time</InputLabel>
              <Select
                labelId="time-label"
                id="time"
                variant="standard"
                value={selectedTime}
                onChange={(e) => handleTimeChange(e.target.value)}
                label="Time"
              >
                {timeSlots.map((slot) => (
                  <MenuItem key={slot.value} value={slot.value}>
                    {slot.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Book Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AppointmentForm;
