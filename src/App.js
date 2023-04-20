import "./App.css";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "./components/Overview page/OverviewPage";
import PatientDashboard from "./components/Patient/PatientDashboard";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import DprofilePage from "./components/Doctor/Doctor Sidebar/DocAccount";
import PprofilePage from "./components/Patient/PatAccount";
import Pendingappointment from "./components/Doctor/PendingAppointment";
import MyHistory from "./components/Patient/Patient Form/MyHistory";
import Admindash from "./components/Admin/Admindash";
import PrescriptionForm from "./components/Doctor/Doctor Form/PrescriptionForm";
import FilterPage from "./components/Patient/FilterPage";

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
        <Route path="/MyHistory" element={<MyHistory />} />
        <Route path="/Admindash" element={<Admindash />} />
        <Route path="/PrescriptionForm" element={<PrescriptionForm />} />
        <Route path="/FilterPage" element={<FilterPage />} />
      </Routes>
    </>
  );
}

export default App;
