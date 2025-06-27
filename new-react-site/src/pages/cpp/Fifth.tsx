import React, { useState } from 'react';
import { Container, Typography, Box, Link, Paper, Modal } from '@mui/material';
import '../../styles/ProjectShowcase.css';

const Fifth: React.FC = () => {
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
            QF_player — Музыкальный плеер на Qt
          </Typography>
          <Box sx={{ my: 3 }}>
            <button
              type="button"
              className="project-showcase-img-btn"
              onClick={() => handleOpen('/images/Fifth.png')}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen('/images/Fifth.png');
              }}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
            >
              <img src="/images/Fifth.png" alt="Скриншот QF_player" className="project-showcase-image" />
            </button>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" component="p" sx={{ display: 'inline' }}>
              Github repository:{' '}
            </Typography>
            <Link 
              href="#" 
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
            QF_player — это простой, но функциональный музыкальный плеер на Qt с поддержкой mpv. Приложение позволяет:
          </Typography>
          <ul>
            <li>Добавлять и удалять треки</li>
            <li>Воспроизводить, ставить на паузу, перематывать и переключать треки</li>
            <li>Управлять громкостью</li>
            <li>Сохранять и загружать плейлист между сессиями</li>
            <li>Автоматически подстраивать интерфейс под размер окна</li>
          </ul>

          <Typography variant="h6" gutterBottom>Как собрать</Typography>
          <ol>
            <li>Установите Qt 6.x и CMake</li>
            <li>Клонируйте репозиторий и перейдите в папку проекта</li>
            <li>Убедитесь, что в папке <code>mpv/</code> лежат файлы <code>libmpv-2.dll</code> и <code>libmpv.dll.a</code></li>
            <li>Соберите проект с помощью CMake и Ninja</li>
            <li>Запустите <code>TextRedactor.exe</code></li>
          </ol>

          <Typography variant="h6" gutterBottom>Зависимости</Typography>
          <ul>
            <li>Qt 6.x</li>
            <li>mpv</li>
          </ul>

          <Typography variant="h6" gutterBottom>Структура проекта</Typography>
          <pre style={{ background: '#232136', color: '#f8f8f2', padding: '14px', borderRadius: '8px', fontSize: '1.05em', overflowX: 'auto', border: '1px solid #7E57C2' }}>
{`TextRedactor/
├── src/
│   ├── model/         # Track, TrackListModel
│   ├── view/          # MainWindow, делегаты
│   ├── controller/    # PlayerController
│   └── player/        # Player (mpv)
├── mpv/               # mpv dll и заголовки
├── CMakeLists.txt
├── README.md
└── ...`}
          </pre>

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

export default Fifth; 