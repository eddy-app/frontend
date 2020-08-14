import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { FetchContext } from '../context/FetchContext';

const Dashboard = () => {
  console.log(useOktaAuth());
  const [user, setUser] = useState(null);
  const { authService, authState } = useOktaAuth();
  const { logout, getUser } = authService;
  const { isAuthenticated } = authState;
  const history = useHistory();
  const fetchContext = useContext(FetchContext);
  const { saveUser } = fetchContext;

  const fethUser = useCallback(async () => {
    try {
      const currentUser = await getUser();
      await setUser(currentUser);
      saveUser(currentUser);
    } catch (err) {
      return err;
    }
  }, [getUser, saveUser]);

  useEffect(() => {
    if (!isAuthenticated) history.push('/login');
    fethUser();
  }, [fethUser, history, isAuthenticated]);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => logout('/')}>Logout</button>
    </div>
  );
};

export default Dashboard;
