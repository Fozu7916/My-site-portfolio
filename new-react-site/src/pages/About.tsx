import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import Avatar from '../components/Avatar';
import SocialLinks from '../components/SocialLinks';
import { profile, itAchievements } from '../data/profile';
import '../styles/About.css';

const skills = [
  {
    category: 'Backend (.NET) — приоритет',
    items: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'MySQL', 'Docker', 'REST API'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript'],
  },
  {
    category: 'Other',
    items: ['C++ (Qt, MVC, libmpv)', 'Python', 'Linux', 'Git'],
  },
];

const About: React.FC = () => (
  <div className="about-page">
    <PageHeader
      label="About Me"
      title={profile.name}
      description={`${profile.role}. Проектирую масштабируемые API, работаю с PostgreSQL и Docker.`}
    />

    <div className="about-layout">
      <motion.aside
        className="about-sidebar"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar size="md" />

        <div className="about-status">
          <span className="about-status__dot" />
          Open to .NET opportunities
        </div>

        <h2 className="about-sidebar__role">{profile.role}</h2>

        <div className="about-sidebar__contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href="https://t.me/FozuZXC" target="_blank" rel="noopener noreferrer">
            {profile.telegram}
          </a>
        </div>

        <SocialLinks variant="column" />
      </motion.aside>

      <motion.div
        className="about-main"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <section className="about-block">
          <h3 className="about-block__title">Кто я</h3>
          <p className="about-block__text">
            Backend-разработчик с фокусом на экосистему .NET. Проектирую масштабируемые API,
            работаю с базами данных и обеспечиваю чистоту архитектуры. Дополнительно —
            системное программирование на C++ и fullstack-опыт с React.
          </p>
        </section>

        <section className="about-block">
          <h3 className="about-block__title">Tech Stack</h3>
          <div className="about-skills">
            {skills.map((group) => (
              <div key={group.category} className="about-skill-group">
                <span className="about-skill-group__label">{group.category}</span>
                <div className="about-skill-group__tags">
                  {group.items.map((item) => (
                    <span key={item} className="about-skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-block">
          <h3 className="about-block__title">IT-достижения</h3>
          <div className="about-achievements">
            {itAchievements.map((text) => (
              <div key={text} className="about-achievement">
                <p className="about-achievement__text">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <Link to="/hall-of-fame" className="about-hof-link">
          Hall of Fame — наука, образование, курсы →
        </Link>
      </motion.div>
    </div>
  </div>
);

export default About;
