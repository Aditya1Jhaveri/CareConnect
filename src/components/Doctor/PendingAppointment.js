import React, { useState, useEffect } from "react";
import "./pendappointment.css";
import axios from "axios";
import { TableContainer, Paper, Select, MenuItem } from "@material-ui/core";
import { Table } from "react-bootstrap";
import DoctorSidebar from "./Doctor Sidebar/DoctorSidebar";

const Pendingappointment = () => {
  const [key, setKey] = useState(null);
  const [userPendata, setuserPendata] = useState([]);
  const [data, setData] = useState({
    toUser: "",
    subject: "Your appointment has been scheduled",
    message:
      "Dear [Patient],\n" +
      "I am writing to confirm that your appointment has been successfully booked at our clinic. We look forward to seeing you on [Date] at [Time] for your scheduled visit.\n" +
      "Please be sure to bring any necessary medical records or documentation with you to your appointment, and arrive a few minutes early to allow for check-in and paperwork.\n" +
      "If you have any questions or concerns before your appointment, please don't hesitate to contact us. We are here to support you and ensure that you receive the best possible care.\n" +
      "Thank you for choosing our clinic for your healthcare needs. We are honored to have the opportunity to serve you.\n" +
      "Best regards," +
      "[Your Name]" +
      "[Your Title]" +
      " [Name of Clinic]",
    patientname: "",
    time: "",
    date: "",
  });

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

  const bookappointsent = async (toUser, patientname, time, date) => {
    console.log("Sending email:", {
      toUser,
      subject: data.subject,
      message:
        "Dear " +
        patientname +
        ",\n\n" +
        "I am writing to confirm that your appointment has been successfully booked at our clinic. We look forward to seeing you on" +
        date +
        "at" +
        time +
        "for your scheduled visit.\n\n" +
        "Please be sure to bring any necessary medical records or documentation with you to your appointment.\n\n" +
        "If you have any questions or concerns before your appointment, please don't hesitate to contact us. We are here to support you and ensure that you receive the best possible care.\n\n" +
        "Thank you for choosing our clinic for your healthcare needs. We are honored to have the opportunity to serve you.\n\n" +
        "Best regards," +
        "CareConnect",
    });
    try {
      const response = await axios.post(
        "http://localhost:9595/api/v1/sendEmail",
        {
          toUser,
          subject: data.subject,
          message:
            "Dear " +
            patientname +
            ",\n\n" +
            "This email is to confirm that your appointment has been successfully booked at our clinic. We look forward to seeing you on " +
            date +
            " at " +
            time +
            " for your scheduled visit.\n\n" +
            "Please be sure to bring any necessary medical records or documentation with you to your appointment. If you have any questions or concerns before your appointment, please don't hesitate to contact us. We are here to support you and ensure that you receive the best possible care.\n\n" +
            "Thank you for choosing our clinic for your healthcare needs. We are honored to have the opportunity to serve you.\n\n" +
            "Best regards,\n" +
            "CareConnect",
        }
      );
      console.log("Email sent:", response.data);
      setData({
        toUser: "",
        subject: data.subject,
        message: data.message,
      });
    } catch (error) {
      console.error("Error sending email:", error);
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
                              bookappointsent(
                                appoint.email,
                                appoint.patientname,
                                appoint.time,
                                appoint.date
                              );
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
