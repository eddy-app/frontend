import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import { ThemeProvider } from "styled-components"
// import { Provider } from "react-redux"
// import store from "./state/store"
import theme from "./theme"
import config from "./config/auth0.config"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee, fas } from "@fortawesome/free-solid-svg-icons"
import AppRoutes from "./components/routing/AppRoutes.component"

library.add(fab, fas, faCheckSquare, faCoffee)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider {...config}>
        {/* <Provider store={store}> */}
        <Router>
          <AppRoutes />
        </Router>
        {/* </Provider> */}
      </Auth0Provider>
    </ThemeProvider>
  )
}

export default App
