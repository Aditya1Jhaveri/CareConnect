import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Grid,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import axios from "axios";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const steps = [
  "Personal Information",
  "Contact Information",
  "Medical Qualifications",
];

const LinearStepper = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      mobileNo: "",
      street: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
      clinic_name: "",
      clinic_contact: "",
      type: "",
      degree: "",
      experience: "",
      speciallization: "",
      license_id: "",
      fees: "",
      adhar_no: "",
      gender: "",
      age: "",
      status: "STATUS_PENDING",
      descryption: "abcdf",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      middleName: Yup.string().required("Middle name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mobileNo: Yup.string().required("Phone number is required"),
      gender: Yup.string().required("Gender is required"),
      age: Yup.string().required("Age is required"),
      street: Yup.string().required("Street address is required"),
      city: Yup.string().required("City is required"),
      district: Yup.string().required("District is required"),
      state: Yup.string().required("State is required"),
      pincode: Yup.string().required("Pin code is required"),
      clinic_name: Yup.string().required("Clinic Name is required"),
      clinic_contact: Yup.string().required("Clinic contact is required"),
      type: Yup.string().required("Residency program is required"),
      degree: Yup.string().required("Degree is required"),
      experience: Yup.number()
        .min(0, "Years of experience must be a positive number")
        .required("Years of experience is required"),
      speciallization: Yup.string().required("Specialty is required"),
      license_id: Yup.string().required("License number is required"),
      fees: Yup.string().required("required"),
      adhar_no: Yup.string().required("required"),
    }),

    onSubmit: (values) => {
      console.log("Form data:", values);
      setSubmitting(true);
      axios
        .post("http://localhost:9595/api/v1/clinic", {
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
          email: values.email,
          gender: values.gender,
          age: values.age,
          mobileNo: values.mobileNo,
          street: values.street,
          city: values.city,
          district: values.district,
          state: values.state,
          pincode: values.pincode,
          clinic_name: values.clinic_name,
          clinic_contact: values.clinic_contact,
          type: values.type,
          degree: values.degree,
          experience: values.experience,
          speciallization: values.speciallization,
          license_id: values.license_id,
          fees: values.fees,
          adhar_no: values.adhar_no,
          status: values.status,
          descryption: values.descryption,
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
      setSubmitting(false);
    },
  });
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Doctor Registration Form
      </Typography>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <ToastContainer />
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 && (
            <>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Field
                    name="firstName"
                    as={TextField}
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.firstName && formik.errors.firstName}
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field
                    name="middleName"
                    as={TextField}
                    label="Middle Name"
                    value={formik.values.middleName}
                    onChange={formik.handleChange}
                    fullWidth
                    error={
                      formik.touched.middleName && formik.errors.middleName
                    }
                    helperText={
                      formik.touched.middleName && formik.errors.middleName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field
                    name="lastName"
                    as={TextField}
                    label="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.lastName && formik.errors.lastName}
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="email"
                    as={TextField}
                    type="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.email && formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography component="legend">Gender</Typography>
                  <Field name="gender">
                    {({ field }) => (
                      <RadioGroup
                        aria-label="gender"
                        {...field}
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        fullWidth
                        error={formik.touched.gender && formik.errors.gender}
                        helperText={
                          formik.touched.gender && formik.errors.gender
                        }
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                      </RadioGroup>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="age"
                    as={TextField}
                    label="Age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.age && formik.errors.age}
                    helperText={formik.touched.age && formik.errors.age}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    name="mobileNo"
                    as={TextField}
                    label="Phone Number"
                    value={formik.values.mobileNo}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.mobileNo && formik.errors.mobileNo}
                    helperText={
                      formik.touched.mobileNo && formik.errors.mobileNo
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    name="street"
                    as={TextField}
                    label="Street Address"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.street && formik.errors.street}
                    helperText={formik.touched.street && formik.errors.street}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="district"
                    as={TextField}
                    label="District"
                    value={formik.values.district}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.district && formik.errors.district}
                    helperText={
                      formik.touched.district && formik.errors.district
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="city"
                    as={TextField}
                    label="City"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.city && formik.errors.city}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="state"
                    as={TextField}
                    label="State"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.state && formik.errors.state}
                    helperText={formik.touched.state && formik.errors.state}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="pincode"
                    as={TextField}
                    label="Pin Code"
                    value={formik.values.pincode}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.pincode && formik.errors.pincode}
                    helperText={formik.touched.pincode && formik.errors.pincode}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Typography variant="h6" gutterBottom>
                Medical Qualifications
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    name="clinic_name"
                    as={TextField}
                    label="Clinic Name"
                    value={formik.values.clinic_name}
                    onChange={formik.handleChange}
                    fullWidth
                    error={
                      formik.touched.clinic_name && formik.errors.clinic_name
                    }
                    helperText={
                      formik.touched.clinic_name && formik.errors.clinic_name
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="clinic_contact"
                    as={TextField}
                    label="Clinic contact no"
                    value={formik.values.clinic_contact}
                    onChange={formik.handleChange}
                    fullWidth
                    error={
                      formik.touched.clinic_contact &&
                      formik.errors.clinic_contact
                    }
                    helperText={
                      formik.touched.clinic_contact &&
                      formik.errors.clinic_contact
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="type"
                    as={TextField}
                    label="Residency Program"
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.type && formik.errors.type}
                    helperText={formik.touched.type && formik.errors.type}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="degree"
                    as={TextField}
                    label="Degree"
                    value={formik.values.degree}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.degree && formik.errors.degree}
                    helperText={formik.touched.degree && formik.errors.degree}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="experience"
                    as={TextField}
                    type="number"
                    label="Years of Experience"
                    value={formik.values.experience}
                    onChange={formik.handleChange}
                    fullWidth
                    error={
                      formik.touched.experience && formik.errors.experience
                    }
                    helperText={
                      formik.touched.experience && formik.errors.experience
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="specialty-label">Specialty</InputLabel>
                  <Field
                    name="speciallization"
                    as={Select}
                    label="Specialty"
                    value={formik.values.speciallization}
                    onChange={formik.handleChange}
                    fullWidth
                    error={
                      formik.touched.speciallization &&
                      formik.errors.speciallization
                    }
                    helperText={
                      formik.touched.speciallization &&
                      formik.errors.speciallization
                    }
                  >
                    <MenuItem value="" disabled>
                      Select Specialty
                    </MenuItem>
                    <MenuItem value="cardiology">Cardiology</MenuItem>
                    <MenuItem value="dermatology">Dermatology</MenuItem>
                    <MenuItem value="endocrinology">Endocrinology</MenuItem>
                    <MenuItem value="gastroenterology">
                      Gastroenterology
                    </MenuItem>
                    <MenuItem value="neurology">Neurology</MenuItem>
                    <MenuItem value="oncology">Oncology</MenuItem>
                    <MenuItem value="orthopedics">Orthopedics</MenuItem>
                    <MenuItem value="pediatrics">Pediatrics</MenuItem>
                    <MenuItem value="psychiatry">Psychiatry</MenuItem>
                    <MenuItem value="urology">Urology</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="license_id"
                    as={TextField}
                    label="License Number"
                    value={formik.values.license_id}
                    onChange={formik.handleChange}
                    fullWidth
                    error={
                      formik.touched.license_id && formik.errors.license_id
                    }
                    helperText={
                      formik.touched.license_id && formik.errors.license_id
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="adhar_no"
                    as={TextField}
                    type="number"
                    label="Aadhar No"
                    value={formik.values.adhar_no}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.adhar_no && formik.errors.adhar_no}
                    helperText={
                      formik.touched.adhar_no && formik.errors.adhar_no
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="fees"
                    as={TextField}
                    type="number"
                    label="Visit Charges"
                    value={formik.values.fees}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.fees && formik.errors.fees}
                    helperText={formik.touched.fees && formik.errors.fees}
                  />
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

                <input
                  style={{ display: "none" }}
                  disabled
                  name="descryption"
                  value={formik.values.descryption}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.descryption &&
                    Boolean(formik.errors.descryption)
                  }
                  helperText={
                    formik.touched.descryption && formik.errors.descryption
                  }
                ></input>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? <CircularProgress size={24} /> : "Submit"}
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default LinearStepper;
