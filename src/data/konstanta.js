// FILE SAYA
import profil from "../assets/1.jpg";
import profil1 from "../assets/1.png";
import profil2 from "../assets/gambar2.png";
import profil3 from "../assets/gambar3.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwindcss from "../assets/tailwindcss.png";
import bootstrap from "../assets/bootstrap.png";
import typescript from "../assets/typescript.png";
import javascript from "../assets/javascript.png";
import sass from "../assets/sass.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import nodejs from "../assets/nodejs.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import fiver from "../assets/fiver.png";
import dokumen from "../assets/dokumen.png";
import sd from "../assets/sd.png";
import smp from "../assets/smp.png";
import smk from "../assets/smk.png";
import kuliah from "../assets/kuliah.png";
import proyek1 from "../assets/proyek1.png";
import proyek2 from "../assets/proyek2.png";
import proyek3 from "../assets/proyek3.png";
import proyek4 from "../assets/proyek4.png";
import proyek5 from "../assets/proyek5.png";
import proyek6 from "../assets/proyek6.png";

export const TautanNavigasi = [
  {
    id: 0,
    tautan: "#tentang",
    nama: "Tentang",
  },
  {
    id: 1,
    tautan: "#keahlian",
    nama: "Keahlian",
  },
  {
    id: 2,
    tautan: "#pengalaman",
    nama: "Pengalaman",
  },
  {
    id: 3,
    tautan: "#proyek",
    nama: "Proyek",
  },
  {
    id: 4,
    tautan: "#edukasi",
    nama: "Edukasi",
  },
  {
    id: 5,
    tautan: "#kontak",
    nama: "Kontak",
  },
];

export const Transisi = {
  duration: 0.5,
  ease: "easeInOut",
};

export const Biografi = {
  nama: "NAUFAL FIFA",
  foto: [profil1, profil2, profil3],
  peran: ["Front End", "Programmer", "Mahasiswa", "Freelancer"],
  deskripsi: (
    <p>
      Saya seorang{" "}
      <span style={{ color: "#FF56F6", fontWeight: "bold" }}>mahasiswa</span>{" "}
      dan{" "}
      <span style={{ color: "#FF56F6", fontWeight: "bold" }}>
        programmer web
      </span>{" "}
      dengan fokus pada pengembangan web di{" "}
      <span style={{ color: "#FF56F6", fontWeight: "bold" }}>sisi klien</span>,
      atau{" "}
      <span style={{ color: "#FF56F6", fontWeight: "bold" }}>front end</span>.{" "}
      Dedikasi, semangat belajar, dan sikap positif saya adalah kekuatan saya.
      Saya siap berkontribusi semaksimal mungkin dan terus meningkatkan
      keterampilan untuk solusi kreatif. Saya yakin bisa mencapai kesuksesan
      sebagai{" "}
      <span style={{ color: "#FF56F6", fontWeight: "bold" }}>freelancer</span>{" "}
      dan{" "}
      <span style={{ color: "#FF56F6", fontWeight: "bold" }}>
        client-side web developer
      </span>
      .
    </p>
  ),
  instagram: "https://www.instagram.com/fif_ovalle/",
  github: "https://github.com/fifovalle",
};

export const KumpulanKeahlian = [
  {
    id: 0,
    judul: "Client Side",
    keahlian: [
      {
        id: 0,
        nama: "React Js",
        gambar: react,
      },
      {
        id: 1,
        nama: "Next Js",
        gambar: nextjs,
      },
      {
        id: 2,
        nama: "Tailwind CSS",
        gambar: tailwindcss,
      },
      {
        id: 3,
        nama: "Bootstrap",
        gambar: bootstrap,
      },
      {
        id: 4,
        nama: "Typescript",
        gambar: typescript,
      },
      {
        id: 5,
        nama: "Javascript",
        gambar: javascript,
      },
      {
        id: 6,
        nama: "Sass",
        gambar: sass,
      },
      {
        id: 7,
        nama: "HTML",
        gambar: html,
      },
      {
        id: 8,
        nama: "CSS",
        gambar: css,
      },
    ],
  },
  {
    id: 1,
    judul: "Server Side",
    keahlian: [
      {
        id: 0,
        nama: "Node Js",
        gambar: nodejs,
      },
      {
        id: 1,
        nama: "Next Js",
        gambar: nextjs,
      },
    ],
  },
  {
    id: 2,
    judul: "Lainnya",
    keahlian: [
      {
        id: 0,
        nama: "Git",
        gambar: git,
      },
      {
        id: 1,
        nama: "Figma",
        gambar: figma,
      },
    ],
  },
  {
    id: 3,
    judul: "Android",
    keahlian: [],
  },
];

export const KumpulanPengalaman = [
  {
    id: 0,
    gambar: fiver,
    perusahaan: "Fiver",
    peran: "Freelancer",
    tanggal: "Agustus 2023 - Sekarang",
    deskripsi:
      "Saya adalah seorang freelancer web dengan pengalaman di ReactJS, NodeJS, dan Tailwind CSS sejak Agustus 2023. Saya kuat dalam HTML, CSS, dan JavaScript serta berkomitmen untuk memberikan kualitas terbaik dalam setiap proyek. Saya senang mempelajari perkembangan terbaru dalam industri pengembangan web.",
    keahlian: [
      "ReactJS,",
      "NodeJs,",
      "Tailwind CSS,",
      "HTML,",
      "CSS,",
      "JavaScript",
    ],
    dokumen: dokumen,
  },
];

export const TombolProyek = [
  {
    id: 0,
    nama: "SEMUA",
  },
  {
    id: 1,
    nama: "APLIKASI WEBSITE",
  },
  {
    id: 2,
    nama: "APLIKASI ANDROID",
  },
  {
    id: 3,
    nama: "KECERDASAN BUATAN",
  },
];

export const KumpulanProyek = [
  {
    id: 0,
    judul: "Portofolio Pribadi",
    tanggal: "30 Agustus 2023",
    deskripsi:
      "Portofolio Pribadi saya, yang dibuat pada tanggal 30 Agustus 2023, adalah proyek yang sangat saya banggakan. Ini adalah wujud dari dedikasi saya dalam dunia pengembangan web, di mana saya menggabungkan teknologi-teknologi seperti JavaScript, HTML, dan CSS untuk menciptakan sebuah aplikasi website yang menarik. Portofolio ini merupakan tempat di mana saya dapat memamerkan berbagai proyek dan karya-karya kreatif saya, serta berbagi pengalaman dan pemikiran tentang perkembangan teknologi terkini. Proyek ini adalah contoh nyata dari kemampuan saya dalam mengembangkan aplikasi web yang responsif dan menarik.",
    gambar: proyek1,
    peralatan: ["JavaScript", "HTML", "CSS"],
    kategori: "APLIKASI WEBSITE",
    github: "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI",
    tim: [
      {
        nama: "Naufal FIFA",
        gambar: profil,
        github: "https://github.com/fifovalle",
      },
    ],
  },
  {
    id: 1,
    judul: "Portofolio Pribadi Versi 2.0",
    tanggal: "4 September 2023",
    deskripsi:
      "Portofolio Pribadi Versi 2.0 saya, yang dirilis pada tanggal 4 September 2023, adalah evolusi dari proyek sebelumnya yang saya persembahkan dengan bangga. Dalam versi ini, saya telah memperkaya pengalaman pengguna dengan mengintegrasikan teknologi-teknologi seperti JavaScript, HTML, CSS, dan Bootstrap. Tujuan utama dari portofolio ini tetap sama: untuk memberikan wawasan yang lebih mendalam tentang karya-karya kreatif saya dan pengalaman pengembangan web saya. Saya menghadirkan portofolio ini sebagai wadah yang lebih fungsional dan responsif bagi berbagai proyek yang telah saya kerjakan. Ini adalah bukti nyata dari kemajuan saya dalam dunia pengembangan web, dan saya berharap dapat berbagi lebih banyak inspirasi dengan semua orang. Silakan jelajahi portofolio ini dan lihat proyek-proyek saya.",
    gambar: proyek2,
    peralatan: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    kategori: "APLIKASI WEBSITE",
    github: "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI-VERSI-2.0",
    tim: [
      {
        nama: "Naufal FIFA",
        gambar: profil,
        github: "https://github.com/fifovalle",
      },
    ],
  },
  {
    id: 2,
    judul: "Portofolio Pribadi Versi 3.0",
    tanggal: "4 September 2023",
    deskripsi:
      "Portofolio Pribadi Versi 3.0, yang diperkenalkan pada tanggal 4 September 2023, adalah langkah terbaru dalam perjalanan pengembangan web saya. Dalam versi ini, saya telah mengambil langkah besar dengan mengintegrasikan teknologi React bersama dengan JavaScript, HTML, dan CSS. Portofolio ini merupakan refleksi dari komitmen saya untuk selalu berkembang dalam dunia pengembangan web dan memberikan pengalaman yang lebih interaktif kepada pengguna. Versi terbaru ini memberikan kemudahan navigasi, tampilan yang lebih menarik, dan responsivitas yang tinggi. Saya sangat bersemangat untuk mempersembahkan proyek-proyek terbaru dan pembaruan lainnya dalam portofolio ini. Jelajahi portofolio ini dan temukan lebih banyak tentang karya-karya saya serta eksplorasi teknologi terkini. Terima kasih telah mengikuti perjalanan saya dalam dunia pengembangan web.",
    gambar: proyek3,
    peralatan: ["JavaScript", "HTML", "CSS", "React"],
    kategori: "APLIKASI WEBSITE",
    github: "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI-VERSI-3.0",
    tim: [
      {
        nama: "Naufal FIFA",
        gambar: profil,
        github: "https://github.com/fifovalle",
      },
    ],
  },
  {
    id: 3,
    judul: "Portofolio Pribadi Versi 4.0",
    tanggal: "13 September 2023",
    deskripsi:
      "Portofolio Pribadi Versi 4.0, yang diperkenalkan pada tanggal 13 September 2023, adalah langkah terbaru dalam perjalanan pengembangan web saya. Dalam versi ini, saya telah mengambil langkah besar dengan mengintegrasikan teknologi React bersama dengan JavaScript, HTML, dan CSS. Portofolio ini merupakan refleksi dari komitmen saya untuk selalu berkembang dalam dunia pengembangan web dan memberikan pengalaman yang lebih interaktif kepada pengguna. Versi terbaru ini memberikan kemudahan navigasi, tampilan yang lebih menarik, dan responsivitas yang tinggi. Saya sangat bersemangat untuk mempersembahkan proyek-proyek terbaru dan pembaruan lainnya dalam portofolio ini. Jelajahi portofolio ini dan temukan lebih banyak tentang karya-karya saya serta eksplorasi teknologi terkini. Terima kasih telah mengikuti perjalanan saya dalam dunia pengembangan web.",
    gambar: proyek4,
    peralatan: ["JavaScript", "HTML", "React", "Tailwind CSS"],
    kategori: "APLIKASI WEBSITE",
    github: "https://github.com/fifovalle/WEBSITE-PORTOFOLIO-PRIBADI-VERSI-4.0",
    tim: [
      {
        nama: "Naufal FIFA",
        gambar: profil,
        github: "https://github.com/fifovalle",
      },
    ],
  },
  {
    id: 4,
    judul: "Landing Page",
    tanggal: "15 September 2023",
    deskripsi:
      "Landing Page Sayuran, dibuat pada tanggal 15 September 2023, adalah sebuah aplikasi website yang mengangkat tema sayuran. Menggunakan teknologi JavaScript, HTML, React, dan Tailwind CSS, proyek ini menjadi perwujudan komitmen kami untuk memperkenalkan dunia sayuran kepada pengguna secara menarik. Landing Page ini menghadirkan informasi lengkap tentang berbagai jenis sayuran, manfaat kesehatan, dan resep memasaknya.",
    gambar: proyek5,
    peralatan: ["JavaScript", "HTML", "React", "Tailwind CSS"],
    kategori: "APLIKASI WEBSITE",
    github: "https://github.com/fifovalle/WEBSITE-LANDING-PAGE",
    tim: [
      {
        nama: "Naufal FIFA",
        gambar: profil,
        github: "https://github.com/fifovalle",
      },
    ],
  },
  {
    id: 5,
    judul: "Dashboard Admin",
    tanggal: "11 September 2023",
    deskripsi:
      "Dashboard Admin yang diperkenalkan pada tanggal 11 September 2023 adalah sebuah aplikasi website yang didesain untuk memudahkan tugas administratif. Menggunakan teknologi JavaScript, HTML, React, dan CSS, proyek ini membantu pengguna untuk mengelola berbagai aspek administrasi dengan efisiensi tinggi. Dengan tampilan yang bersih dan responsif, Dashboard Admin ini menyediakan akses cepat ke berbagai fitur administratif yang penting.",
    gambar: proyek6,
    peralatan: ["JavaScript", "HTML", "React", "CSS"],
    kategori: "APLIKASI WEBSITE",
    github: "https://github.com/fifovalle/WEBSITE-DASHBOARD-ADMIN",
    tim: [
      {
        nama: "Naufal FIFA",
        gambar: profil,
        github: "https://github.com/fifovalle",
      },
    ],
  },
];

export const KumpulanEdukasi = [
  {
    id: 0,
    gambar: sd,
    sekolah: "SDN Babakan Pari",
    lama: "Juli 2008 - Juli 2014",
    deskripsi:
      "Saya memiliki kenangan indah dari masa sekolah saya di SDN Babakan Pari dari Juli 2008 hingga Juli 2014. Selama periode ini, saya mengalami fase penting dalam perkembangan pendidikan dan pribadi saya. Sekolah ini memberikan dasar yang kokoh dalam pendidikan dasar dan nilai-nilai penting seperti kerja sama, disiplin, dan semangat belajar. Ini adalah tempat di mana saya pertama kali mulai mengejar minat saya dalam bidang teknologi dan komputer, yang akhirnya mengarahkan saya ke dunia pengembangan web. Pengalaman di SDN Babakan Pari telah membantu membentuk fondasi saya sebagai individu yang bersemangat untuk belajar dan berkembang, dan saya selalu berterima kasih atas pengalaman berharga ini.",
    jurusan: "Kelas 6 SD",
    nilai: "90%",
  },
  {
    id: 1,
    gambar: smp,
    sekolah: "SMPN 3 Batujajar",
    lama: "Juli 2014 - Juli 2017",
    deskripsi:
      "SMPN 3 Batujajar adalah tempat di mana saya melanjutkan perjalanan pendidikan saya dari Juli 2014 hingga Juli 2017. Selama tahun-tahun ini, saya terlibat dalam berbagai kegiatan akademis dan ekstrakurikuler yang telah membentuk perkembangan pribadi saya. Sekolah ini tidak hanya memberikan wawasan lebih dalam dalam bidang pendidikan dasar, tetapi juga mengajarkan nilai-nilai seperti kerjasama tim, tanggung jawab, dan ketekunan. Ini adalah masa yang penting dalam perkembangan saya sebagai individu yang berdedikasi untuk mencapai tujuan dan terus berusaha meningkatkan diri. Saya merasa beruntung telah mendapatkan pendidikan di SMPN 3 Batujajar, yang telah membantu membentuk fondasi yang kuat untuk perjalanan pendidikan dan karier saya selanjutnya.",
    jurusan: "Kelas 3 SMP",
    nilai: "80%",
  },
  {
    id: 2,
    gambar: smk,
    sekolah: "SMK Mahardhika Batujajar",
    lama: "Juli 2017 - Juli 2020",
    deskripsi:
      "SMK Mahardhika Batujajar adalah tempat di mana saya melanjutkan perjalanan pendidikan saya dari Juli 2017 hingga Juli 2020. Selama tahun-tahun ini, saya terlibat dalam program pendidikan yang berfokus pada pengembangan keterampilan praktis dan persiapan untuk dunia kerja. Sekolah ini memberikan pemahaman mendalam tentang bidang-bidang seperti teknologi informasi, komputer, dan pemrograman. Selain itu, saya juga memiliki kesempatan untuk mengikuti berbagai kursus dan workshop yang membantu memperluas pengetahuan saya dalam bidang ini. SMK Mahardhika Batujajar telah mempersiapkan saya dengan keterampilan dan pengetahuan yang relevan untuk memulai karier saya sebagai seorang profesional di dunia teknologi. Saya selalu bersyukur atas pengalaman berharga ini dan siap untuk terus mengembangkan keterampilan yang telah saya peroleh selama masa sekolah.",
    jurusan: "Rekayasa Perangkat Lunak",
    nilai: "95%",
  },
  {
    id: 3,
    gambar: kuliah,
    sekolah: "Universitas Jenderal Achmad Yani",
    date: "September 2022 - Sekarang",
    deskripsi:
      "Saat ini, saya tengah mengejar gelar sarjana di Universitas Jenderal Achmad Yani sejak bulan September 2022. Pengalaman ini merupakan tahap berikutnya dalam perjalanan pendidikan saya yang penuh semangat. Di sini, saya sedang mengejar minat dan hasrat saya dalam dunia teknologi dan pengembangan web. Universitas ini telah memberikan peluang belajar yang luar biasa serta akses ke berbagai sumber daya dan pengajar ahli dalam bidang ini. Selama masa kuliah saya, saya berusaha keras untuk terus memperdalam pemahaman saya tentang konsep-konsep teknis dan tren terbaru dalam industri ini. Saya sangat bersemangat untuk terus mengembangkan diri selama masa kuliah ini dan mempersiapkan diri untuk karier yang sukses dalam pengembangan web.",
    jurusan: "Informatika",
    nilai: "-",
  },
];

export const Perjalanan = [
  { tahun: 2017, teks: "Memulai Pendidikan Sebagai Software Developer" },
  { tahun: 2023, teks: "Membuat Website Pribadi" },
  { tahun: 2023, teks: "Memulai Pekerjaan Sebagai Freelancer" },
];
