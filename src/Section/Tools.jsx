import laravelImg from "../assets/1969px-Laravel.svg.png";
import phpImg from "../assets/PHP-logo.svg.png";
import jsImg from "../assets/JavaScript-logo.png";
import cssImg from "../assets/CSS3_logo_and_wordmark.svg.png";
import reactImg from "../assets/React-icon.svg.png";
import mysqlImg from "../assets/Mysql_logo.png";

const tools = [
  { name: "Laravel", img: laravelImg, color: "#FF2D20", desc: "PHP Framework" },
  { name: "PHP", img: phpImg, color: "#777BB4", desc: "Server Language" },
  { name: "JavaScript", img: jsImg, color: "#F7DF1E", desc: "Web Language" },
  { name: "CSS3", img: cssImg, color: "#1572B6", desc: "Styling" },
  { name: "React", img: reactImg, color: "#61DAFB", desc: "UI Library" },
  { name: "MySQL", img: mysqlImg, color: "#4479A1", desc: "Database" },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Teknologi <span className="gradient-text">yang Dipakai</span>
        </h2>
        <div className="section-line" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 group cursor-default"
              style={{ "--accent": t.color }}
            >
              <div className="w-14 h-14 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <img
                  src={t.img}
                  alt={`${t.name} logo`}
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 0 8px " + t.color + "66)" }}
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-gray-500 font-mono">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra tools row */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Git", "VS Code", "Postman", "Docker", "Vite", "TailwindCSS", "Bootstrap", "MQTT"].map((t) => (
            <span key={t} className="tech-tag text-sm py-2 px-4">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
