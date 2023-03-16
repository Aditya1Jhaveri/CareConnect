import "./App.css";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "./components/Overview page/OverviewPage";

import PatientDashboard from "./components/Patient/PatientDashboard";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import DprofilePage from "./components/Doctor/Doctor Sidebar/DocAccount";
import PprofilePage from "./components/Patient/PatAccount";
import Pendingappointment from "./components/Doctor/PendingAppointment";
import AppointmentForm from "./components/Patient/AppointmentForm ";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<OverviewPage />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/PendingAppointment" element={<Pendingappointment />} />
        <Route path="/DocAccount" element={<DprofilePage />} />
        <Route path="/PatientDashboard" element={<PatientDashboard />} />
        <Route path="/PatAccount" element={<PprofilePage />} />
        <Route path="/AppointmentForm" element={<AppointmentForm />} />
      </Routes>
    </>
  );
}

export default App;
