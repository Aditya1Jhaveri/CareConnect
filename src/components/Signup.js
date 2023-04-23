import React from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-input-material-ui";
// import "react-phone-input-material-ui/lib/style.css"; // import the styles

import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useFormik } from "formik";
import "./Signup.css";
import axios from "axios";
import * as Yup from "yup";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signupimg from "../images/SignUp.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const paperStyle = {
    padding: "30px 20px",
    width: 500,
    innerHeight: 100,
    outerHeight: 100,
    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  // const handleForm = (e) => {
  //   console.log(user);
  //   postdata(user);
  //   e.preventDefault();
  // };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      mobileNo: "",
      role: "",
      password: "",
      confirmpassword: "",
      acceptterms: "",
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
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm password"),
      // acceptterms: Yup.boolean()
      //   .oneOf([true], "You must accept the terms and conditions")
      //   .required("You must accept the terms and conditions"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);

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
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        className="patientimg"
        src={signupimg}
        alt="sans"
        style={{
          flexWrap: "wrap",
          borderRadius: "20%",
          display: "block",
          maxWidth: "50%",
          marginLeft: "40px",
        }}
      />
      <Grid>
        <Paper elevation={10} style={paperStyle} width={200}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              {/* <AddCircleOutlineOutlinedIcon /> */}
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit}>
            <ToastContainer />
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
            <FormControl variant="standard" sx={{ minWidth: 460 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                error={formik.touched.role && Boolean(formik.errors.role)}
                helperText={formik.touched.role && formik.errors.role}
                label="Role"
                width={460}
              >
                <MenuItem value={"ROLE_PAT"}>Patient</MenuItem>
                <MenuItem value={"ROLE_DOC"}>Doctor</MenuItem>
                <MenuItem value={"ROLE_ADM"}>Admin</MenuItem>
              </Select>
            </FormControl>
            {/* <PhoneInput
              id="mobileNo"
              name="mobileNo"
              variant="standard"
              label="Phone Number"
              defaultCountry="in"
              value={formik.values.mobileNo}
              onChange={formik.handleChange}
              error={formik.touched.mobileNo && formik.errors.mobileNo}
              helperText={formik.touched.mobileNo && formik.errors.mobileNo}
              component={TextField}
            /> */}
            <TextField
              name="mobileNo"
              id="mobileNo"
              label="mobile No"
              variant="standard"
              fullWidth
              value={formik.values.mobileNo}
              onChange={formik.handleChange}
              error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
              helperText={formik.touched.mobileNo && formik.errors.mobileNo}
            />
            <TextField
              type="password"
              name="password"
              className="form-control mt-1"
              variant="standard"
              label="Password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              id="confirmpassword"
              type="confirmpassword"
              name="confirmpassword"
              className="form-control mt-1"
              variant="standard"
              label="Confirm Password"
              placeholder="Confirm your Password"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmpassword &&
                Boolean(formik.errors.confirmpassword)
              }
              helperText={
                formik.touched.confirmpassword && formik.errors.confirmpassword
              }
            />
            <FormControlLabel
              required
              control={<Checkbox name="acceptterms" color="primary" />}
              label="I accept the terms and conditions."
              value={formik.values.acceptterms}
              onChange={formik.handleChange}
              error={
                formik.touched.acceptterms && Boolean(formik.errors.acceptterms)
              }
              helperText={
                formik.touched.acceptterms && formik.errors.acceptterms
              }
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={{ margin: "10px 0" }}
            >
              Sign up
            </Button>
            <Typography>
              Already have an account?{" "}
              <span
                style={{ color: "#1bbd7e", cursor: "pointer" }}
                onClick={() => navigate("/PatientLogin")}
              >
                Sign in
              </span>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Signup;
