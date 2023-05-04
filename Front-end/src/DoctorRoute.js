import { Routes, Route } from "react-router-dom";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import DprofilePage from "./components/Doctor/Doctor Sidebar/DocAccount";
import Pendingappointment from "./components/Doctor/PendingAppointment";

function DoctorRoute() {
  return (
    <>
      <Routes>
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/PendingAppointment" element={<Pendingappointment />} />
        <Route path="/DocAccount" element={<DprofilePage />} />
      </Routes>
    </>
  );
}

export default DoctorRoute;
