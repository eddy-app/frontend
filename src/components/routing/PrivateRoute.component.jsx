import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import Layout from '../Layout.component';

const PrivateRoute = ({ children, ...rest }) => {
  const { authState } = useOktaAuth();
  const { isAuthenticated } = authState;

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated) setLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Route
      {...rest}
      render={() =>
        loggedIn === true ? (
          <Layout>{children}</Layout>
        ) : (
          <Redirect to="/login" />
        )
      }></Route>
  );
};

export default PrivateRoute;
