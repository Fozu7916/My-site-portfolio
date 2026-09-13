import { Link } from 'react-router-dom';
import { featuredProjects } from '../features/projects/model/projects';
import { ProjectCard } from '../features/projects/ui/ProjectCard';
import { useContact } from '../features/contact/ContactProvider';
import { Reveal } from '../shared/ui/Reveal';

const principles = [
  { number: '01', title: 'Fundamentals first', text: 'Strong models, explicit contracts and engineering decisions grounded in first principles.' },
  { number: '02', title: 'Backend depth, product context', text: 'C# and .NET as the core, with enough frontend experience to understand the complete user journey.' },
  { number: '03', title: 'Consistency compounds', text: 'The same discipline drives software delivery, continuous learning and powerlifting.' },
];

export function HomePage() {
  const { openContact } = useContact();

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__backdrop" />
        <div className="home-hero__content">
          <h1>Reliable systems.<br />Quiet confidence.</h1>
          <p>I’m a C#/.NET backend developer and Software Engineering student at TPU. I build APIs and data-driven services, using React and TypeScript when the product needs a frontend.</p>
          <div className="hero-actions">
            <button className="button button--primary" type="button" onClick={openContact}>Start a conversation</button>
            <Link className="button button--ghost" to="/projects">View selected work</Link>
          </div>
        </div>
        <a className="hero-scroll" href="#work">Scroll to work <span aria-hidden="true">↓</span></a>
      </section>

      <section className="section" id="work">
        <Reveal className="section-heading">
          <div><span className="eyebrow">Selected work</span><h2>Systems made tangible.</h2></div>
          <Link to="/projects">Explore all projects <span aria-hidden="true">↗</span></Link>
        </Reveal>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}><ProjectCard project={project} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <Reveal>
          <span className="eyebrow">Engineering approach</span>
          <h2>Architecture should make the difficult things calmer.</h2>
        </Reveal>
        <div className="principles">
          {principles.map((principle) => (
            <Reveal className="principle" key={principle.number}>
              <span>{principle.number}</span>
              <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="cta-card">
          <span className="eyebrow">Have a challenge?</span>
          <h2>Let’s turn complexity into a dependable product.</h2>
          <button className="button button--primary" type="button" onClick={openContact}>Contact me</button>
        </Reveal>
      </section>
    </>
  );
}
