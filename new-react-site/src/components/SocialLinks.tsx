import React from 'react';
import { socialLinks } from '../data/profile';
import './SocialLinks.css';

interface SocialLinksProps {
  variant?: 'row' | 'column';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'row' }) => (
  <div className={`social-links social-links--${variant}`}>
    {socialLinks.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        className="social-links__item"
      >
        {label}
      </a>
    ))}
  </div>
);

export default SocialLinks;
