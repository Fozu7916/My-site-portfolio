import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import * as Icons from '@mui/icons-material';
import '../styles/About.css';

const About: React.FC = () => {
  const socialProfiles = [
    { name: 'Telegram', url: 'https://t.me/Fozyqq', icon: <Icons.Telegram /> },
    { name: 'VK', url: 'https://vk.com/invokedsoul', icon: <Icons.Public /> },
    { name: 'Github', url: 'https://github.com/fozu7916', icon: <Icons.GitHub /> },
    { name: 'LeetCode', url: 'https://leetcode.com/Fozuzzzxxxccc/', icon: <Icons.Computer /> },
    { name: 'Stepik', url: 'https://stepik.org/users/621533557/profile', icon: <Icons.School /> }
  ];

  return (
    <Container maxWidth="lg">
      <div className="page-container">
        <div className="content-wrapper">
          <div className="about-container">
            <div className="project-paper">
              <Typography variant="h2" component="h1" gutterBottom>
                Обо мне
              </Typography>
              <Typography variant="body1" paragraph>
                Я - Fullstack-разработчик и инженер ПО с опытом работы в различных технологиях и фреймворках.
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
              </Typography>
            </div>
          </div>
          <div className="sidebar">
            <div className="profile-container">
              <img 
                src="/images/profile.jpg"
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
                    {profile.icon}
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