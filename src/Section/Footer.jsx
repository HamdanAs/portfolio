import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCode, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-dark-800/60 border-t border-cyan-400/10">
      {/* Top gradient bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg animated-border flex items-center justify-center">
                <FontAwesomeIcon icon={faCode} className="text-cyan-400 text-sm" />
              </div>
              <span className="font-mono font-bold text-white text-lg">
                HamdanAs<span className="text-cyan-400">_</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web Developer yang bersemangat membangun aplikasi yang bermakna dan berdampak positif.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-mono text-sm text-cyan-400">// navigasi</h4>
            <div className="space-y-2">
              {[
                { label: "Tentang Saya", href: "#about" },
                { label: "Keahlian", href: "#skills" },
                { label: "Teknologi", href: "#tools" },
                { label: "Portfolio", href: "#projects" },
              ].map((l) => (
                <button
                  key={l.href}
                  onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  → {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-mono text-sm text-cyan-400">// kontak</h4>
            <div className="space-y-3">
              <a
                href="mailto:21hamdanas@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-cyan-400/40 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                </div>
                21hamdanas@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: faGithub, href: "https://github.com/HamdanAs", label: "GitHub" },
                { icon: faInstagram, href: "https://instagram.com/hamdanasch", label: "Instagram" },
                { icon: faLinkedin, href: "https://www.linkedin.com/in/hamdan-abyadi-6a03a9251/", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} Hamdan Abyadi Suwandi. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Made with <FontAwesomeIcon icon={faHeart} className="text-rose-500 text-xs" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
