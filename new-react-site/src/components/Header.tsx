import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/devlog', label: 'Devlog' },
  { to: '/hall-of-fame', label: 'Hall of Fame' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo">
          <span className="site-header__logo-mark">F</span>
          <span className="site-header__logo-text">ozu</span>
        </Link>

        <nav className={`site-header__nav ${menuOpen ? 'site-header__nav--open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`site-header__link ${
                location.pathname === to ||
                (to === '/projects' && location.pathname.startsWith('/cpp')) ||
                (to === '/projects' && location.pathname.startsWith('/react'))
                  ? 'site-header__link--active'
                  : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <a href="mailto:alekseylis211@mail.ru" className="site-header__cta">
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className={`site-header__burger ${menuOpen ? 'site-header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
