import { Link } from 'react-router-dom';
import { getProjectIndex, type Project } from '../model/projects';
import './projects.css';

interface ProjectCardProps {
  project: Project;
  spotlight?: boolean;
  visual?: boolean;
}

export function ProjectCard({ project, spotlight = false, visual = false }: ProjectCardProps) {
  const cover = project.images[0];
  const index = getProjectIndex(project.slug);

  return (
    <article className={`project-card${spotlight ? ' project-card--spotlight' : ''}${visual ? ' project-card--visual' : ''}`}>
      <div className="project-card__visual" aria-hidden="true">
        {cover ? <img src={cover} alt="" /> : (
          <div className="project-card__monogram">
            <span>{project.category}</span>
            <i />
          </div>
        )}
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{index} · {project.category}</span>
          <span>{project.status ?? 'Case study'}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {visual && (
          <ul className="project-card__points">
            {project.layers.slice(0, 3).map((layer) => (
              <li key={layer.title}><strong>{layer.title}</strong>{layer.text}</li>
            ))}
          </ul>
        )}
        <div className="tag-list" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-card__actions">
          <Link className="project-card__primary-link" to={`/projects/${project.slug}`}>
            Explore case study <span aria-hidden="true">↗</span>
          </Link>
          <a className="project-card__github-link" href={project.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
