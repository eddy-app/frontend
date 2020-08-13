import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Dashboard = () => {
  const { authService, authState } = useOktaAuth();
  const { logout } = authService;
  const { isAuthenticated } = authState;
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) history.push('/login');
  }, [history, isAuthenticated]);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => logout('/')}>Logout</button>
    </div>
  );
};

export default Dashboard;
