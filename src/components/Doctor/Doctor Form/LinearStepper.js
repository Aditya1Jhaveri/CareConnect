import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Card,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@mui/material/Grid'

import InputAdornment from '@mui/material/InputAdornment'
import FilledInput from '@mui/material/FilledInput'
import { useNavigate } from 'react-router-dom'
// import FormControl from '@mui/material/FormControl'
// import InputLabel from '@mui/material/InputLabel'
// import IconButton from '@mui/material/IconButton'
// import Visibility from '@mui/icons-material/Visibility'
// import VisibilityOff from '@mui/icons-material/VisibilityOff'

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}))

function getSteps() {
  return [
    'Doctor information',
    'Clinic Details',
    // 'Personal Information',
    'Set Password',
  ]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <form>
          <div>
            <TextField
              id="full-name"
              label="Full Name"
              variant="filled"
              placeholder="Enter Your Full Name"
              fullWidth
              margin="normal"
              name="firstName"
              type="text"
            />

            <TextField
              id="age"
              label="Age"
              variant="filled"
              placeholder="Enter Your Age"
              fullWidth
              margin="normal"
              name="age"
              type="number"
            />

            <Card style={{ marginTop: 10, marginBottom: 10 }}>
              <Grid
                container
                spacing={3}
                columns={16}
                marginTop={-0.5}
                marginBottom={0.5}
                marginLeft={1}
                paddingBottom={1}
              >
                <Grid item xs={8}>
                  <label>
                    <input name="gender" type="radio" value="Male" />
                    Male
                  </label>
                </Grid>

                <Grid item xs={8}>
                  <label>
                    <input name="gender" type="radio" value="Male" />
                    Female
                  </label>
                </Grid>
              </Grid>
            </Card>

            <TextField
              id="mobile no"
              label="Mobile No"
              variant="filled"
              placeholder="Enter Your Mobile No"
              fullWidth
              margin="normal"
              name="phoneNumber"
              type="number"
            />

            <TextField
              id="degree"
              label="Degree"
              variant="filled"
              placeholder="Enter Your Degree"
              fullWidth
              margin="normal"
              name="degree"
              type="text"
            />

            <TextField
              id="experience"
              label="Your Experience"
              variant="filled"
              placeholder="Enter Your Experience Years"
              fullWidth
              margin="normal"
              name="experience"
              type="text"
            />

            <TextField
              id="specialization"
              label="Your Specialization"
              variant="filled"
              placeholder="Enter Your Specialization"
              fullWidth
              margin="normal"
              name="specialization"
            />
          </div>
        </form>
      )

    case 1:
      return (
        <>
          <TextField
            id="clinic-name"
            label="Clinic Name"
            variant="filled"
            placeholder="Enter Your Clinic Name"
            fullWidth
            margin="normal"
            name="clinicname"
            type="text"
          />

          {/* <div className="mx-2 w-full flex-1"> */}

          <TextField
            id="clinic-number"
            label="Clinic Number"
            variant="filled"
            placeholder="Enter Your Clinic Lanline Number"
            fullWidth
            margin="normal"
            name="clinicnumber"
            type="number"
          />

          <TextField
            id="time-slot"
            label="TimmingSlot"
            variant="filled"
            placeholder="Enter Your Timming Slot"
            fullWidth
            margin="normal"
            name="timeslot"
            type="time"
          />

          <FilledInput
            id="clinic-fees"
            label="Clinic Fees"
            variant="filled"
            placeholder="Enter Your Clinic Charges"
            fullWidth
            margin="normal"
            name="clinicfees"
            style={{ margin: 10 }}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </>
      )
    // case 2:
    //   return (
    //     <>
    //       <TextField
    //         id="address1"
    //         label="Address 1"
    //         variant="outlined"
    //         placeholder="Enter Your Address 1"
    //         fullWidth
    //         margin="normal"
    //         name="address1"
    //       />
    //       <TextField
    //         id="address2"
    //         label="Address 2"
    //         variant="outlined"
    //         placeholder="Enter Your Address 2"
    //         fullWidth
    //         margin="normal"
    //         name="address2"
    //       />
    //       <TextField
    //         id="country"
    //         label="Country"
    //         variant="outlined"
    //         placeholder="Enter Your Country Name"
    //         fullWidth
    //         margin="normal"
    //         name="country"
    //       />
    //     </>
    //   )
    case 2:
      return (
        <>
          <TextField
            id="username"
            label="Set Username"
            variant="filled"
            placeholder="Enter Your Username"
            fullWidth
            margin="normal"
            name="username"
            type="text"
          />
          {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl> */}
          <TextField
            id="password"
            label="Set Password"
            variant="filled"
            placeholder="Enter Your Password"
            fullWidth
            margin="normal"
            type="password"
          />
          <TextField
            id="cpassword"
            label="Confirm Password"
            variant="filled"
            placeholder="ReEnter Your Password"
            fullWidth
            margin="normal"
            type="password"
          />
        </>
      )
    default:
      return 'unknown step'
  }
}

const LinaerStepper = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [skippedSteps, setSkippedSteps] = useState([])
  const steps = getSteps()

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep))
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const navigate = useNavigate()
  const todash = () => {
    navigate('/DoctorDashboard')
  }

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {}
          const stepProps = {}
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: 'block' }}
          //     >
          //       optional
          //     </Typography>
          //   )
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={todash}
          >
            Go To Dashboard
          </Button>
        </div>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </>
      )}
    </div>
  )
}

export default LinaerStepper
