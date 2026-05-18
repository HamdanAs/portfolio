import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTag } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 bg-dark-800/40 relative">
      <div className="orb w-80 h-80 bg-violet-500/8 -left-20 bottom-0" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Portfolio <span className="gradient-text">Project</span>
        </h2>
        <p className="text-center text-gray-400 mt-2 mb-2">
          Beberapa project yang telah saya kerjakan
        </p>
        <div className="section-line" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => navigate(`/project/${project.slug}`)}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative img-zoom bg-dark-700">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-white font-semibold">Lihat Detail</span>
                  <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowRight} className="text-dark-900 text-sm" />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-dark-900/80 backdrop-blur-sm text-xs font-mono px-2 py-1 rounded-md border border-white/10 text-gray-300">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-mono mt-1">{project.year}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-tag">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
