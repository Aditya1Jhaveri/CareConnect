import "./App.css";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "./components/Overview page/OverviewPage";

import PatientDashboard from "./components/Patient/PatientDashboard";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import DprofilePage from "./components/Doctor/Doctor Sidebar/DocAccount";
import PprofilePage from "./components/Patient/PatAccount";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<OverviewPage />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/DocAccount" element={<DprofilePage />} />
        <Route path="/PatientDashboard" element={<PatientDashboard />} />
        <Route path="/PatAccount" element={<PprofilePage />} />
      </Routes>
    </>
  );
}

export default App;
