import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import Avatar from '../components/Avatar';
import SocialLinks from '../components/SocialLinks';
import {
  profile,
  education,
  itAchievements,
} from '../data/profile';
import '../styles/About.css';

const skills = [
  {
    category: 'Backend',
    items: ['ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'MySQL', 'Docker'],
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
      description={`${profile.role} с сильной алгоритмической базой, опытом олимпиадной математики и системного программирования на C++.`}
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
          Open to new challenges
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
            Backend-разработчик с упором на экосистему .NET. Обладаю сильной алгоритмической базой
            и опытом в системном программировании на C++. Проектирую масштабируемые API,
            работаю с базами данных и обеспечиваю чистоту архитектуры.
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
          <h3 className="about-block__title">Образование</h3>
          <ul className="about-list">
            {education.schools.map((school) => (
              <li key={school}>{school}</li>
            ))}
            <li>{education.certificate}</li>
          </ul>
          <div className="about-ege">
            {education.ege.map((item) => (
              <div key={item.subject} className="about-ege__item">
                <span className="about-ege__score">{item.score}</span>
                <span className="about-ege__subject">{item.subject}</span>
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
          Смотреть Hall of Fame (наука, курсы) →
        </Link>
      </motion.div>
    </div>
  </div>
);

export default About;
