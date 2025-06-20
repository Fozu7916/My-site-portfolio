import React, { useState } from 'react';
import { Container, Typography, Box, Link, Paper, Modal } from '@mui/material';
import '../../styles/ProjectShowcase.css';

const Second: React.FC = () => {
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
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper 
          className="project-showcase-paper"
          elevation={3}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Password Generator on QT
          </Typography>
          
          <Box sx={{ my: 3 }}>
            <button
              type="button"
              className="project-showcase-img-btn"
              onClick={() => handleOpen('/images/second.png')}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen('/images/second.png');
              }}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
            >
              <img src="/images/second.png" alt="Project screenshot" className="project-showcase-image" />
            </button>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" component="p" sx={{ display: 'inline' }}>
              Github repository:{' '}
            </Typography>
            <Link 
              href="https://github.com/Fozu7916/Password-Generator-QT" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#7E57C2' }}
            >
              Check
            </Link>
          </Box>

          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#7E57C2' }}>
            Описание проекта
          </Typography>
          <Typography variant="body1" paragraph>
            Генератор паролей с гибкими настройками уровня сложности. Реализован на C++ с использованием Qt.
          </Typography>
          <Typography variant="h6" gutterBottom>Ключевые особенности:</Typography>
          <ul>
            <li>Генерация паролей разной длины и сложности</li>
            <li>Выбор параметров (буквы, цифры, спецсимволы)</li>
            <li>Копирование пароля в буфер обмена одной кнопкой</li>
            <li>Современный интерфейс на Qt</li>
          </ul>
          <Typography variant="h6" gutterBottom>Технологии:</Typography>
          <Typography variant="body1" paragraph>
            C++, Qt
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Link href="/projects" sx={{ 
              textDecoration: 'none',
              backgroundColor: '#7E57C2',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#5E35B1'
              }
            }}>
              Go Back
            </Link>
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
      </Box>
    </Container>
  );
};

export default Second; 