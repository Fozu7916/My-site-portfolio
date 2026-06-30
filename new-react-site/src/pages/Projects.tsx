import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/Projects';
import '../styles/Projects.css';

const Projects: React.FC = () => (
  <div className="projects-page">
    <PageHeader
      label="Portfolio"
      title="Проекты"
      description="От backend API на .NET до desktop-приложений на C++/Qt — каждый проект отражает подход к архитектуре и чистому коду."
    />

    <div className="projects-grid">
      {projectsData.map((section, index) => (
        <ProjectCard key={section.title} section={section} index={index} />
      ))}
    </div>
  </div>
);

export default Projects;
