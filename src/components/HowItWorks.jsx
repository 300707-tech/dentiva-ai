import {
  User,
  Activity,
  Search,
  Calendar,
  ClipboardCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

const patientFlow = [
  {
    icon: <User size={26} />,
    title: "Isi Keluhan",
    desc: "Pasien memasukkan keluhan dan kondisi kesehatan gigi.",
  },

  {
    icon: <Activity size={26} />,
    title: "AI Screening",
    desc: "AI Paskoas menganalisis gejala secara cepat dan cerdas.",
  },

  {
    icon: <Search size={26} />,
    title: "Cari Koas",
    desc: "Sistem mencocokkan pasien dengan koas yang sesuai.",
  },
]

const koasFlow = [
  {
    icon: <Calendar size={26} />,
    title: "Buka Jadwal",
    desc: "Koas membuka slot konsultasi dan praktik klinis.",
  },

  {
    icon: <ClipboardCheck size={26} />,
    title: "Terima Pasien",
    desc: "Pasien yang cocok akan langsung terhubung otomatis.",
  },

  {
    icon: <GraduationCap size={26} />,
    title: "Bangun Pengalaman",
    desc: "Koas memperoleh pengalaman klinis yang tervalidasi.",
  },
]

function HowItWorks() {

  const navigate = useNavigate()

  return (

    <section className="relative overflow-hidden bg-[#f8fbff] px-6 py-28 lg:px-20">

      {/* BACKGROUND GRID */}

      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* BACKGROUND GLOW */}

      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      {/* TITLE */}

      <div
        data-aos="fade-up"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >

        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-600">

          <Sparkles size={16} />

          DUAL ECOSYSTEM

        </span>

        <h2 className="mt-7 text-4xl font-semibold tracking-tight text-slate-900 lg:text-6xl">

          Dua Perjalanan,
          <br />

          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

            Satu Senyum Digital

          </span>

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-500">

          PasKoas menghubungkan pasien dan dokter gigi koas
          dalam satu ekosistem kesehatan modern berbasis AI.

        </p>

      </div>

      {/* MAIN LAYOUT */}

      <div className="relative z-10 mt-24 grid gap-16 lg:grid-cols-3">

        {/* ================= LEFT SIDE ================= */}

        <div>

          {/* LABEL */}

          <div
            data-aos="fade-right"
            className="mb-8 flex items-center gap-3"
          >

            <div className="h-3 w-3 rounded-full bg-cyan-500" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">

              Patient Journey

            </p>

          </div>

          {/* FLOW */}

          <div className="space-y-8">

            {patientFlow.map((item, index) => (

              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 150}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-white/70
                  bg-white/90
                  p-7
                  shadow-[0_10px_50px_rgba(0,0,0,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(6,182,212,0.10)]
                "
              >

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/0 via-cyan-50/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-slate-900">

                      {item.title}

                    </h3>

                    <p className="mt-2 leading-relaxed text-slate-500">

                      {item.desc}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* BUTTON */}

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-10"
          >

            <button
              onClick={() => navigate("/patient-dashboard")}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-[24px]
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                py-5
                text-lg
                font-semibold
                text-white
                shadow-[0_10px_40px_rgba(6,182,212,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(6,182,212,0.35)]
              "
            >

              Masuk sebagai Pasien

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

        </div>

        {/* ================= CENTER CORE ================= */}

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="relative flex items-center justify-center"
        >

          <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="absolute h-[260px] w-[260px] rounded-full bg-blue-200/20 blur-2xl" />

          <div
            className="
              relative
              flex
              h-[260px]
              w-[260px]
              flex-col
              items-center
              justify-center
              rounded-full
              border border-white/70
              bg-white/80
              text-center
              shadow-[0_20px_80px_rgba(37,99,235,0.10)]
              backdrop-blur-2xl
            "
          >

            <div className="absolute h-full w-full animate-ping rounded-full bg-cyan-200/20" />

            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl">

              <Sparkles size={38} />

            </div>

            <h3 className="relative z-10 mt-7 text-4xl font-bold text-slate-900">

              PasKoas

            </h3>

            <p className="relative z-10 mt-4 max-w-[200px] text-base leading-relaxed text-slate-500">

              Smart matching system yang mempertemukan pasien dan koas secara cerdas.

            </p>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div>

          <div
            data-aos="fade-left"
            className="mb-8 flex items-center justify-end gap-3"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">

              Koas Journey

            </p>

            <div className="h-3 w-3 rounded-full bg-blue-600" />

          </div>

          <div className="space-y-8">

            {koasFlow.map((item, index) => (

              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 150}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-white/70
                  bg-white/90
                  p-7
                  shadow-[0_10px_50px_rgba(0,0,0,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)]
                "
              >

                <div className="absolute inset-0 bg-gradient-to-l from-blue-50/0 via-blue-50/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-slate-900">

                      {item.title}

                    </h3>

                    <p className="mt-2 leading-relaxed text-slate-500">

                      {item.desc}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* BUTTON */}

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-10"
          >

            <button
              onClick={() => navigate("/koas-dashboard")}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-[24px]
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                py-5
                text-lg
                font-semibold
                text-white
                shadow-[0_10px_40px_rgba(37,99,235,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.30)]
              "
            >

              Masuk sebagai Koas

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks