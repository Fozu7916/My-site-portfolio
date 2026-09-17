import { useMemo, useState } from 'react';
import { projects, type ProjectCategory } from '../features/projects/model/projects';
import { ProjectCard } from '../features/projects/ui/ProjectCard';
import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';

const filters: Array<'All' | ProjectCategory> = ['All', '.NET', 'Frontend', 'Python'];
const previewImages = projects.flatMap((project) => project.images.slice(0, 1)).slice(0, 3);

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visibleProjects = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <div className="page-shell">
      <PageIntro
        title="Work shaped by systems thinking."
        description="Backend services, product experiments and native applications—each documented as an engineering case study."
        visual={(
          <div className="project-intro-visual" aria-hidden="true">
            {previewImages.map((image, index) => (
              <div className="project-intro-visual__frame" key={image}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        )}
      />
      <div className="filter-list" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            type="button"
            className={filter === item ? 'is-active' : ''}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-grid project-grid--archive">
        {visibleProjects.map((project, index) => (
          <Reveal className={index === 0 ? 'project-spotlight' : undefined} key={project.slug} delay={index * 0.04}>
            <ProjectCard project={project} spotlight={index === 0} visual />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
