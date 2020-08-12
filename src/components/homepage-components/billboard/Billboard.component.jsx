import React from "react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { ReactComponent as Illustration } from "../../../images/landr.svg"

// Styles
import {
  billboardContent,
  billboardLeft,
  billboardTitle,
  billboardSentence,
  billRight,
  // name,
} from "./Billboard.styles"

const Billboard = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return (
    <section id="billboard">
      <div className={billboardContent}>
        <div className={billboardLeft}>
          <h2 className={billboardTitle}>Meet Eddy</h2>
          <p className={billboardSentence}>
            Manage your devices accross your teams in a one stop shop
            application with the help of <span>eddy</span> your device manager
            helper.
          </p>
          {!isAuthenticated ? (
            <button className="cta-home" onClick={loginWithRedirect}>
              Get Started
            </button>
          ) : (
            <Link to="/dashboard">
              <button className="cta-home">Dashboard</button>
            </Link>
          )}
        </div>
        <div className={billRight}>
          <Illustration alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Billboard
