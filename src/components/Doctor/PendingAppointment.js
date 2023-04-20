import React, { useState, useEffect } from "react";
import "./pendappointment.css";
import axios from "axios";
import { TableContainer, Paper, Select, MenuItem } from "@material-ui/core";
import { Table } from "react-bootstrap";
import DoctorSidebar from "./Doctor Sidebar/DoctorSidebar";

const Pendingappointment = () => {
  const [key, setKey] = useState(null);
  const [userPendata, setuserPendata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9595/api/v1/pendingcbooking")
      .then((response) => {
        console.log(response.data);
        setuserPendata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleApproval = (appointmentId) => {
    console.log(appointmentId);
    if (appointmentId) {
      axios
        .put(`http://localhost:9595/api/v1/updatebooking/${appointmentId}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Invalid appointment ID");
    }
  };

  return (
    <div>
      <DoctorSidebar />
      <div className="dashboard">
        <div className="dashboardTableDetails">
          <div className="table-responsive" style={{ margin: 20 }}>
            <p>Pending Appointments</p>
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
                    <th align="center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userPendata.map((appoint) => (
                    <tr key={appoint._id}>
                      <td align="left" data-th="Sr. No">
                        {userPendata.indexOf(appoint) + 1}
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
                      <td
                        data-th="Action"
                        onMouseOver={() => setKey(appoint.key)}
                        align="center"
                      >
                        <Select
                          style={{ color: "white" }}
                          className="actionSelect"
                          value={appoint.action1}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          // onChange={handleChange}
                        >
                          <MenuItem>
                            <em>Pending</em>
                          </MenuItem>
                          <MenuItem
                            value={"approved"}
                            onClick={() => {
                              handleApproval(appoint.id);
                              window.location.reload();
                            }}
                          >
                            Approved
                          </MenuItem>
                        </Select>
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
  );
};

export default Pendingappointment;
