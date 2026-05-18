import sitarungImg from "../assets/sitarung.jpg";
import sippanahImg from "../assets/sippanah.jpg";
import sipasarImg from "../assets/sipasar.png";
import embrawijayaImg from "../assets/embrawijaya.png";
import valeImg from "../assets/vale.png";
import wsnImg from "../assets/wsn.png";

export const projects = [
  {
    id: 1,
    slug: "sitarung",
    title: "Sitarung",
    subtitle: "Sistem Informasi Pertanahan",
    description:
      "Platform sistem informasi pertanahan yang menyediakan layanan data untuk kebutuhan umum dan pengadaan tanah.",
    longDescription:
      "Sitarung adalah sistem informasi pertanahan yang dikembangkan untuk memfasilitasi pengelolaan data pertanahan secara digital. Platform ini menyediakan layanan informasi pertanahan untuk masyarakat umum serta mendukung proses pengadaan tanah oleh pemerintah daerah. Sistem ini mencakup manajemen data tanah, pencarian parcel, serta laporan pertanahan yang komprehensif.",
    images: [sitarungImg],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    category: "Government System",
    year: "2023",
    role: "Full Stack Developer",
    features: [
      "Sistem informasi pertanahan terintegrasi",
      "Manajemen data pengadaan tanah",
      "Portal informasi publik",
      "Dashboard admin & laporan",
    ],
    accentColor: "#22d3ee",
  },
  {
    id: 2,
    slug: "sippanah",
    title: "Sippanah",
    subtitle: "Sistem Informasi Penyelenggaraan Pertanahan",
    description:
      "Web app untuk memfasilitasi pengajuan pengadaan tanah, sertifikasi, dan perpanjangan HGU.",
    longDescription:
      "Sippanah adalah sistem informasi penyelenggaraan pertanahan yang bertujuan untuk mempermudah proses administrasi pertanahan. Sistem ini mengintegrasikan berbagai layanan seperti pengajuan pengadaan tanah online, proses sertifikasi digital, dan perpanjangan HGU, sehingga mempercepat waktu layanan dan mengurangi birokrasi manual.",
    images: [sippanahImg],
    tech: ["Laravel", "PHP", "MySQL", "TailwindCSS"],
    category: "Government System",
    year: "2023",
    role: "Full Stack Developer",
    features: [
      "Pengajuan pengadaan tanah online",
      "Tracking status permohonan",
      "Proses sertifikasi digital",
      "Perpanjangan HGU terintegrasi",
    ],
    accentColor: "#a78bfa",
  },
  {
    id: 3,
    slug: "sipasar",
    title: "Sipasar",
    subtitle: "Sistem Informasi Pasar",
    description:
      "Aplikasi pemantau setoran retribusi pasar secara real-time melalui jaringan penyalur terdaftar.",
    longDescription:
      "Sipasar adalah aplikasi untuk memantau setoran yang masuk dari retribusi pasar melalui penyalur yang telah didaftarkan. Sistem ini memungkinkan pemerintah daerah untuk melacak pendapatan retribusi secara real-time, mengelola data pedagang, dan menghasilkan laporan keuangan pasar yang akurat dan transparan.",
    images: [sipasarImg],
    tech: ["Laravel", "PHP", "MySQL", "jQuery"],
    category: "Finance & Management",
    year: "2022",
    role: "Backend Developer",
    features: [
      "Real-time monitoring retribusi",
      "Manajemen penyalur & pedagang",
      "Laporan keuangan otomatis",
      "Notifikasi setoran masuk",
    ],
    accentColor: "#34d399",
  },
  {
    id: 4,
    slug: "embrawijaya",
    title: "Aplikasi Orientasi Mahasiswa",
    subtitle: "Platform Orientasi Universitas Digital",
    description:
      "Platform online untuk orientasi universitas dengan fitur kuis, penilaian, dan manajemen data mahasiswa.",
    longDescription:
      "Platform online untuk orientasi universitas yang mengintegrasikan fitur-fitur penting seperti pendaftaran pengguna, login, kuis interaktif, penilaian otomatis, dan manajemen data mahasiswa. Sistem ini secara efektif menyederhanakan proses orientasi bagi mahasiswa baru maupun administrator universitas, menggantikan proses konvensional yang memakan waktu.",
    images: [embrawijayaImg],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    category: "Education",
    year: "2022",
    role: "Full Stack Developer",
    features: [
      "Sistem kuis & penilaian otomatis",
      "Registrasi & manajemen mahasiswa",
      "Dashboard progres orientasi",
      "Sertifikat kelulusan otomatis",
    ],
    accentColor: "#f59e0b",
  },
  {
    id: 5,
    slug: "vale-hrm",
    title: "Aplikasi Manajemen Karyawan",
    subtitle: "Human Resource Management System",
    description:
      "Sistem komprehensif pengelolaan karyawan, pelacakan kinerja, kehadiran, dan administrasi HR.",
    longDescription:
      "Sistem komprehensif untuk mengelola catatan karyawan, melacak kinerja, kehadiran, dan tugas terkait HR lainnya. Platform ini memberikan solusi efisien untuk pengawasan dan administrasi karyawan, dilengkapi dengan laporan analitik sumber daya manusia yang membantu manajemen dalam pengambilan keputusan strategis.",
    images: [valeImg],
    tech: ["Laravel", "PHP", "MySQL", "Vue.js", "TailwindCSS"],
    category: "HR Management",
    year: "2023",
    role: "Full Stack Developer",
    features: [
      "Manajemen data karyawan lengkap",
      "Tracking kehadiran & absensi",
      "Evaluasi kinerja periodik",
      "Laporan HR & payroll",
    ],
    accentColor: "#f97316",
  },
  {
    id: 6,
    slug: "wsn",
    title: "Wireless Sensor Network",
    subtitle: "IoT Data Management Platform",
    description:
      "Aplikasi web IoT terintegrasi dengan API & MQTT broker untuk monitoring telemetri perangkat.",
    longDescription:
      "Sebuah aplikasi web yang terintegrasi dengan teknologi IoT, dirancang untuk memfasilitasi komunikasi yang mulus antar perangkat. Sistem ini menyediakan REST API dan MQTT broker untuk mendukung konektivitas dengan perangkat IoT, sekaligus berfungsi sebagai pusat manajemen serta pemantauan data telemetri secara real-time dengan visualisasi grafik interaktif.",
    images: [wsnImg],
    tech: ["Laravel", "PHP", "MySQL", "MQTT", "Chart.js", "React"],
    category: "IoT System",
    year: "2024",
    role: "Full Stack Developer",
    features: [
      "REST API & MQTT broker terintegrasi",
      "Real-time telemetry monitoring",
      "Visualisasi data sensor interaktif",
      "Manajemen perangkat IoT",
    ],
    accentColor: "#22d3ee",
  },
];
