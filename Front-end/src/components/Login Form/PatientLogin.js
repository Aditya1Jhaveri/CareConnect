import { IconButton, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./plog.css";
import Avatar from "@material-ui/core/Avatar";
import DoctorIcon from "../../images/DoctorIcon.png";
import PatientIcon from "../../images/PatientIcon.jpg";
import AdminIcon from "../../images/AdminIcon.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import patientimg from "../../images/PatientLog.jpg";

export const PatientLogin = () => {
  const navigate = useNavigate();
  const docLogin = () => {
    navigate("/DoctorLogin");
  };
  const adLogin = () => {
    navigate("/AdminLogin");
  };

  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    navigate("/Signup");
  };

  const [eye, setEye] = useState();

  const handleEye = () => {
    setEye(!eye);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      role: "ROLE_PAT",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);

      // Send the form data to the API endpoint using Axios
      axios
        .get("http://localhost:9595/api/v1/auth", {
          headers: {
            username: values.username,
            role: values.role,
            password: values.password,
          },
        })
        .then((response) => {
          console.log("API response:", response);
          navigate("/PatientDashboard");
          toast.success("Login successful!");
          // Handle successful response here, if needed
        })
        .catch((error) => {
          console.error("API error:", error);
          toast.error("Invalid email or password");
          // Handle error response here, if needed
        });
    },
  });

  if (authMode === "signin") {
    return (
      <>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="patientimg"
            src={patientimg}
            alt="sans"
            style={{
              flexWrap: "wrap",
              borderRadius: "20%",
              display: "block",
              maxWidth: "50%",
              marginLeft: "40px",
            }}
          />
          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={formik.handleSubmit}>
              <ToastContainer />
              <div className="Auth-form-content">
                <div className="container">
                  <div className="inner-container">
                    <button
                      type="button"
                      class="btn btn-light btn-circle btn-xl"
                      onClick={docLogin}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={DoctorIcon}
                        style={{
                          width: 70,
                          height: 70,
                          border: "2px solid  black",
                          // boxShadow: '2px 2px 20px grey',
                        }}
                      />
                      <p
                        style={{
                          marginTop: 8,
                          marginLeft: 2,
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        DOCTOR
                      </p>
                    </button>

                    <button
                      type="button"
                      className="btn btn-light btn-circle btn-xl"
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={PatientIcon}
                        style={{
                          width: 70,
                          height: 70,
                          border: "2px solid  black",
                          // boxShadow: '2px 2px 20px grey',
                        }}
                      />
                      <p
                        style={{
                          marginTop: 8,
                          marginLeft: 2,
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        PATIENT
                      </p>
                    </button>

                    <button
                      type="button"
                      className="btn btn-light btn-circle btn-xl"
                      onClick={adLogin}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={AdminIcon}
                        style={{
                          width: 70,
                          height: 70,
                          border: "2px solid  black",
                          // boxShadow: '2px 2px 20px grey',
                        }}
                      />
                      <p
                        style={{
                          marginTop: 8,
                          marginLeft: 2,
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        ADMIN
                      </p>
                    </button>
                  </div>
                </div>

                <h3 className="Auth-form-title">Patient Sign In</h3>

                <div className="form-group mt-3">
                  <TextField
                    type="email"
                    id="username"
                    name="username"
                    label="Email"
                    variant="standard"
                    fullWidth
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                </div>

                <input
                  style={{ display: "none" }}
                  disabled
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                  helperText={formik.touched.role && formik.errors.role}
                ></input>

                <div className="form-group mt-3">
                  <TextField
                    type={eye ? "text" : "password"}
                    name="password"
                    className="form-control mt-1"
                    variant="standard"
                    label="Password"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleEye}>
                            {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="forpassword">
                  <span className="link-danger" onClick={changeAuthMode}>
                    Forgot password?
                  </span>
                </div>

                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};
export default PatientLogin;
