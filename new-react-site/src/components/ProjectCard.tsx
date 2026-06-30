import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectData } from '../data/Projects';
import '../styles/Projects.css';

const accentColors = ['#512bd4', '#6366f1', '#22d3ee', '#10b981'];

interface ProjectCardProps {
  section: ProjectData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ section, index }) => {
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.article
      className="project-card"
      style={{ '--card-accent': accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className="project-card__glow" />
      <div className="project-card__border-glow" aria-hidden="true" />

      <header className="project-card__header">
        <span className="project-card__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="project-card__title">
          <span className="project-card__emoji">{section.emoji}</span>
          {section.title}
        </h2>
      </header>

      <div className="project-card__section">
        <h3 className="project-card__label">Stack</h3>
        <ul className="project-card__tags">
          {section.frameworks.map((fw) => (
            <li key={fw} className="project-card__tag">{fw}</li>
          ))}
        </ul>
      </div>

      <div className="project-card__section">
        <h3 className="project-card__label">Projects</h3>
        <ul className="project-card__projects">
          {section.projects.map((project, pi) => (
            <motion.li
              key={project.name}
              className="project-card__project"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + pi * 0.06 + 0.2 }}
            >
              <div className="project-card__project-info">
                <span className="project-card__project-name">{project.name}</span>
                <span className="project-card__project-desc">{project.description}</span>
              </div>
              <div className="project-card__project-actions">
                {project.link && (
                  <Link to={project.link} className="project-card__action project-card__action--view">
                    Showcase
                  </Link>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__action project-card__action--github"
                >
                  GitHub
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
