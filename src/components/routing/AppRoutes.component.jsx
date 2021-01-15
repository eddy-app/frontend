import React from "react"

import PublicRoutes from "./PublicRoutes.component"

const AppRoutes = () => {
  return (
    <>
      <PublicRoutes />
      {/* <Suspense fallback={<LazyDashboard />}>
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
      </AdminRoute> */}
    </>
  )
}

export default AppRoutes
