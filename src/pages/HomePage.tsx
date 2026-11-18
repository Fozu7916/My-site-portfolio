
import { Link } from 'react-router-dom';
import { featuredProjects } from '../features/projects/model/projects';
import { ProjectCard } from '../features/projects/ui/ProjectCard';
import { useContact } from '../features/contact/ContactProvider';
import { devlogEntries } from '../shared/data/devlog';
import { profile, skills } from '../shared/data/profile';
import { Reveal } from '../shared/ui/Reveal';

const principles = [
  {
    number: '01',
    title: 'Fundamentals first',
    text: 'Reliable APIs, explicit contracts, data integrity, and maintainable code built on solid software engineering principles.',
  },
  {
    number: '02',
    title: 'Backend engineering',
    text: 'Building backend systems with C# and ASP.NET Core, combining relational databases, real-time communication, caching, and automated testing.',
  },
  {
    number: '03',
    title: 'Consistency compounds',
    text: 'Continuous learning, iterative project development, and the discipline to improve both engineering skills and personal performance.',
  },
];

const contactLinks = [
  { label: 'Telegram', value: profile.telegram, href: profile.telegramUrl },
  { label: 'GitHub', value: 'Fozu7916', href: profile.github },
  { label: 'LeetCode', value: 'Fozuzzzxxxccc', href: profile.leetcode },
];

export function HomePage() {
  const { openContact } = useContact();

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__backdrop" />

        <div className="home-hero__content">
          <h1>
            Reliable systems.
            <br />
            Quiet confidence.
          </h1>

          <p>
            I’m a Backend Developer specializing in C# and .NET,
            studying Software Engineering at Tomsk Polytechnic University.
            I build APIs, real-time services, and data-driven backend
            systems with a focus on reliability, data integrity, and
            maintainable architecture.
          </p>

          <div className="hero-actions">
            <button
              className="button button--primary"
              type="button"
              onClick={openContact}
            >
              Start a conversation
            </button>

            <Link className="button button--ghost" to="/projects">
              View selected work
            </Link>
          </div>
        </div>

        <a className="hero-scroll" href="#work">
          Scroll to work <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section" id="work">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Systems made tangible.</h2>
          </div>

          <Link to="/projects">
            Explore all projects <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <Reveal>
          <span className="eyebrow">Engineering approach</span>
          <h2>
            Architecture should make the difficult things calmer.
          </h2>
        </Reveal>

        <div className="principles">
          {principles.map((principle) => (
            <Reveal className="principle" key={principle.number}>
              <span>{principle.number}</span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">Stack</span>
            <h2>What I build with.</h2>
          </div>

          <Link to="/about">
            Full profile <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>

        <div className="stack-grid">
          {skills.map((group) => (
            <Reveal className="stack-row" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">Devlog</span>
            <h2>Recent progress.</h2>
          </div>

          <Link to="/devlog">
            Full timeline <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>

        <div className="recent-list">
          {devlogEntries.slice(0, 3).map((entry) => (
            <Reveal key={`${entry.date}-${entry.title}`}>
              <Link className="recent-item" to="/devlog">
                <time>{entry.date}</time>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="cta-card">
          <div className="cta-card__copy">
            <span className="eyebrow">Have a challenge?</span>
            <h2>Let’s turn complexity into a dependable product.</h2>

            <button
              className="button button--primary"
              type="button"
              onClick={openContact}
            >
              Contact me
            </button>
          </div>

          <ul className="cta-links">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <span>{link.value} <span aria-hidden="true">↗</span></span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
