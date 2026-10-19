import { Link } from 'react-router-dom';
import { profile, socialLinks } from '../../shared/data/profile';

export function SiteFooter() {
  const footerLinks = socialLinks.filter((link) => link.showIn.includes('footer'));

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
          {footerLinks.map((link) => (
            <a key={link.id} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="site-footer__legal">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed and engineered with React + TypeScript</span>
      </div>
    </footer>
  );
}