import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useOktaAuth } from '@okta/okta-react';

const Dashboard = () => {
  console.log(useOktaAuth());
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { signOut, currentUser, isLoggedIn } = authContext;

  useEffect(() => {
    if (!currentUser && !isLoggedIn) history.push('/login');
  }, [currentUser, isLoggedIn, history]);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => signOut()}>Logout</button>
      <Link to="/users">users</Link>
    </div>
  );
};

export default Dashboard;
