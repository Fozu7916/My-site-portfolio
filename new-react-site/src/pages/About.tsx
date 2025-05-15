import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import '../styles/About.css';

const About: React.FC = () => {
  const socialProfiles = [
    { name: 'LeetCode', url: 'https://leetcode.com/fozu7916/' },
    { name: 'github', url: 'https://github.com/fozu7916' },
    { name: 'Stepik', url: 'https://stepik.org/users/621533557/profile' }
  ];

  return (
    <Container maxWidth="lg">
      <div className="page-container">
        <div className="content-wrapper">
          <div className="about-container">
            <Typography variant="h2" component="h1" gutterBottom>
              Обо мне
            </Typography>
            <Typography variant="body1" paragraph>
              Я - веб-разработчик с опытом работы в различных технологиях и фреймворках.
              Мои основные навыки включают:
            </Typography>
            <ul>
              <li>Разработка на C++ с использованием QT, WinForms и SFML</li>
              <li>Разработка на C# с использованием Unity, ASP.NET, Avalonia и MAUI</li>
              <li>Разработка на Python с использованием Django и Flask</li>
              <li>Разработка на JavaScript/TypeScript с использованием React</li>
            </ul>
            <Typography variant="body1" paragraph>
              Я постоянно учусь и развиваюсь, изучая новые технологии и подходы к разработке.
              В свободное время я работаю над личными проектами, учусь писать код и читаю книги.
              <br></br>
              P.S предыдушие версии сайта всё ещё хостятся, с адресом https://https://zxcfozuN.netlify.app/ где N-номер от 1 до 11,где 1 - первая версия сайта,
               2 - вторая версия сайта и т.д
            </Typography>
          </div>
          <div className="sidebar">
            <div className="profile-container">
              <img 
                src="/images/Profile.png"
                alt="Profile"
                className="profile-image"
              />
              <Typography variant="h5" className="profile-title">
                Мои профили
              </Typography>
              <div className="social-links">
                {socialProfiles.map((profile) => (
                  <Link 
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {profile.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About; 