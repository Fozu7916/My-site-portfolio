import { useState } from 'react';
import { achievements, education, powerlifting } from '../shared/data/profile';
import { ImageLightbox } from '../features/projects/ui/ImageLightbox';
import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';

const certificates = [
  { title: 'C++ course by Yandex', image: '/images/Yandex.png' },
  { title: 'Industrial C++ programming by VK', image: '/images/Stepik.png' },
];

export function HallOfFamePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="page-shell hall-of-fame-page">
      <PageIntro
        title="Results built through curiosity and discipline."
        description="Selected milestones in engineering, academics, education and powerlifting."
      />
      <div className="hof-grid">
        <Reveal className="content-card">
          <span className="eyebrow">Education</span>
          <h2>Software Engineering at TPU.</h2>
          <ul className="clean-list">{education.schools.map((school) => <li key={school}>{school}</li>)}</ul>
          <div className="score-grid">
            {education.exams.map((exam) => <div key={exam.subject}><strong>{exam.score}</strong><span>{exam.subject}</span></div>)}
          </div>
        </Reveal>
        <Reveal className="content-card">
          <span className="eyebrow">Science & competition</span>
          <h2>Olympiads, research and recognition.</h2>
          <ul className="clean-list">{achievements.science.map((item) => <li key={item}>{item}</li>)}</ul>
        </Reveal>
        <Reveal className="content-card">
          <span className="eyebrow">Engineering</span>
          <h2>Offer earned through delivery.</h2>
          <p className="result-quote">{achievements.engineering[0]}</p>
        </Reveal>
        <Reveal className="content-card">
          <span className="eyebrow">Powerlifting</span>
          <h2>{powerlifting.total} kg total at {powerlifting.bodyweight} kg bodyweight.</h2>
          <div className="score-grid">
            {powerlifting.lifts.map((lift) => (
              <div key={lift.name}><strong>{lift.weight} kg</strong><span>{lift.name}</span></div>
            ))}
          </div>
          <p>Training personal bests rather than competition results.</p>
        </Reveal>
      </div>
      <section className="certificate-section">
        <div className="section-heading"><div><span className="eyebrow">Certificates</span><h2>Continuous practice.</h2></div></div>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <Reveal className="certificate-card" key={certificate.title}>
              <button type="button" onClick={() => setSelectedImage(certificate.image)}>
                <img src={certificate.image} alt={certificate.title} />
              </button>
              <h3>{certificate.title}</h3>
              <span>Open certificate ↗</span>
            </Reveal>
          ))}
        </div>
      </section>
      <ImageLightbox src={selectedImage} alt="Professional certificate" onClose={() => setSelectedImage(null)} />
    </div>
  );
}
