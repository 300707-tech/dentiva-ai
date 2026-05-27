import {
  Activity,
  Calendar,
  MapPin,
  ShieldCheck,
} from "lucide-react"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

function Hero() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
  }

  return (
    <section className="relative overflow-hidden bg-[#f8fbfc] px-6 pt-10 lg:px-16 lg:pt-16">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* LEFT GRADIENT */}

        <div className="absolute left-0 top-0 h-full w-[42%] bg-gradient-to-br from-cyan-100 via-blue-50 to-transparent" />

        {/* BLUR EFFECT */}

        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="absolute bottom-10 left-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        {/* BUBBLE */}

        <div className="absolute right-20 top-20 h-24 w-24 rounded-full border border-white/40 bg-white/20 backdrop-blur-xl animate-floatSlow" />

        <div className="absolute bottom-20 left-10 h-16 w-16 rounded-full border border-white/40 bg-white/20 backdrop-blur-xl animate-float" />

      </div>

      {/* ================= CONTAINER ================= */}

      <div className="grid min-h-[88vh] items-center gap-10 lg:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          data-aos="fade-right"
          className="max-w-2xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {/* TAGLINE */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-3 rounded-full border border-white bg-white/80 px-5 py-3 shadow-sm backdrop-blur-xl"
          >

            <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />

            <span className="text-sm tracking-wide text-slate-600">
              Platform AI Kesehatan Gigi Modern
            </span>

          </div>

          {/* TITLE */}

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 text-[64px] font-semibold leading-[0.95] tracking-[-0.05em] text-slate-900 lg:text-[92px]"
          >

            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

              Senyum Sehat

            </span>

            <br />

            Dimulai di Sini.

          </h1>

          {/* DESCRIPTION */}

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8 max-w-xl text-[22px] leading-relaxed text-slate-600"
          >

            Paskoas menghubungkan Anda dengan dokter gigi koas
            terverifikasi secara instan. Nikmati kemudahan AI
            screening, konsultasi digital, dan akses layanan kesehatan
            gigi terdekat dalam satu platform pintar.

          </p>

          {/* BUTTON */}

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-10 flex flex-wrap gap-5"
          >

<button
  onClick={() => {
    if (user) {
      navigate("/dashboard")
    } else {
      navigate("/login")
    }
  }}
  className="
    px-10
    py-5
    rounded-[24px]
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    text-white
    text-xl
    font-bold
    shadow-2xl
    shadow-blue-500/30
    hover:scale-105
    hover:shadow-blue-500/50
    transition-all
    duration-300
  "
>
  Mulai Konsultasi
</button>

            <button className="rounded-2xl border border-slate-200 bg-white/80 px-8 py-5 text-lg text-slate-700 backdrop-blur-xl transition-all duration-300 hover:bg-white">

              Pelajari Lebih Lanjut

            </button>

          </div>

        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          data-aos="fade-left"
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          {/* GLOW */}

          <div className="absolute h-[580px] w-[580px] rounded-full bg-cyan-100 blur-3xl opacity-70" />

          {/* HERO IMAGE */}

          <img
            src="/images/hero.png"
            alt="Dentiva Doctor"
            className="relative z-10 w-full max-w-[950px] -mt-6 object-contain scale-[1.2]"
          />

          {/* ================= FLOATING CARD 1 ================= */}

          <motion.div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="absolute left-0 top-16 z-20"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.04,
            }}
          >

            <FeatureCard
              icon={<Activity size={18} />}
              title="AI Screening"
              subtitle="Analisis cepat & akurat"
            />

          </motion.div>

          {/* ================= FLOATING CARD 2 ================= */}

          <motion.div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="absolute right-0 top-40 z-20"
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.04,
            }}
          >

            <FeatureCard
              icon={<Calendar size={18} />}
              title="Jadwal Konsultasi"
              subtitle="Atur jadwal lebih mudah"
            />

          </motion.div>

          {/* ================= FLOATING CARD 3 ================= */}

          <motion.div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="absolute bottom-28 left-4 z-20"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.04,
            }}
          >

            <FeatureCard
              icon={<MapPin size={18} />}
              title="Lokasi Terdekat"
              subtitle="Temukan klinik terdekat"
            />

          </motion.div>

          {/* ================= FLOATING CARD 4 ================= */}

          <motion.div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="absolute bottom-12 right-10 z-20"
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.04,
            }}
          >

            <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

              {/* ICON */}

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">

                <ShieldCheck size={18} />

              </div>

              {/* TEXT */}

              <div>

                <p className="text-[15px] font-semibold text-slate-800">
                  Koas Terverifikasi
                </p>

                <p className="text-[12px] text-slate-500">
                  Aman & terpercaya
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* ================= ANIMATION ================= */}

      <style>{`

        @keyframes float {

          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-14px);
          }

          100% {
            transform: translateY(0px);
          }

        }

        @keyframes floatSlow {

          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-22px);
          }

          100% {
            transform: translateY(0px);
          }

        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-floatSlow {
          animation: floatSlow 7s ease-in-out infinite;
        }

      `}</style>

    </section>
  )
}

/* ================= FEATURE CARD ================= */

function FeatureCard({
  icon,
  title,
  subtitle,
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* ICON */}

      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">

        {icon}

      </div>

      {/* TEXT */}

      <div>

        <h3 className="text-[16px] font-semibold text-slate-800">
          {title}
        </h3>

        <p className="text-[12px] text-slate-500">
          {subtitle}
        </p>

      </div>

    </div>
  )
}

export default Hero