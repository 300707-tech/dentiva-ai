import {
  Smile,
  ShieldCheck,
  Sparkles,
  Droplets,
  HeartPulse,
  FlaskConical,
  ScanFace,
  Stethoscope,
} from "lucide-react"
import { Link } from "react-router-dom"
import { guides } from "../data/guides"
function HealthEducation() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fb] py-24">

      {/* GRID BACKGROUND */}

      <div
        className="
          absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* GLOW */}

      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-200/40 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-200/40 blur-[120px]" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-cyan-200
              bg-white/80
              px-4 py-2
              text-sm
              font-medium
              text-cyan-700
              shadow-sm
            "
          >

            Dentiva Dental Guidebook

          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              lg:text-5xl
            "
          >

            Panduan Kesehatan{" "}

            <span
              className="
                bg-gradient-to-r
                from-cyan-500
                via-blue-600
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >

              Seputar Gigi

            </span>

          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-slate-600
            "
          >

            Pelajari berbagai panduan kesehatan gigi sederhana,
            mulai dari perawatan harian hingga pencegahan masalah mulut.

          </p>

        </div>

        {/* GRID */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {guides.map((item, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/70
                bg-white/75
                p-6
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_18px_40px_rgba(34,211,238,0.15)]
              "
            >

              {/* HOVER GLOW */}

              <div
                className={`
                  absolute inset-0 opacity-0 blur-3xl
                  transition duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br ${item.color}
                `}
              />

              {/* CARD CONTENT */}

              <div className="relative z-10">

                {/* ICON */}

                <div
                  className={`
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-white
                    shadow-[0_4px_15px_rgba(15,23,42,0.08)]
                    ${item.iconColor}
                  `}
                >

                  <item.icon size={34} />

                </div>

                {/* TITLE */}

                <h3 className="mt-5 text-[30px] leading-[1.1] font-bold text-slate-900">

                  {item.title}

                </h3>

                {/* SUBTITLE */}

                <p className="mt-2 text-sm font-medium text-slate-500">

                  {item.subtitle}

                </p>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-8
                    text-slate-600
                  "
                >

                  {item.desc}

                </p>

                {/* BUTTON */}

<Link
  to={`/guide/${item.id}`}
  className={`
    mt-8 inline-block
    font-semibold
    transition-all
    duration-300
    hover:translate-x-2
    ${item.button}
  `}
>

  Baca Panduan →

</Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default HealthEducation