import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import { profile } from '../data/profile';
import { projectsData } from '../data/Projects';
import './Home.css';

const stats = [
  { value: '95', label: 'ЕГЭ проф. математика' },
  { value: '7+', label: 'Олимпиад и конференций' },
  { value: '1', label: 'Оффер после хакатона' },
  { value: '4', label: 'Языка / стека' },
];

const featuredProjects = [
  {
    name: 'AlekseyBook',
    desc: 'Social Network · ASP.NET Core + React',
    link: '/react/alekseybook',
    github: 'https://github.com/Fozu7916/AlekseyBook',
    tag: '.NET',
    color: '#512bd4',
  },
  {
    name: 'QF Player',
    desc: 'Music Player · Qt + MVC + libmpv',
    link: '/cpp/fifth',
    github: 'https://github.com/Fozu7916/QF_Player',
    tag: 'C++',
    color: '#6366f1',
  },
  {
    name: 'Bank System',
    desc: 'Banking Application · Qt Widgets',
    link: '/cpp/fourth',
    github: 'https://github.com/Fozu7916/Login-balance-qt',
    tag: 'Qt',
    color: '#22d3ee',
  },
];

const Home: React.FC = () => (
  <div className="home">
    <section className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__badge">
          <span className="hero__status-dot" />
          Open to .NET opportunities
        </div>

        <h1 className="hero__title">
          <span className="hero__greeting">Привет, я</span>
          <span className="hero__name">{profile.name}</span>
        </h1>

        <p className="hero__role">
          <span className="hero__role-accent">{profile.role}</span>
          {' '}· Competitive Programming with C++
        </p>

        <p className="hero__pitch">
          Building backend applications with ASP.NET Core, Entity Framework Core,
          PostgreSQL and MySQL. Fullstack experience with React + TypeScript.
        </p>

        <div className="hero__contacts">
          <a href={`mailto:${profile.email}`} className="hero__contact">{profile.email}</a>
          <a href="https://t.me/FozuZXC" target="_blank" rel="noopener noreferrer" className="hero__contact">
            {profile.telegram}
          </a>
        </div>

        <div className="hero__actions">
          <Link to="/projects" className="btn btn--primary">
            Смотреть проекты
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/about" className="btn btn--ghost">Обо мне</Link>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost">Написать</a>
        </div>
      </motion.div>

      <motion.div
        className="hero__code"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="code-window">
          <div className="code-window__bar">
            <span /><span /><span />
            <span className="code-window__filename">Developer.cs</span>
          </div>
          <pre className="code-window__body"><code>{`public class Aleksey : IBackendDev
{
    public string[] Stack => [
        "ASP.NET Core",
        "EF Core", "PostgreSQL",
        "Docker", "React"
    ];

    public async Task<Solution> BuildAsync()
        => await ShipCleanArchitecture();
}`}</code></pre>
        </div>
      </motion.div>
    </section>

    <section className="stats">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.08 }}
        >
          <span className="stat-card__value">{stat.value}</span>
          <span className="stat-card__label">{stat.label}</span>
        </motion.div>
      ))}
    </section>

    <section className="featured">
      <div className="featured__header">
        <div>
          <span className="section-label">Featured</span>
          <h2 className="section-title">Избранные проекты</h2>
        </div>
        <Link to="/projects" className="featured__link">
          Все проекты →
        </Link>
      </div>

      <div className="featured__grid">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <div className="featured-card">
              <Link to={project.link} className="featured-card__main">
                <span className="featured-card__tag" style={{ '--tag-color': project.color } as React.CSSProperties}>
                  {project.tag}
                </span>
                <h3 className="featured-card__name">{project.name}</h3>
                <p className="featured-card__desc">{project.desc}</p>
                <span className="featured-card__arrow">→</span>
              </Link>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-card__github"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="stacks">
      <span className="section-label">Expertise</span>
      <h2 className="section-title">Tech Stack</h2>
      <div className="stacks__grid">
        {projectsData.map((section, i) => (
          <motion.div
            key={section.title}
            className="stack-chip"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.06 }}
          >
            <span className="stack-chip__title">{section.emoji} {section.title}</span>
            <div className="stack-chip__tags">
              {section.frameworks.slice(0, 5).map((fw) => (
                <span key={fw} className="stack-chip__tag">{fw}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="cta">
      <motion.div
        className="cta__card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="cta__title">Connect</h2>
        <p className="cta__text">
          Открыт к новым проектам, стажировкам и командной разработке.
        </p>
        <SocialLinks />
      </motion.div>
    </section>
  </div>
);

export default Home;
