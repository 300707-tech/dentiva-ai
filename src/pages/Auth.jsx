import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"

function Auth() {

  const navigate = useNavigate()

  /* CHECK USER */

  useEffect(() => {

    checkUser()

  }, [])

  async function checkUser() {

    const {
      data: { user },
    } = await supabase.auth.getUser()

    /* BELUM LOGIN */

    if (!user) return

    /* CEK PROFILE */

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle()

    console.log(profile)

    /* BELUM ADA PROFILE */

    if (!profile) {

      navigate("/select-role")
      return

    }

    /* BELUM PILIH ROLE */

    if (!profile?.role) {

      navigate("/select-role")
      return

    }

    /* PATIENT */

    if (profile.role === "patient") {

      navigate("/patient-dashboard")
      return

    }

    /* KOAS */

    if (profile.role === "koas") {

      navigate("/koas-dashboard")
      return

    }
  }

  /* LOGIN GOOGLE */

  async function signInWithGoogle() {

    const { error } = await supabase.auth.signInWithOAuth({

      provider: "google",

      options: {
        redirectTo: "http://localhost:5173/auth"
      },

    })

    if (error) {
      alert(error.message)
    }
  }

  return (

    <div className="min-h-screen bg-[#f4f8fb] flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-2xl">

        <div className="flex flex-col items-center text-center">

          <img
            src="/images/logo.png"
            alt="Dentiva"
            className="h-24 object-contain"
          />

          <h1 className="mt-6 text-4xl font-black text-slate-900">
            Selamat Datang
          </h1>

          <p className="mt-3 text-lg text-slate-500">
            Masuk ke platform AI kesehatan gigi modern Dentiva.
          </p>

        </div>

        <button
          onClick={signInWithGoogle}
          className="
            mt-10
            flex
            w-full
            items-center
            justify-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-4
            text-lg
            font-semibold
            text-slate-700
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >

          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-6 w-6"
          />

          Continue with Google

        </button>

      </div>

    </div>
  )
}

export default Auth