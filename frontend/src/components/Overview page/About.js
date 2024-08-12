import React from "react";
import groupdoc from "../../images/Aboutus.jpg";
import "./About.css"; // Import your CSS file for additional styling
import { Card, Button } from "react-bootstrap";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={groupdoc} alt="About Us" />
      </div>

      <Card className="about-card">
        <Card.Body className="about-content">
          <h3 className="about-title">
            <b>About Care Connect</b>
          </h3>
          <p className="about-description">
            We are <b>Care Connect</b>, the #1 online Clinic Appointment system,
            connecting patients with expert doctors seamlessly.
          </p>
          <ul className="about-list">
            <li>
              Flexible booking settings for complete control over your schedule.
            </li>
            <li>
              Book appointments anywhere, anytime using our user-friendly
              platform.
            </li>
            <li>
              Connect with doctors instantly, share reports, and get
              prescriptions through our smartphone app.
            </li>
            <li>
              Search by City/Specialization/Doctor and receive appointment
              status updates via email/SMS.
            </li>
            <li>
              Trusted by over 200,000 customers for their appointment scheduling
              needs.
            </li>
          </ul>
          <p className="about-mission">
            Our mission is to revolutionize the healthcare experience by making
            it convenient and accessible for everyone. We understand the
            importance of timely medical care, and that's why we've designed
            Care Connect to be your reliable partner in managing your health.
          </p>
          <p>
            Whether you need to see a specialist or schedule a routine check-up,
            Care Connect simplifies the process, saving you time and ensuring
            you get the care you deserve.
          </p>
          <h4 className="about-why">Why Choose Care Connect?</h4>
          <ul className="about-why-list">
            <li>
              Expert Doctors: Access a network of highly qualified and
              experienced healthcare professionals.
            </li>
            <li>
              Convenient Booking: Schedule appointments from the comfort of your
              home or on-the-go.
            </li>
            <li>
              Secure Communication: Safely share medical reports and receive
              prescriptions online.
            </li>
            <li>
              Personalized Care: Receive tailored recommendations and reminders
              for follow-ups.
            </li>
            <li>
              24/7 Support: Our dedicated support team is available
              round-the-clock to assist you.
            </li>
          </ul>
          <Button
            variant="primary"
            href="/AppointmentForm"
            className="about-button"
          >
            Start Booking Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
