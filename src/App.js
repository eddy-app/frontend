import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee, fas } from "@fortawesome/free-solid-svg-icons"

import AppRoutes from "./components/routing/AppRoutes.component"

library.add(fab, fas, faCheckSquare, faCoffee)

const App = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT}
      redirectUri={`${window.location.origin}/dashboard`}>
      <Router>
        <AppRoutes />
      </Router>
    </Auth0Provider>
  )
}

export default App
