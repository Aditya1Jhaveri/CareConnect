import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import { About } from './About'
import { Contact } from './Contact'
import NavBar from './NavBar'
import PatientLogin from '../Login Form/PatientLogin'
import DoctorLogin from '../Login Form/DoctorLogin'

export default function OverviewPage() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PatientLogin" element={<PatientLogin />} />
        <Route path="/DoctorLogin" element={<DoctorLogin />} />
      </Routes>
    </>
  )
}
