import {
  achievements,
  education,
  powerlifting,
} from '../shared/data/profile';

import { detailedAchievements } from '../shared/data/achievements';

import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';

export function HallOfFamePage() {
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

          <ul className="clean-list">
            {education.schools.map((school) => (
              <li key={school}>{school}</li>
            ))}
          </ul>

          <div className="score-grid">
            {education.exams.map((exam) => (
              <div key={exam.subject}>
                <strong>{exam.score}</strong>
                <span>{exam.subject}</span>
              </div>
            ))}
          </div>

          <ul className="clean-list">
            {education.english.map((level) => (
              <li key={level}>{level}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="content-card">
          <span className="eyebrow">Science & Olympiads</span>

          <h2>Research, competitions and recognition.</h2>

          <ul className="clean-list">
            {achievements.science.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="content-card">
          <span className="eyebrow">Engineering</span>

          <h2>Three hackathon podium finishes.</h2>

          <ul className="clean-list">
            {achievements.engineering.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="content-card">
          <span className="eyebrow">Powerlifting</span>

          <h2>
            {powerlifting.total} kg total at{' '}
            {powerlifting.bodyweight} kg bodyweight.
          </h2>

          <div className="score-grid">
            {powerlifting.lifts.map((lift) => (
              <div key={lift.name}>
                <strong>{lift.weight}</strong>
                <span>{lift.name}</span>
              </div>
            ))}
          </div>

        </Reveal>
      </div>


     
    <section className="hof-details">
      <div className="hof-details-header">
        <span className="eyebrow">BEYOND THE OVERVIEW</span>
        <h2>Selected achievements</h2>
      </div>

      <div className="hof-details-grid">
        <div className="hof-detail-item">
          <h3>Hackathons</h3>
          <ul className="clean-list">
            {detailedAchievements.hackathons.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span className="achievement-result">{item.result}</span>
                {'note' in item && <p>{item.note}</p>}
              </li>
            ))}
          </ul>
        </div>

        {detailedAchievements.olympiads.map((group) => (
          <div className="hof-detail-item" key={group.category}>
            <h3>{group.category}</h3>
            <ul className="clean-list">
              {group.names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="hof-detail-item">
          <h3>Science</h3>
          <ul className="clean-list">
            {detailedAchievements.science.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                {item.result && (
                  <span className="achievement-result">{item.result}</span>
                )}
                {'note' in item && <p>{item.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    </div>
  );
}