import React, { useState } from 'react';
import { Container, Typography, Box, Link, Paper, Modal } from '@mui/material';
import '../../styles/ProjectShowcase.css';

const Fourth: React.FC = () => {
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
            Qt program simulating bank
          </Typography>
          
          <Box sx={{ my: 3 }}>
            <button
              type="button"
              className="project-showcase-img-btn"
              onClick={() => handleOpen('/images/fourth.png')}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen('/images/fourth.png');
              }}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
            >
              <img src="/images/fourth.png" alt="Project screenshot" className="project-showcase-image" />
            </button>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" component="p" sx={{ display: 'inline' }}>
              Github repository:{' '}
            </Typography>
            <Link 
              href="https://github.com/Fozu7916/Login-balance-qt-" 
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
            ЯКолшелек — приложение для управления балансом пользователя с регистрацией, авторизацией и операциями с деньгами (пополнение/снятие). Реализовано на C++ с использованием Qt и паттерна MVC.
          </Typography>
          <Typography variant="h6" gutterBottom>Ключевые особенности:</Typography>
          <ul>
            <li>Регистрация и авторизация с безопасным хранением паролей (хеширование с солью)</li>
            <li>Управление балансом: пополнение, снятие, проверка достаточности средств</li>
            <li>История транзакций пользователя</li>
            <li>Централизованная обработка ошибок</li>
            <li>Архитектура MVC: разделение на модель, представление и контроллер</li>
            <li>Использование интерфейсов для гибкости и расширяемости</li>
            <li>Защита от SQL-инъекций, валидация данных</li>
          </ul>
          <Typography variant="h6" gutterBottom>Технологии:</Typography>
          <Typography variant="body1" paragraph>
            C++17, Qt 6, MySQL
          </Typography>
          <Typography variant="h6" gutterBottom>Безопасность:</Typography>
          <ul>
            <li>Пароли хранятся в зашифрованном виде</li>
            <li>Используются подготовленные SQL-запросы</li>
            <li>Проверка входных данных</li>
          </ul>
          <Typography variant="body2" paragraph sx={{ color: '#b39ddb', mt: 2 }}>
            Возможные улучшения: вынести работу с БД в отдельный слой, добавить логирование и расширенную валидацию, вынести длительные операции в отдельный поток.
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

export default Fourth; 