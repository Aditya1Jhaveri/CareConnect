import React from "react";
import groupdoc from "../../images/Aboutus.jpg";
import "./About.css";
import { Card } from "react-bootstrap";
// import { WidthFull } from "@mui/icons-material";
import Footer from "./Footer/Footer";

export const About = () => {
  return (
    <div>
      {/* <div className="about">
      <img src={groupdoc} alt=""/>
      </div> */}

      {/* <Card.Body style={{ textAlign: 'center' }}>
        <Card.Text>
          We are an Online Clinic Appointment System which is designed to bring patients closer to doctors and empower them with a simple but powerful technological device - the smartphone 
          These apps can help patients connect with doctors instantly, share reports and get prescriptions from doctor and Patients can book Appointment from therir home easily from therir Smartphones with the use of our App.
          Patient can book the appointment from there home by picking up the date and timmingh slots from there Mobile Phones 
          A patient can quickly locate the nearest doctor in his/her locality and book an appointment for a direct consultation.

         He/She can:

         Search by City/Specialization/Doctor to view the doctor details and book an appointment online
         Get notified with appointment status updates (Booking/Rescheduling/Cancellations) by eMail/SMS.
       </Card.Text>
      </Card.Body> */}

      <div>
        <Card
          style={{
            width: "110rem",
            border: "none",
            boxShadow: "5px 5px 5px lightgrey",
            // height:  '50rem'
          }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <img src={groupdoc} alt="" width={1000} />
            <h3>
              <b>About Care Connect</b>
            </h3>
            <li>
              We are <b>Care Connect</b> #1 online Clinic Appointment system.
            </li>
            <li>
              Flexible booking settings allow you to have complete control over
              your schedule.
            </li>
            <li>You can Boook the Appointment Anywhere You are.</li>
            <li>
              We are an Online Clinic Appointment System which is designed to
              bring patiens closer to doctors and empower them with a simple but
              powerful technological device - the smartphone These apps can help
              patients connect with doctors instantly, share reports and get
              prescriptions from doctor and Patients can book Appointment from
              therir home easily from therir Smartphones with the use of our
              App. Patient can book the appointment from there home by picking
              up the date and timmingh slots from there Mobile Phones A patient
              can quickly locate the nearest doctor in his/her locality and book
              an appointment for a direct consultation.He/She can: Search by
              City/Specialization/Doctor to view the doctor details and book an
              appointment online Get notified with appointment status updates
              (Booking/Rescheduling/Cancellations) by eMail/SMS. Discover the
              easiest way to schedule appointments with the #1 online Clinic
              Appointment system Save time spent on coordinating appointments
              over phone and email with an all-in-one appointment booking
              software.
            </li>
            <li>
              200,000+ customers trust <b>Care Connect</b> for their appointment
              scheduling needs
            </li>
            <li>Your peace of mind is our top priority!</li>
          </Card.Body>
        </Card>
      </div>

      <Footer></Footer>
    </div>
  );
};
