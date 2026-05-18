import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import heroImg from "../assets/DSC00165_2-min-removebg.png";

const roles = ["Web Developer", "Full Stack Engineer", "Laravel Specialist", "UI/UX Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen tech-grid flex items-center overflow-hidden">
      {/* Background Orbs */}
      <div className="orb w-96 h-96 bg-cyan-500/20 top-10 -left-32 animate-float" />
      <div className="orb w-80 h-80 bg-violet-500/20 bottom-10 -right-20 animate-float" style={{ animationDelay: "3s" }} />
      <div className="orb w-48 h-48 bg-emerald-400/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-mono text-cyan-400">Available for work</span>
            </div>

            <h5 className="text-gray-400 text-lg mb-2 font-mono">
              &lt;Hello World /&gt; — Nama saya
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Hamdan</span>{" "}
              <span className="text-white">Abyadi</span>
              <br />
              <span className="text-white">Suwandi</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 mb-6 h-9">
              <span className="text-cyan-400 text-xl font-mono">&gt;</span>
              <span className="text-xl font-mono text-gray-200">
                {displayed}
                <span className="cursor text-cyan-400">|</span>
              </span>
            </div>

            <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-8">
              Saya membangun aplikasi web yang{" "}
              <span className="text-cyan-400 font-medium">dinamis</span> &{" "}
              <span className="text-violet-400 font-medium">interaktif</span> dengan
              pengalaman lebih dari{" "}
              <span className="text-emerald-400 font-bold">4 tahun</span>.
              Berfokus pada performa, estetika, dan pengalaman pengguna yang optimal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                className="btn-primary"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Lihat Portfolio</span>
              </button>
              <a href="mailto:21hamdanas@gmail.com" className="btn-outline">
                Hubungi Saya
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-5">
              {[
                { icon: faGithub, href: "https://github.com/HamdanAs", label: "GitHub" },
                { icon: faLinkedin, href: "https://www.linkedin.com/in/hamdan-abyadi-6a03a9251/", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 hover:glow-cyan hover:scale-110"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full animated-border opacity-60" />
              <div className="absolute inset-2 rounded-full border border-violet-400/20" />
              {/* Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-dark-800 to-dark-700">
                <img
                  src={heroImg}
                  alt="Hamdan Abyadi Suwandi — Web Developer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 glow-cyan">
                <span className="font-mono text-xs text-cyan-400">4+ Years Exp</span>
              </div>
              <div className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2 glow-violet">
                <span className="font-mono text-xs text-violet-400">8+ Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs font-mono text-gray-500">scroll</span>
          <FontAwesomeIcon icon={faArrowDown} className="text-cyan-400 animate-bounce text-sm" />
        </div>
      </div>
    </section>
  );
}
