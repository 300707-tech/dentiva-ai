function CTA() {
  return (
    <section className="bg-white px-6 pb-24 lg:px-20">

      <div
        data-aos="fade-up"
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-slate-100
          bg-gradient-to-br
          from-cyan-50
          via-blue-50
          to-white
          shadow-[0_10px_60px_rgba(0,0,0,0.05)]
        "
      >

        {/* BACKGROUND GLOW */}

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>

        {/* CONTENT */}

        <div className="relative z-10 grid items-center gap-14 px-8 py-16 lg:grid-cols-2 lg:px-16">

          {/* LEFT */}

          <div
            data-aos="fade-right"
            data-aos-delay="150"
          >

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">

              MULAI SEKARANG

            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 lg:text-6xl">

              Siap untuk{" "}

              <span className="text-blue-600">
                Senyum
              </span>

              <br />

              Lebih Sehat?

            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">

              Mulai perjalanan kesehatan gigi digital Anda bersama Dentiva.
              Konsultasi lebih cepat, mudah, dan modern dalam satu platform pintar.

            </p>

            {/* BUTTONS */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-10 flex flex-wrap gap-5"
            >

              <button
                className="
                  rounded-2xl
                  bg-blue-600
                  px-8
                  py-5
                  text-lg
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >

                Mulai Konsultasi

              </button>

              <button
                className="
                  rounded-2xl
                  border border-slate-200
                  bg-white/80
                  px-8
                  py-5
                  text-slate-700
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white
                "
              >

                Pelajari Lebih Lanjut

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div
            data-aos="fade-left"
            data-aos-delay="250"
            className="relative flex justify-center"
          >

            {/* GLOW */}

            <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-100 opacity-70 blur-3xl"></div>

            {/* IMAGE */}

            <img
              src="/images/patient.png"
              alt="patient"
              className="
                relative
                z-10
                w-[480px]
                object-contain
              "
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default CTA