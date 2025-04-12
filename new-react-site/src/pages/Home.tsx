import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Добро пожаловать в мое портфолио
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Я - веб-разработчик, специализирующийся на создании современных веб-приложений
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Посмотреть мои работы
        </Button>
      </Box>
    </Container>
  );
};

export default Home; 