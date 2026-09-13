import { profile, skills } from '../shared/data/profile';
import { PageIntro } from '../shared/ui/PageIntro';
import { Reveal } from '../shared/ui/Reveal';
 
export function AboutPage() {
  return (
    <div className="page-shell about-page">
      <PageIntro
        title="Engineering with a wider perspective."
        description="Technical depth, product awareness and disciplined practice shape how I approach complex work."
      />

      <section className="about-grid">
        <Reveal className="profile-card">
          <div className="profile-card__portrait">
            <img src={profile.avatar} alt={`Avatar of ${profile.name}`} />
            <small>Backend<br />engineering</small>
          </div>
          <div><h2>{profile.name}</h2><p>{profile.role}</p></div>
          <p className="profile-email">{profile.email}</p>
          <div className="profile-socials" aria-label="Contact and coding profiles">
            <a className="profile-social profile-social--telegram" href={profile.telegramUrl} target="_blank" rel="noreferrer">Telegram <span aria-hidden="true">↗</span></a>
            <a className="profile-social profile-social--github" href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a className="profile-social profile-social--leetcode" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>
        <div className="about-content">
          <Reveal className="content-card">
            <span className="eyebrow">About me</span>
            <h2>How I approach the work.</h2>
            <div className="about-copy">
              <p><strong>Engineering depth</strong>I value explicit contracts, data integrity and systems that remain understandable as requirements change.</p>
              <p><strong>Product context</strong>I consider the complete user journey instead of treating backend development as an isolated technical layer.</p>
            </div>
            <div className="about-metrics">
              <div><strong>.NET</strong><span>Primary direction</span></div>
              <div><strong>400 kg</strong><span>Powerlifting total</span></div>
              <div><strong>B2</strong><span>English level</span></div>
            </div>
          </Reveal>
          <Reveal className="content-card stack-card">
            <h2>Stack</h2>
            <div className="skill-groups">
              {skills.map((group) => (
                <div className="skill-group" key={group.category}>
                  <h3>{group.category}</h3>
                  <div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
