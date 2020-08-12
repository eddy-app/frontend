import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Layout from "../Layout.component"

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth0()
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? <Layout>{children}</Layout> : <Redirect to="/" />
      }
    />
  )
}

export default PrivateRoute