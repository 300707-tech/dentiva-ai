import {
  Brain,
  Sparkles,
  Video,
  MessageCircle,
  Star,
  ShieldCheck,
  Activity,
  Search,
  Calendar,
  Clock3,
  ChevronRight,
  Stethoscope,
  HeartPulse,
  BadgeCheck,
  BellRing,
  Phone,
} from "lucide-react"

import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

function DokterKoas() {

  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const doctors = [

    {
      id: 1,
      name: "drg. Amanda Putri",
      specialist: "Conservative Dentistry",
      rating: 4.9,
      experience: "8 Years",
      online: true,
      patients: "1.4k+",
      schedule: "Available Today",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "drg. Michael Wijaya",
      specialist: "Orthodontics",
      rating: 4.8,
      experience: "10 Years",
      online: false,
      patients: "2.1k+",
      schedule: "Tomorrow",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "drg. Sarah Devi",
      specialist: "Pediatric Dentistry",
      rating: 4.9,
      experience: "6 Years",
      online: true,
      patients: "980+",
      schedule: "Available Now",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      name: "drg. Kevin Saputra",
      specialist: "Oral Surgery",
      rating: 4.7,
      experience: "12 Years",
      online: true,
      patients: "3.2k+",
      schedule: "Tonight",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    },

  ]

  const categories = [
    "All",
    "Conservative Dentistry",
    "Orthodontics",
    "Pediatric Dentistry",
    "Oral Surgery",
  ]

  const filteredDoctors = useMemo(() => {

    return doctors.filter((doctor) => {

      const matchSearch =
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialist.toLowerCase().includes(search.toLowerCase())

      const matchCategory =
        selectedCategory === "All" ||
        doctor.specialist === selectedCategory

      return matchSearch && matchCategory
    })

  }, [search, selectedCategory])

  return (

    <div className="min-h-screen overflow-x-hidden bg-[#edf4ff] text-slate-900">

      {/* BACKGROUND */}

      <div className="fixed inset-0 overflow-hidden">

        <div className="absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-cyan-300/30 blur-[130px]" />

        <div className="absolute right-[-120px] top-[200px] h-[360px] w-[360px] rounded-full bg-violet-300/30 blur-[150px]" />

        <div className="absolute bottom-[-100px] left-[35%] h-[300px] w-[300px] rounded-full bg-blue-300/20 blur-[120px]" />

      </div>

      <div className="relative z-10 p-5 md:p-8">

        {/* TOP HERO */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/70
            bg-gradient-to-br
            from-cyan-500
            via-blue-500
            to-violet-600
            p-8
            text-white
            shadow-[0_20px_80px_rgba(15,23,42,0.12)]
          "
        >

          <div className="absolute right-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-white/10 blur-[100px]" />

          <div className="absolute bottom-[-100px] left-[20%] h-[240px] w-[240px] rounded-full bg-white/10 blur-[90px]" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">

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
                  <Brain size={28} />
                </div>

                <div>

                  <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-100">
                    PasKoas AI Consultation
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Next-generation oral health assistance
                  </p>

                </div>

              </div>

              <h1
                className="
                  mt-8
                  text-[64px]
                  font-black
                  leading-[0.9]
                  tracking-[-0.06em]
                "
              >
                Smart
                <br />
                Dokter Koas
              </h1>

              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/80">

                Konsultasi modern berbasis AI dengan dokter koas terpercaya,
                analisis oral health real-time,
                video consultation,
                AI recommendation,
                dan monitoring kesehatan gigi terintegrasi.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button
                  onClick={() => navigate("/patient-dashboard")}
                  className="
                    rounded-2xl
                    bg-white
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-blue-600
                    transition-all
                    hover:scale-105
                  "
                >
                  Back Dashboard
                </button>

                <button
                  className="
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur-xl
                  "
                >
                  AI Connected
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-4">

              <div
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/10
                  p-6
                  backdrop-blur-2xl
                "
              >

                <div className="flex items-center justify-between">

                  <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-100">
                    AI Recommendation
                  </p>

                  <Sparkles size={18} />

                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight">
                  Conservative Dentistry
                </h2>

                <p className="mt-3 text-sm text-white/70">
                  AI mendeteksi potensi plaque risk dan menyarankan konsultasi segera.
                </p>

              </div>

              <div
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/10
                  p-6
                  backdrop-blur-2xl
                "
              >

                <div className="flex items-center justify-between">

                  <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-100">
                    Health Severity
                  </p>

                  <Activity size={18} />

                </div>

                <h2 className="mt-4 text-6xl font-black">
                  78%
                </h2>

                <p className="mt-2 text-sm text-white/70">
                  Medium oral health risk detected.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* SEARCH */}

        <section
          className="
            mt-6
            rounded-[35px]
            border
            border-white/70
            bg-white/60
            p-6
            shadow-xl
            backdrop-blur-3xl
          "
        >

          <div className="grid gap-4 lg:grid-cols-[1fr_300px]">

            {/* SEARCH BAR */}

            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-4
              "
            >

              <Search size={20} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search doctor or specialist..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  bg-transparent
                  text-sm
                  outline-none
                "
              />

            </div>

            {/* FILTER */}

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                text-sm
                font-semibold
                outline-none
              "
            >

              {categories.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>

          </div>

        </section>

        {/* QUICK STATS */}

        <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-[30px] bg-white/70 p-6 shadow-xl backdrop-blur-3xl">

            <div className="flex items-center justify-between">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-100
                  text-cyan-600
                "
              >
                <Stethoscope size={24} />
              </div>

              <ChevronRight className="text-slate-300" />

            </div>

            <h2 className="mt-6 text-5xl font-black">
              24
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Active Specialists
            </p>

          </div>

          <div className="rounded-[30px] bg-white/70 p-6 shadow-xl backdrop-blur-3xl">

            <div className="flex items-center justify-between">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-100
                  text-emerald-600
                "
              >
                <Video size={24} />
              </div>

              <ChevronRight className="text-slate-300" />

            </div>

            <h2 className="mt-6 text-5xl font-black">
              12
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Video Sessions
            </p>

          </div>

          <div className="rounded-[30px] bg-white/70 p-6 shadow-xl backdrop-blur-3xl">

            <div className="flex items-center justify-between">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-violet-100
                  text-violet-600
                "
              >
                <ShieldCheck size={24} />
              </div>

              <ChevronRight className="text-slate-300" />

            </div>

            <h2 className="mt-6 text-5xl font-black">
              AI
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Monitoring Active
            </p>

          </div>

          <div className="rounded-[30px] bg-white/70 p-6 shadow-xl backdrop-blur-3xl">

            <div className="flex items-center justify-between">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-rose-100
                  text-rose-600
                "
              >
                <HeartPulse size={24} />
              </div>

              <ChevronRight className="text-slate-300" />

            </div>

            <h2 className="mt-6 text-5xl font-black">
              92%
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Health Accuracy
            </p>

          </div>

        </section>

        {/* DOCTORS */}

        <section className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredDoctors.map((doctor) => (

            <div
              key={doctor.id}
              className="
                overflow-hidden
                rounded-[35px]
                border
                border-white/70
                bg-white/70
                shadow-xl
                backdrop-blur-3xl
              "
            >

              {/* IMAGE */}

              <div className="relative h-[260px]">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />

                {/* ONLINE */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/90
                    px-4
                    py-2
                    backdrop-blur-xl
                  "
                >

                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      doctor.online
                        ? "bg-emerald-500 animate-pulse"
                        : "bg-slate-400"
                    }`}
                  />

                  <p className="text-xs font-black">

                    {doctor.online
                      ? "ONLINE"
                      : "OFFLINE"}

                  </p>

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h2 className="text-[28px] font-black leading-tight">
                      {doctor.name}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      {doctor.specialist}
                    </p>

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      rounded-2xl
                      bg-yellow-50
                      px-3
                      py-2
                    "
                  >

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <p className="text-sm font-black">
                      {doctor.rating}
                    </p>

                  </div>

                </div>

                {/* STATS */}

                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-slate-50 p-4">

                    <div className="flex items-center gap-2">

                      <Calendar
                        size={15}
                        className="text-slate-400"
                      />

                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                        Experience
                      </p>

                    </div>

                    <h3 className="mt-2 text-lg font-black">
                      {doctor.experience}
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">

                    <div className="flex items-center gap-2">

                      <BadgeCheck
                        size={15}
                        className="text-slate-400"
                      />

                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                        Patients
                      </p>

                    </div>

                    <h3 className="mt-2 text-lg font-black">
                      {doctor.patients}
                    </h3>

                  </div>

                </div>

                {/* AI CARD */}

                <div
                  className="
                    mt-6
                    rounded-3xl
                    bg-gradient-to-r
                    from-cyan-50
                    to-blue-50
                    p-5
                  "
                >

                  <div className="flex items-center gap-2">

                    <Sparkles
                      size={18}
                      className="text-cyan-600"
                    />

                    <p className="text-sm font-black text-cyan-700">
                      AI Insight
                    </p>

                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    AI merekomendasikan konsultasi berdasarkan screening oral health terbaru.
                  </p>

                </div>

                {/* STATUS */}

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 p-4">

                  <div className="flex items-center gap-2">

                    <Clock3
                      size={16}
                      className="text-slate-400"
                    />

                    <p className="text-sm font-semibold text-slate-600">
                      {doctor.schedule}
                    </p>

                  </div>

                  <BellRing
                    size={18}
                    className="text-slate-400"
                  />

                </div>

                {/* BUTTONS */}

                <div className="mt-6 space-y-3">

                  <button
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500
                      py-4
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      hover:scale-[1.02]
                    "
                  >

                    <Video size={18} />

                    Start Video Consultation

                  </button>

                  <button
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      py-4
                      text-sm
                      font-bold
                      transition-all
                      hover:bg-slate-50
                    "
                  >

                    <MessageCircle size={18} />

                    Chat Consultation

                  </button>

                  <button
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-slate-900
                      py-4
                      text-sm
                      font-bold
                      text-white
                    "
                  >

                    <Phone size={18} />

                    Emergency Call

                  </button>

                </div>

              </div>

            </div>

          ))}

        </section>

      </div>

    </div>
  )
}

export default DokterKoas