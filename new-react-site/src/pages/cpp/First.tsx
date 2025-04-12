import React from 'react';
import { Container, Typography, Box, Link, Paper } from '@mui/material';
import '../../styles/Projects.css';

const First: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            backgroundColor: 'rgba(33, 33, 33, 0.8)',
            color: 'white'
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            The basic add and remove at List app
          </Typography>
          
          <Box sx={{ my: 3 }}>
            <img src="/images/first.png" alt="Project screenshot" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" component="p" sx={{ display: 'inline' }}>
              Github repository:{' '}
            </Typography>
            <Link 
              href="https://github.com/Fozu7916/Winforms-User-controle/tree/main" 
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
            The application is written in C++, using the WinForms framework. The main file takes up only 88 lines, because it does not contain 
            complex logic. The Create button is responsible for creating a new line, the Save button saves all lines to the "output.txt"
            file, I think it is unnecessary to talk about deleting and editing. It is also worth noting that the form designer synchronizes 
            lines from the "output.txt" file, all lines are immediately written to the application without the need for the user to do this
            manually (at first this was a function of a separate button), I decided not to synchronize it with the database, but to leave the 
            interaction with the lines through the file.
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

export default First; 