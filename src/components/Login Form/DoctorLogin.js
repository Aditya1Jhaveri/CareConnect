import { useNavigate } from "react-router-dom";
import { IconButton, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./dLog.css";
import Avatar from "@material-ui/core/Avatar";
import DoctorIcon from "../../images/DoctorIcon.png";
import PatientIcon from "../../images/PatientIcon.png";
import AdminIcon from "../../images/AdminIcon.jpeg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const DoctorLogin = (props) => {
  const navigate = useNavigate();

  const patLogin = () => {
    navigate("/PatientLogin");
  };
  const adLogin = () => {
    navigate("/AdminLogin");
  };

  // const login = () => {
  //   navigate("/DoctorDashboard");
  // };

  let [authMode, setAuthMode] = useState("signin");
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    navigate("/DoctorForm");
  };

  // const [valueUser, setusername] = useState("");
  // const [valuePassword, setPassword] = useState("");

  // const [errors, setErrors] = useState({});

  // async function login() {
  //   let result = await fetch(
  //     'https://driverportalapi.adsdev.uk/1/Authentication',
  //     {
  //       method: "Post",
  //       mode: "cors",
  //       body: JSON.stringify({ valueUser, valuePassword }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   result = await result.json();
  //   console.log(result);
  //   if (result.response) {
  //     localStorage.setItem("result", JSON.stringify(result));

  //     navigate("/DoctorDashboard");
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) window.alert("Ok done");
  // };

  // const [user, setUser] = useState({});
  // const [pass, setPass] = useState({});

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   navigate("/DoctorDashboard");
  //   // console.log(errors);
  // };

  const [eye, setEye] = useState();

  const handleEye = () => {
    setEye(!eye);
  };

  const validation = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    navigate("/DocAccount");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Auth-form-content">
            <div className="container">
              <div className="inner-container">
                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl"
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
                  onClick={patLogin}
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

            <h3 className="Auth-form-title">Doctor Sign In</h3>

            <div className="form-group mt-3">
              <TextField
                type="text"
                name="email"
                className="form-control mt-1"
                placeholder="Enter Email Id"
                variant="standard"
                label="Email"
                {...register("email")}
                error={errors.email ? "is-invalid" : ""}
                helperText={errors.email?.message}
              />
              {/* <div className="invalid-feedback">{errors.userName?.message}</div> */}
            </div>

            <div className="form-group mt-3">
              <TextField
                type={eye ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                variant="standard"
                label="Password"
                autoComplete="current-password"
                {...register("password")}
                className={`form-control mt-1 ${
                  errors.password ? "is-invalid" : ""
                }`}
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
              <div className="invalid-feedback">{errors.password?.message}</div>
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
    );
  }
};
export default DoctorLogin;
