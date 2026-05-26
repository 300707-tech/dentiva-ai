import {
  LayoutDashboard,
  Users,
  Calendar,
  Brain,
  Bell,
  LogOut,
  Stethoscope,
  ShieldCheck,
  ClipboardList,
  Video,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function KoasDashboard() {

  const navigate = useNavigate()

  const patients = [
    {
      id: 1,
      name: "Rafi Firaz Al-Rasyid",
      condition: "Plaque Detection",
      status: "Urgent",
    },

  ]

  return (

    <div className="min-h-screen bg-[#edf4ff] text-slate-900">

      {/* BACKGROUND */}

      <div className="fixed inset-0 overflow-hidden">

        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-300/30 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[350px] w-[350px] rounded-full bg-violet-300/30 blur-[130px]" />

      </div>

      <div className="relative z-10 flex">

        {/* SIDEBAR */}

        <aside
          className="
            hidden
            xl:flex
            min-h-screen
            w-[280px]
            flex-col
            border-r
            border-white/50
            bg-white/60
            backdrop-blur-3xl
          "
        >

          {/* LOGO */}

          <div className="border-b border-slate-200 px-7 py-7">

            <img
              src="/images/logo.png"
              alt="Dentiva"
              className="w-[170px]"
            />

          </div>

          {/* NAVIGATION */}

          <div className="flex-1 px-5 py-7">

            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Koas Navigation
            </p>

            <div className="space-y-2">

              {/* DASHBOARD */}

              <button
                onClick={() => navigate("/koas-dashboard")}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  px-4
                  py-3.5
                  text-white
                "
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                  <LayoutDashboard size={18} />
                </div>

                <div className="text-left">

                  <p className="text-sm font-bold">
                    Dashboard
                  </p>

                  <p className="text-[11px] text-cyan-100">
                    Koas overview
                  </p>

                </div>

              </button>

              {/* PATIENTS */}

              <button
                onClick={() => navigate("/patients")}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  py-3.5
                  transition-all
                  hover:bg-white/80
                "
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Users size={18} />
                </div>

                <div className="text-left">

                  <p className="text-sm font-semibold">
                    Patients
                  </p>

                  <p className="text-[11px] text-slate-400">
                    AI patient list
                  </p>

                </div>

              </button>

              {/* SCHEDULE */}

              <button
                onClick={() => navigate("/schedule")}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  py-3.5
                  transition-all
                  hover:bg-white/80
                "
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Calendar size={18} />
                </div>

                <div className="text-left">

                  <p className="text-sm font-semibold">
                    Schedule
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Consultation time
                  </p>

                </div>

              </button>

            </div>

          </div>

          {/* LOGOUT */}

          <div className="border-t border-slate-200 p-5">

            <button
              onClick={() => navigate("/")}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-slate-900
                py-3
                text-sm
                font-semibold
                text-white
              "
            >

              <LogOut size={16} />

              Logout

            </button>

          </div>

        </aside>

        {/* MAIN */}

        <main className="flex-1 p-6 md:p-8">

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

                  <ShieldCheck size={26} />

                  <p className="text-sm font-black uppercase tracking-[0.25em]">
                    Dentiva AI Medical System
                  </p>

                </div>

                <h1 className="mt-6 text-[60px] font-black leading-[0.9] tracking-[-0.05em]">
                  Koas
                  <br />
                  Dashboard
                </h1>

                <p className="mt-6 max-w-2xl text-white/80">
                  AI-powered monitoring dashboard
                  untuk dokter koas modern Dentiva.
                </p>

              </div>

              {/* RIGHT */}

              <div className="grid gap-4">

                <div className="rounded-[30px] bg-white/15 p-6 backdrop-blur-2xl">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-bold">
                      Active Patients
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
                      AI Accuracy
                    </p>

                    <Brain />

                  </div>

                  <h2 className="mt-4 text-6xl font-black">
                    98%
                  </h2>

                </div>

              </div>

            </div>

          </section>

          {/* QUICK STATS */}

          <section className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-[32px] bg-white p-6 shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                <ClipboardList />
              </div>

              <h2 className="mt-5 text-4xl font-black">
                1
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Screening Reports
              </p>

            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <Bell />
              </div>

              <h2 className="mt-5 text-4xl font-black">
                1
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Critical Alerts
              </p>

            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <Video />
              </div>

              <h2 className="mt-5 text-4xl font-black">
                1
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Online Consultations
              </p>

            </div>

          </section>

          {/* PATIENT LIST */}

          <section className="mt-6 rounded-[35px] bg-white p-6 shadow-xl">

            <div className="flex items-center gap-3">

              <Stethoscope className="text-cyan-500" />

              <h2 className="text-3xl font-black">
                AI Patient Monitoring
              </h2>

            </div>

            <div className="mt-6 space-y-4">

              {patients.map((patient) => (

                <div
                  key={patient.id}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-3xl
                    border
                    border-slate-100
                    p-5
                  "
                >

                  <div>

                    <h3 className="text-xl font-black">
                      {patient.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {patient.condition}
                    </p>

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
                          patient.status === "Critical"
                            ? "bg-rose-100 text-rose-600"
                            : patient.status === "Urgent"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-emerald-100 text-emerald-600"
                        }
                      `}
                    >

                      {patient.status}

                    </div>

                    <button
                      className="
                        rounded-2xl
                        bg-slate-900
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      View
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </main>

      </div>

    </div>
  )
}

export default KoasDashboard