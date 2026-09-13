import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';

const entries = [
  { date: 'Sep 2026', title: 'Rebrand', text: 'Restyled the portfolio from Neo-brutalism to Mercury: introduced the Mercury design system, unified interfaces, and improved the visual hierarchy.' },
  { date: 'Sep 2026', title: 'Complete Codebase Rewrite', text: 'Rewrote the entire codebase from scratch: migrated to Vite, rebuilt all core entities and project data structures, and rearchitected the app for modularity, reusability, and future requirements. Paid special attention to regression-proofing and making components truly composable.' },
  { date: 'Jul 2025', title: '.NET focus', text: 'Repositioned the profile around backend engineering and reworked the project narrative.' },
  { date: 'Jun 2025', title: 'AlekseyBook', text: 'Documented the ASP.NET Core and React social network case study.' },
  { date: 'May 2025', title: 'Delivery foundations', text: 'Configured CI/CD workflows and containerized project environments.' },
  { date: 'Jan 2025', title: 'React portfolio', text: 'Started the typed React version and its first responsive design system.' },
  { date: 'Apr 2024', title: 'First native app', text: 'Built the first C++ desktop application with Qt.' },
];

export function DevlogPage() {
  return (
    <div className="page-shell devlog-page">
      <PageIntro
        title="Small releases, visible progress."
        description="A concise timeline of projects, technical direction and platform changes."
      />
      <section className="timeline">
        {entries.map((entry, index) => (
          <Reveal className="timeline__entry" key={`${entry.date}-${entry.title}`} delay={index * 0.04}>
            <time>{entry.date}</time>
            <div><h2>{entry.title}</h2><p>{entry.text}</p></div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
