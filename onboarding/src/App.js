// src/App.js
import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import OnboardingPage from './OnboardingPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [isOnboarded, setIsOnboarded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Fetch user data from Firestore to check if onboarding is complete
        // Assume user data contains a field 'isOnboarded'
        // If not, redirect to onboarding page
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <LoginPage />;
  }

  if (!isOnboarded) {
    return <OnboardingPage user={user} onComplete={() => setIsOnboarded(true)} />;
  }

  return <HomePage user={user} />;
};

export default App;
