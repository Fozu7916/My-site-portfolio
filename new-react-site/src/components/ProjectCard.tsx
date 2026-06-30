import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectData } from '../data/Projects';
import '../styles/Projects.css';

const accentColors = ['#512bd4', '#6366f1', '#22d3ee', '#a78bfa'];

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
          {section.projects.map((project) => (
            <li key={project.name} className="project-card__project">
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
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
