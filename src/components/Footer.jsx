import {
  Home,
  LayoutGrid,
  Workflow,
  MessageCircle,
  ShieldCheck,
  Lock,
} from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#f5f8fc] px-8 pb-12 pt-6">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}

        <div className="grid gap-10 md:grid-cols-4">

          {/* ===================================== */}
          {/* LEFT */}
          {/* ===================================== */}

          <div>

            {/* LOGO */}

            <div className="flex items-center gap-3">

              <img
                src="/images/logo.png"
                alt="Dentiva"
                className="h-30 object-contain"
              />

            </div>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-sm text-[18px] leading-relaxed text-slate-500">

              Platform kesehatan gigi modern
              berbasis AI yang menghubungkan
              pasien dengan koas terpercaya
              secara cepat dan aman.

            </p>

          </div>

          {/* ===================================== */}
          {/* NAVIGATION */}
          {/* ===================================== */}

          <div>

            <h3 className="text-[20px] font-bold tracking-wide text-[#0f172a]">

              NAVIGASI

            </h3>

            <div className="mt-3 space-y-4">

              <NavItem
                icon={<Home size={20} />}
                text="Beranda"
              />

              <NavItem
                icon={<LayoutGrid size={20} />}
                text="Fitur"
              />

              <NavItem
                icon={<Workflow size={20} />}
                text="Cara Kerja"
              />

              <NavItem
                icon={<MessageCircle size={20} />}
                text="Konsultasi"
              />

            </div>

          </div>

          {/* ===================================== */}
          {/* TECHNOLOGY */}
          {/* ===================================== */}

          <div>

            <h3 className="text-[24px] font-bold tracking-wide text-[#0f172a]">

              TEKNOLOGI

            </h3>

            <div className="mt-6 flex flex-wrap gap-3">

              <TechItem text="Gemini AI" />

              <TechItem text="Firebase" />

              <TechItem text="React" />

              <TechItem text="Tailwind" />

              <TechItem text="Vercel" />

            </div>

          </div>

          {/* ===================================== */}
          {/* HELP CENTER */}
          {/* ===================================== */}

          <div>

            <h3 className="text-[24px] font-bold tracking-wide text-[#0f172a]">

              PUSAT BANTUAN

            </h3>

            <div className="mt-6 space-y-4 text-[17px] text-slate-600">

              <p>

                📧 firazonecho@gmail.com

              </p>

              <p>

                📱 081234245653

              </p>

              <p>

                🏆 NEC UNNES 2026

              </p>

            </div>

            {/* PARTNER */}

            <h4 className="mt-8 text-[20px] font-semibold text-[#0f172a]">

              MITRA

            </h4>

            <div className="mt-4 flex flex-wrap gap-3">

              <PartnerItem text="RS Gigi Sehat" />

              <PartnerItem text="SmileCare" />

              <PartnerItem text="Dental AI Lab" />

            </div>

          </div>

        </div>

        {/* LINE */}

        <div className="my-8 h-[1px] w-full bg-slate-200"></div>

        {/* BOTTOM */}

        <div className="flex flex-col gap-4 text-[16px] text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>

            © 2026 Dentiva. All rights reserved.

          </p>

          <div className="flex items-center gap-5">

            <div className="flex items-center gap-2">

              <ShieldCheck size={18} />

              <span>

                Data Aman

              </span>

            </div>

            <div className="flex items-center gap-2">

              <Lock size={18} />

              <span>

                SSL Secure

              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

/* ===================================== */
/* NAV ITEM */
/* ===================================== */

function NavItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-[18px] text-slate-600 transition hover:text-blue-600">

      <div className="text-blue-500">

        {icon}

      </div>

      <span>

        {text}

      </span>

    </div>
  )
}

/* ===================================== */
/* TECH ITEM */
/* ===================================== */

function TechItem({ text }) {
  return (
    <div className="border border-slate-200 px-4 py-2 text-[16px] text-slate-600">

      {text}

    </div>
  )
}

/* ===================================== */
/* PARTNER ITEM */
/* ===================================== */

function PartnerItem({ text }) {
  return (
    <div className="border border-slate-200 px-4 py-2 text-[15px] text-slate-600">

      {text}

    </div>
  )
}

export default Footer