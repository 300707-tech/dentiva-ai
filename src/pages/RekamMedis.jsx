import {
  FileText,
  Calendar,
  ShieldCheck,
  Brain,
  Activity,
  ArrowLeft,
  Trash2,
} from "lucide-react"

import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import { supabase } from "../lib/supabase"

function RekamMedis() {

  const navigate = useNavigate()

  const [records, setRecords] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchMedicalRecords()

  }, [])

  async function fetchMedicalRecords() {

    setLoading(true)

    try {

      /* GET LOGIN USER */

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {

        navigate("/auth")

        return
      }

      /* FETCH DATA DARI SUPABASE */

      const { data, error } = await supabase

        .from("ai_medical_records")

        .select("*")

        .eq("user_id", user.id)

        .order("created_at", {
          ascending: false,
        })

      console.log(data)

      console.log(error)

      if (!error && data) {

        setRecords(data)
      }

    } catch (err) {

      console.log(err)
    }

    setLoading(false)
  }

  async function deleteRecord(id) {

    await supabase

      .from("ai_medical_records")

      .delete()

      .eq("id", id)

    fetchMedicalRecords()
  }

  return (

    <div className="min-h-screen bg-[#edf4ff] p-6 md:p-8">

      {/* BACKGROUND */}

      <div className="fixed inset-0 overflow-hidden">

        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-300/30 blur-[120px]" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-violet-300/30 blur-[130px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/patient-dashboard")}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-white
              shadow-lg
            "
          >
            <ArrowLeft size={18} />
          </button>

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
              Dentiva AI
            </p>

            <h1 className="mt-1 text-5xl font-black tracking-[-0.04em] text-slate-900">
              Rekam Medis
            </h1>

          </div>

        </div>

        {/* HERO */}

        <section
          className="
            mt-8
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-cyan-500
            via-blue-500
            to-violet-600
            p-8
            text-white
            shadow-2xl
          "
        >

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-[30px] bg-white/15 p-6 backdrop-blur-2xl">

              <div className="flex items-center justify-between">

                <p className="text-sm font-bold">
                  Total Records
                </p>

                <FileText />

              </div>

              <h2 className="mt-5 text-6xl font-black">
                {records.length}
              </h2>

            </div>

            <div className="rounded-[30px] bg-white/15 p-6 backdrop-blur-2xl">

              <div className="flex items-center justify-between">

                <p className="text-sm font-bold">
                  AI Detection
                </p>

                <Brain />

              </div>

              <h2 className="mt-5 text-4xl font-black">
                Active
              </h2>

            </div>

            <div className="rounded-[30px] bg-white/15 p-6 backdrop-blur-2xl">

              <div className="flex items-center justify-between">

                <p className="text-sm font-bold">
                  Cloud Status
                </p>

                <ShieldCheck />

              </div>

              <h2 className="mt-5 text-4xl font-black">
                Synced
              </h2>

            </div>

          </div>

        </section>

        {/* RECORDS */}

        <section
          className="
            mt-8
            rounded-[40px]
            bg-white
            p-6
            shadow-2xl
          "
        >

          <div className="flex items-center gap-3">

            <Activity className="text-cyan-500" />

            <h2 className="text-3xl font-black text-slate-900">
              AI Medical Records
            </h2>

          </div>

          {/* LOADING */}

          {loading ? (

            <div className="flex justify-center py-20">

              <div className="h-14 w-14 animate-spin rounded-full border-[5px] border-cyan-200 border-t-cyan-500" />

            </div>

          ) : records.length === 0 ? (

            <div className="py-20 text-center">

              <h2 className="text-3xl font-black text-slate-900">
                No Medical Records
              </h2>

              <p className="mt-3 text-slate-500">
                Belum ada hasil AI screening tersimpan.
              </p>

            </div>

          ) : (

            <div className="mt-8 grid gap-6">

              {records.map((record) => (

                <div
                  key={record.id}
                  className="
                    rounded-[35px]
                    border
                    border-slate-100
                    bg-slate-50/60
                    p-6
                  "
                >

                  <div className="grid gap-6 lg:grid-cols-[240px_1fr]">

                    {/* IMAGE */}

                    <div>

                      <img
                        src={record.image_url}
                        alt="medical"
                        className="
                          h-[240px]
                          w-full
                          rounded-[30px]
                          object-cover
                        "
                      />

                    </div>

                    {/* CONTENT */}

                    <div>

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <div
                            className="
                              inline-flex
                              rounded-full
                              bg-cyan-100
                              px-4
                              py-2
                              text-xs
                              font-bold
                              uppercase
                              tracking-[0.2em]
                              text-cyan-700
                            "
                          >
                            AI Screening Result
                          </div>

                          <h2 className="mt-5 text-4xl font-black text-slate-900">
                            {record.prediction}
                          </h2>

                        </div>

                        <button
                          onClick={() => deleteRecord(record.id)}
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-rose-100
                            text-rose-600
                          "
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                      <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
                        {record.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-4">

                        {/* CONFIDENCE */}

                        <div
                          className="
                            rounded-2xl
                            bg-white
                            px-5
                            py-3
                            shadow-md
                          "
                        >

                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            Confidence
                          </p>

                          <h3 className="mt-1 text-xl font-black text-cyan-600">
                            {record.confidence}
                          </h3>

                        </div>

                        {/* DATE */}

                        <div
                          className="
                            rounded-2xl
                            bg-white
                            px-5
                            py-3
                            shadow-md
                          "
                        >

                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            Scan Date
                          </p>

                          <div className="mt-1 flex items-center gap-2">

                            <Calendar
                              size={16}
                              className="text-slate-400"
                            />

                            <h3 className="text-sm font-bold text-slate-700">

                              {new Date(
                                record.created_at
                              ).toLocaleDateString()}

                            </h3>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </div>

    </div>
  )
}

export default RekamMedis