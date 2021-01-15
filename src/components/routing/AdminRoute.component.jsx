import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import { SecureRoute, useOktaAuth } from "@okta/okta-react"
import { AuthContext } from "../../context/AuthContext"

import Layout from "../Layout.component"

const AdminRoute = ({ children, ...rest }) => {
  const { authState } = useOktaAuth()
  const { isAuthenticated } = authState
  const authContext = useContext(AuthContext)
  const { currentUser } = authContext

  return (
    <SecureRoute
      {...rest}
      render={() =>
        isAuthenticated && currentUser.admin ? (
          <Layout>{children}</Layout>
        ) : (
          <Redirect to="/" />
        )
      }></SecureRoute>
  )
}

export default AdminRoute
