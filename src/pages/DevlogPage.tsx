import { devlogEntries } from '../shared/data/devlog';
import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';


export function DevlogPage() {
  return (
    <div className="page-shell devlog-page">
      <PageIntro
        title="Small releases, visible progress."
        description="A concise timeline of projects, technical direction and platform changes."
      />
      <section className="timeline">
        {devlogEntries.map((entry, index) => (
          <Reveal className="timeline__entry" key={`${entry.date}-${entry.title}`} delay={index * 0.04}>
            <time>{entry.date}</time>
            <div><h2>{entry.title}</h2><p>{entry.text}</p></div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
