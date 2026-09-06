import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import '../pages/Devlog.css';

const devlogEntries = [
{ date: 'July 25', year: '2025', content: 'Positioning update: focus on .NET Backend, refactoring of About and Projects' },
{ date: 'June 20', year: '2025', content: 'Added Social Network project (ASP.NET Core + React)' },
{ date: 'June 20', year: '2025', content: 'Redesign + creation of the Hall of Fame section' },
{ date: 'May 15', year: '2025', content: 'Configuring the CI/CD pipeline and containerizing projects' },
{ date: 'April 12', year: '2025', content: 'Implementation and integration of the React + TypeScript stack' },
{ date: '12.01', year: '2025', content: 'Start of development of the new version of the website in React' },
{ date: '19.01', year: '2025', content: 'Complete redesign of the project for architectural minimalism' },
{ date: '26.01', year: '2025', content: 'Adapting the website for mobile screens' },
{ date: '04.04', year: '2024', content: 'Created the first desktop Qt application in C++' },
];

const Devlog: React.FC = () => (
  <div className="devlog-page">
    <PageHeader
      label="Journal"
      title="Devlog"
      description="From first cpp to lastest csharp projects"
    />

    <div className="devlog-timeline">
      {devlogEntries.map((entry, index) => (
        <motion.article
          key={`${entry.date}-${entry.content.substring(0, 8)}`}
          className="devlog-entry"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04, duration: 0.35 }}
        >
          <div className="devlog-entry__marker" />
          <div className="devlog-entry__date">
            <span className="devlog-entry__day">{entry.date}</span>
            <span className="devlog-entry__year">{entry.year}</span>
          </div>
          <p className="devlog-entry__content">{entry.content}</p>
        </motion.article>
      ))}
    </div>
  </div>
);

export default Devlog;