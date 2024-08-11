// src/LoginPage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { signInWithGoogle } from './firebase';

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={signInWithGoogle}
          sx={{ marginTop: 2 }}
        >
          Login with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
