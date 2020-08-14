import React, { lazy, Suspense, useContext } from 'react';
import { FetchContext } from '../../context/FetchContext';

import PublicRoutes from './PublicRoutes.component';
import PrivateRoute from './PrivateRoute.component';
import AdminRoute from './AdminRoute.component';
import LazyDashboard from '../../pages/LazyDashboard';

const Dashboard = lazy(() => import('../../pages/Dashboard.component'));

const AppRoutes = () => {
  const fetchContext = useContext(FetchContext);
  const { isLoading, currentUser } = fetchContext;
  return (
    <>
      <PublicRoutes />
      <AdminRoute path="/users">{/*  */}</AdminRoute>
      <AdminRoute path="/devices">{/*  */}</AdminRoute>
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
    </>
  );
};

export default AppRoutes;
