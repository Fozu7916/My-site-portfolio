
import { profile, skills } from '../shared/data/profile';

import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';

export function AboutPage() {
  return (
    <div className="page-shell about-page">
      <PageIntro
        title="Engineering with a wider perspective."
        description="I build reliable backend systems with C# and .NET, focusing on API design, data integrity, real-time communication, and maintainable architecture."
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
            Telegram (DM) <span aria-hidden="true">↗</span>
          </a>

          <a
            className="profile-social profile-social--telegram"
            href={profile.telegramChannelUrl}
            target="_blank"
            rel="noreferrer"
          >
            Telegram channel <span aria-hidden="true">↗</span>
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
                <strong>Engineering fundamentals</strong>
                I focus on building maintainable backend applications with
                C# and ASP.NET Core, emphasizing clean code, data integrity,
                and reliable API design.
              </p>

              <p>
                <strong>Backend architecture</strong>
                I work with REST APIs, implement real-time communication using SignalR, 
                and utilize PostgreSQL and Redis. I design system architectures and develop 
                high-performance functions—as demonstrated in my projects.
              </p>

              <p>
                <strong>Continuous growth</strong>
                I am studying Software Engineering at Tomsk Polytechnic University
                and working on practical projects to refine my engineering skills. 
                My next goal is to secure an internship at T-Bank.
              </p>
            </div>

            <div className="about-metrics">
              <div>
                <strong>C# / .NET</strong>
                <span>Primary stack</span>
              </div>

              <div>
                <strong>Backend</strong>
                <span>Engineering focus</span>
              </div>

              <div>
                <strong>B2</strong>
                <span>English level</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="content-card stack-card">
            <h2>Stack</h2>

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
