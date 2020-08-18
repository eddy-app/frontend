import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { currentUser, isLoggedIn } = authContext;

  useEffect(() => {
    if (!currentUser && !isLoggedIn) history.push('/login');
  }, [currentUser, isLoggedIn, history]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
