import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import '../pages/PortfolioPage.css';

const PortfolioPage: React.FC = () => (
  <div className="portfolio-page">
    <PageHeader
      label="Project Architecture"
      title="Portfolio Platform"
      description="Персональная инженерная платформа, разработанная в соответствии с дизайн-системой Resend."
    />

    <motion.div
      className="portfolio-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="portfolio-card__tags">
        {['React 18', 'TypeScript', 'Framer Motion', 'React Router v6', 'Design System'].map((tech) => (
          <span key={tech} className="portfolio-card__tag">{tech}</span>
        ))}
      </div>

      <p className="portfolio-card__text">
        Проект спроектирован как единая витрина инженерных решений. В кодовой базе реализована строгая дизайн-система с темным холстом, hairline-границами толщиной 1px, моноширинным контекстом и нулевой зависимостью от сторонних графических библиотек.
      </p>

      <div className="portfolio-card__actions">
        <Link to="/projects" className="btn btn--ghost">← Back to projects</Link>
        <a
          href="https://github.com/Fozu7916/My-site-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          View source on GitHub →
        </a>
      </div>
    </motion.div>
  </div>
);

export default PortfolioPage;