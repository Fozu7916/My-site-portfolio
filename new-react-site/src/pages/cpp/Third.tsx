import React, { useState } from 'react';
import { Container, Typography, Box, Link, Paper, Modal } from '@mui/material';
import '../../styles/ProjectShowcase.css';

const Third: React.FC = () => {
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
            Table of money uses SQL table
          </Typography>
          
          <Box sx={{ my: 3 }}>
            <button
              type="button"
              className="project-showcase-img-btn"
              onClick={() => handleOpen('/images/third.png')}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen('/images/third.png');
              }}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
            >
              <img src="/images/third.png" alt="Project screenshot" className="project-showcase-image" />
            </button>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" component="p" sx={{ display: 'inline' }}>
              Github repository:{' '}
            </Typography>
            <Link 
              href="https://github.com/Fozu7916/Sql-bebe" 
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
            Приложение для управления таблицей расходов с использованием базы данных SQLite. Реализовано на C++ с применением паттернов ООП.
          </Typography>
          <Typography variant="h6" gutterBottom>Ключевые особенности:</Typography>
          <ul>
            <li>Добавление, редактирование и удаление записей о расходах</li>
            <li>Хранение данных в базе SQLite</li>
            <li>Использование ООП: абстракция, инкапсуляция, полиморфизм</li>
            <li>Просмотр истории операций</li>
          </ul>
          <Typography variant="h6" gutterBottom>Технологии:</Typography>
          <Typography variant="body1" paragraph>
            C++, SQLite, ООП
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

export default Third; 