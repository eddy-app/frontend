import React from "react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { ReactComponent as Illustration } from "../../../images/landr.svg"
import Page from "../../../App.styled"
import GetStarted from "../../common/customBtn/CustomBtn.component"
import Billboard from "./Header.styled"

const Header = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return (
    <Page.container>
      <Billboard.container id="header">
        <Billboard.hero>
          <Billboard.content>
            <Billboard.title>
              Discover <Billboard.brand>LANDR</Billboard.brand>
            </Billboard.title>
            <Billboard.description>
              Manage your devices accross your teams in a one stop shop
              application.
            </Billboard.description>
            {!isAuthenticated ? (
              <GetStarted
                onClick={loginWithRedirect}
                type="submit"
                text="Get Started"
              />
            ) : (
              <Link to="/dashboard">
                <GetStarted text="Dashboard" />
              </Link>
            )}
          </Billboard.content>
          <Billboard.image>
            <Illustration alt="hero" />
          </Billboard.image>
        </Billboard.hero>
      </Billboard.container>
    </Page.container>
  )
}

export default Header
