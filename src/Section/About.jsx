export default function About() {
  const stats = [
    { value: "4+", label: "Tahun\nPengalaman", color: "text-cyan-400" },
    { value: "8+", label: "Project\nSelesai", color: "text-violet-400" },
    { value: "5+", label: "Klien\nPuas", color: "text-emerald-400" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* subtle bg accent */}
      <div className="orb w-64 h-64 bg-violet-500/10 -left-20 top-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Tentang <span className="gradient-text">Saya</span>
        </h2>
        <div className="section-line" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-5">
            {/* label */}
            <div className="inline-block px-3 py-1 rounded-md glass border border-cyan-400/20 font-mono text-xs text-cyan-400 mb-2">
              # about.me
            </div>
            <p className="text-gray-300 leading-relaxed">
              Saya adalah seorang{" "}
              <span className="text-cyan-400 font-semibold">Web Developer</span> dengan
              pengalaman lebih dari{" "}
              <span className="text-white font-bold">4 tahun</span> dalam membangun
              aplikasi web yang <span className="text-violet-400 font-semibold">dinamis, interaktif</span>, dan
              memberikan pengalaman pengguna yang optimal.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Dengan pemahaman yang kuat terhadap{" "}
              <span className="text-white font-semibold">siklus pengembangan software end-to-end</span>,
              saya telah berhasil mengembangkan berbagai aplikasi web mulai dari{" "}
              <span className="text-emerald-400">perancangan, pengembangan, hingga deployment</span>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Saya percaya bahwa <span className="text-cyan-400 font-semibold">pemrograman memiliki kekuatan
                untuk membawa perubahan positif</span>. Karena itu, saya selalu bersemangat untuk belajar
              hal baru dan menghadirkan solusi digital yang bermanfaat.
            </p>

            {/* Tech stack mini */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Laravel", "React", "PHP", "MySQL", "JavaScript", "REST API"].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-6 text-center">
                <div className={`text-4xl font-bold font-mono mb-2 ${s.color}`}>{s.value}</div>
                <div className="text-gray-400 text-sm whitespace-pre-line leading-tight">{s.label}</div>
              </div>
            ))}
            {/* Code block decoration */}
            <div className="col-span-3 glass-card rounded-2xl p-5 font-mono text-sm">
              <div className="text-gray-500 mb-1">// developer.profile</div>
              <div><span className="text-violet-400">const</span> <span className="text-cyan-400">dev</span> = {'{'}</div>
              <div className="pl-4"><span className="text-emerald-400">name</span>: <span className="text-yellow-300">&quot;Hamdan Abyadi&quot;</span>,</div>
              <div className="pl-4"><span className="text-emerald-400">role</span>: <span className="text-yellow-300">&quot;Full Stack Developer&quot;</span>,</div>
              <div className="pl-4"><span className="text-emerald-400">passion</span>: <span className="text-yellow-300">&quot;Building impactful apps&quot;</span></div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
