import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faPenRuler,
  faNetworkWired,
  faMobile,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    icon: faCode,
    title: "Web Development",
    desc: "Membangun web app fullstack mulai dari frontend hingga backend yang robust.",
    color: "from-cyan-500 to-blue-500",
    border: "hover:border-cyan-400/50",
    glow: "hover:shadow-cyan-500/20",
  },
  {
    icon: faDatabase,
    title: "Database Design",
    desc: "Merancang skema database yang optimal, efisien, dan mudah diskalakan.",
    color: "from-violet-500 to-purple-600",
    border: "hover:border-violet-400/50",
    glow: "hover:shadow-violet-500/20",
  },
  {
    icon: faPenRuler,
    title: "UI/UX Design",
    desc: "Menciptakan antarmuka yang estetis, intuitif, dan memberikan pengalaman terbaik.",
    color: "from-emerald-500 to-teal-500",
    border: "hover:border-emerald-400/50",
    glow: "hover:shadow-emerald-500/20",
  },
  {
    icon: faServer,
    title: "Backend & API",
    desc: "Mengembangkan REST API yang handal, aman, dan mudah diintegrasikan.",
    color: "from-orange-500 to-amber-500",
    border: "hover:border-orange-400/50",
    glow: "hover:shadow-orange-500/20",
  },
  {
    icon: faNetworkWired,
    title: "IoT Integration",
    desc: "Mengintegrasikan sistem web dengan perangkat IoT menggunakan MQTT & WebSocket.",
    color: "from-pink-500 to-rose-500",
    border: "hover:border-pink-400/50",
    glow: "hover:shadow-pink-500/20",
  },
  {
    icon: faMobile,
    title: "Responsive Design",
    desc: "Memastikan tampilan aplikasi optimal di semua perangkat dan ukuran layar.",
    color: "from-sky-500 to-cyan-500",
    border: "hover:border-sky-400/50",
    glow: "hover:shadow-sky-500/20",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-800/40 relative">
      <div className="orb w-72 h-72 bg-cyan-500/8 right-0 top-0" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Keahlian <span className="gradient-text">Saya</span>
        </h2>
        <div className="section-line" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div
              key={s.title}
              className={`glass-card rounded-2xl p-6 group cursor-default transition-all duration-300 hover:shadow-lg ${s.glow} ${s.border}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <FontAwesomeIcon icon={s.icon} className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
