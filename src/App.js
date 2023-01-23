import './App.css'
import { Routes, Route } from 'react-router-dom'
import OverviewPage from './components/Overview page/OverviewPage'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<OverviewPage />} />
      </Routes>
    </>
  )
}

export default App
