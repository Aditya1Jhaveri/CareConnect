import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import "./Signup.css"
import axios from "axios";
import { FormControl, MenuItem, Select,InputLabel } from '@mui/material';
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { width } from "@mui/system";

const Signup = () => {
  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validation = Yup.object().shape({
    Firstname: Yup.string().required("Firstname is required"),

    Middlename: Yup.string().required("Middlename is required"),
    Lastname: Yup.string().required("Lastname is required"),

    // username: Yup.string()
    //   .required("Username is required")
    //   .min(6, "Username must be at least 6 characters")
    //   .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),

    // gender: Yup.string()
    //   .oneOf(["male", "female"], "Required")
    //   .required("Required"),
    // role: Yup.string().required("Role is required"),

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

  const paperStyle = { padding: "30px 20px", width: 500,innerHeight:100,outerHeight:100, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  // const [name, setName] = useState("")
  // const [middlename, setMiddlename] = useState("")
  // const [lastname, setLastname] = useState("")
  // const [currentValue, setCurrentValue] = useState("")
  // const [email, setEmail] = useState("")

  // const [number, setNumber] = useState("")

  // const [password, setPassword] = useState("")
//   var jsonData = {
//     "users": [
//         {
//             "firstname": name,
//             "middlename": middlename,
//             "lastname": lastname,
//             "role": currentValue,
//             "email": email,
//             "mobileNo":number ,
//             "password": password

//         }
//     ]
//   }
// console.log(jsonData);


const [user, setUser] = useState({
  firstname: "",
  middlename: "",
  lastname: "",
  role: "",
  email: "",
  mobileNo: "",
  password: "",
});

const { firstname, middlename, lastname,role,email,mobileNo,password } = user;

const onInputChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
};
console.log(user)
const onSubmit = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:9595/api/v1/user", user);
  navigate("/PatientLogin");
};
  return (
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
        <form onSubmit={(e) => onSubmit(e)}>
           <TextField
            type="text"
            name="Firstname"
            className="form-control mt-1"
            variant="standard"
            label="Firstname"
            placeholder="Enter your Firstname"
            onChange={(e) => onInputChange(e)}
            {...register("Firstname")}
            error={errors.Firstname ? "is-invalid" : ""}
            helperText={errors.Firstname?.message}
          />
           <TextField
            type="text"
            name="Middlename"
            className="form-control mt-1"
            variant="standard"
            label="Middlename"
            placeholder="Enter your Middlename"
            onChange={(e) => onInputChange(e)}

            {...register("Middlename")}
            error={errors.Middlename ? "is-invalid" : ""}
            helperText={errors.Middlename?.message}
          />
           <TextField
            type="text"
            name="Lastname"
            className="form-control mt-1"
            variant="standard"
            label="Lastname"
            placeholder="Enter your Lastname"
            onChange={(e) => onInputChange(e)}

            {...register("Lastname")}
            error={errors.Lastname ? "is-invalid" : ""}
            helperText={errors.Lastname?.message}
          />
          <TextField
            type="email"
            name="email"
            className="form-control mt-1"
            variant="standard"
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => onInputChange(e)}

            {...register("email")}
            error={errors.email ? "is-invalid" : ""}
            helperText={errors.email?.message}
          />
          <FormControl variant="standard" sx={{  minWidth: 460 }}>
        <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="role"
          value={FormData.role}
          onChange={(e) => onInputChange(e)}

          label="Role"
          width={460}
        > 
          <MenuItem value={"ROLE_PAT"}>Patient</MenuItem>
          <MenuItem value={"ROLE_DOC"}>Doctor</MenuItem>
          <MenuItem value={"ROLE_ADM"}>Admin</MenuItem>
        </Select>
      </FormControl>
          <TextField
            name="phonenumber"
            className="form-control mt-1"
            variant="standard"
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={(e) => onInputChange(e)}

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
            onChange={(e) => onInputChange(e)}

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
          /><br></br>
          <Button
            id="signup"
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
