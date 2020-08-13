import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import {} from '@okta/okta-react';

import Layout from '../Layout.component';

const AdminRoute = ({ children, ...rest }) => {
  // const { isAuthenticated, user } = useAuth0()
  return <Route {...rest}></Route>;
};

export default AdminRoute;
