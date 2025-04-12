import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import '../styles/Projects.css';

interface ProjectSection {
  title: string;
  frameworks: string[];
  projects: Array<{
    name: string;
    link?: string;
    status?: string;
  }>;
}

const Projects: React.FC = () => {
  const sections: ProjectSection[] = [
    {
      title: 'C++',
      frameworks: [
        'QT',
        'Winforms(CLI/С++)',
        'SFML',
        'Connect SQL(MySQL and SQLite)'
      ],
      projects: [
        { name: 'Winform app User control', link: '/cpp/first' },
        { name: 'QT app Password Generator', link: '/cpp/second' },
        { name: 'Program connected with SQL-database(console + SQL)', link: '/cpp/third' },
        { name: 'Qt program simulating bank', link: '/cpp/fourth' }
      ]
    },
    {
      title: 'C#(.NET)',
      frameworks: [
        'Unity',
        'Winforms',
        'Web(ASP.NET)',
        'Avalonia and maUI'
      ],
      projects: [
        { name: 'Unity psyho horror', status: 'WIP' },
        { name: 'Web app Login + smth', status: 'WIP' },
        { name: 'GUI avalonia app', status: 'WIP' },
        { name: 'GUI maui app', status: 'WIP' }
      ]
    },
    {
      title: 'Python',
      frameworks: [
        'Django',
        'Flask'
      ],
      projects: [
        { name: 'Telegram bot' },
        { name: 'Site' }
      ]
    },
    {
      title: 'JavaScript/TypeScript',
      frameworks: [
        'React',
        'Vite',
        'TypeScript'
      ],
      projects: [
        { name: 'React front and Asp.net back' }
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <div className="projects-grid">
        {sections.map((section, index) => (
          <div key={index} className="project-card">
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
        ))}
      </div>
    </Container>
  );
};

export default Projects; 