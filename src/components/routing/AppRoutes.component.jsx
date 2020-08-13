import React from 'react';

import PublicRoutes from './PublicRoutes.component';
import PrivateRoute from './PrivateRoute.component';
import AdminRoute from './AdminRoute.component';
import Dashboard from '../../pages/Dashboard.component';

const AppRoutes = () => {
  return (
    <>
      <PublicRoutes />
      <AdminRoute path="/users">{/*  */}</AdminRoute>
      <AdminRoute path="/devices">{/*  */}</AdminRoute>
      <PrivateRoute path="/dashboard" exact component={Dashboard} />

      <PrivateRoute path="/users/:uid" exact>
        {/* */}
      </PrivateRoute>
      <PrivateRoute path="/users/:uid/devices" exact>
        {/* */}
      </PrivateRoute>
      <PrivateRoute path="/users/:uid/devices/:deviceId" exact>
        {/* */}
      </PrivateRoute>
    </>
  );
};

export default AppRoutes;
