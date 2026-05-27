import {
  Calendar,
  Clock3,
  Video,
  Plus,
  ChevronRight,
  CheckCircle2,
  Stethoscope,
  ArrowLeft,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function Schedule() {

  const navigate = useNavigate()

  const schedules = [
    {
      id: 1,
      patient: "Rafi Firaz",
      date: "12 June 2026",
      time: "09:00 AM",
      type: "Video Consultation",
      status: "Upcoming",
    },

    {
      id: 2,
      patient: "Amanda Putri",
      date: "12 June 2026",
      time: "11:30 AM",
      type: "AI Monitoring Review",
      status: "Completed",
    },

    {
      id: 3,
      patient: "Michael Wijaya",
      date: "13 June 2026",
      time: "02:00 PM",
      type: "Emergency Consultation",
      status: "Upcoming",
    },
  ]

  return (

    <div className="min-h-screen bg-[#edf4ff] p-6 md:p-8 text-slate-900">

      {/* BG */}

      <div className="fixed inset-0 overflow-hidden">

        <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-300/30 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-violet-300/30 blur-[130px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOPBAR */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => navigate("/koas-dashboard")}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow-lg
                "
              >
                <ArrowLeft size={18} />
              </button>

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
                  PasKoas Schedule
                </p>

                <h1 className="mt-1 text-5xl font-black tracking-[-0.04em]">
                  Consultation Schedule
                </h1>

              </div>

            </div>

          </div>

          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              px-6
              py-4
              text-sm
              font-bold
              text-white
              shadow-xl
            "
          >

            <Plus size={18} />

            Add Schedule

          </button>

        </div>

        {/* STATS */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-[32px] bg-white p-6 shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
              <Calendar />
            </div>

            <h2 className="mt-5 text-5xl font-black">
              18
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Total Schedules
            </p>

          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
              <Clock3 />
            </div>

            <h2 className="mt-5 text-5xl font-black">
              6
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Today Sessions
            </p>

          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <CheckCircle2 />
            </div>

            <h2 className="mt-5 text-5xl font-black">
              92%
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Completion Rate
            </p>

          </div>

        </div>

        {/* MAIN */}

        <div className="mt-8 rounded-[40px] bg-white p-6 shadow-2xl">

          <div className="flex items-center gap-3">

            <Stethoscope className="text-cyan-500" />

            <h2 className="text-3xl font-black">
              Upcoming Consultations
            </h2>

          </div>

          <div className="mt-8 space-y-5">

            {schedules.map((item) => (

              <div
                key={item.id}
                className="
                  flex
                  flex-col
                  gap-5
                  rounded-[30px]
                  border
                  border-slate-100
                  p-6
                  transition-all
                  hover:shadow-xl
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >

                <div className="flex items-center gap-5">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      from-cyan-500
                      to-blue-500
                      text-white
                    "
                  >
                    <Video size={26} />
                  </div>

                  <div>

                    <h3 className="text-2xl font-black">
                      {item.patient}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.type}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">

                      <div className="flex items-center gap-2">

                        <Calendar size={16} />

                        {item.date}

                      </div>

                      <div className="flex items-center gap-2">

                        <Clock3 size={16} />

                        {item.time}

                      </div>

                    </div>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-bold
                      ${
                        item.status === "Completed"
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-cyan-100 text-cyan-700"
                      }
                    `}
                  >

                    {item.status}

                  </div>

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-2xl
                      bg-slate-900
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                    "
                  >

                    Open

                    <ChevronRight size={16} />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Schedule