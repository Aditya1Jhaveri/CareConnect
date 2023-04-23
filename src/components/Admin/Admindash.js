import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admindash.css";
import { TableContainer, Paper } from "@material-ui/core";
import Button from "@mui/material/Button";
import { Table } from "react-bootstrap";
import Adheader from "./Adheader";

const Admindash = () => {
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({
    toUser: "",
    subject: "Your Clinic has been Approved",
    message:
      "Dear Doctor,\n\n" +
      "I hope this message finds you well. This email is to inform you that your clinic has been added to my website from the admin.\n\n" +
      "As you may know, my website serves as a platform for people to find local healthcare providers and clinics. Adding your clinic to the website will enable patients in the area to easily locate and connect with you.\n\n" +
      "I would appreciate it if you could confirm that all the information about your clinic on my website is accurate and up-to-date. If there are any changes or updates that need to be made, please let me know as soon as possible so that I can make the necessary adjustments.\n\n" +
      "Thank you for your attention to this matter. I look forward to continuing to work with you to provide quality healthcare services to our community.\n\n" +
      "Best regards,\n" +
      "CareConnect",
  });

  useEffect(() => {
    axios
      .get("http://localhost:9595/api/v1/pendingclinic")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleApproval = (appointmentId) => {
    console.log(appointmentId);
    if (appointmentId) {
      axios
        .put(`http://localhost:9595/api/v1/updateclinic/${appointmentId}`)
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

  const adminsent = async (toUser) => {
    console.log("Sending email:", {
      toUser,
      subject: data.subject,
      message: data.message,
    });
    try {
      const response = await axios.post(
        "http://localhost:9595/api/v1/sendEmail",
        {
          toUser,
          subject: data.subject,
          message: data.message,
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
      <Adheader />
      <div className="adashboard">
        <div className="addashboardTableDetails">
          <div className="table-responsive" style={{ margin: 20 }}>
            <p>Approve Appointments</p>
            <TableContainer component={Paper}>
              <Table>
                <thead>
                  <tr>
                    <th align="left">Sr. No</th>
                    <th align="right">Name</th>
                    <th align="center">Gender</th>
                    <th align="center">Email</th>
                    <th align="center">Contact No</th>
                    <th align="left">Clinic Name</th>
                    <th align="center">Degree</th>
                    <th align="center">Aadhar no</th>
                    <th align="center">Speciallization</th>
                    <th align="center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((appoint) => (
                    <tr key={appoint._id}>
                      <td align="left" data-th="Sr. No">
                        {userData.indexOf(appoint) + 1}
                      </td>
                      {/* <td {...appoint.id}></td> */}
                      <td align="center" data-th="Name">
                        {"Dr " +
                          appoint.firstname +
                          " " +
                          appoint.middlename +
                          " " +
                          appoint.lastname}
                      </td>
                      <td align="center" data-th="Gender">
                        {appoint.gender}
                      </td>
                      <td align="left" data-th="Email">
                        {appoint.email}
                      </td>
                      <td align="center" data-th="Contact">
                        {appoint.mobileNo}
                      </td>
                      <td align="left" data-th="Clinic Name">
                        {appoint.clinic_name}
                      </td>
                      <td align="center" data-th="Degree">
                        {appoint.degree}
                      </td>

                      <td align="center" data-th="Aadhar no">
                        {appoint.adhar_no}
                      </td>
                      <td align="center" data-th="Speciallization">
                        {appoint.speciallization}
                      </td>
                      <td data-th="Status" align="center">
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => {
                            handleApproval(appoint.id);
                            adminsent(appoint.email);
                            window.location.reload();
                          }}
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
  );
};

export default Admindash;
