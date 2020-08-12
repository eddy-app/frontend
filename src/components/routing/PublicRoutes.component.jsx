import React from "react"
import { Switch, Route } from "react-router-dom"
import Homepage from "../../pages/Homepage.component"
// import NotFound from "../../pages/NotFound.component"

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="*">{/* <NotFound /> */}</Route>
    </Switch>
  )
}

export default PublicRoutes
