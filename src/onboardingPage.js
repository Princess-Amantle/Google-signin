// src/OnboardingPage.js
import React, { useState } from 'react';
import { TextInput, NumberInput, Button, Container, Title } from '@mantine/core';
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
    <Container>
      <Title order={1}>Onboarding</Title>
      <TextInput
        label="Name"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <NumberInput
        label="Monthly Income"
        placeholder="Your monthly income"
        value={income}
        onChange={(value) => setIncome(value)}
      />
      <Button onClick={handleSubmit}>Complete Onboarding</Button>
    </Container>
  );
};

export default OnboardingPage;
