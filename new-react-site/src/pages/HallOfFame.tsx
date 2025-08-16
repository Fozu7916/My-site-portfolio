import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Modal } from '@mui/material';
import '../styles/HallOfFame.css';

const HallOfFame: React.FC = () => {
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
      <div className="halloffame-container">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Paper 
            className="halloffame-paper"
            elevation={3} 
            sx={{ 
              p: 4,
              backgroundColor: 'rgba(33, 33, 33, 0.92)',
              color: 'white',
              borderRadius: '18px',
              overflow: 'hidden'
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Hall of Fame
            </Typography>

            <Typography variant="body1" paragraph>
              1) Прошел курс от Яндекса по С++
            </Typography>

            <button
              type="button"
              className="project-showcase-img-btn"
              onClick={() => handleOpen('images/Yandex.png')}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
            >
              <img src="images/Yandex.png" alt="Yandex Award" className="halloffame-image" />
            </button>

            <Typography variant="body1" paragraph>
              2) Пройдены курсы по &quot;промышленному&quot; программированию на С++ от вк
            </Typography>

            <button
              type="button"
              className="project-showcase-img-btn"
              onClick={() => handleOpen('images/Stepik.png')}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
            >
              <img src="images/Stepik.png" alt="Yandex Award" className="halloffame-image" />
            </button>


          </Paper>
        </Box>
      </div>
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
    </Container>
  );
};

export default HallOfFame; 