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
        <Paper className="project-showcase-paper" elevation={3}>
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
              href="https://github.com/Fozu7916/TextRedactor/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#7E57C2' }}
            >
              Check
            </Link>
          </Box>

          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#7E57C2' }}>
            Кратко
          </Typography>
          <Typography variant="body1" paragraph>
            QF_player — простой, надёжный музыкальный плеер на Qt (C++) с использованием libmpv для воспроизведения. Проект минималистичен, легко собирается и расширяется.
          </Typography>

          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#7E57C2' }}>
            Возможности
          </Typography>
          <ul>
            <li>Добавлять и удалять треки</li>
            <li>Воспроизведение, пауза, перемотка, переключение треков</li>
            <li>Управление громкостью</li>
            <li>Сохранение/загрузка плейлиста между сессиями</li>
            <li>Адаптивный интерфейс</li>
          </ul>

          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#7E57C2' }}>
            Требования
          </Typography>
          <ul>
            <li>Qt 6.x</li>
            <li>CMake ≥ 3.20 и Ninja</li>
            <li>libmpv (binaries + headers)</li>
          </ul>

          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#7E57C2' }}>
            Как поставить libmpv
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Windows (PowerShell):</strong> используйте скрипт <code>./scripts/fetch_mpv_win.ps1</code>, он скачает и положит файлы в <code>mpv/</code>.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Linux (Debian/Ubuntu):</strong> chmod +x ./scripts/fetch_mpv_linux.sh и ./scripts/fetch_mpv_linux.sh
          </Typography>

          <Typography variant="h6" gutterBottom>Сборка</Typography>
          <ol>
            <li>Клонируйте репозиторий и перейдите в папку проекта</li>
            <li>Убедитесь, что в <code>mpv/</code> лежат бинарники и заголовки</li>
            <li>Соберите проект:
              <pre style={{ display: 'inline' }}>
{`mkdir build && cd build
cmake .. -G "Ninja Multi-Config" -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release`}
              </pre>
            </li>
            <li>Запустите исполняемый файл (Windows: <code>TextRedactor.exe</code>)</li>
          </ol>

          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#7E57C2' }}>
            Структура проекта
          </Typography>
          <pre style={{ background: '#232136', color: '#f8f8f2', padding: '14px', borderRadius: '8px', fontSize: '1.05em', overflowX: 'auto', border: '1px solid #7E57C2' }}>
{`TextRedactor/
├── src/
│   ├── model/         # Track, TrackListModel
│   ├── view/          # MainWindow, делегаты
│   ├── controller/    # PlayerController
│   └── player/        # Player (wrapper над libmpv)
├── mpv/               # libmpv binaries + headers
├── scripts/           # Скачивание mpv
├── tests/             # Qt Test
├── CMakeLists.txt
├── README.md
└── LICENSE`}
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
                  alt="Увеличенное изображение QF_player"
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
