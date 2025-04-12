import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Мое Портфолио
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Главная
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Обо мне
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Проекты
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Контакты
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 