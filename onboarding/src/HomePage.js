// src/HomePage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { logOut } from './firebase';

const HomePage = ({ user }) => {
  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Home
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome, {user.email}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={logOut}
          sx={{ marginTop: 2 }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
