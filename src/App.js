import './App.css'
import { Routes, Route } from 'react-router-dom'
import OverviewPage from './components/Overview page/OverviewPage'
import DoctorDashboard from './components/Doctor/DoctorDashboard'
import PatientDashboard from './components/Patient/PatientDashboard'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<OverviewPage />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/PatientDashboard" element={<PatientDashboard />} />
      </Routes>
    </>
  )
}

export default App
