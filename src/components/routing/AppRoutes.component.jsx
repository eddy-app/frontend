import React, { lazy, Suspense, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import PublicRoutes from './PublicRoutes.component';
import PrivateRoute from './PrivateRoute.component';
import AdminRoute from './AdminRoute.component';
import LazyDashboard from '../../pages/LazyDashboard';

const Dashboard = lazy(() => import('../../pages/Dashboard.page'));

const AppRoutes = props => {
  const authContext = useContext(AuthContext);
  const { isLoading, currentUser } = authContext;

  return (
    <>
      <PublicRoutes {...props} />
      <Suspense fallback={<LazyDashboard />}>
        {!isLoading && currentUser ? (
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
        ) : (
          <PrivateRoute path="/dashboard" exact component={LazyDashboard} />
        )}
      </Suspense>

      <PrivateRoute path="/users/:uid" exact>
        {/* */}
      </PrivateRoute>
      <PrivateRoute path="/users/:uid/devices" exact>
        {/* */}
      </PrivateRoute>
      <PrivateRoute path="/users/:uid/devices/:deviceId" exact>
        {/* */}
      </PrivateRoute>
      <AdminRoute path="/users">{/*  */}</AdminRoute>
      <AdminRoute path="/devices">{/*  */}</AdminRoute>
    </>
  );
};

export default AppRoutes;
