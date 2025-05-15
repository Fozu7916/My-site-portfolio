import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Devlog.css';

const Devlog: React.FC = () => {
  const devlogEntries = [
    { date: '15.05', content: 'Настроенно CI CD для сайта' },
    { date: '4.04', content: 'Написанно первое qt приложение' },
    { date: '26.01', content: 'Переделан сайт для всех устройств' },
    { date: '26.01', content: 'Доделаны страницы С++' },
    { date: '19.01', content: 'Полный ре-дизайн сайта' },
    { date: '12.01', content: 'Начало разработки новой версии сайта на React' },
    { date: '12.04', content: 'Переписан сайт на React' }
  ].reverse();

  return (
    <Container maxWidth="lg">
      <div className="devlog-page">
        <Typography variant="h3" component="h1" className="devlog-title">
          Devlog
        </Typography>
        <div className="devlog-entries">
          {devlogEntries.map((entry, index) => (
            <div key={index} className="devlog-entry">
              <Typography variant="h6" component="div" className="entry-date">
                {entry.date}
              </Typography>
              <Typography variant="body1" className="entry-content">
                {entry.content}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Devlog; 