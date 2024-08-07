// src/HomePage.js
import React from 'react';
import { Container, Title, Text, Button } from '@mantine/core';
import { logOut } from './firebase';

const HomePage = ({ user }) => {
  return (
    <Container>
      <Title order={1}>Home</Title>
      <Text>Welcome, {user.email}</Text>
      <Button onClick={logOut}>Logout</Button>
    </Container>
  );
};

export default HomePage;
