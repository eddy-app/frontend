import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { FetchContext } from '../context/FetchContext';

const Dashboard = () => {
  const history = useHistory();
  const { authState } = useOktaAuth();
  const { isAuthenticated } = authState;

  const fetchContext = useContext(FetchContext);
  const { signOut, currentUser, isLoggedIn } = fetchContext;

  useEffect(() => {
    if (!currentUser && !isLoggedIn) history.push('/login');
  }, [currentUser, history, isAuthenticated, isLoggedIn]);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
