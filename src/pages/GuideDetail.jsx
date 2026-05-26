import { useParams } from "react-router-dom"
import { guides } from "../data/guides"

import {
  AlertTriangle,
  ShieldCheck,
  CircleCheck,
  Sparkles,
  HeartPulse,
  Activity,
  Brain,
  Shield,
  Stethoscope,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react"

function GuideDetail() {
  const { id } = useParams()

  const guide = guides.find((item) => item.id === Number(id))

  if (!guide) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f8fb]">
        <h1 className="text-3xl font-bold text-slate-800">
          Panduan tidak ditemukan
        </h1>
      </div>
    )
  }

  return (
    <section className="relative overflow-hidden bg-[#f4f8fb] pb-32">

      {/* GRID */}

      <div
        className="
          absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* GLOW */}

      <div className="absolute top-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-300/30 blur-[140px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-300/30 blur-[140px]" />

      {/* HERO */}

      <div className="relative h-[580px] overflow-hidden">

        <img
          src={guide.detail.hero}
          alt={guide.title}
          className="h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-[#f4f8fb]" />

        {/* FLOATING BADGES */}

        <div
          className="
            absolute left-[8%] top-[24%]
            hidden lg:flex
            items-center gap-3
            rounded-2xl
            border border-white/20
            bg-white/10
            px-5 py-4
            backdrop-blur-xl
          "
        >

          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl
              bg-cyan-400/20
              text-cyan-200
            "
          >
            <Shield size={22} />
          </div>

          <div>

            <p className="text-xs text-cyan-100">
              Oral Protection
            </p>

            <h4 className="font-semibold text-white">
              Preventive Care
            </h4>

          </div>

        </div>

        <div
          className="
            absolute right-[8%] top-[35%]
            hidden lg:flex
            items-center gap-3
            rounded-2xl
            border border-white/20
            bg-white/10
            px-5 py-4
            backdrop-blur-xl
          "
        >

          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl
              bg-emerald-400/20
              text-emerald-200
            "
          >
            <Activity size={22} />
          </div>

          <div>

            <p className="text-xs text-emerald-100">
              Dental Monitoring
            </p>

            <h4 className="font-semibold text-white">
              AI Guidebook
            </h4>

          </div>

        </div>

        {/* TITLE */}

        <div className="absolute bottom-16 left-1/2 w-full max-w-6xl -translate-x-1/2 px-6">

          <div
            className="
              rounded-[36px]
              border border-white/20
              bg-white/10
              p-8
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            "
          >

            <div className="flex items-start gap-6">

              <div
                className="
                  flex h-20 w-20 items-center justify-center
                  rounded-[28px]
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500
                  text-white
                  shadow-[0_10px_40px_rgba(34,211,238,0.4)]
                "
              >
                <guide.icon size={40} />
              </div>

              <div>

                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-cyan-200/20
                    bg-cyan-400/10
                    px-4 py-2
                    text-sm
                    font-medium
                    text-cyan-100
                  "
                >

                  <Sparkles size={16} />

                  {guide.subtitle}

                </span>

                <h1
                  className="
                    mt-5
                    text-5xl
                    font-bold
                    leading-tight
                    text-white
                    lg:text-6xl
                  "
                >
                  {guide.title}
                </h1>

                <p
                  className="
                    mt-5
                    max-w-3xl
                    text-lg
                    leading-9
                    text-slate-200
                  "
                >
                  {guide.desc}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 mx-auto mt-[-70px] max-w-7xl px-6">

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">

          {/* LEFT */}

          <div className="space-y-8">

            {/* MAIN ARTICLE */}

            <div
              className="
                rounded-[36px]
                border border-white/70
                bg-white/80
                p-10
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                backdrop-blur-xl
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-cyan-100
                    text-cyan-600
                  "
                >

                  <HeartPulse size={28} />

                </div>

                <div>

                  <p className="text-sm font-medium text-cyan-600">
                    DENTIVA GUIDEBOOK
                  </p>

                  <h2 className="text-4xl font-bold text-slate-900">
                    {guide.detail.heading}
                  </h2>

                </div>

              </div>

              <p
                className="
                  mt-10
                  text-[18px]
                  leading-[2.2]
                  text-slate-700
                "
              >
                {guide.detail.content}
              </p>

              {/* INFO GRID */}

              <div className="mt-12 grid gap-5 md:grid-cols-2">

                <div
                  className="
                    rounded-[28px]
                    border border-cyan-100
                    bg-gradient-to-br
                    from-cyan-50
                    to-blue-50
                    p-7
                  "
                >

                  <div className="flex items-center gap-3">

                    <Brain className="text-cyan-600" size={24} />

                    <h3 className="text-2xl font-bold text-slate-900">
                      Fakta Penting
                    </h3>

                  </div>

                  <p className="mt-5 leading-8 text-slate-700">

                    Menjaga kesehatan rongga mulut membantu mengurangi
                    risiko penyakit sistemik seperti diabetes dan penyakit
                    jantung akibat inflamasi bakteri kronis.

                  </p>

                </div>

                <div
                  className="
                    rounded-[28px]
                    border border-emerald-100
                    bg-gradient-to-br
                    from-emerald-50
                    to-cyan-50
                    p-7
                  "
                >

                  <div className="flex items-center gap-3">

                    <HeartHandshake
                      className="text-emerald-600"
                      size={24}
                    />

                    <h3 className="text-2xl font-bold text-slate-900">
                      Kenapa Penting?
                    </h3>

                  </div>

                  <p className="mt-5 leading-8 text-slate-700">

                    Kebersihan mulut yang baik membantu menjaga rasa percaya
                    diri, kenyamanan makan, serta kualitas hidup secara
                    keseluruhan.

                  </p>

                </div>

              </div>

            </div>

            {/* STEP GUIDE */}

            <div
              className="
                rounded-[36px]
                border border-white/70
                bg-white/80
                p-10
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-emerald-100
                    text-emerald-600
                  "
                >

                  <BadgeCheck size={28} />

                </div>

                <div>

                  <p className="text-sm font-medium text-emerald-600">
                    STEP GUIDE
                  </p>

                  <h3 className="text-3xl font-bold text-slate-900">
                    Langkah Perawatan yang Disarankan
                  </h3>

                </div>

              </div>

              <div className="mt-10 grid gap-5">

                {guide.detail.prevention.map((item, index) => (

                  <div
                    key={index}
                    className="
                      group
                      flex items-start gap-5
                      rounded-[28px]
                      border border-slate-200
                      bg-slate-50/70
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-200
                      hover:bg-white
                    "
                  >

                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-cyan-500
                        to-blue-500
                        text-lg
                        font-bold
                        text-white
                      "
                    >
                      {index + 1}
                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-slate-900">
                        {item}
                      </h4>

                      <p className="mt-2 leading-8 text-slate-600">

                        Konsistensi dalam perawatan harian sangat penting
                        untuk menjaga kesehatan gigi dan gusi dalam jangka
                        panjang.

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            {/* WARNING */}

            <div
              className="
                rounded-[32px]
                border border-red-100
                bg-white/80
                p-8
                shadow-[0_20px_50px_rgba(15,23,42,0.06)]
                backdrop-blur-xl
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-red-100
                    text-red-500
                  "
                >

                  <AlertTriangle size={28} />

                </div>

                <div>

                  <p className="text-sm font-medium text-red-500">
                    WARNING SIGNS
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Tanda yang Harus Diwaspadai
                  </h3>

                </div>

              </div>

              <div className="mt-8 space-y-5">

                {guide.detail.warning.map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex gap-4
                      rounded-2xl
                      bg-red-50/60
                      p-5
                    "
                  >

                    <CircleCheck
                      className="mt-1 text-red-500"
                      size={20}
                    />

                    <p className="leading-8 text-slate-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* TIPS */}

            <div
              className="
                rounded-[32px]
                border border-emerald-100
                bg-gradient-to-br
                from-emerald-50
                to-cyan-50
                p-8
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-emerald-500
                    to-cyan-500
                    text-white
                  "
                >

                  <Stethoscope size={28} />

                </div>

                <div>

                  <p className="text-sm font-medium text-emerald-600">
                    DOCTOR TIPS
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Tips Dokter Gigi
                  </h3>

                </div>

              </div>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl bg-white/70 p-5">

                  <h4 className="font-bold text-slate-900">
                    Jangan Menyikat Terlalu Keras
                  </h4>

                  <p className="mt-2 leading-8 text-slate-600">

                    Tekanan berlebih dapat mengikis enamel dan menyebabkan
                    gusi turun secara perlahan.

                  </p>

                </div>

                <div className="rounded-2xl bg-white/70 p-5">

                  <h4 className="font-bold text-slate-900">
                    Gunakan Dental Floss
                  </h4>

                  <p className="mt-2 leading-8 text-slate-600">

                    Dental floss membantu membersihkan sela gigi yang tidak
                    dapat dijangkau sikat gigi biasa.

                  </p>

                </div>

                <div className="rounded-2xl bg-white/70 p-5">

                  <h4 className="font-bold text-slate-900">
                    Kontrol Rutin 6 Bulan
                  </h4>

                  <p className="mt-2 leading-8 text-slate-600">

                    Pemeriksaan berkala membantu mendeteksi masalah sejak
                    dini sebelum berkembang lebih serius.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default GuideDetail