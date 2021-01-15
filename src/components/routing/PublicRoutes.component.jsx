import React from "react"
import { Switch, Route } from "react-router-dom"
import Layout from "../layout/Layout.component"
import Homepage from "../../pages/Homepage.page"

// import NotFound from "../../pages/NotFound.component"

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <Homepage />
        </Layout>
      </Route>
    </Switch>
  )
}

export default PublicRoutes
