import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom"

export default function EditProfile() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    gender: "",
    phone: "",
    campus: "",
    city: "",
  })

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle()

    if (data) {
      setFormData({
        full_name: data.full_name || "",
        age: data.age || "",
        gender: data.gender || "",
        phone: data.phone || "",
        campus: data.campus || "",
        city: data.city || "",
      })
    }
  }

  async function handleUpdate(e) {

    e.preventDefault()

    setLoading(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: formData.full_name,
        age: formData.age,
        gender: formData.gender,
        phone: formData.phone,
        campus: formData.campus,
        city: formData.city,
      })
      .eq("id", user.id)

    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      alert("Profile berhasil diupdate")
      navigate("/dashboard")
    }
  }

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-xl">

        <h1 className="text-5xl font-black text-slate-900">
          Edit Profile
        </h1>

        <form
          onSubmit={handleUpdate}
          className="mt-10 space-y-6"
        >

          <input
            type="text"
            placeholder="Nama Lengkap"
            value={formData.full_name}
            onChange={(e) =>
              setFormData({
                ...formData,
                full_name: e.target.value,
              })
            }
            className="w-full rounded-2xl border p-5 text-xl"
          />

          <input
            type="number"
            placeholder="Umur"
            value={formData.age}
            onChange={(e) =>
              setFormData({
                ...formData,
                age: e.target.value,
              })
            }
            className="w-full rounded-2xl border p-5 text-xl"
          />

          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
            className="w-full rounded-2xl border p-5 text-xl"
          >

            <option value="">
              Pilih Gender
            </option>

            <option value="Laki-laki">
              Laki-laki
            </option>

            <option value="Perempuan">
              Perempuan
            </option>

          </select>

          <input
            type="text"
            placeholder="Nomor HP"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            className="w-full rounded-2xl border p-5 text-xl"
          />

          <input
            type="text"
            placeholder="Kampus"
            value={formData.campus}
            onChange={(e) =>
              setFormData({
                ...formData,
                campus: e.target.value,
              })
            }
            className="w-full rounded-2xl border p-5 text-xl"
          />

          <input
            type="text"
            placeholder="Kota"
            value={formData.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value,
              })
            }
            className="w-full rounded-2xl border p-5 text-xl"
          />

          <button
            disabled={loading}
            className="
              w-full
              rounded-2xl
              bg-cyan-500
              py-5
              text-2xl
              font-bold
              text-white
            "
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>

        </form>

      </div>

    </div>
  )
}