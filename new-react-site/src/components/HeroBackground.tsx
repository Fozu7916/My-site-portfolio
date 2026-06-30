import React from 'react';
import './HeroBackground.css';

const HeroBackground: React.FC = () => (
  <div className="hero-bg" aria-hidden="true">
    <div className="hero-bg__orb hero-bg__orb--1" />
    <div className="hero-bg__orb hero-bg__orb--2" />
    <div className="hero-bg__orb hero-bg__orb--3" />
    <div className="hero-bg__grid" />
    <div className="hero-bg__noise" />
  </div>
);

export default HeroBackground;
