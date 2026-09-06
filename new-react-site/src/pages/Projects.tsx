import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/Projects';
import '../pages/Projects.css';

const Projects: React.FC = () => (
  <div className="projects-page">
    <PageHeader
      label="Portfolio"
      title="Projects"
      description="From backend APIs in .NET to desktop applications in C++/Qt, each project reflects an approach to architecture and clean code."
    />

    <div className="projects-grid">
      {projectsData.map((section, index) => (
        <ProjectCard key={section.title} section={section} index={index} />
      ))}
    </div>
  </div>
);

export default Projects;
