import React, { lazy, Suspense, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import PublicRoutes from './PublicRoutes.component';
import PrivateRoute from './PrivateRoute.component';
import AdminRoute from './AdminRoute.component';
import LazyDashboard from '../../pages/LazyDashboard';
import Layout from '../Layout.component';

const Dashboard = lazy(() => import('../../pages/Dashboard.page'));

const AppRoutes = () => {
  const authContext = useContext(AuthContext);
  const { isLoading, currentUser } = authContext;

  return (
    <>
      <PublicRoutes />
      <Suspense fallback={<LazyDashboard />}>
        {!isLoading && currentUser ? (
          <Layout>
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
          </Layout>
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
