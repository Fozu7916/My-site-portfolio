import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import { profile } from '../data/profile';
import { projectsData } from '../data/Projects';
import { useContactModal } from '../context/ContactModalContext';
import './Home.css';

const stats = [
  { value: '.NET', label: 'Primary Stack' },
  { value: '5+', label: 'Shipped Projects' },
  { value: '1', label: 'Hackathon Offer' },
  { value: 'API', label: 'REST · EF Core · Docker' },
];

const featuredProjects = [
  {
    name: 'Social Network',
    desc: 'Fullstack Social Network API · ASP.NET Core + React + PostgreSQL',
    link: '/react/alekseybook',
    github: 'https://github.com/Fozu7916/AlekseyBook',
    tag: '.NET',
  },
  {
    name: 'QF Player',
    desc: 'High-performance Music Player · C++ / Qt + MVC architecture + libmpv',
    link: '/cpp/fifth',
    github: 'https://github.com/Fozu7916/QF_Player',
    tag: 'C++',
  },
  {
    name: 'HacatonProTechno',
    desc: 'MediaHUB Backend Automation · Streamlit + VK API + Async Workers',
    link: '/python/hacaton',
    github: 'https://github.com/Fozu7916/HacatonProTechno',
    tag: 'Python',
  },
];

const Home: React.FC = () => {
  const { openContact } = useContactModal();

  return (
    <div className="home">
      <section className="hero">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__badge">
            <span className="hero__status-dot" />
            Open to .NET opportunities
          </div>

          <h1 className="hero__title">
            <span className="hero__greeting">Hi, I am</span>
            <span className="hero__name">{profile.name}</span>
          </h1>

          <p className="hero__role">
            <span className="hero__role-accent">{profile.role}</span>
          </p>

          <p className="hero__pitch">
            Building reliable backend applications with ASP.NET Core and Clean Architecture.
            Fullstack background with React & TypeScript.
          </p>

          <div className="hero__contacts">
            <a href={`mailto:${profile.email}`} className="hero__contact">{profile.email}</a>
            <a href="https://t.me/FozuZXC" target="_blank" rel="noopener noreferrer" className="hero__contact">
              {profile.telegram}
            </a>
          </div>

          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              View projects
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/about" className="btn btn--ghost">About me</Link>
            <button type="button" className="btn btn--ghost" onClick={openContact}>Contact me</button>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="code-window">
            <div className="code-window__bar">
              <div className="code-window__dots">
                <span /><span /><span />
              </div>
              <span className="code-window__filename">Developer.cs</span>
              <span className="code-window__badge">Priority</span>
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
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
            <h2 className="section-title">Selected Works</h2>
          </div>
          <Link to="/projects" className="featured__link">
            All projects →
          </Link>
        </div>

        <div className="featured__grid">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <div className="featured-card">
                <Link to={project.link} className="featured-card__main">
                  <span className="featured-card__tag">
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
                  GitHub →
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
              className={`stack-chip${section.priority ? ' stack-chip--priority' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
            >
              <div className="stack-chip__header">
                <span className="stack-chip__title">{section.emoji} {section.title}</span>
                {section.priority && <span className="stack-chip__badge">Priority</span>}
              </div>
              <div className="stack-chip__tags">
                {section.frameworks.map((fw) => (
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="cta__title">Connect</h2>
          <p className="cta__text">
            Always open to discussing backend architecture, product challenges, and new opportunities.
          </p>
          <SocialLinks />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;