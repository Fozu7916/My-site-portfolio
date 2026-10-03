import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';

const entries = [
  { 
    date: 'Sep 2026', 
    title: 'Platform Modernization', 
    text: 'Migrated the portfolio codebase to Vite and completely rearchitected the React layer for modularity. Unified the design system while maintaining strict separation of concerns.' 
  },
  { 
    date: 'Jul 2025', 
    title: 'Backend Specialization', 
    text: 'Shifted core engineering focus entirely to backend architectures. Deepened expertise in relational databases, API design, and domain-driven principles.' 
  },
  { 
    date: 'Jun 2025', 
    title: 'AlekseyBook MVP', 
    text: 'Architected and deployed a full-stack social network. Solved real-time state synchronization using SignalR and designed a modular backend architecture using ASP.NET Core.' 
  },
  { 
    date: 'May 2025', 
    title: 'Delivery Foundations', 
    text: 'Configured CI/CD workflows and containerized project environments using Docker to ensure reproducible builds.' 
  },
  { 
    date: 'Jan 2025', 
    title: 'Independent Frontend', 
    text: 'Built the first iteration of a typed React client, establishing the ability to independently deliver full-stack pet projects.' 
  },
  { 
    date: 'Apr 2024', 
    title: 'Computer Science Foundations', 
    text: 'Began deep-dive into core computer science concepts, object-oriented programming, and fundamental data structures.' 
  },
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
