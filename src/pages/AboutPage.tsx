import { profile, skills } from '../shared/data/profile';

import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';

export function AboutPage() {
  return (
    <div className="page-shell about-page">
      <PageIntro
        title="Engineering with a wider perspective."
        description="Technical depth, product awareness and disciplined practice shape how I approach complex backend systems."
      />

      <section className="about-grid">
        <Reveal className="profile-card">
          <div className="profile-card__portrait">
            <img
              src={profile.avatar}
              alt={`Avatar of ${profile.name}`}
            />

            <small>
              Backend
              <br />
              engineering
            </small>
          </div>

          <div>
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
          </div>

          <p className="profile-email">{profile.email}</p>

          <div
            className="profile-socials"
            aria-label="Contact and coding profiles"
          >
            <a
              className="profile-social profile-social--telegram"
              href={profile.telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Telegram <span aria-hidden="true">↗</span>
            </a>

            <a
              className="profile-social profile-social--github"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              className="profile-social profile-social--leetcode"
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
            >
              LeetCode <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <div className="about-content">
          <Reveal className="content-card">
            <span className="eyebrow">About me</span>

            <h2>How I approach the work.</h2>

            <div className="about-copy">
              <p>
                <strong>Engineering depth</strong>
                I focus on explicit contracts, data integrity and systems that
                remain understandable as requirements evolve.
              </p>

              <p>
                <strong>Product context</strong>
                I consider how backend decisions affect reliability,
                maintainability and the overall product experience.
              </p>

              <p>
                <strong>Continuous growth</strong>
                My primary direction is .NET backend development, while I am
                also building experience with Java and the broader backend
                ecosystem.
              </p>
            </div>

            <div className="about-metrics">
              <div>
                <strong>.NET</strong>
                <span>Primary backend direction</span>
              </div>

              <div>
                <strong>Java</strong>
                <span>Secondary backend ecosystem</span>
              </div>

              <div>
                <strong>400 kg</strong>
                <span>Powerlifting total</span>
              </div>

              <div>
                <strong>B2</strong>
                <span>English level</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="content-card stack-card">
            <span className="eyebrow">Technologies</span>
            <h2>Stack.</h2>

            <div className="skill-groups">
              {skills.map((group) => (
                <div className="skill-group" key={group.category}>
                  <h3>{group.category}</h3>

                  <div className="tag-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}