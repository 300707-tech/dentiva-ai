import {
  LayoutDashboard,
  Brain,
  Stethoscope,
  FileText,
  ShieldAlert,
  LogOut,
  Orbit,
  HeartPulse,
  Sparkles,
} from "lucide-react"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom"

function PatientDashboard() {

  const navigate = useNavigate()

  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      navigate("/auth")
      return
    }

    setUserData(user)

    setLoading(false)
  }

  async function handleLogout() {

    await supabase.auth.signOut()

    navigate("/")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#edf4ff]">
        <div className="h-12 w-12 animate-spin rounded-full border-[5px] border-cyan-200 border-t-cyan-500" />
      </div>
    )
  }

  return (

    <div className="min-h-screen overflow-x-hidden bg-[#edf4ff] text-slate-900">

      {/* BACKGROUND */}

      <div className="fixed inset-0 overflow-hidden">

        <div className="absolute left-[-150px] top-[-100px] h-[380px] w-[380px] rounded-full bg-cyan-300/30 blur-[140px]" />

        <div className="absolute right-[-120px] top-[140px] h-[420px] w-[420px] rounded-full bg-blue-300/30 blur-[160px]" />

        <div className="absolute bottom-[-120px] left-[30%] h-[320px] w-[320px] rounded-full bg-violet-300/20 blur-[140px]" />

      </div>

      <div className="relative z-10 flex">

        {/* SIDEBAR */}

        <aside
          className="
            hidden
            xl:flex
            min-h-screen
            w-[270px]
            flex-col
            border-r
            border-white/40
            bg-white/50
            backdrop-blur-3xl
          "
        >

          {/* LOGO */}

          <div className="border-b border-slate-200/70 px-7 py-7">

            <img
              src="/images/logo.png"
              alt="PasKoas"
              className="w-[170px] object-contain"
            />

          </div>

          {/* NAVIGATION */}

          <div className="flex-1 px-5 py-7">

            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Patient Navigation
            </p>

            <div className="space-y-2">

              {/* OVERVIEW */}

              <button
                onClick={() => navigate("/patient-dashboard")}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-cyan-200
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  px-4
                  py-3.5
                  text-white
                  shadow-lg
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/20
                    "
                  >
                    <LayoutDashboard size={18} />
                  </div>

                  <div className="text-left">

                    <p className="text-sm font-bold">
                      Overview
                    </p>

                    <p className="text-[11px] text-cyan-100">
                      AI dashboard
                    </p>

                  </div>

                </div>

                <div className="h-2 w-2 rounded-full bg-white animate-pulse" />

              </button>

              {/* AI SCREENING */}

              <button
                onClick={() => navigate("/ai-screening")}
                className="
                  group
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

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-50
                    text-cyan-600
                  "
                >
                  <Brain size={18} />
                </div>

                <div className="text-left">

                  <p className="text-sm font-semibold text-slate-700">
                    AI Screening
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Neural detection
                  </p>

                </div>

              </button>

              {/* DOKTER KOAS */}

              <button
                onClick={() => navigate("/dokter-koas")}
                className="
                  group
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

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Stethoscope size={18} />
                </div>

                <div className="text-left">

                  <p className="text-sm font-semibold text-slate-700">
                    Dokter Koas
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Smart consultation
                  </p>

                </div>

              </button>

              {/* REKAM MEDIS */}

              <button
                onClick={() => navigate("/rekam-medis")}
                className="
                  group
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

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-violet-50
                    text-violet-600
                  "
                >
                  <FileText size={18} />
                </div>

                <div className="text-left">

                  <p className="text-sm font-semibold text-slate-700">
                    Rekam Medis
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Medical cloud
                  </p>

                </div>

              </button>

            </div>

            {/* FEATURES */}

            <p className="mb-4 mt-10 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              AI Features
            </p>

            <div className="space-y-2">

            </div>

          </div>

          {/* USER */}

          <div className="border-t border-slate-200/60 p-5">

            <div
              className="
                rounded-[30px]
                border
                border-white/70
                bg-white/70
                p-4
                shadow-xl
              "
            >

              <div className="flex items-center gap-3">

                <img
                  src={userData?.user_metadata?.avatar_url}
                  alt="profile"
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    object-cover
                  "
                />

                <div>

                  <h2 className="max-w-[130px] text-sm font-bold leading-tight">
                    {userData?.user_metadata?.full_name}
                  </h2>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Connected Account
                  </p>

                </div>

              </div>

              <button
                onClick={handleLogout}
                className="
                  mt-4
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

          </div>

        </aside>

        {/* MAIN */}

        <main className="flex-1 p-5 md:p-7">

          {/* HERO */}

          <section
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/70
              bg-white/50
              p-8
              shadow-[0_20px_80px_rgba(15,23,42,0.08)]
              backdrop-blur-3xl
            "
          >

            <div className="relative z-10 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">

              <div>

                <div className="flex flex-wrap items-center gap-2">

                  <div
                    className="
                      rounded-full
                      bg-cyan-100
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-cyan-700
                    "
                  >
                    PasKoas AI
                  </div>

                </div>

                <h1
                  className="
                    mt-6
                    max-w-4xl
                    text-[54px]
                    font-black
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-slate-900
                  "
                >
                  Your AI-powered
                  <br />
                  oral health system.
                </h1>

                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-500">

                  PasKoas AI menghubungkan rekam medis,
                  screening,
                  AI prediction,
                  dan monitoring kesehatan gigi secara real-time.

                </p>

              </div>

              <div className="grid gap-4">

                <div
                  className="
                    rounded-[32px]
                    border
                    border-cyan-100
                    bg-gradient-to-br
                    from-cyan-50/90
                    to-white/50
                    p-6
                  "
                >

                  <div className="flex items-center justify-between">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                      AI Health Score
                    </p>

                    <Orbit size={18} className="text-cyan-500" />

                  </div>

                  <h2 className="mt-4 text-7xl font-black tracking-tight">
                    92%
                  </h2>

                </div>

                <div
                  className="
                    rounded-[32px]
                    border
                    border-blue-100
                    bg-gradient-to-br
                    from-blue-50/90
                    to-white/50
                    p-6
                  "
                >

                  <div className="flex items-center justify-between">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                      AI Recommendation
                    </p>

                    <Sparkles size={18} className="text-blue-500" />

                  </div>

                  <h2 className="mt-4 text-[28px] font-black leading-tight tracking-tight">
                    Schedule scaling routine
                  </h2>

                </div>

              </div>

            </div>

          </section>

          {/* GRID */}

          <section className="mt-6 grid gap-5 xl:grid-cols-12">

            {/* SCREENING */}

            <div
              className="
                rounded-[34px]
                border
                border-white/70
                bg-white/55
                p-6
                shadow-xl
                xl:col-span-4
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500
                  text-white
                "
              >
                <Brain size={24} />
              </div>

              <h2 className="mt-6 text-[34px] font-black tracking-tight">
                Screening
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                AI neural engine untuk mendeteksi kondisi kesehatan gigi modern secara real-time.
              </p>

              <button
                onClick={() => navigate("/ai-screening")}
                className="
                  mt-6
                  rounded-2xl
                  bg-slate-900
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Start Screening
              </button>

            </div>

            {/* DOKTER KOAS */}

            <div
              className="
                rounded-[34px]
                border
                border-white/70
                bg-white/55
                p-6
                shadow-xl
                xl:col-span-4
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-400
                  to-indigo-500
                  text-white
                "
              >
                <Stethoscope size={24} />
              </div>

              <h2 className="mt-6 text-[34px] font-black tracking-tight">
                Dokter Koas
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Konsultasi langsung dengan dokter koas terpercaya berbasis AI assistance.
              </p>

              <button
                onClick={() => navigate("/dokter-koas")}
                className="
                  mt-6
                  rounded-2xl
                  bg-blue-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Cari Dokter
              </button>

            </div>

            {/* RECORD */}

            <div
              className="
                rounded-[34px]
                bg-gradient-to-br
                from-violet-500
                to-fuchsia-500
                p-6
                text-white
                xl:col-span-4
              "
            >

              <div className="flex h-full flex-col justify-between">

                <div>

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/20
                    "
                  >
                    <FileText size={22} />
                  </div>

                  <h2 className="mt-6 text-[36px] font-black">
                    Medical Cloud
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-violet-100">
                    Semua histori screening dan rekam medis tersimpan aman di cloud system PasKoas.
                  </p>

                </div>

                <div className="mt-8">

                  <button
                    onClick={() => navigate("/rekam-medis")}
                    className="
                      w-full
                      rounded-2xl
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-violet-700
                      transition-all
                      hover:scale-105
                    "
                  >
                    Open Records
                  </button>

                </div>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  )
}

export default PatientDashboard