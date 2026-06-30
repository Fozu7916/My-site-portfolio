import React from 'react';
import { motion } from 'framer-motion';
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

    <motion.div
      className="projects-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {projectsData.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.45 }}
        >
          <ProjectCard section={section} index={index} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Projects;
