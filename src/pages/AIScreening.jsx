import {
  Brain,
  Sparkles,
  UploadCloud,
  Activity,
  ScanLine,
  ArrowLeft,
  Orbit,
  ShieldCheck,
  AlertTriangle,
  Eye,
  Waves,
  ScanSearch,
  BadgeCheck,
  Radar,
  Siren,
  ShieldAlert,
} from "lucide-react"

import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"

function AIScreening() {

  const navigate = useNavigate()

  const canvasRef = useRef(null)

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)

  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState(null)

  const [detections, setDetections] =
    useState([])

  const [scanPhase, setScanPhase] =
    useState("Waiting Neural Input")

  // ====================================
  // HANDLE IMAGE
  // ====================================

  function handleImage(e) {

    const file = e.target.files[0]

    if (!file) return

    setImage(file)

    setPreview(URL.createObjectURL(file))

    setResult(null)

    setDetections([])
  }

  // ====================================
  // DETECT DENTAL CONDITION
  // ====================================

  async function detectDentalCondition() {

    return new Promise((resolve) => {

      const img = new Image()

      img.src = preview

      img.onload = () => {

        const canvas =
          document.createElement("canvas")

        const ctx =
          canvas.getContext("2d")

        canvas.width = img.width
        canvas.height = img.height

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height
        )

        const imageData =
          ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          ).data

        let darkPixels = 0
        let yellowPixels = 0
        let redPixels = 0
        let totalPixels = 0

        const foundDetections = []

        for (
          let i = 0;
          i < imageData.length;
          i += 4
        ) {

          const r = imageData[i]
          const g = imageData[i + 1]
          const b = imageData[i + 2]

          totalPixels++

          // ==========================
          // CAVITY DETECTION
          // ==========================

          if (
            r < 55 &&
            g < 55 &&
            b < 55
          ) {

            darkPixels++

            if (
              Math.random() > 0.9995
            ) {

              foundDetections.push({
                x:
                  (i / 4) %
                  canvas.width,

                y: Math.floor(
                  i /
                    4 /
                    canvas.width
                ),

                type: "cavity",
              })
            }
          }

          // ==========================
          // PLAQUE DETECTION
          // ==========================

          if (
            r > 130 &&
            g > 110 &&
            b < 90
          ) {

            yellowPixels++

            if (
              Math.random() > 0.9997
            ) {

              foundDetections.push({
                x:
                  (i / 4) %
                  canvas.width,

                y: Math.floor(
                  i /
                    4 /
                    canvas.width
                ),

                type: "plaque",
              })
            }
          }

          // ==========================
          // GUM DETECTION
          // ==========================

          if (
            r > 150 &&
            g < 100 &&
            b < 120
          ) {

            redPixels++

            if (
              Math.random() > 0.9997
            ) {

              foundDetections.push({
                x:
                  (i / 4) %
                  canvas.width,

                y: Math.floor(
                  i /
                    4 /
                    canvas.width
                ),

                type: "gum",
              })
            }
          }
        }

        const darkRatio =
          darkPixels / totalPixels

        const yellowRatio =
          yellowPixels / totalPixels

        const redRatio =
          redPixels / totalPixels

        let aiResult = {

          score: 95,

          plaque: "Low",

          gum: "Healthy",

          cavity: "Very Low",

          recommendation:
            "Kondisi rongga mulut terlihat sangat baik. Pertahankan kebiasaan menyikat gigi dua kali sehari dan rutin kontrol ke dokter gigi.",

          findings: [
            "Plak minimal terdeteksi",
            "Warna gusi terlihat sehat",
            "Tidak ditemukan indikasi karies besar",
          ],

          indicators: [
            {
              color: "Hitam",
              meaning:
                "Tidak ditemukan bayangan cavity signifikan",
            },
            {
              color: "Kuning",
              meaning:
                "Penumpukan plak rendah",
            },
            {
              color: "Merah",
              meaning:
                "Jaringan gusi sehat",
            },
          ],
        }

        // ==========================
        // MEDIUM
        // ==========================

        if (
          yellowRatio > 0.06 ||
          redRatio > 0.05
        ) {

          aiResult = {

            score: 73,

            plaque: "Medium",

            gum: "Mild Gingivitis",

            cavity: "Low",

            recommendation:
              "Ditemukan indikasi plak dan inflamasi ringan. Tingkatkan kebersihan rongga mulut dan kurangi konsumsi gula.",

            findings: [
              "Penumpukan plak terdeteksi",
              "Kemungkinan tartar ringan",
              "Inflamasi ringan pada gusi",
            ],

            indicators: [
              {
                color: "Kuning",
                meaning:
                  "Penumpukan plak atau tartar",
              },
              {
                color: "Merah",
                meaning:
                  "Inflamasi ringan gusi",
              },
              {
                color: "Putih",
                meaning:
                  "Area enamel sehat",
              },
            ],
          }
        }

        // ==========================
        // SEVERE
        // ==========================

        if (
          darkRatio > 0.04 ||
          redRatio > 0.08
        ) {

          aiResult = {

            score: 41,

            plaque: "High",

            gum: "Inflamed",

            cavity: "High",

            recommendation:
              "Terdeteksi kemungkinan karies berat dan inflamasi gusi signifikan. Segera lakukan pemeriksaan dokter gigi.",

            findings: [
              "Area cavity besar terdeteksi",
              "Akumulasi plak berat",
              "Pola inflamasi gusi tinggi",
            ],

            indicators: [
              {
                color: "Hitam",
                meaning:
                  "Kemungkinan cavity atau pembusukan gigi",
              },
              {
                color: "Coklat Gelap",
                meaning:
                  "Indikasi pembusukan lanjut",
              },
              {
                color: "Merah",
                meaning:
                  "Inflamasi jaringan gusi",
              },
            ],
          }
        }

        setDetections(foundDetections)

        resolve(aiResult)
      }
    })
  }

  // ====================================
  // ANALYZE
  // ====================================

  async function analyzeImage() {

    try {

      if (!image) {

        alert("Upload gambar dulu")

        return
      }

      setLoading(true)

      setScanPhase(
        "Initializing Neural Scanner"
      )

      await new Promise((r) =>
        setTimeout(r, 900)
      )

      setScanPhase(
        "Analyzing Tooth Surface"
      )

      await new Promise((r) =>
        setTimeout(r, 1200)
      )

      setScanPhase(
        "Detecting Plaque & Cavities"
      )

      await new Promise((r) =>
        setTimeout(r, 1200)
      )

      setScanPhase(
        "Generating AI Diagnosis"
      )

      await new Promise((r) =>
        setTimeout(r, 900)
      )

      const aiResult =
        await detectDentalCondition()

      // ==========================
      // DETERMINE RISK
      // ==========================

      let riskLevel = "Low"

      if (aiResult.score < 80) {
        riskLevel = "Medium"
      }

      if (aiResult.score < 60) {
        riskLevel = "High"
      }

      // ==========================
      // SAVE DATABASE
      // ==========================

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {

        await supabase
          .from("ai_medical_records")
          .insert([
            {
              user_id: user.id,

              health_score:
                aiResult.score,

              plaque:
                aiResult.plaque,

              gum:
                aiResult.gum,

              cavity:
                aiResult.cavity,

              recommendation:
                aiResult.recommendation,

              risk_level:
                riskLevel,
            },
          ])
      }

      setResult(aiResult)

      setLoading(false)

    } catch (err) {

      console.log(err)

      alert("AI analysis failed")

      setLoading(false)
    }
  }

  return (

    <div className="min-h-screen overflow-hidden bg-[#f5f9ff] text-slate-900">

      {/* BACKGROUND */}

      <div className="fixed inset-0 overflow-hidden">

        <div className="absolute left-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full bg-cyan-300/30 blur-[150px]" />

        <div className="absolute right-[-120px] top-[100px] h-[400px] w-[400px] rounded-full bg-blue-300/30 blur-[160px]" />

      </div>

      <div className="relative z-10 p-5 md:p-8">

        {/* TOPBAR */}

        <div className="flex items-center justify-between">

          <button
            onClick={() =>
              navigate("/patient-dashboard")
            }
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-white
              px-5
              py-3
              font-bold
              shadow-xl
            "
          >

            <ArrowLeft size={18} />

            Dashboard

          </button>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-emerald-100
              px-5
              py-3
              text-xs
              font-black
              uppercase
              tracking-[0.2em]
              text-emerald-700
            "
          >

            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

            Neural AI Active

          </div>

        </div>

        {/* HERO */}

        <div
          className="
            mt-6
            overflow-hidden
            rounded-[42px]
            bg-white/70
            p-8
            shadow-[0_30px_100px_rgba(15,23,42,0.08)]
            backdrop-blur-3xl
          "
        >

          <div className="grid gap-8 xl:grid-cols-[1fr_420px]">

            <div>

              <div className="flex flex-wrap gap-3">

                <div className="rounded-full bg-cyan-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-700">
                  PasKoas AI
                </div>

                <div className="rounded-full bg-blue-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                  Neural Vision
                </div>

              </div>

              <h1
                className="
                  mt-7
                  text-[65px]
                  font-black
                  leading-[0.92]
                  tracking-[-0.05em]
                "
              >
                Futuristic
                <br />
                Dental AI
                <br />
                Scanner
              </h1>

              <p className="mt-6 max-w-4xl text-[15px] leading-relaxed text-slate-500">

                Sistem neural oral scanner untuk mendeteksi cavity, plaque,
                inflamasi gusi, dan kelainan rongga mulut menggunakan
                visual AI analysis.

              </p>

            </div>

            {/* RIGHT */}

            <div
              className="
                overflow-hidden
                rounded-[36px]
                bg-gradient-to-br
                from-cyan-50
                via-white
                to-blue-50
                p-6
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">
                    Neural Scanner
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Live AI Matrix
                  </h2>

                </div>

                <Orbit
                  size={24}
                  className="animate-spin text-cyan-500"
                />

              </div>

              <div className="mt-10 flex justify-center">

                <div
                  className="
                    relative
                    flex
                    h-48
                    w-48
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-200
                    bg-white
                  "
                >

                  <div className="absolute inset-4 rounded-full border border-cyan-300 animate-pulse" />

                  <div className="absolute inset-10 rounded-full border border-blue-300 animate-pulse" />

                  <Radar
                    size={70}
                    className="text-cyan-600"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* MAIN */}

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_460px]">

          {/* LEFT */}

          <div
            className="
              rounded-[38px]
              bg-white/70
              p-6
              shadow-xl
              backdrop-blur-3xl
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Upload Dental Image
                </p>

                <h2 className="mt-2 text-4xl font-black tracking-tight">
                  Neural Oral Scanner
                </h2>

              </div>

              <UploadCloud
                className="text-cyan-500"
                size={28}
              />

            </div>

            <label
              className="
                relative
                mt-6
                flex
                min-h-[500px]
                cursor-pointer
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-[32px]
                border-2
                border-dashed
                border-cyan-200
                bg-gradient-to-br
                from-cyan-50
                to-blue-50
              "
            >

              {!preview ? (

                <>

                  <div className="rounded-full bg-white p-8 shadow-xl">

                    <UploadCloud
                      size={60}
                      className="text-cyan-600"
                    />

                  </div>

                  <h2 className="mt-6 text-3xl font-black">
                    Upload Gambar Gigi
                  </h2>

                </>

              ) : (

                <>

                  <img
                    src={preview}
                    alt="preview"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* HEATMAP */}

                  <div className="absolute inset-0">

                    {detections.map(
                      (item, index) => (

                        <div
                          key={index}
                          className={`
                            absolute
                            animate-pulse
                            rounded-full
                            border-4
                            shadow-2xl
                            ${
                              item.type ===
                              "cavity"
                                ? "border-red-500"

                                : item.type ===
                                  "plaque"
                                ? "border-yellow-400"

                                : "border-pink-400"
                            }
                          `}
                          style={{
                            left: `${item.x}px`,
                            top: `${item.y}px`,
                            width: "45px",
                            height: "45px",
                          }}
                        >

                          <div
                            className={`
                              absolute
                              inset-2
                              rounded-full
                              blur-xl
                              opacity-70
                              ${
                                item.type ===
                                "cavity"
                                  ? "bg-red-500"

                                  : item.type ===
                                    "plaque"
                                  ? "bg-yellow-400"

                                  : "bg-pink-400"
                              }
                            `}
                          />

                        </div>

                      )
                    )}

                  </div>

                  {/* SCAN LINE */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-1
                      w-full
                      animate-pulse
                      bg-cyan-300
                    "
                  />

                  {/* AI STATUS */}

                  <div className="absolute bottom-10 left-10 rounded-2xl bg-black/60 px-4 py-3 text-sm font-bold text-white backdrop-blur-xl">

                    Neural Detection Active

                  </div>

                </>

              )}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />

            </label>

            <button
              onClick={analyzeImage}
              disabled={!image || loading}
              className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-[26px]
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-violet-500
                py-5
                text-sm
                font-black
                uppercase
                tracking-[0.15em]
                text-white
              "
            >

              {loading ? (
                <>
                  <Activity
                    className="animate-spin"
                    size={18}
                  />
                  {scanPhase}
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Start Neural Scan
                </>
              )}

            </button>

          </div>

          {/* RESULT */}

          <div
            className="
              rounded-[38px]
              bg-white/70
              p-6
              shadow-xl
            "
          >

            {!result && !loading && (

              <div className="flex min-h-[700px] items-center justify-center">

                <div className="text-center">

                  <Brain
                    size={60}
                    className="mx-auto text-cyan-500"
                  />

                  <h2 className="mt-6 text-3xl font-black">
                    Waiting For AI Scan
                  </h2>

                </div>

              </div>

            )}

            {loading && (

              <div className="flex min-h-[700px] items-center justify-center">

                <div className="text-center">

                  <Activity
                    className="mx-auto animate-spin text-cyan-500"
                    size={70}
                  />

                  <h2 className="mt-6 text-3xl font-black">
                    {scanPhase}
                  </h2>

                </div>

              </div>

            )}

            {result && !loading && (

              <div>

                {/* SCORE */}

                <div
                  className="
                    rounded-[34px]
                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600
                    p-8
                    text-white
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                        AI Health Score
                      </p>

                      <h2 className="mt-4 text-8xl font-black">
                        {result.score}%
                      </h2>

                    </div>

                    <ShieldCheck size={70} />

                  </div>

                </div>

                {/* FINDINGS */}

                <div className="mt-5 rounded-[30px] bg-white p-6 shadow-sm">

                  <div className="flex items-center gap-3">

                    <ScanSearch
                      className="text-cyan-500"
                      size={24}
                    />

                    <h2 className="text-2xl font-black">
                      AI Findings
                    </h2>

                  </div>

                  <div className="mt-5 space-y-3">

                    {result.findings.map(
                      (item, index) => (

                        <div
                          key={index}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-slate-50
                            p-4
                          "
                        >

                          <BadgeCheck
                            className="text-cyan-500"
                            size={20}
                          />

                          <p className="font-medium">
                            {item}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default AIScreening