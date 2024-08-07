// src/LoginPage.js
import React from 'react';
import { Button, Container, Title } from '@mantine/core';
import { signInWithGoogle } from './firebase';

const LoginPage = () => {
  return (
    <Container>
      <Title order={1}>Login</Title>
      <Button onClick={signInWithGoogle}>Login with Google</Button>
    </Container>
  );
};

export default LoginPage;
