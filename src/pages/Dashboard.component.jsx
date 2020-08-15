import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { signOut, currentUser, isLoggedIn } = authContext;

  useEffect(() => {
    if (!currentUser && !isLoggedIn) history.push('/login');
  }, [currentUser, isLoggedIn, history]);

  return (
    <div>
      <h1>Dashboard</h1>
      {currentUser && <h2>{currentUser.name}</h2>}
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
