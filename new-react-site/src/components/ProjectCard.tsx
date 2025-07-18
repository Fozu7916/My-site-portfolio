import React from 'react';
import { Typography, Link } from '@mui/material';
import '../styles/Projects.css';
import { ProjectData } from '../data/Projects';

interface ProjectCardProps {
  section: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ section }): JSX.Element => (
  <div className="project-card">
    <Typography variant="h4" component="h2" className="project-title">
      {section.title}
    </Typography>
    <Typography variant="h6" className="section-subtitle">
      Фреймворки и библиотеки:
    </Typography>
    <ul className="frameworks-list">
      {section.frameworks.map((framework, idx) => (
        <li key={idx}>{framework}</li>
      ))}
    </ul>
    <Typography variant="h6" className="section-subtitle">
      Реализованные проекты:
    </Typography>
    <ul className="projects-list">
      {section.projects.map((project, idx) => (
        <li key={idx}>
          {project.link ? (
            <Link href={project.link} className="project-link">
              {project.name}
            </Link>
          ) : (
            <span className="project-name">
              {project.name}
              {project.status && ` (${project.status})`}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectCard; 