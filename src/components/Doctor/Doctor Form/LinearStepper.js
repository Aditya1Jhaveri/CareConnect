import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
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

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  medicalSchool: "",
  residencyProgram: "",
  yearsOfExperience: "",
  specialty: "",
  licenseNumber: "",
  gender: "",
  age: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  gender: Yup.string().required("Gender is required"),
  age: Yup.string().required("Age is required"),
  streetAddress: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip code is required"),
  medicalSchool: Yup.string().required("Medical school is required"),
  residencyProgram: Yup.string().required("Residency program is required"),
  yearsOfExperience: Yup.number()
    .min(0, "Years of experience must be a positive number")
    .required("Years of experience is required"),
  specialty: Yup.string().required("Specialty is required"),
  licenseNumber: Yup.string().required("License number is required"),
});

const steps = [
  "Personal Information",
  "Contact Information",
  "Medical Qualifications",
];

const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (values) => {
    setSubmitting(true);
    // Submit form data to backend API
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Doctor Registration Form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
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
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="firstName"
                      as={TextField}
                      label="First Name"
                      fullWidth
                      error={touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="lastName"
                      as={TextField}
                      label="Last Name"
                      fullWidth
                      error={touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="email"
                      as={TextField}
                      type="email"
                      label="Email"
                      fullWidth
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography component="legend">Gender</Typography>
                    <Field name="gender">
                      {({ field }) => (
                        <RadioGroup aria-label="gender" {...field}>
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
                      fullWidth
                      error={touched.age && !!errors.age}
                      helperText={touched.age && errors.age}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      name="phone"
                      as={TextField}
                      label="Phone Number"
                      fullWidth
                      error={touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
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
                      name="streetAddress"
                      as={TextField}
                      label="Street Address"
                      fullWidth
                      error={touched.streetAddress && !!errors.streetAddress}
                      helperText={touched.streetAddress && errors.streetAddress}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="city"
                      as={TextField}
                      label="City"
                      fullWidth
                      error={touched.city && !!errors.city}
                      helperText={touched.city && errors.city}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="state"
                      as={TextField}
                      label="State"
                      fullWidth
                      error={touched.state && !!errors.state}
                      helperText={touched.state && errors.state}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="zipCode"
                      as={TextField}
                      label="Zip Code"
                      fullWidth
                      error={touched.zipCode && !!errors.zipCode}
                      helperText={touched.zipCode && errors.zipCode}
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
                      name="medicalSchool"
                      as={TextField}
                      label="Medical School"
                      fullWidth
                      error={touched.medicalSchool && !!errors.medicalSchool}
                      helperText={touched.medicalSchool && errors.medicalSchool}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="residencyProgram"
                      as={TextField}
                      label="Residency Program"
                      fullWidth
                      error={
                        touched.residencyProgram && !!errors.residencyProgram
                      }
                      helperText={
                        touched.residencyProgram && errors.residencyProgram
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="yearsOfExperience"
                      as={TextField}
                      type="number"
                      label="Years of Experience"
                      fullWidth
                      error={
                        touched.yearsOfExperience && !!errors.yearsOfExperience
                      }
                      helperText={
                        touched.yearsOfExperience && errors.yearsOfExperience
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel id="specialty-label">Specialty</InputLabel>
                    <Field
                      name="specialty"
                      as={Select}
                      label="Specialty"
                      fullWidth
                      error={touched.specialty && !!errors.specialty}
                      helperText={touched.specialty && errors.specialty}
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
                  <Grid item xs={12}>
                    <Field
                      name="licenseNumber"
                      as={TextField}
                      label="License Number"
                      fullWidth
                      error={touched.licenseNumber && !!errors.licenseNumber}
                      helperText={touched.licenseNumber && errors.licenseNumber}
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
        )}
      </Formik>
    </>
  );
};

export default LinearStepper;
