import React, { useState } from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Modal } from '@mui/material';
import '../../styles/ProjectShowcase.css';

const images = [
  "/images/ReactFirst.png",
  "/images/ReactSecond.png",
  "/images/ReactThird.png",
  "/images/ReactFourth.png",
  "/images/ReactFifth.png",
  "/images/ReactSixth.png",
  "/images/ReactSeventh.png",
  "/images/ReactEighth.png"
];

const First: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedImg(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Paper elevation={4} className="project-showcase-paper">
        <Typography variant="h3" gutterBottom sx={{ color: '#b39ddb', fontWeight: 700 }}>
          AlekseyBook
        </Typography>
        <Typography variant="h6" gutterBottom color="error">
          ----------Проект закрыт на данный момент------------
        </Typography>
        <Typography variant="body1" gutterBottom>
          Разработка новых функций не ведётся, сайт не работает.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', my: 3 }}>
          {images.map((src, idx) => (
            <button
              type="button"
              key={idx}
              className="project-showcase-img-btn"
              onClick={() => handleOpen(src)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen(src);
              }}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
            >
              <img
                src={src}
                alt={`AlekseyBook screenshot ${idx + 1}`}
                className="project-showcase-image"
              />
            </button>
          ))}
        </Box>
        <Typography variant="h5" gutterBottom>
          Социальная сеть с современным интерфейсом и расширенным функционалом.
        </Typography>
        <Typography variant="h6" gutterBottom>Основные функции</Typography>
        <List>
          <ListItem><ListItemText primary="👥 Профили пользователей" /></ListItem>
          <ListItem><ListItemText primary="💬 Чат в реальном времени" /></ListItem>
          <ListItem><ListItemText primary="👋 Система друзей" /></ListItem>
          <ListItem><ListItemText primary="📝 Публикация постов" /></ListItem>
          <ListItem><ListItemText primary="💭 Комментарии и лайки" /></ListItem>
          <ListItem><ListItemText primary="🟢 Отслеживание онлайн-статуса" /></ListItem>
          <ListItem><ListItemText primary="🔔 Уведомления" /></ListItem>
        </List>
        <Typography variant="h6" gutterBottom>Технологии</Typography>
        <Typography variant="subtitle1" gutterBottom>Фронтенд</Typography>
        <List>
          <ListItem><ListItemText primary="React, TypeScript, SignalR (real-time), CSS Modules" /></ListItem>
        </List>
        <Typography variant="subtitle1" gutterBottom>Бэкенд</Typography>
        <List>
          <ListItem><ListItemText primary="ASP.NET Core, Entity Framework Core, MySQL, SignalR, JWT аутентификация" /></ListItem>
        </List>
        <Box sx={{ mt: 3 }}>
          <a
            href="/projects"
            style={{
              textDecoration: 'none',
              backgroundColor: '#7E57C2',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: 500,
              transition: 'background 0.2s',
              display: 'inline-block'
            }}
          >
            Go Back
          </a>
        </Box>
        <Modal open={open} onClose={handleClose} className="project-lightbox-modal">
          <Box sx={{ outline: 'none' }}>
            {selectedImg && (
              <img
                src={selectedImg}
                alt="Увеличенное изображение"
                className="project-lightbox-img"
              />
            )}
          </Box>
        </Modal>
      </Paper>
    </Container>
  );
};

export default First; 