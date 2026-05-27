import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import story1 from "../assets/story1-new.png";
import story2 from "../assets/story2-new.png";
import story3 from "../assets/story3-new.png";
import story4 from "../assets/story4-new.png";

const slides = [
  {
    image: story1,
    title: "Masalah Budi",
    desc: "Budi mengalami sakit gigi namun terkendala biaya pengobatan.",
  },

  {
    image: story2,
    title: "Perjuangan Sarah",
    desc: "Sarah membutuhkan pasien untuk menambah pengalaman klinis dan CV.",
  },

  {
    image: story3,
    title: "Dipertemukan PasKoas",
    desc: "PasKoas mempertemukan pasien dan dokter koas secara cepat.",
  },

  {
    image: story4,
    title: "Solusi Bersama",
    desc: "Budi mendapatkan perawatan dan Sarah memperoleh pengalaman terverifikasi.",
  },
];

export default function StorySection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-6 py-24 lg:px-16">

      {/* TITLE */}

      <div
        data-aos="fade-up"
        className="mx-auto max-w-3xl text-center"
      >

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
          Story Behind PasKoas
        </p>

        <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 lg:text-6xl">

          Menghubungkan Pasien &
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            {" "}Dokter Koas
          </span>

        </h2>

        <p className="mt-6 text-lg leading-relaxed text-slate-500">

          PasKoas hadir sebagai jembatan antara pasien yang membutuhkan
          perawatan gigi terjangkau dan dokter koas yang membutuhkan
          pengalaman klinis nyata.

        </p>

      </div>

      {/* SLIDER CONTAINER */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative mx-auto mt-20 flex max-w-6xl items-center justify-center"
      >

        {/* LEFT BUTTON */}

        {current > 0 && (
          <button
            onClick={prevSlide}
            className="
              absolute left-0 z-30
              flex h-12 w-12 items-center justify-center
              rounded-full bg-white shadow-xl
              text-2xl font-bold text-slate-700
              transition-all duration-300
              hover:scale-110
            "
          >
            ←
          </button>
        )}

        {/* IMAGE */}

        <div className="relative overflow-hidden rounded-[40px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

          <AnimatePresence mode="wait">

            <motion.img
              key={current}
              src={slides[current].image}
              alt={`slide-${current}`}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.55 }}
              className="
                w-full
                max-w-5xl
                object-contain
              "
            />

          </AnimatePresence>

        </div>

        {/* RIGHT BUTTON */}

        {current < slides.length - 1 && (
          <button
            onClick={nextSlide}
            className="
              absolute right-0 z-30
              flex h-12 w-12 items-center justify-center
              rounded-full bg-white shadow-xl
              text-2xl font-bold text-slate-700
              transition-all duration-300
              hover:scale-110
            "
          >
            →
          </button>
        )}

      </div>

      {/* STORY TEXT */}

      <motion.div
        key={current + "-text"}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto mt-10 max-w-3xl text-center"
      >

        <h3 className="text-3xl font-semibold text-slate-900">
          {slides[current].title}
        </h3>

        <p className="mt-5 text-lg leading-relaxed text-slate-500">
          {slides[current].desc}
        </p>

      </motion.div>

      {/* INDICATOR */}

      <div className="mt-10 flex justify-center gap-3">

        {slides.map((_, index) => (
          <div
            key={index}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                current === index
                  ? "w-10 bg-blue-600"
                  : "w-2 bg-slate-300"
              }
            `}
          />
        ))}

      </div>

    </section>
  );
}