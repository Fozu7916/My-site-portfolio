import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import '../styles/PortfolioPage.css';

const PortfolioPage: React.FC = () => (
  <div className="portfolio-page">
    <PageHeader
      label="Project"
      title="Portfolio Website"
      description="Личный сайт-портфолио для демонстрации навыков, проектов и достижений."
    />

    <motion.div
      className="portfolio-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="portfolio-card__tags">
        {['React', 'TypeScript', 'Framer Motion', 'React Router'].map((tech) => (
          <span key={tech} className="portfolio-card__tag">{tech}</span>
        ))}
      </div>

      <p className="portfolio-card__text">
        Этот сайт — живое портфолио. Здесь собраны проекты на .NET, C++, React и Python,
        devlog разработки и Hall of Fame с достижениями.
      </p>

      <div className="portfolio-card__actions">
        <Link to="/projects" className="btn btn--ghost">← Назад к проектам</Link>
        <a
          href="https://github.com/Fozu7916/My-site-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          GitHub репозиторий
        </a>
      </div>
    </motion.div>
  </div>
);

export default PortfolioPage;
