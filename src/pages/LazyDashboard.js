import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LazyDashboard = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { currentUser, isLoggedIn, isLoading } = authContext;

  useEffect(() => {
    if (!isLoggedIn && !currentUser && isLoading) history.push('/login');
  }, [currentUser, history, isLoading, isLoggedIn]);

  return <div>Loading...</div>;
};

export default LazyDashboard;
