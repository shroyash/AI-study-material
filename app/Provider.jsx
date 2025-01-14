'use client';

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect } from 'react';

const Provider = ({ children }) => {
  const { user } = useUser();

  // Save user information to the backend
  const saveUserInfo = async () => {
    try {
      if (!user) return; // Prevent unnecessary API calls
      const response = await axios.post('/api/users', { user:user });
      console.log('User information saved:', response.data);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  useEffect(() => {
    saveUserInfo();
  }, [user]);

  return <>{children}</>;
};

export default Provider;

