import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCode } from "@fortawesome/free-solid-svg-icons";

const links = [
  { label: "Tentang", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Teknologi", href: "#tools" },
  { label: "Portfolio", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-cyan-400/10 py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg animated-border flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCode}
              className="text-cyan-400 text-sm"
            />
          </div>
          <span className="font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
            HamdanAs<span className="text-cyan-400">_</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`nav-link ${active === l.href ? "active" : ""}`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:21hamdanas@gmail.com"
            className="btn-outline text-sm py-2 px-4"
          >
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass border-t border-cyan-400/10 mt-2 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="text-left text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
