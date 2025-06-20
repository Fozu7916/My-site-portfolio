import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import '../styles/HallOfFame.css';

const HallOfFame: React.FC = () => {
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
              1) Занял первое место на курсе яндекса по С++ (бал не максимальный, т.к. скипнул программирование arduino)
            </Typography>

            <img src="images/Yandex.jpg" alt="Yandex Award" className="halloffame-image" />

          </Paper>
        </Box>
      </div>
    </Container>
  );
};

export default HallOfFame; 