import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"

function Navbar() {

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

    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="flex h-[88px] items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center">

            <img
              src="/images/logo.png"
              alt="Dentiva"
              className="h-20 w-auto object-contain"
            />

          </div>

          {/* MENU */}

          <div className="hidden items-center gap-12 lg:flex">

            <a className="cursor-pointer font-semibold text-blue-600">
              Beranda
            </a>

            <a className="cursor-pointer text-slate-700 transition hover:text-blue-600">
              Fitur
            </a>

            <a className="cursor-pointer text-slate-700 transition hover:text-blue-600">
              Cara Kerja
            </a>

            <a className="cursor-pointer text-slate-700 transition hover:text-blue-600">
              Tentang Kami
            </a>

            <a className="cursor-pointer text-slate-700 transition hover:text-blue-600">
              Kontak
            </a>

          </div>

          {/* BUTTON */}

          <div className="flex items-center gap-5">

            {
              user ? (

                <button
                  onClick={() => navigate("/dashboard")}
                  className="
                    rounded-2xl
                    bg-cyan-500
                    px-6
                    py-3
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Dashboard
                </button>

              ) : (

                <button
                  onClick={() => navigate("/auth")}
                  className="
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    px-7
                    py-3
                    font-semibold
                    text-white
                    shadow-xl
                    shadow-cyan-500/20
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-cyan-500/40
                  "
                >
                  Mulai Konsultasi
                </button>

              )
            }

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar