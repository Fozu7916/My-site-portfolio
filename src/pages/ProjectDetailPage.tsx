import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getProject, getProjectIndex } from '../features/projects/model/projects';
import { ImageLightbox } from '../features/projects/ui/ImageLightbox';
import { Reveal } from '../shared/ui/Reveal';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return <Navigate to="/404" replace />;

  const index = getProjectIndex(project.slug);
  const status = project.status ?? 'Case study';

  return (
    <article className="project-detail page-shell">
      <header className="page-intro page-intro--visual project-detail__intro">
        <div className="page-intro__copy">
          <span className="eyebrow">{index} / {project.category} · {status}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="project-detail__actions">
            <a className="button button--primary" href={project.github} target="_blank" rel="noreferrer">View source</a>
            <Link className="button button--ghost" to="/projects">All projects</Link>
          </div>
        </div>
        <div className="project-detail__facts">
          {project.metrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </header>

      {project.images.length > 0 && (
        <Reveal className={`project-gallery${project.images.length === 1 ? ' project-gallery--single' : ''}`}>
          <div className="project-gallery__heading">
            <span>Interface gallery</span>
            <span>{String(project.images.length).padStart(2, '0')} screens</span>
          </div>
          {project.images.map((image, imageIndex) => (
            <button
              type="button"
              data-index={String(imageIndex + 1).padStart(2, '0')}
              key={image}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`${project.title} interface ${imageIndex + 1}`} />
            </button>
          ))}
        </Reveal>
      )}

      <section className="project-detail__body">
        <Reveal className="content-card project-narrative">
          <span className="eyebrow">Overview</span>
          <h2>{project.headline}</h2>
          <div className="project-narrative__copy">
            <p>{project.description}</p>
            <p>{project.narrative}</p>
          </div>
        </Reveal>
        <div className="project-detail__meta">
          <Reveal className="content-card">
            <span className="eyebrow">Stack</span>
            <div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
          </Reveal>
          <Reveal className="content-card">
            <span className="eyebrow">Capabilities</span>
            <ul className="clean-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <Reveal className="content-card project-layers">
        <span className="eyebrow">Architecture</span>
        <h2>Responsibilities kept apart.</h2>
        <div>
          {project.layers.map((layer, layerIndex) => (
            <div className="principle" key={layer.title}>
              <span>{String(layerIndex + 1).padStart(2, '0')}</span>
              <div>
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <ImageLightbox src={selectedImage} alt={`${project.title} interface`} onClose={() => setSelectedImage(null)} />
    </article>
  );
}
