import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
  faXmark,
  faExternalLink,
  faCalendar,
  faUser,
  faTag,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen tech-grid flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold gradient-text mb-4">404</div>
          <p className="text-gray-400 mb-6">Project tidak ditemukan.</p>
          <button className="btn-primary" onClick={() => navigate("/")}>
            <span>← Kembali</span>
          </button>
        </div>
      </div>
    );
  }

  const prevImg = () => setActiveImg((i) => (i - 1 + project.images.length) % project.images.length);
  const nextImg = () => setActiveImg((i) => (i + 1) % project.images.length);

  return (
    <div className="min-h-screen tech-grid">
      {/* Orbs */}
      <div className="orb w-96 h-96 bg-cyan-500/15 -top-20 -left-20" />
      <div className="orb w-72 h-72 bg-violet-500/15 bottom-0 -right-20" />

      {/* Top Nav */}
      <div className="sticky top-0 z-40 glass border-b border-cyan-400/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-medium">Kembali ke Portfolio</span>
          </button>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="font-mono text-sm text-gray-400">{project.category}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-gray-400">{project.subtitle}</p>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          {/* Main Image */}
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card cursor-zoom-in mb-4 img-zoom"
            onClick={() => setLightbox(true)}
          >
            <img
              src={project.images[activeImg]}
              alt={`${project.title} screenshot ${activeImg + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Nav arrows (only if >1 image) */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImg(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:border-cyan-400/40 text-white transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImg(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:border-cyan-400/40 text-white transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </>
            )}
            {/* Counter */}
            <div className="absolute bottom-4 right-4 glass rounded-lg px-3 py-1 text-xs font-mono text-gray-300">
              {activeImg + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-3">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                    activeImg === i
                      ? "border-cyan-400 glow-cyan scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Long Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 rounded bg-gradient-to-b from-cyan-400 to-violet-400 inline-block" />
                Deskripsi Project
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 rounded bg-gradient-to-b from-emerald-400 to-cyan-400 inline-block" />
                Fitur Utama
              </h2>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-300">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-emerald-400 mt-0.5 flex-shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-4">
            {/* Project Info */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-mono text-cyan-400 mb-4">// project.info</h3>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalendar} className="text-cyan-400 text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Tahun</div>
                  <div className="text-sm text-white font-medium">{project.year}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-violet-400 text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Role</div>
                  <div className="text-sm text-white font-medium">{project.role}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FontAwesomeIcon icon={faTag} className="text-emerald-400 text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">Kategori</div>
                  <span className="tech-tag text-xs">{project.category}</span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-mono text-cyan-400 mb-4">// tech.stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/")}
              className="w-full btn-outline text-sm py-3 rounded-xl"
            >
              ← Lihat Project Lain
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
            onClick={() => setLightbox(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {project.images.length > 1 && (
            <>
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
          <img
            src={project.images[activeImg]}
            alt={`${project.title} fullscreen`}
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
