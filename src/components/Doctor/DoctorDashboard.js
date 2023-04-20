import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { TableContainer, Paper, Select, MenuItem } from "@material-ui/core";
import Button from "@mui/material/Button";
import { Table } from "react-bootstrap";
import DoctorSidebar from "./Doctor Sidebar/DoctorSidebar";

const DoctorDashboard = (props) => {
  const [action1, setAction1] = useState(null);
  const [key, setKey] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9595/api/v1/approvedbooking")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <DoctorSidebar />
      <div className="dashboard">
        <div className="docdashboardTable">
          <div className="docdashboardHeading">
            <div style={{ backgroundColor: "tomato" }}>
              {/* <h1>{userData.length}</h1> */}
              <p>
                Pending
                <br />
                Appointments
              </p>
            </div>
            <div style={{ backgroundColor: "deepskyblue" }}>
              {/* <h1>{selectedDateAppointment.length}</h1> */}
              <p>
                Today's
                <br />
                Appointments
              </p>
            </div>
            <div style={{ backgroundColor: "mediumseagreen" }}>
              <h1>{userData.length}</h1>
              <p>
                Total
                <br />
                Appointments
              </p>
            </div>
            <div style={{ backgroundColor: "orange" }}>
              <h1>{userData.length}</h1>
              <p>
                Total
                <br />
                Patients
              </p>
            </div>
          </div>
          <div className="docdashboardTableDetails">
            <div className="table-responsive" style={{ margin: 20 }}>
              <p>Recent Appointments</p>
              <TableContainer component={Paper}>
                <Table>
                  <thead>
                    <tr>
                      <th align="left">Sr. No</th>
                      <th align="center">Patient Name</th>
                      <th align="center">Age</th>
                      <th align="left">Email</th>
                      <th align="center">Contact No</th>
                      <th align="center">Weight</th>
                      <th align="center">City</th>
                      <th align="center">Symptons</th>
                      <th align="center">Time</th>
                      <th align="center">Date</th>
                      <th align="center">Prescription</th>
                      <th align="center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((appoint) => (
                      <tr key={appoint._id}>
                        <td align="left" data-th="Sr. No">
                          {userData.indexOf(appoint) + 1}
                        </td>
                        <td align="center" data-th="Patient Name">
                          {appoint.patientname}
                        </td>
                        <td align="center" data-th="Age">
                          {appoint.age}
                        </td>
                        <td align="left" data-th="Email">
                          {appoint.email}
                        </td>
                        <td align="center" data-th="Contact No">
                          {appoint.mobileNo}
                        </td>
                        <td align="center" data-th="Weight">
                          {appoint.weight}
                        </td>
                        <td align="center" data-th="City">
                          {appoint.city}
                        </td>
                        <td align="center" data-th="Symptons">
                          {appoint.symtoms}
                        </td>
                        <td align="center" data-th="Time">
                          {appoint.time}
                        </td>
                        <td align="center" data-th="Date">
                          {appoint.date}
                        </td>
                        <td align="center" data-th="Prescription">
                          Not Added
                        </td>
                        <td
                          data-th="Action"
                          onMouseOver={() => setKey(appoint.key)}
                          align="center"
                        >
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => {}}
                          >
                            Approved
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
