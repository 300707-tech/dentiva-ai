import {
  Smile,
  Users,
  Building2,
  Star,
  Activity,
  Sparkles,
  Brain,
  ShieldCheck,
  Clock,
  MapPinned,
} from "lucide-react"

const stats = [
  {
    icon: <Clock size={24} />,
    number: "< 5 Menit",
    label: "Rata-rata Matching",
    position:
      "top-[2%] left-[40%] -translate-x-1/2",
    glow: "from-sky-400/30 to-cyan-500/10",
    iconColor: "text-sky-500",
  },

  {
    icon: <Smile size={24} />,
    number: "10K+",
    label: "Pasien Aktif",
    position:
      "top-[18%] left-[8%] lg:top-[2%] lg:left-[19%]",
    glow: "from-cyan-400/30 to-blue-500/10",
    iconColor: "text-cyan-500",
  },

  {
    icon: <Users size={24} />,
    number: "150+",
    label: "Koas Terhubung",
    position:
      "top-[20%] right-[8%] lg:top-[2%] lg:right-[18%]",
    glow: "from-blue-400/30 to-indigo-500/10",
    iconColor: "text-blue-500",
  },

  {
    icon: <Building2 size={24} />,
    number: "300+",
    label: "Klinik Partner",
    position:
      "top-[42%] right-[14%] lg:top-[39%] lg:right-[18%]",
    glow: "from-emerald-400/30 to-cyan-500/10",
    iconColor: "text-emerald-500",
  },

  {
    icon: <ShieldCheck size={24} />,
    number: "99%",
    label: "Data Aman",
    position:
      "bottom-[24%] right-[20%] lg:bottom-[5%] lg:right-[18%]",
    glow: "from-emerald-400/30 to-teal-500/10",
    iconColor: "text-emerald-500",
  },

    {
    icon: <Activity size={24} />,
    number: "24/7",
    label: "AI Monitoring",
    position:
      "top-[10%] left-[28%] lg:top-[2%] lg:left-[90%]",
    glow: "from-cyan-400/30 to-sky-500/10",
    iconColor: "text-cyan-400",
  },

    {
    icon: <Sparkles size={24} />,
    number: "98%",
    label: "AI Accuracy",
    position:
      "top-[10%] right-[28%] lg:top-[39%] lg:right-[0%]",
    glow: "from-blue-400/30 to-indigo-500/10",
    iconColor: "text-blue-400",
  },
  
  {
    icon: <Star size={24} />,
    number: "4.9/5",
    label: "User Rating",
    position:
      "bottom-[8%] right-[10%] lg:bottom-[5%] lg:right-[44%]",
    glow: "from-amber-400/30 to-orange-500/10",
    iconColor: "text-amber-500",
  },

  {
    icon: <Star size={24} />,
    number: "15K+",
    label: "Positive Reviews",
    position:
      "bottom-[2%] right-[30%] lg:bottom-[4%] lg:right-[0%]",
    glow: "from-yellow-400/30 to-amber-500/10",
    iconColor: "text-yellow-400",
  },

  {
    icon: <Clock size={24} />,
    number: "0.8s",
    label: "Average Response",
    position:
      "bottom-[2%] left-[30%] lg:bottom-[4%] lg:left-[0%]",
    glow: "from-sky-400/30 to-cyan-500/10",
    iconColor: "text-sky-400",
  },

  {
    icon: <Brain size={24} />,
    number: "1.2M",
    label: "AI Data Processed",
    position:
      "bottom-[28%] right-[30%] lg:bottom-[36%] lg:right-[88%]",
    glow: "from-fuchsia-400/30 to-purple-500/10",
    iconColor: "text-fuchsia-400",
  },

  {
    icon: <MapPinned size={24} />,
    number: "80+",
    label: "Cities Connected",
    position:
      "bottom-[28%] left-[30%] lg:bottom-[76%] lg:left-[0%]",
    glow: "from-orange-400/30 to-amber-500/10",
    iconColor: "text-orange-400",
  },

  {
    icon: <Brain size={24} />,
    number: "4K+",
    label: "AI Screening",
    position:
      "bottom-[22%] left-[18%] lg:bottom-[39%] lg:left-[20%]",
    glow: "from-violet-400/30 to-fuchsia-500/10",
    iconColor: "text-violet-500",
  },

  {
    icon: <MapPinned size={24} />,
    number: "34",
    label: "Provinsi",
    position:
      "bottom-[6%] left-[6%] lg:bottom-[5%] lg:left-[20%]",
    glow: "from-pink-400/30 to-rose-500/10",
    iconColor: "text-pink-500",
  },
]

function Statistics() {
  return (
    <section className="relative overflow-hidden bg-[#f4fbff] px-6 py-36 lg:px-20">

      {/* GRID BACKGROUND */}

<div
  className="
    absolute inset-0 opacity-[0.08]
    [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
    [background-size:60px_60px]
  "
/>

      {/* GLOW BACKGROUND */}

<div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-300/40 blur-[140px]" />

<div className="absolute bottom-[-140px] right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-300/40 blur-[140px]" />

      {/* PARTICLES */}

      <div className="absolute left-[20%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-cyan-300" />

      <div className="absolute right-[25%] top-[35%] h-2 w-2 animate-pulse rounded-full bg-blue-300" />

      <div className="absolute bottom-[20%] left-[35%] h-2 w-2 animate-pulse rounded-full bg-cyan-200" />

      {/* TITLE */}

      <div
        data-aos="fade-up"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >

        <span
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-cyan-400/20
            bg-cyan-400/10
            px-5 py-2
            text-sm
            font-medium
            text-cyan-300
            backdrop-blur-xl
          "
        >

          <Activity size={16} />

          LIVE DENTAL ECOSYSTEM

        </span>

        <h2
          className="
            mt-8
            text-5xl
            font-semibold
            tracking-tight
            text-slate-900
            lg:text-7xl
          "
        >

          PasKoas{" "}

          <span
            className="
              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-cyan-300
              bg-clip-text
              text-transparent
            "
          >

            Live Network

          </span>

        </h2>

        <p
          className="
            mx-auto
            mt-7
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
          "
        >

          PasKoas membangun ekosistem kesehatan gigi digital
          yang menghubungkan pasien, koas, dan fasilitas klinik
          dalam satu jaringan cerdas berbasis AI.

        </p>

      </div>

      {/* NETWORK AREA */}

      <div className="relative z-10 mx-auto mt-24 flex min-h-[950px] max-w-7xl items-center justify-center">

        {/* CONNECTION LINE HORIZONTAL */}

        <div className="absolute h-[2px] w-[65%] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* CONNECTION LINE VERTICAL */}

        <div className="absolute h-[65%] w-[2px] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />

        {/* CENTER CORE */}

        <div
          data-aos="zoom-in"
          className="relative flex items-center justify-center"
        >

          {/* OUTER GLOW */}

          <div className="absolute h-[520px] w-[520px] animate-pulse rounded-full bg-cyan-400/10 blur-[100px]" />

          {/* ORBIT RINGS */}

          <div
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              border border-cyan-400/10
            "
          />

          <div
            className="
              absolute
              h-[520px]
              w-[520px]
              rounded-full
              border border-blue-400/5
            "
          />

          {/* CORE */}

<div
  className="
    relative
    flex
    h-[260px]
    w-[260px]
    flex-col
    items-center
    justify-center
    rounded-full
    border border-cyan-100
    bg-white/70
    backdrop-blur-3xl
    shadow-[0_0_120px_rgba(34,211,238,0.15)]
  "
>

            {/* ICON */}

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-600
                text-slate-900
                shadow-[0_10px_50px_rgba(34,211,238,0.45)]
              "
            >

              <Sparkles size={34} />

            </div>

            {/* TITLE */}

            <h3 className="mt-7 text-4xl font-bold text-slate-900">

              PasKoas

            </h3>

            {/* DESC */}

            <p
              className="
                mt-4
                max-w-[180px]
                text-center
                text-sm
                leading-relaxed
                text-slate-600
              "
            >

              AI-powered dental ecosystem for smarter oral healthcare.

            </p>

            {/* STATUS */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-2
                rounded-full
                border border-emerald-400/20
                bg-emerald-400/10
                px-4 py-2
                text-xs
                font-medium
                text-emerald-300
              "
            >

              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              System Active

            </div>

          </div>

        </div>

{/* FLOATING CARDS */}

{stats.map((item, index) => (

  <div
    key={index}
    data-aos="fade-up"
    data-aos-delay={index * 120}
    className={`
      absolute
      ${item.position}
    `}
  >

    <div
      className={`
        group
        relative
        overflow-hidden

        ${
          index % 2 === 0
            ? "animate-float-slow"
            : "animate-float-fast"
        }

        
        rounded-[36px]
        border border-cyan-100
        bg-white/70
        p-7
        backdrop-blur-3xl
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:scale-[1.03]
      `}
    >

      {/* HOVER GLOW */}

      <div
        className={`
          absolute inset-0 opacity-0 blur-2xl
          transition duration-500
          group-hover:opacity-100
          bg-gradient-to-br ${item.glow}
        `}
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* ICON */}

        <div
          className={`
            flex h-14 w-14 items-center justify-center
            rounded-2xl bg-white/10 backdrop-blur-xl
            ${item.iconColor}
          `}
        >

          {item.icon}

        </div>

        {/* NUMBER */}

        <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">

          {item.number}

        </h3>

        {/* LABEL */}

        <p className="mt-3 text-base text-slate-600">

          {item.label}

        </p>

      </div>

    </div>

  </div>

))}

      </div>

      {/* FOOTER TEXT */}

      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="relative z-10 mt-10 text-center"
      >

        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">

          Trusted by patients • Empowering koas • Growing healthier smiles

        </p>

      </div>

    </section>
  )
}

export default Statistics