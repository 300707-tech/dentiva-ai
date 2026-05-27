import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom"

function SelectRole() {

  const navigate = useNavigate()

  async function chooseRole(role) {

    try {

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        alert("User tidak ditemukan")
        return
      }

      const { error } = await supabase
        .from("profiles")
        .update({ role })
        .eq("id", user.id)

      if (error) {
        console.log(error)
        alert(error.message)
        return
      }

      /* REDIRECT BERDASARKAN ROLE */

      if (role === "patient") {

        navigate("/patient-dashboard")

      } else {

        navigate("/koas-dashboard")

      }

    } catch (err) {

      console.log(err)
      alert("Terjadi kesalahan")

    }
  }

  return (

    <div className="min-h-screen bg-[#f4f8fb] flex items-center justify-center p-6">

      <div className="w-full max-w-5xl">

        {/* HEADER */}

        <div className="text-center">

          <h1 className="text-6xl font-black text-slate-900">
            Pilih Peran Anda
          </h1>

          <p className="mt-5 text-2xl text-slate-500">
            PasKoas menyesuaikan pengalaman berdasarkan kebutuhan Anda.
          </p>

        </div>

        {/* CARD ROLE */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* PASIEN */}

          <button
            onClick={() => chooseRole("patient")}
            className="
              group
              rounded-[36px]
              bg-white
              p-10
              text-left
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >

            <div className="text-7xl">
              🦷
            </div>

            <h2 className="mt-8 text-4xl font-black text-slate-900">
              Pasien
            </h2>

            <p className="mt-4 text-xl leading-relaxed text-slate-500">
              Konsultasi AI, cari dokter koas, dan akses layanan kesehatan gigi modern.
            </p>

          </button>

          {/* KOAS */}

          <button
            onClick={() => chooseRole("koas")}
            className="
              group
              rounded-[36px]
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              p-10
              text-left
              shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-3
            "
          >

            <div className="text-7xl">
              👨‍⚕️
            </div>

            <h2 className="mt-8 text-4xl font-black text-white">
              Dokter Koas
            </h2>

            <p className="mt-4 text-xl leading-relaxed text-blue-100">
              Terhubung dengan pasien, bangun reputasi, dan bantu layanan kesehatan digital.
            </p>

          </button>

        </div>

      </div>

    </div>
  )
}

export default SelectRole