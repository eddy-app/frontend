import React from "react"

import PublicRoutes from "./PublicRoutes.component"
import PrivateRoute from "./PrivateRoute.component"
import AdminRoute from "./AdminRoute.component"
import Dashboard from "../../pages/Dashboard.component"

const AppRoutes = () => {
  return (
    <>
      <PublicRoutes />
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <AdminRoute path="/users">{/*  */}</AdminRoute>
      <AdminRoute path="/devices">{/*  */}</AdminRoute>
    </>
  )
}

export default AppRoutes
