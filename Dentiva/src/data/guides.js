import {
  Smile,
  ShieldAlert,
  Droplets,
  Syringe,
  Candy,
  Cigarette,
  Sparkles,
  ShieldCheck,
  ScanFace,
} from "lucide-react"

export const guides = [
  {
    id: 1,

    icon: Smile,

    title: "Cara Menyikat Gigi yang Benar",

    subtitle: "Daily Oral Care Guide",

    desc:
      "Teknik menyikat gigi yang benar bukan sekadar membuat gigi terasa bersih, tetapi juga berperan penting dalam mencegah penumpukan plak, karies, radang gusi, hingga bau mulut. Banyak orang menyikat terlalu keras atau terlalu cepat sehingga plak masih tertinggal dan enamel justru terkikis perlahan.",

    color: "from-cyan-500/20 to-blue-500/10",

    button: "text-cyan-600",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop",

      heading: "Kenapa Teknik Menyikat Itu Sangat Penting?",

      content:
        "American Dental Association merekomendasikan menyikat gigi minimal dua kali sehari selama dua menit menggunakan pasta gigi fluoride. Teknik menyikat yang salah dapat menyebabkan abrasi enamel, gigi sensitif, gusi turun, dan pembersihan plak yang tidak optimal. Gunakan gerakan memutar kecil dengan tekanan lembut terutama pada area garis gusi dan sela gigi.",

      warning: [
        "Menyikat terlalu keras dapat mengikis enamel.",
        "Sikat berbulu kasar bisa melukai gusi.",
        "Menyikat kurang dari 2 menit membuat plak tertinggal.",
      ],

      prevention: [
        "Gunakan sikat berbulu lembut.",
        "Sikat gigi pagi setelah sarapan dan malam sebelum tidur.",
        "Ganti sikat gigi setiap 3 bulan sekali.",
      ],
    },
  },

  {
    id: 2,

    icon: ShieldAlert,

    title: "Gigi Berlubang",

    subtitle: "Cavity Prevention",

    desc:
      "Gigi berlubang terjadi ketika bakteri di mulut mengubah gula menjadi asam yang secara perlahan merusak enamel. Kondisi ini sering dimulai dari lubang kecil tanpa rasa sakit, namun dapat berkembang menjadi infeksi serius hingga merusak saraf gigi jika tidak segera ditangani.",

    color: "from-red-500/20 to-rose-500/10",

    button: "text-red-600",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",

      heading: "Bagaimana Gigi Berlubang Terbentuk?",

      content:
        "Sisa makanan terutama gula akan difermentasi oleh bakteri di plak menjadi asam. Asam ini menurunkan pH mulut dan mengikis enamel sedikit demi sedikit. Jika proses berlangsung terus-menerus tanpa pembersihan yang baik, maka terbentuklah karies atau lubang gigi.",

      warning: [
        "Ngilu saat makan manis atau dingin.",
        "Muncul noda coklat atau hitam pada gigi.",
        "Nyeri spontan terutama malam hari.",
      ],

      prevention: [
        "Kurangi konsumsi makanan manis lengket.",
        "Gunakan dental floss setiap hari.",
        "Kontrol ke dokter gigi setiap 6 bulan.",
      ],
    },
  },

  {
    id: 3,

    icon: Droplets,

    title: "Bau Mulut",

    subtitle: "Halitosis Awareness",

    desc:
      "Bau mulut atau halitosis sering berasal dari bakteri yang menumpuk pada lidah, sela gigi, dan gusi. Selain memengaruhi rasa percaya diri, kondisi ini juga bisa menjadi tanda adanya masalah kesehatan mulut seperti gigi berlubang, radang gusi, atau mulut kering kronis.",

    color: "from-sky-500/20 to-cyan-500/10",

    button: "text-sky-600",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",

      heading: "Mengapa Bau Mulut Bisa Terjadi?",

      content:
        "Bakteri anaerob di rongga mulut menghasilkan senyawa sulfur yang menyebabkan aroma tidak sedap. Penumpukan plak, lidah yang kotor, mulut kering, merokok, dan penyakit gusi menjadi penyebab utama halitosis kronis.",

      warning: [
        "Lidah tampak putih tebal.",
        "Mulut terasa kering sepanjang hari.",
        "Bau menetap walau sudah menyikat gigi.",
      ],

      prevention: [
        "Bersihkan lidah setiap hari.",
        "Minum air putih yang cukup.",
        "Kurangi rokok dan kopi berlebihan.",
      ],
    },
  },

  {
    id: 4,

    icon: Syringe,

    title: "Scaling Gigi",

    subtitle: "Dental Cleaning",

    desc:
      "Scaling adalah prosedur pembersihan karang gigi menggunakan alat khusus ultrasonik oleh dokter gigi. Karang gigi tidak dapat dihilangkan hanya dengan menyikat gigi biasa karena plak sudah mengeras akibat mineral dari air liur.",

    color: "from-violet-500/20 to-fuchsia-500/10",

    button: "text-violet-600",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?q=80&w=1600&auto=format&fit=crop",

      heading: "Kenapa Karang Gigi Berbahaya?",

      content:
        "Karang gigi menjadi tempat menempelnya bakteri dalam jumlah besar. Jika dibiarkan, kondisi ini dapat memicu radang gusi, bau mulut kronis, perdarahan gusi, hingga kerusakan tulang penyangga gigi.",

      warning: [
        "Gusi sering berdarah.",
        "Ada lapisan keras kuning kecoklatan.",
        "Mulut terasa tidak segar.",
      ],

      prevention: [
        "Scaling rutin tiap 6 bulan.",
        "Rajin flossing dan menyikat gigi.",
        "Kurangi merokok dan minuman manis.",
      ],
    },
  },

  {
    id: 5,

    icon: Candy,

    title: "Bahaya Gula Berlebih",

    subtitle: "Sugar & Oral Health",

    desc:
      "Konsumsi gula yang terlalu sering meningkatkan aktivitas bakteri penghasil asam di rongga mulut. Asam tersebut dapat menurunkan pH mulut dan mempercepat kerusakan enamel sehingga risiko gigi berlubang meningkat drastis.",

    color: "from-amber-500/20 to-orange-500/10",

    button: "text-amber-600",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?q=80&w=1600&auto=format&fit=crop",

      heading: "Mengapa Gula Menjadi Musuh Utama Gigi?",

      content:
        "Bakteri Streptococcus mutans menggunakan gula sebagai sumber energi utama dan menghasilkan asam sebagai produk samping. Semakin sering ngemil manis, semakin lama kondisi asam terjadi di mulut sehingga enamel lebih cepat rusak.",

      warning: [
        "Sering minum soda atau boba.",
        "Ngemil manis sebelum tidur.",
        "Jarang membersihkan gigi setelah makan.",
      ],

      prevention: [
        "Batasi konsumsi gula harian.",
        "Minum air putih setelah makan manis.",
        "Pilih camilan rendah gula.",
      ],
    },
  },

  {
    id: 6,

    icon: Cigarette,

    title: "Merokok & Kesehatan Gigi",

    subtitle: "Smoking Risk",

    desc:
      "Merokok tidak hanya membuat gigi menguning, tetapi juga meningkatkan risiko penyakit gusi, bau mulut kronis, penyembuhan luka yang lambat, bahkan kanker mulut. Kandungan nikotin dan tar dapat merusak jaringan lunak rongga mulut secara bertahap.",

    color: "from-slate-500/20 to-gray-500/10",

    button: "text-slate-700",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=1600&auto=format&fit=crop",

      heading: "Efek Rokok Terhadap Rongga Mulut",

      content:
        "Rokok mengurangi aliran darah ke jaringan gusi sehingga proses penyembuhan terganggu. Perokok juga memiliki risiko periodontitis lebih tinggi dan sering terlambat menyadari infeksi karena peradangan tampak lebih samar.",

      warning: [
        "Gigi kuning kecoklatan.",
        "Bau mulut kronis.",
        "Gusi mudah bengkak dan berdarah.",
      ],

      prevention: [
        "Kurangi dan hentikan rokok.",
        "Kontrol rutin ke dokter gigi.",
        "Perbanyak konsumsi air putih.",
      ],
    },
  },

  {
    id: 7,

    icon: Sparkles,

    title: "Whitening Aman?",

    subtitle: "Teeth Whitening",

    desc:
      "Whitening atau pemutihan gigi dapat membantu mengurangi noda dan membuat warna gigi tampak lebih cerah. Namun penggunaan produk whitening yang tidak sesuai prosedur dapat menyebabkan sensitivitas tinggi, iritasi gusi, bahkan kerusakan enamel permanen.",

    color: "from-pink-500/20 to-rose-500/10",

    button: "text-pink-600",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1600&auto=format&fit=crop",

      heading: "Apakah Whitening Selalu Aman?",

      content:
        "Whitening profesional di bawah pengawasan dokter gigi relatif aman karena menggunakan dosis bahan aktif yang terkontrol. Produk ilegal atau penggunaan berlebihan dapat meningkatkan sensitivitas dan menyebabkan iritasi jaringan lunak mulut.",

      warning: [
        "Gigi terasa ngilu setelah whitening.",
        "Gusi memutih atau iritasi.",
        "Menggunakan produk tanpa izin BPOM.",
      ],

      prevention: [
        "Lakukan konsultasi sebelum whitening.",
        "Gunakan produk terpercaya.",
        "Jangan terlalu sering bleaching.",
      ],
    },
  },

  {
    id: 8,

    icon: ShieldCheck,

    title: "Fluoride untuk Gigi",

    subtitle: "Enamel Protection",

    desc:
      "Fluoride membantu memperkuat enamel melalui proses remineralisasi sehingga gigi lebih tahan terhadap serangan asam. Kandungan fluoride pada pasta gigi terbukti efektif menurunkan risiko karies dan menjaga struktur enamel tetap kuat.",

    color: "from-emerald-500/20 to-teal-500/10",

    button: "text-emerald-600",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1588776813446-ec7e9c6d8d68?q=80&w=1600&auto=format&fit=crop",

      heading: "Mengapa Fluoride Sangat Penting?",

      content:
        "Fluoride bekerja dengan membantu proses remineralisasi enamel yang mulai rusak akibat asam. Selain itu fluoride juga membantu menghambat aktivitas bakteri penyebab karies.",

      warning: [
        "Jarang menggunakan pasta gigi fluoride.",
        "Gigi mudah sensitif.",
        "Muncul white spot pada enamel.",
      ],

      prevention: [
        "Gunakan pasta gigi fluoride.",
        "Kurangi minuman asam.",
        "Rutin periksa kesehatan gigi.",
      ],
    },
  },

  {
    id: 9,

    icon: ScanFace,

    title: "Gusi Berdarah",

    subtitle: "Gum Health",

    desc:
      "Gusi berdarah merupakan tanda awal peradangan gusi atau gingivitis akibat penumpukan plak dan bakteri. Bila tidak segera ditangani, kondisi ini dapat berkembang menjadi periodontitis yang merusak jaringan penyangga gigi dan menyebabkan gigi goyang.",

    color: "from-rose-500/20 to-red-500/10",

    button: "text-rose-600",

    detail: {
      hero:
        "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?q=80&w=1600&auto=format&fit=crop",

      heading: "Kenapa Gusi Bisa Berdarah?",

      content:
        "Penumpukan plak di sekitar garis gusi memicu peradangan sehingga pembuluh darah menjadi lebih sensitif dan mudah berdarah saat menyikat gigi atau flossing.",

      warning: [
        "Gusi merah dan bengkak.",
        "Darah saat menyikat gigi.",
        "Mulut terasa tidak segar.",
      ],

      prevention: [
        "Rajin flossing setiap hari.",
        "Scaling rutin tiap 6 bulan.",
        "Jaga kebersihan mulut dengan baik.",
      ],
    },
  },
]