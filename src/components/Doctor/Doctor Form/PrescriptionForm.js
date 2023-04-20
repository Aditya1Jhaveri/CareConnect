import React, { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, InputLabel, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const PrescriptionForm = () => {
  const classes = useStyles();

  const [drugName, setDrugName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [route, setRoute] = useState("");
  const [drugList, setDrugList] = useState([]);
  const [patientList, setPatientList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const drugResponse = await axios.get("/api/drugs");
        const patientResponse = await axios.get("/api/patients");
        setDrugList(drugResponse.data);
        setPatientList(patientResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDrugNameChange = (event, value) => {
    setDrugName(value?.name || "");
    setRoute(value?.route || "");
  };

  const handleDosageChange = (event) => {
    setDosage(event.target.value);
  };

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/prescriptions", {
        drugName,
        dosage,
        frequency,
        route,
        patientId: selectedPatient,
      });
      setDrugName("");
      setDosage("");
      setFrequency("");
      setRoute("");
      setSelectedPatient("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        E-Prescription Form
      </Typography>
      {isLoading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  freeSolo
                  options={drugList}
                  getOptionLabel={(option) => option.name}
                  onChange={handleDrugNameChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Drug Name"
                      variant="outlined"
                      required
                      fullWidth
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {isLoading ? (
                              <Typography variant="body1">
                                Loading...
                              </Typography>
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Dosage"
                  variant="outlined"
                  type="text"
                  value={dosage}
                  onChange={handleDosageChange}
                  required
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">mg</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel id="frequency-label">Frequency</InputLabel>
                  <Select
                    labelId="frequency-label"
                    id="frequency"
                    value={frequency}
                    onChange={handleFrequencyChange}
                    label="Frequency"
                  >
                    <MenuItem value="once">Once a day</MenuItem>
                    <MenuItem value="twice">Twice a day</MenuItem>
                    <MenuItem value="three">Three times a day</MenuItem>
                    <MenuItem value="four">Four times a day</MenuItem>
                    <MenuItem value="five">Five times a day</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Route"
                  variant="outlined"
                  type="text"
                  value={route}
                  required
                  disabled
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">{route}</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel id="patient-label">Patient</InputLabel>
                  <Select
                    labelId="patient-label"
                    id="patient"
                    value={selectedPatient}
                    onChange={handlePatientChange}
                    label="Patient"
                  >
                    {patientList.map((patient) => (
                      <MenuItem key={patient.id} value={patient.id}>
                        {patient.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      )}
    </div>
  );
};

export default PrescriptionForm;
