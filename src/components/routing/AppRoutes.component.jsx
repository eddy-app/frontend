import React, { lazy, Suspense } from 'react';

import PublicRoutes from './PublicRoutes.component';
import PrivateRoute from './PrivateRoute.component';
import AdminRoute from './AdminRoute.component';
import LazyDashboard from '../../pages/LazyDashboard';
import UsersPage from '../../pages/Users.page';
import DevicesPage from '../../pages/Devices.page';
import MyDevices from '../../pages/MyDevices.page';
import Requests from '../../pages/Requests.page';
import Settings from '../../pages/Settings.page';

const Dashboard = lazy(() => import('../../pages/Dashboard.page'));

const AppRoutes = () => {
  return (
    <>
      <PublicRoutes />
      <Suspense fallback={<LazyDashboard />}>
        <PrivateRoute path="/dashboard" exact>
          <Dashboard />
        </PrivateRoute>
      </Suspense>
      <PrivateRoute path="/users/devices/:uid" exact>
        <MyDevices />
      </PrivateRoute>
      <PrivateRoute path="/users/requests/:uid" exact>
        <Requests />
      </PrivateRoute>
      <PrivateRoute path="/settings/:uid" exact>
        <Settings />
      </PrivateRoute>
      <AdminRoute path="/users" exact>
        <UsersPage />
      </AdminRoute>
      <AdminRoute path="/devices">
        <DevicesPage />
      </AdminRoute>
    </>
  );
};

export default AppRoutes;
