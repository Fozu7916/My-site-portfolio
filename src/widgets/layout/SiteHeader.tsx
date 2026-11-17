import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContact } from '../../features/contact/ContactProvider';
import { profile } from '../../shared/data/profile';

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/devlog', label: 'Devlog', end: false },
  { to: '/hall-of-fame', label: 'Achievements', end: false },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { openContact } = useContact();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and close if the viewport grows into the desktop layout.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    const desktop = window.matchMedia('(min-width: 901px)');
    const onChange = () => desktop.matches && setMenuOpen(false);
    document.body.classList.add('menu-open');
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onChange);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onChange);
    };
  }, [menuOpen]);

  const contact = () => {
    setMenuOpen(false);
    openContact();
  };

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}${menuOpen ? ' site-header--open' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label={`${profile.name}, home`}>
          <span className="brand__mark" aria-hidden="true"><i /><i /></span>
          <span>Fozu_dev</span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="menu-button__bars" aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="site-navigation" className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Primary">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
          <button type="button" className="button button--primary site-nav__cta" onClick={contact}>Contact me</button>
        </nav>
        <button type="button" className="button button--primary header-cta" onClick={contact}>Contact me</button>
      </div>
    </header>
  );
}
