import React from 'react';
import { Container, Typography, Box, Link, Paper } from '@mui/material';
import '../../styles/Projects.css';

const Third: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper 
          className="project-paper"
          elevation={3} 
          sx={{ 
            p: 4,
            backgroundColor: 'rgba(33, 33, 33, 0.8)',
            color: 'white'
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Table of money uses SQL table
          </Typography>
          
          <Box sx={{ my: 3 }}>
            <img src="/images/third.png" alt="Project screenshot" style={{ maxWidth: '100%', height: 'auto' }} />
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
            About this app:
          </Typography>
          <Typography variant="body1" paragraph>
            This application is my latest development on 300 lines of code.
            Here I connected the header file of SQLite, wrote three classes, implemented the interaction between them, used
            CamelCase, Abstraction, Encapsulation, Polymorphism, Composition, State Management, Working with objects and their life cycle.
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
        </Paper>
      </Box>
    </Container>
  );
};

export default Third; 