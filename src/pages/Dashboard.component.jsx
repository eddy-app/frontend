import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Dashboard = () => {
  const { authService } = useOktaAuth();
  const { logout } = authService;
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => logout('/')}>Logout</button>
    </div>
  );
};

export default Dashboard;
