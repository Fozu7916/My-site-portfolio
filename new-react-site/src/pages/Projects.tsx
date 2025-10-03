import React from 'react';
import { Container } from '@mui/material';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/Projects';

const Projects: React.FC = () => (
  <Container maxWidth={false} disableGutters>
    <div className="project-paper">
      <div className="projects-grid">
        {projectsData.map((section, index) => (
          <ProjectCard key={index} section={section} />
        ))}
      </div>
    </div>
  </Container>
);

export default Projects; 