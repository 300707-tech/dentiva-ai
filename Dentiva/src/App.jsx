import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Auth from "./pages/Auth"
import PatientDashboard from "./pages/PatientDashboard"
import AIScreening from "./pages/AIScreening"
import RekamMedis from "./pages/RekamMedis"
import DokterKoas from "./pages/DokterKoas"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* AUTH */}
        <Route
          path="/auth"
          element={<Auth />}
        />

        {/* DASHBOARD */}
        <Route
          path="/patient-dashboard"
          element={<PatientDashboard />}
        />

        {/* AI SCREENING */}
        <Route
          path="/ai-screening"
          element={<AIScreening />}
        />

        {/* REKAM MEDIS */}
        <Route
          path="/rekam-medis"
          element={<RekamMedis />}
        />

        {/* DOKTER KOAS */}
        <Route
          path="/dokter-koas"
          element={<DokterKoas />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App