import React from 'react';
import { SecureRoute, useOktaAuth } from '@okta/okta-react';
import Layout from '../Layout.component';

const PrivateRoute = ({ children, ...rest }) => {
  const { authState, authService } = useOktaAuth();
  return (
    <SecureRoute
      {...rest}
      render={() =>
        authState.isAuthenticated ? (
          <Layout>{children}</Layout>
        ) : (
          authService.redirect('/login')
        )
      }
    />
  );
};

export default PrivateRoute;
