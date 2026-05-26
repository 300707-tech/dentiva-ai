import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "Seberapa sering kamu menyikat gigi?",
    answers: ["2x sehari", "1x sehari", "Jarang"],
  },

  {
    question: "Apakah gusimu sering berdarah?",
    answers: ["Ya", "Kadang", "Tidak"],
  },

  {
    question: "Apakah kamu merasakan gigi sensitif?",
    answers: ["Ya", "Kadang", "Tidak"],
  },
];

function AIScreening() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-28 lg:px-20">

      {/* GLOW */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* TITLE */}

      <div
        data-aos="fade-up"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >

        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">

          AI SCREENING

        </span>

        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white lg:text-6xl">

          Pemeriksaan Gigi
          <span className="text-cyan-400">
            {" "}30 Detik
          </span>

        </h2>

        <p className="mt-6 text-lg leading-relaxed text-slate-400">

          Jawab beberapa pertanyaan singkat untuk mendapatkan
          analisis awal kondisi kesehatan mulut Anda.

        </p>

      </div>

      {/* CARD */}

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="relative z-10 mx-auto mt-20 max-w-3xl"
      >

        <div
          className="
            rounded-[36px]
            border border-white/10
            bg-white/5
            p-10
            backdrop-blur-xl
            shadow-[0_20px_80px_rgba(0,0,0,0.35)]
          "
        >

          {/* PROGRESS */}

          {!finished && (
            <div className="mb-10 flex items-center gap-3">

              {questions.map((_, index) => (

                <div
                  key={index}
                  className={`
                    h-2 flex-1 rounded-full transition-all duration-500
                    ${
                      index <= step
                        ? "bg-cyan-400"
                        : "bg-white/10"
                    }
                  `}
                />

              ))}

            </div>
          )}

          {/* CONTENT */}

          <AnimatePresence mode="wait">

            {!finished ? (

              <motion.div
                key={step}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.45 }}
              >

                <h3 className="text-3xl font-semibold leading-snug text-white">

                  {questions[step].question}

                </h3>

                {/* ANSWERS */}

                <div className="mt-10 grid gap-4">

                  {questions[step].answers.map((answer, index) => (

                    <button
                      key={index}
                      onClick={handleAnswer}
                      className="
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        px-6
                        py-5
                        text-left
                        text-lg
                        text-slate-200
                        transition-all
                        duration-300
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/10
                        hover:text-white
                      "
                    >

                      {answer}

                    </button>

                  ))}

                </div>

              </motion.div>

            ) : (

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-400/20 text-5xl">

                  🦷

                </div>

                <h3 className="mt-8 text-4xl font-semibold text-white">

                  Risiko Rendah

                </h3>

                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400">

                  Kondisi kesehatan mulut Anda terlihat cukup baik.
                  Tetap jaga kebersihan gigi dan lakukan pemeriksaan rutin.

                </p>

                <button
                  className="
                    mt-10
                    rounded-2xl
                    bg-cyan-400
                    px-8
                    py-5
                    text-lg
                    font-semibold
                    text-slate-900
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >

                  Konsultasi Sekarang

                </button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}

export default AIScreening;