import { Routes, Route } from "react-router-dom";
import PatientDashboard from "./components/Patient/PatientDashboard";
import PprofilePage from "./components/Patient/PatAccount";
import AppointmentForm from "./components/Patient/AppointmentForm ";

function PatientRoute() {
  return (
    <>
      <Routes>
        <Route path="/PatientDashboard" element={<PatientDashboard />} />
        <Route path="/PatAccount" element={<PprofilePage />} />
        <Route path="/AppointmentForm" element={<AppointmentForm />} />
      </Routes>
    </>
  );
}

export default PatientRoute;
