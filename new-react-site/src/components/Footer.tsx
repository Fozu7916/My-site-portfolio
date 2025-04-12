import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        © 2025 Fozu Inc. |{' '}
        <a href="#" style={{ color: '#7E57C2' }}>
          Privacy Policy
        </a>{' '}
        |{' '}
        <a href="#" style={{ color: '#7E57C2' }}>
          Terms of Use
        </a>
      </p>
      <p>
        Contact:{' '}
        <a href="mailto:alekseylis211@mail.ru" style={{ color: '#7E57C2' }}>
          alekseylis211@mail.ru
        </a>
      </p>
    </footer>
  );
};

export default Footer; 