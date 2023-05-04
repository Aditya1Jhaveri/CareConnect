import React from "react";
// import { useEffect } from 'react'
import { useState } from "react";
import { TableContainer, Paper, Select, MenuItem } from "@material-ui/core";
import { User } from "./User";
import { Table } from "react-bootstrap";
import DoctorSidebar from "./Doctor Sidebar/DoctorSidebar";

const DHistory = () => {
  // const [appointment, setAppointment] = useState([])
  const [action1, setAction1] = useState(null);
  const [key, setKey] = useState(null);

  // const pendingAppointment = appointment.filter(
  //   (pa) => pa.action1 === 'pending',
  // )
  // const todaysDate = new Date()
  // const day = todaysDate.getDate()
  // const month = todaysDate.getMonth()
  // const year = todaysDate.getFullYear()
  // const fullTodaysDate = month + 1 + '/' + day + '/' + year
  // const selectedDateAppointment = appointment.filter(
  //   (appointment) => appointment.details.date === fullTodaysDate,
  // )

  // const handleChange = (event) => {
  //     let action1 = event.target.value;
  //     const actions = { action1: action1, key };
  //     fetch("https://guarded-anchorage-08361.herokuapp.com/modifyAction1ByKey", {
  //         method: "post",
  //         headers: {
  //             "Content-type": "application/json"
  //         },
  //         body: JSON.stringify(actions)
  //     })
  //         .then(response => response.json())
  //         .then(data => {
  //             setAction1(data)
  //             console.log(data);
  //         })
  // }

  // useEffect(() => {
  //     fetch("https://guarded-anchorage-08361.herokuapp.com/appointment")
  //         .then(res => res.json())
  //         .then(data => {
  //             const fetchedData = data.reverse()
  //             setAppointment(fetchedData);
  //         });
  // }, [action1]);

  return (
    <div>
      <DoctorSidebar />
      <div className="dashboard">
        <div className="dashboardTable">
          {/* <div className="dashboardHeading">
            <div style={{ backgroundColor: "tomato" }}>
              <p>
                Pending
                <br />
                Appointments
              </p>
            </div>
            <div style={{ backgroundColor: "deepskyblue" }}>
           
              <p>
                Today's
                <br />
                Appointments
              </p>
            </div>
            <div style={{ backgroundColor: "mediumseagreen" }}>
              <h1>{User.length}</h1>
              <p>
                Total
                <br />
                Appointments
              </p>
            </div>
            <div style={{ backgroundColor: "orange" }}>
              <h1>{User.length}</h1>
              <p>
                Total
                <br />
                Patients
              </p>
            </div>
          </div> */}
          <div className="dashboardTableDetails">
            <div className="table-responsive">
              <p style={{ textAlign: "center", fontSize: 20 }}>
                Pass Appointments
              </p>
              <TableContainer component={Paper}>
                <Table>
                  <thead>
                    <tr style={{ fontSize: 15 }}>
                      <td align="left">
                        <b>SR. NO</b>
                      </td>
                      <td align="center">
                        <b>DATE</b>
                      </td>
                      <td align="center">
                        <b>TIME</b>
                      </td>
                      <td align="left">
                        <b>NAME</b>
                      </td>
                      <td align="center">
                        <b>CONTACT</b>
                      </td>
                      <td align="center">
                        <b>PRECRIPTION</b>
                      </td>
                      {/* <td align="center">Action</td> */}
                    </tr>
                  </thead>
                  <tbody>
                    {User.map((appoint) => (
                      <tr key={appoint._id}>
                        <td align="left" data-th="Sr. No">
                          {User.indexOf(appoint) + 1}
                        </td>
                        <td align="center" data-th="Date">
                          {appoint.date}
                        </td>
                        <td align="center" data-th="Time">
                          {appoint.time}
                        </td>
                        <td align="left" data-th="Name">
                          {appoint.name}
                        </td>
                        <td align="center" data-th="Contact">
                          {appoint.phoneNumber}
                        </td>
                        <td align="center" data-th="Prescription">
                          Not Added
                        </td>
                        {/* <td
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
                            <MenuItem value={"approved"}>Approved</MenuItem>
                          </Select>
                        </td> */}
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

export default DHistory;
