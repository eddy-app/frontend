import React from "react"
import { Switch } from "react-router-dom"

import PublicRoutes from "./PublicRoutes.component"
import PrivateRouteAll from "./PrivateRouteAll.component"
import AdminRoute from "./AdminRoute.component"

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoutes />
      <PrivateRouteAll exact to="/dashboard">
        {/*  */}
      </PrivateRouteAll>
      <AdminRoute exact to="/users">
        {/*  */}
      </AdminRoute>
      <AdminRoute exact to="/devices">
        {/*  */}
      </AdminRoute>
    </Switch>
  )
}

export default AppRoutes
