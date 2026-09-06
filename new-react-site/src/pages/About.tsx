import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import Avatar from '../components/Avatar';
import SocialLinks from '../components/SocialLinks';
import { profile, itAchievements } from '../data/profile';
import '../pages/About.css';

const skills = [
{
category: 'Backend (.NET) — Core Stack',
items: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'MySQL', 'Docker', 'REST API', 'Clean Architecture'],
},
{
category: 'Frontend',
items: ['React', 'TypeScript', 'Framer Motion'],
},
{
category: 'Tools and Other Technologies',
items: ['C++ (Qt, MVC, libmpv)', 'Python (Automation)', 'Linux', 'Git', 'Kafka', 'Docker', 'Jira'],
},
];

const About: React.FC = () => (
  <div className="about-page">
    <PageHeader
      label="Profile"
      title={profile.name}
      description="Engineering principles, profile stack, and experience in developing scalable systems."
    />

    <div className="about-layout">
      <motion.aside
        className="about-sidebar"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Avatar size="lg" />

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
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
<section className="about-block">
<h3 className="about-block__title">About Me</h3>
<p className="about-block__text">
Backend developer with a focus on the .NET ecosystem (C#, ASP.NET Core). I design scalable APIs, optimize work with relational databases using Entity Framework Core and PostgreSQL, and build services using Clean Architecture principles. I also have commercial experience developing client-side components using React and TypeScript.
</p>
</section>

        <section className="about-block">
          <h3 className="about-block__title">Stack</h3>
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
          <h3 className="about-block__title">IT results</h3>
          <div className="about-achievements">
            {itAchievements.map((text) => (
              <div key={text} className="about-achievement">
                <p className="about-achievement__text">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="about-hof-wrapper">
          <Link to="/hall-of-fame" className="about-hof-link">
            Hall of Fame — академические результаты, олимпиады и курсы →
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
);

export default About;