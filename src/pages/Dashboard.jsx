import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

  const navigate = useNavigate()

  const [profile, setProfile] = useState(null)
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      navigate("/login")
      return
    }
    setUserData(user)

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle()

if (error) {

  const { error: insertError } = await supabase
    .from("profiles")
    .insert([
      {
        id: user.id,
        full_name: user.user_metadata.full_name,
        role: "",
      },
    ])

  if (insertError) {
    console.log(insertError)
  }

  navigate("/select-role")

} else {

  if (!data.role) {
    navigate("/select-role")
    return
  }

  setProfile(data)

}
  }

async function handleLogout() {

  await supabase.auth.signOut()

  navigate("/")
}

<button
  onClick={handleLogout}
  className="
    mt-10
    rounded-2xl
    bg-red-500
    px-6
    py-3
    font-bold
    text-white
  "
>
  Logout
</button>

  return (

  <div className="min-h-screen bg-[#f4f8fb] p-6 md:p-10">

    {/* HEADER */}

    <div className="mx-auto max-w-7xl">

      <div className="rounded-[40px] bg-white p-10 shadow-xl">

        <p className="text-slate-500 text-xl">
          Dashboard PasKoas
        </p>
<img
  src={userData?.user_metadata?.avatar_url}
  alt="Profile"
  className="
    h-24
    w-24
    rounded-full
    border-4
    border-blue-500
    object-cover
  "
/>
        <h1 className="mt-3 text-5xl font-black text-slate-900">

          Halo, {profile?.full_name} 👋

        </h1>

        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-slate-500">

          Selamat datang kembali di platform kesehatan gigi modern PasKoas AI.
<p className="mt-4 text-lg text-slate-400">
  {userData?.email}
</p>
        </p>

      </div>

      {/* MENU */}

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {/* AI SCREENING */}

        <div className="rounded-[32px] bg-white p-8 shadow-xl">

          <div className="text-5xl">
            🧠
          </div>

          <h2 className="mt-6 text-3xl font-black text-slate-900">
            AI Screening
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Analisis kondisi kesehatan gigi Anda secara cepat menggunakan AI.
          </p>

          <button
            className="
              mt-8
              rounded-2xl
              bg-blue-600
              px-6
              py-4
              font-bold
              text-white
            "
          >
            Mulai
          </button>

        </div>

        {/* KOAS */}

        <div className="rounded-[32px] bg-white p-8 shadow-xl">

          <div className="text-5xl">
            👨‍⚕️
          </div>

          <h2 className="mt-6 text-3xl font-black text-slate-900">
            Cari Koas
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Temukan dokter koas terpercaya untuk konsultasi dan tindakan.
          </p>

          <button
            className="
              mt-8
              rounded-2xl
              bg-cyan-500
              px-6
              py-4
              font-bold
              text-white
            "
          >
            Cari Sekarang
          </button>

        </div>

        {/* HISTORY */}

        <div className="rounded-[32px] bg-white p-8 shadow-xl">

          <div className="text-5xl">
            📄
          </div>

          <h2 className="mt-6 text-3xl font-black text-slate-900">
            Riwayat
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Lihat histori screening dan konsultasi kesehatan Anda.
          </p>

          <button
            className="
              mt-8
              rounded-2xl
              bg-slate-900
              px-6
              py-4
              font-bold
              text-white
            "
          >
            Lihat
          </button>

        </div>

        {/* PROFILE */}

        <div className="rounded-[32px] bg-white p-8 shadow-xl">

          <div className="text-5xl">
            ⚙️
          </div>

          <h2 className="mt-6 text-3xl font-black text-slate-900">
            Profile
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Edit informasi akun dan pengaturan profil Anda.
          </p>

          <button
            onClick={() => navigate("/edit-profile")}
            className="
              mt-8
              rounded-2xl
              bg-orange-500
              px-6
              py-4
              font-bold
              text-white
            "
          >
            Edit Profile
          </button>

        </div>

      </div>

      {/* LOGOUT */}

      <button
        onClick={handleLogout}
        className="
          mt-10
          rounded-2xl
          bg-red-500
          px-8
          py-4
          font-bold
          text-white
        "
      >
        Logout
      </button>

    </div>

  </div>

  )
}