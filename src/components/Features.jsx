import {
  Calendar,
  MapPin,
  ShieldCheck,
  FileText,
} from "lucide-react"

import { useState } from "react"

const features = [
  {
    icon: <Calendar size={28} />,
    title: "Jadwal Pintar",
    desc: "Atur jadwal konsultasi dengan dokter gigi koas dengan mudah.",
    color: "bg-blue-50 text-blue-600",
  },

  {
    icon: <MapPin size={28} />,
    title: "Lokasi Terdekat",
    desc: "Temukan klinik dan layanan kesehatan gigi terdekat dari lokasi Anda.",
    color: "bg-amber-50 text-amber-500",
  },

  {
    icon: <ShieldCheck size={28} />,
    title: "Koas Terverifikasi",
    desc: "Konsultasi aman dengan dokter gigi koas terpercaya dan terverifikasi.",
    color: "bg-violet-50 text-violet-600",
  },

  {
    icon: <FileText size={28} />,
    title: "Rekam Medis Digital",
    desc: "Riwayat pemeriksaan dan konsultasi tersimpan aman dalam satu platform.",
    color: "bg-emerald-50 text-emerald-600",
  },
]

const questions = [
  {
    question: "Seberapa sering kamu menyikat gigi?",
    answers: [
      { text: "2x sehari", score: 0 },
      { text: "1x sehari", score: 1 },
      { text: "Jarang", score: 2 },
    ],
  },

  {
    question: "Apakah gusimu sering berdarah?",
    answers: [
      { text: "Tidak", score: 0 },
      { text: "Kadang", score: 1 },
      { text: "Ya", score: 2 },
    ],
  },

  {
    question: "Apakah gigi terasa sensitif?",
    answers: [
      { text: "Tidak", score: 0 },
      { text: "Kadang", score: 1 },
      { text: "Ya", score: 2 },
    ],
  },
]

function Features() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleAnswer = (value) => {
    const newScore = score + value

    setScore(newScore)

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setFinished(true)
    }
  }

  const getResult = () => {
    if (score <= 2) {
      return {
        title: "Risiko Rendah",
        desc: "Kondisi kesehatan mulut Anda terlihat cukup baik.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      }
    }

    if (score <= 4) {
      return {
        title: "Risiko Sedang",
        desc: "Terdapat beberapa indikasi yang perlu diperhatikan.",
        color: "text-amber-500",
        bg: "bg-amber-50",
      }
    }

    return {
      title: "Risiko Tinggi",
      desc: "Disarankan segera melakukan konsultasi lebih lanjut.",
      color: "text-red-500",
      bg: "bg-red-50",
    }
  }

  const result = getResult()

  return (
    <section className="relative px-6 lg:px-20 py-28 bg-white">

      {/* TITLE */}

      <div
        data-aos="fade-up"
        className="text-center max-w-3xl mx-auto"
      >

        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">

          Semua yang Anda Butuhkan dalam{" "}

          <span className="text-blue-600">
            Satu Platform
          </span>

        </h2>

        <p className="mt-6 text-lg text-slate-500 leading-relaxed">

          Dentiva hadir dengan fitur modern untuk membantu
          masyarakat mendapatkan layanan kesehatan gigi yang
          cepat, aman, dan terintegrasi.

        </p>

      </div>

      {/* MAIN GRID */}

      <div className="mt-20 grid gap-8 lg:grid-cols-[2fr_1fr]">

        {/* LEFT FEATURES */}

        <div className="grid gap-6 sm:grid-cols-2">

          {features.map((item, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="
                group
                rounded-[32px]
                border border-slate-100
                bg-white
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)]
              "
            >

              {/* ICON */}

              <div
                className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center
                  ${item.color}
                `}
              >

                {item.icon}

              </div>

              {/* CONTENT */}

              <h3 className="mt-7 text-2xl font-semibold text-slate-900">

                {item.title}

              </h3>

              <p className="mt-4 text-slate-500 leading-relaxed">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

        {/* RIGHT AI CARD */}

        <div
          data-aos="fade-left"
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border border-slate-100
            bg-gradient-to-br
            from-cyan-50
            via-white
            to-blue-50
            p-7
            shadow-[0_10px_40px_rgba(37,99,235,0.08)]
          "
        >

          {/* SOFT GLOW */}

          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-cyan-100 blur-3xl opacity-70"></div>

          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

          {/* CONTENT */}

          <div className="relative z-10">

            {/* BADGE */}

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">

              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>

              <span className="text-sm font-medium text-cyan-700">

                AI Screening

              </span>

            </div>

            {/* TITLE */}

            <h3 className="mt-6 text-3xl font-semibold leading-tight text-slate-900">

              Pemeriksaan
              <span className="text-blue-600">
                {" "}30 Detik
              </span>

            </h3>

            <p className="mt-4 text-slate-500 leading-relaxed">

              Jawab pertanyaan singkat untuk mengetahui
              kondisi awal kesehatan gigi Anda.

            </p>

            {/* PROGRESS */}

            {!finished && (

              <div className="mt-8 flex gap-2">

                {questions.map((_, index) => (

                  <div
                    key={index}
                    className={`
                      h-2 flex-1 rounded-full transition-all duration-500
                      ${
                        index <= step
                          ? "bg-blue-500"
                          : "bg-slate-200"
                      }
                    `}
                  />

                ))}

              </div>

            )}

            {/* QUESTIONS */}

            {!finished ? (

              <div className="mt-8">

                <h4 className="text-xl font-semibold leading-snug text-slate-900">

                  {questions[step].question}

                </h4>

                {/* ANSWERS */}

                <div className="mt-6 grid gap-3">

                  {questions[step].answers.map((answer, index) => (

                    <button
                      key={index}
                      onClick={() => handleAnswer(answer.score)}
                      className="
                        rounded-2xl
                        border border-slate-200
                        bg-white
                        px-5
                        py-4
                        text-left
                        text-slate-700
                        transition-all
                        duration-300
                        hover:border-cyan-300
                        hover:bg-cyan-50
                        hover:text-slate-900
                      "
                    >

                      {answer.text}

                    </button>

                  ))}

                </div>

              </div>

            ) : (

              /* RESULT */

              <div className="mt-10 text-center">

                <div
                  className={`
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    text-4xl
                    ${result.bg}
                  `}
                >

                  🦷

                </div>

                <h4
                  className={`
                    mt-6
                    text-3xl
                    font-semibold
                    ${result.color}
                  `}
                >

                  {result.title}

                </h4>

                <p className="mt-4 text-slate-500 leading-relaxed">

                  {result.desc}

                </p>

                <button
                  className="
                    mt-8
                    rounded-2xl
                    bg-blue-600
                    px-6
                    py-4
                    text-white
                    font-semibold
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >

                  Konsultasi Sekarang

                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Features