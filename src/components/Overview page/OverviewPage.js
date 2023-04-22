import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import NavBar from "./NavBar";
import PatientLogin from "../Login Form/PatientLogin";
import DoctorLogin from "../Login Form/DoctorLogin";
import DoctorForm from "../Doctor/Doctor Form/DoctorForm";
import Signup from "../Signup";
import { AdminLogin } from "../Login Form/AdminLogin";
import AppointmentForm from "../Patient/AppointmentForm ";
import FilterPage from "../Patient/FilterPage";

export default function OverviewPage() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DoctorLogin" element={<DoctorLogin />} />
        <Route path="/PatientLogin" element={<PatientLogin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/DoctorForm" element={<DoctorForm />} />
        <Route path="/FilterPage" element={<FilterPage />} />
        <Route path="/AppointmentForm" element={<AppointmentForm />} />
      </Routes>
    </>
  );
}
