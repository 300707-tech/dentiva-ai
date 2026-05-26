import {
  Activity,
  Brain,
  ShieldCheck,
  TrendingUp,
  HeartPulse,
  Sparkles,
  AlertTriangle,
  ChevronRight,
  Camera,
  Bell,
  ScanEye,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function OralMonitoring() {

  const navigate = useNavigate()

  const monitoringData = [
    {
      title: "Plaque Detection",
      value: "Low",
      status: "Stable",
      color: "from-cyan-500 to-blue-500",
    },

    {
      title: "Gum Condition",
      value: "Healthy",
      status: "Excellent",
      color: "from-emerald-500 to-green-500",
    },

    {
      title: "Cavity Risk",
      value: "Medium",
      status: "Need Attention",
      color: "from-orange-500 to-amber-500",
    },
  ]

  return (

    <div className="min-h-screen bg-[#eef5ff] p-6 md:p-8">

      <div className="mx-auto max-w-7xl">

        {/* HERO */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[42px]
            bg-gradient-to-br
            from-cyan-500
            via-blue-500
            to-violet-600
            p-8
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.35)]
          "
        >

          <div className="absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-white/10 blur-[120px]" />

          <div className="absolute bottom-[-100px] left-[20%] h-[220px] w-[220px] rounded-full bg-cyan-200/20 blur-[100px]" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/20
                    backdrop-blur-xl
                  "
                >
                  <HeartPulse size={28} />
                </div>

                <div>

                  <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-100">
                    Dentiva AI Monitoring
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Real-time Oral Health Tracking
                  </p>

                </div>

              </div>

              <h1
                className="
                  mt-8
                  text-[58px]
                  font-black
                  leading-[0.9]
                  tracking-[-0.05em]
                "
              >
                Oral
                <br />
                Monitoring
              </h1>

              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/80">

                Monitoring kesehatan mulut berbasis AI
                untuk mendeteksi perubahan oral health,
                plaque activity,
                cavity risk,
                dan kondisi gusi secara real-time.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-6
                    py-4
                    text-sm
                    font-black
                    text-blue-600
                    transition-all
                    hover:scale-105
                  "
                >

                  <Camera size={18} />

                  Start Monitoring

                </button>

                <button
                  onClick={() => navigate("/patient-dashboard")}
                  className="
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    py-4
                    text-sm
                    font-bold
                    backdrop-blur-xl
                  "
                >
                  Back Dashboard
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-4">

              <div
                className="
                  rounded-[30px]
                  border
                  border-white/20
                  bg-white/10
                  p-6
                  backdrop-blur-2xl
                "
              >

                <div className="flex items-center justify-between">

                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-cyan-100">
                    AI Health Score
                  </p>

                  <Sparkles size={18} />

                </div>

                <h2 className="mt-4 text-7xl font-black tracking-tight">
                  94%
                </h2>

                <p className="mt-2 text-sm text-white/70">
                  Excellent oral condition detected
                </p>

              </div>

              <div
                className="
                  rounded-[30px]
                  border
                  border-white/20
                  bg-white/10
                  p-6
                  backdrop-blur-2xl
                "
              >

                <div className="flex items-center justify-between">

                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-cyan-100">
                    Live Status
                  </p>

                  <Activity size={18} />

                </div>

                <div className="mt-5 flex items-center gap-3">

                  <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

                  <p className="text-lg font-bold">
                    AI Monitoring Active
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ANALYTICS */}

        <section className="mt-6 grid gap-5 xl:grid-cols-3">

          {monitoringData.map((item, index) => (

            <div
              key={index}
              className="
                overflow-hidden
                rounded-[34px]
                bg-white
                p-6
                shadow-xl
              "
            >

              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-br
                  ${item.color}
                  text-white
                `}
              >
                <Brain size={28} />
              </div>

              <h2 className="mt-6 text-3xl font-black">
                {item.value}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {item.title}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <p className="text-sm font-bold text-slate-700">
                  {item.status}
                </p>

                <TrendingUp className="text-emerald-500" />

              </div>

            </div>

          ))}

        </section>

        {/* MAIN GRID */}

        <section className="mt-6 grid gap-6 xl:grid-cols-12">

          {/* LEFT */}

          <div className="xl:col-span-8 space-y-6">

            {/* LIVE ANALYTICS */}

            <div
              className="
                rounded-[38px]
                bg-white
                p-7
                shadow-xl
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-500">
                    AI Analytics
                  </p>

                  <h2 className="mt-3 text-[40px] font-black tracking-tight">
                    Live Oral Analysis
                  </h2>

                </div>

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-3xl
                    bg-cyan-100
                    text-cyan-600
                  "
                >
                  <ScanEye size={30} />
                </div>

              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div className="rounded-3xl bg-slate-50 p-5">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-bold text-slate-500">
                      Plaque Activity
                    </p>

                    <ShieldCheck className="text-emerald-500" />

                  </div>

                  <h3 className="mt-5 text-5xl font-black">
                    21%
                  </h3>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">

                    <div className="h-full w-[21%] rounded-full bg-emerald-500" />

                  </div>

                </div>

                <div className="rounded-3xl bg-slate-50 p-5">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-bold text-slate-500">
                      Cavity Progression
                    </p>

                    <AlertTriangle className="text-orange-500" />

                  </div>

                  <h3 className="mt-5 text-5xl font-black">
                    48%
                  </h3>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">

                    <div className="h-full w-[48%] rounded-full bg-orange-500" />

                  </div>

                </div>

              </div>

            </div>

            {/* AI RECOMMENDATION */}

            <div
              className="
                rounded-[38px]
                bg-gradient-to-br
                from-violet-500
                to-fuchsia-500
                p-7
                text-white
                shadow-xl
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-100">
                    Dentiva AI Recommendation
                  </p>

                  <h2 className="mt-4 text-[38px] font-black leading-tight">
                    Recommended
                    <br />
                    Dental Cleaning
                  </h2>

                </div>

                <Sparkles size={42} />

              </div>

              <p className="mt-5 max-w-2xl text-violet-100">

                AI mendeteksi peningkatan plaque activity
                dalam 7 hari terakhir dan merekomendasikan
                scaling routine untuk menjaga oral stability.

              </p>

              <button
                className="
                  mt-7
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-6
                  py-4
                  text-sm
                  font-black
                  text-violet-600
                "
              >

                Schedule Consultation

                <ChevronRight size={18} />

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="xl:col-span-4 space-y-6">

            {/* ALERT */}

            <div
              className="
                rounded-[36px]
                bg-white
                p-6
                shadow-xl
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-500">
                    Smart Alert
                  </p>

                  <h2 className="mt-3 text-3xl font-black">
                    AI Notifications
                  </h2>

                </div>

                <Bell className="text-rose-500" />

              </div>

              <div className="mt-6 space-y-4">

                <div className="rounded-3xl bg-rose-50 p-4">

                  <p className="text-sm font-bold text-rose-600">
                    Plaque Increase Detected
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    AI detected higher plaque activity
                    in molar area.
                  </p>

                </div>

                <div className="rounded-3xl bg-cyan-50 p-4">

                  <p className="text-sm font-bold text-cyan-600">
                    Routine Check Reminder
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Recommended oral monitoring
                    this week.
                  </p>

                </div>

              </div>

            </div>

            {/* STATUS */}

            <div
              className="
                rounded-[36px]
                bg-slate-900
                p-6
                text-white
                shadow-xl
              "
            >

              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                AI Stability
              </p>

              <h2 className="mt-4 text-6xl font-black">
                Stable
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Oral condition terpantau stabil
                berdasarkan monitoring AI 14 hari terakhir.
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>
  )
}

export default OralMonitoring