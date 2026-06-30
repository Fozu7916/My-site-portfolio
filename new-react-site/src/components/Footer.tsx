import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import './Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">Fozu</Link>
          <p className="site-footer__tagline">
            {profile.role} · Clean Architecture · Strong Algorithms
          </p>
        </div>

        <div className="site-footer__links">
          <div className="site-footer__col">
            <span className="site-footer__col-title">Navigate</span>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/devlog">Devlog</Link>
            <Link to="/hall-of-fame">Hall of Fame</Link>
          </div>
          <div className="site-footer__col">
            <span className="site-footer__col-title">Connect</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href="https://t.me/FozuZXC" target="_blank" rel="noopener noreferrer">{profile.telegram}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {year} {profile.name}</span>
        <span className="site-footer__made">Built with React & TypeScript</span>
      </div>
    </footer>
  );
};

export default Footer;
