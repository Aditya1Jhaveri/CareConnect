import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Signup = () => {
  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validation = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),

    // username: Yup.string()
    //   .required("Username is required")
    //   .min(6, "Username must be at least 6 characters")
    //   .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),

    // gender: Yup.string()
    //   .oneOf(["male", "female"], "Required")
    //   .required("Required"),

    phonenumber: Yup.string()
      .typeError("Enter valid Phone Number")
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),

    confirmpassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),

    acceptterms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (patientData) => {
    console.log(patientData);
    navigate("/PatientLogin");
  };
  console.log(errors);

  const setUser = async () => {
    const result = await fetch("", {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(onSubmit),
    });
    const resultInJson = await result.json();
    console.log(resultInJson);
  };

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            {/* <AddCircleOutlineOutlinedIcon /> */}
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            name="fullname"
            className="form-control mt-1"
            variant="standard"
            label="Fullname"
            placeholder="Enter your FullName"
            {...register("fullname")}
            error={errors.fullname ? "is-invalid" : ""}
            helperText={errors.fullname?.message}
          />
          <TextField
            type="email"
            name="email"
            className="form-control mt-1"
            variant="standard"
            label="Email"
            placeholder="Enter your email"
            {...register("email")}
            error={errors.email ? "is-invalid" : ""}
            helperText={errors.email?.message}
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
              // {...register("gender")}
              // error={errors.gender ? "is-invalid" : ""}
              // helperText={errors.gender?.message}
            >
              <FormControlLabel
                name="gender"
                value="female"
                control={<Radio />}
                label="Female"
                // {...register("gender")}
                // error={errors.gender ? "is-invalid" : ""}
                // helperText={errors.gender?.message}
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            name="phonenumber"
            className="form-control mt-1"
            variant="standard"
            label="Phone Number"
            placeholder="Enter your phone number"
            {...register("phonenumber")}
            error={errors.phonenumber ? "is-invalid" : ""}
            helperText={errors.phonenumber?.message}
          />
          <TextField
            type="password"
            name="password"
            className="form-control mt-1"
            variant="standard"
            label="Password"
            placeholder="Enter your password"
            {...register("password")}
            error={errors.password ? "is-invalid" : ""}
            helperText={errors.password?.message}
          />
          <TextField
            type="password"
            name="confirmpassword"
            className="form-control mt-1"
            variant="standard"
            label="Confirm Password"
            placeholder="Confirm your password"
            {...register("confirmpassword")}
            error={errors.confirmpassword ? "is-invalid" : ""}
            helperText={errors.confirmpassword?.message}
          />
          <FormControlLabel
            name="acceptterms"
            type="checkbox"
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
            // {...register("acceptterms")}
            // error={errors.acceptterms ? "is-invalid" : ""}
            // helperText={errors.acceptterms?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={setUser}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
