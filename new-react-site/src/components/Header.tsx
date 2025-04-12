import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Fozu</div>
      <nav className="nav-links">
        <Link to="/projects">Projects</Link>
        <Link to="/devlog">Devlog</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header; 