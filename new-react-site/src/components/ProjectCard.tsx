import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectData } from '../data/Projects';
import '../styles/Projects.css';

const accentColors = ['#6366f1', '#512bd4', '#22d3ee', '#a78bfa'];

interface ProjectCardProps {
  section: ProjectData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ section, index }) => {
  const accent = accentColors[index % accentColors.length];

  return (
    <article
      className="project-card"
      style={{ '--card-accent': accent } as React.CSSProperties}
    >
      <div className="project-card__glow" />

      <header className="project-card__header">
        <span className="project-card__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="project-card__title">{section.title}</h2>
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
          {section.projects.map((project) => (
            <li key={project.name}>
              {project.link ? (
                <Link to={project.link} className="project-card__link">
                  <span>{project.name}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ) : (
                <span className="project-card__name">
                  {project.name}
                  {project.status && ` (${project.status})`}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
