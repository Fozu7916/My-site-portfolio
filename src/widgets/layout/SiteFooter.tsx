import { Link } from 'react-router-dom';
import { profile } from '../../shared/data/profile';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden="true"><i /><i /></span>
            <span>{profile.name}</span>
          </Link>
          <p>Backend systems with a clear product surface.</p>
        </div>
        <div className="site-footer__links">
          <span className="site-footer__email">{profile.email}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          <a href={profile.telegramUrl} target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>
      <div className="site-footer__legal">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed and engineered with React + TypeScript</span>
      </div>
    </footer>
  );
}
