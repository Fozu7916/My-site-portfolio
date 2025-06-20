import React, { useState } from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Modal } from '@mui/material';
import '../../styles/ProjectShowcase.css';

const images = [
  "https://github.com/user-attachments/assets/d89f93c7-bf23-439d-ac3e-b31f622d0c37",
  "https://github.com/user-attachments/assets/c00046e0-4184-476c-bc5e-1f8707dcd240",
  "https://github.com/user-attachments/assets/f64140b0-b0f5-4242-b57a-0dbe8cf7f8dd",
  "https://github.com/user-attachments/assets/c1000a09-bab7-4d57-88f7-7611ab0af391",
  "https://github.com/user-attachments/assets/8bf6b184-679b-40d4-9001-4771793289dc",
  "https://github.com/user-attachments/assets/582a979b-2fed-4546-89b1-99394207b547",
  "https://github.com/user-attachments/assets/b2357d12-2ba4-4566-a7d1-2da09bdd5b3a",
  "https://github.com/user-attachments/assets/02838099-6aa8-4a1e-bf14-ea225b16baae"
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
          <ListItem><ListItemText primary="React" /></ListItem>
          <ListItem><ListItemText primary="TypeScript" /></ListItem>
          <ListItem><ListItemText primary="SignalR (real-time)" /></ListItem>
          <ListItem><ListItemText primary="CSS Modules" /></ListItem>
        </List>
        <Typography variant="subtitle1" gutterBottom>Бэкенд</Typography>
        <List>
          <ListItem><ListItemText primary="ASP.NET Core" /></ListItem>
          <ListItem><ListItemText primary="Entity Framework Core" /></ListItem>
          <ListItem><ListItemText primary="MySQL" /></ListItem>
          <ListItem><ListItemText primary="SignalR" /></ListItem>
          <ListItem><ListItemText primary="JWT аутентификация" /></ListItem>
        </List>
        <Typography variant="h6" gutterBottom>Контакты</Typography>
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