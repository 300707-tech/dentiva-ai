import {
  Search,
  Users,
  Brain,
  Activity,
  ShieldAlert,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Stethoscope,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function Patients() {

  const navigate = useNavigate()

  const patients = [
    {
      id: 1,
      name: "Rafi Firaz",
      age: 21,
      condition: "Plaque Detection",
      risk: "Medium",
      doctor: "drg. Amanda",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "Amanda Lee",
      age: 19,
      condition: "Caries Analysis",
      risk: "Low",
      doctor: "drg. Michael",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "Michael Tan",
      age: 25,
      condition: "Gingivitis Risk",
      risk: "High",
      doctor: "drg. Sarah",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 4,
      name: "Celine Putri",
      age: 20,
      condition: "Oral Monitoring",
      risk: "Low",
      doctor: "drg. Amanda",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop",
    },
  ]

  return (

    <div className="min-h-screen bg-[#edf4ff] p-6 md:p-8">

      {/* BACKGROUND */}

      <div className="fixed inset-0 overflow-hidden">

        <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-300/30 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[340px] w-[340px] rounded-full bg-violet-300/30 blur-[130px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HERO */}

        <section
          className="
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-cyan-500
            via-blue-500
            to-violet-600
            p-8
            text-white
            shadow-2xl
          "
        >

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-3">

                <Users size={30} />

                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-100">
                  PasKoas AI Patients
                </p>

              </div>

              <h1 className="mt-6 text-[62px] font-black leading-[0.9] tracking-[-0.05em]">
                Patient
                <br />
                Management
              </h1>

              <p className="mt-6 max-w-2xl text-white/80">
                Monitoring pasien modern berbasis AI
                untuk dokter koas PasKoas dengan
                risk analysis dan oral health tracking.
              </p>

              <button
                onClick={() => navigate("/koas-dashboard")}
                className="
                  mt-8
                  rounded-2xl
                  bg-white
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-blue-600
                "
              >
                Back Dashboard
              </button>

            </div>

            {/* RIGHT */}

            <div className="grid gap-4">

              <div className="rounded-[30px] bg-white/15 p-6 backdrop-blur-2xl">

                <div className="flex items-center justify-between">

                  <p className="text-sm font-bold">
                    Total Patients
                  </p>

                  <Users />

                </div>

                <h2 className="mt-4 text-6xl font-black">
                  124
                </h2>

              </div>

              <div className="rounded-[30px] bg-white/15 p-6 backdrop-blur-2xl">

                <div className="flex items-center justify-between">

                  <p className="text-sm font-bold">
                    AI Monitoring
                  </p>

                  <Brain />

                </div>

                <h2 className="mt-4 text-6xl font-black">
                  ACTIVE
                </h2>

              </div>

            </div>

          </div>

        </section>

        {/* SEARCH */}

        <section
          className="
            mt-6
            rounded-[35px]
            bg-white
            p-5
            shadow-xl
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              px-5
              py-4
            "
          >

            <Search className="text-slate-400" />

            <input
              type="text"
              placeholder="Search patients..."
              className="
                w-full
                bg-transparent
                text-sm
                outline-none
              "
            />

          </div>

        </section>

        {/* PATIENTS GRID */}

        <section className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {patients.map((patient) => (

            <div
              key={patient.id}
              className="
                overflow-hidden
                rounded-[35px]
                bg-white
                shadow-xl
              "
            >

              {/* IMAGE */}

              <div className="relative h-[240px]">

                <img
                  src={patient.image}
                  alt={patient.name}
                  className="h-full w-full object-cover"
                />

                <div
                  className={`
                    absolute
                    left-4
                    top-4
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    backdrop-blur-xl
                    ${
                      patient.risk === "High"
                        ? "bg-rose-100/90 text-rose-600"
                        : patient.risk === "Medium"
                        ? "bg-yellow-100/90 text-yellow-700"
                        : "bg-emerald-100/90 text-emerald-600"
                    }
                  `}
                >

                  {patient.risk} Risk

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <div className="flex items-start justify-between">

                  <div>

                    <h2 className="text-2xl font-black">
                      {patient.name}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      {patient.age} years old
                    </p>

                  </div>

                  <div className="rounded-2xl bg-cyan-50 px-4 py-2">

                    <p className="text-xs font-bold text-cyan-600">
                      AI ACTIVE
                    </p>

                  </div>

                </div>

                {/* INFO */}

                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3">

                    <Activity
                      size={18}
                      className="text-cyan-500"
                    />

                    <p className="text-sm font-medium">
                      {patient.condition}
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <Stethoscope
                      size={18}
                      className="text-violet-500"
                    />

                    <p className="text-sm font-medium">
                      {patient.doctor}
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <Calendar
                      size={18}
                      className="text-emerald-500"
                    />

                    <p className="text-sm font-medium">
                      Last check: 2 days ago
                    </p>

                  </div>

                </div>

                {/* BUTTONS */}

                <div className="mt-8 grid grid-cols-2 gap-3">

                  <button
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-slate-900
                      py-3
                      text-sm
                      font-bold
                      text-white
                    "
                  >

                    <Phone size={16} />

                    Call

                  </button>

                  <button
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      border
                      border-slate-200
                      py-3
                      text-sm
                      font-bold
                    "
                  >

                    <Mail size={16} />

                    Message

                  </button>

                </div>

                {/* FOOTER */}

                <button
                  className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-cyan-500
                    py-3
                    text-sm
                    font-bold
                    text-white
                  "
                >

                  View Full Record

                  <ChevronRight size={16} />

                </button>

              </div>

            </div>

          ))}

        </section>

      </div>

    </div>
  )
}

export default Patients