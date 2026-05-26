import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import "./index.css"

import AOS from "aos"
import "aos/dist/aos.css"

/* PAGES */

import Home from "./pages/Home"
import GuideDetail from "./pages/GuideDetail"
import EditProfile from "./pages/EditProfile"
import Auth from "./pages/Auth"
import SelectRole from "./pages/SelectRole"

import PatientDashboard from "./pages/PatientDashboard"
import KoasDashboard from "./pages/KoasDashboard"

import AIScreening from "./pages/AIScreening"
import RekamMedis from "./pages/RekamMedis"
import DokterKoas from "./pages/DokterKoas"
import Patients from "./pages/Patients"
import Schedule from "./pages/Schedule"

/* AOS */

AOS.init({
  duration: 1200,
  once: true,
})

/* ROUTER */

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/auth",
    element: <Auth />,
  },

  {
    path: "/patient-dashboard",
    element: <PatientDashboard />,
  },

  {
    path: "/koas-dashboard",
    element: <KoasDashboard />,
  },

  {
    path: "/edit-profile",
    element: <EditProfile />,
  },

  {
    path: "/select-role",
    element: <SelectRole />,
  },

  {
    path: "/guide/:id",
    element: <GuideDetail />,
  },

  {
    path: "/ai-screening",
    element: <AIScreening />,
  },

  {
    path: "/rekam-medis",
    element: <RekamMedis />,
  },

  {
    path: "/dokter-koas",
    element: <DokterKoas />,
  },

  {
    path: "/patients",
    element: <Patients />,
  },

  {
    path: "/schedule",
    element: <Schedule />,
  }
])


/* RENDER */

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>

)