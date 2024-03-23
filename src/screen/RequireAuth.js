import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/config';

const RequireAuth = ({ children }) => {
  const navigation = useNavigation(); // Hook to access navigation object
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!user) {
    // Navigate to the login screen if the user is not logged in
    navigation.navigate('Signin');
    return null; // Return null to prevent rendering anything until navigation is complete
  }

  // Render children if the user is logged in
  return children;
};

export default RequireAuth;
