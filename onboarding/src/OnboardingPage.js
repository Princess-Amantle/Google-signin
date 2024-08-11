// src/OnboardingPage.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { db } from './firebase';
import { doc, updateDoc } from "firebase/firestore";

const OnboardingPage = ({ user, onComplete }) => {
  const [name, setName] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = async () => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name,
        monthlyIncome: income
      });
      onComplete();
    } catch (error) {
      console.error(error);
    }
  };

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
          Onboarding
        </Typography>
        <TextField
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Monthly Income"
          placeholder="Your monthly income"
          value={income}
          onChange={(event) => setIncome(event.target.value)}
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit}
          sx={{ marginTop: 2 }}
          fullWidth
        >
          Complete Onboarding
        </Button>
      </Box>
    </Container>
  );
};

export default OnboardingPage;
