import React from "react"
import { ReactComponent as Illustration } from "../../../images/landr.svg"

// Styles
import {
  billboardContent,
  billboardLeft,
  billboardTitle,
  billboardSentence,
  billRight,
} from "./Billboard.styles"

const Billboard = () => {
  return (
    <section id="billboard">
      <div className={billboardContent}>
        <div className={billboardLeft}>
          <h2 className={billboardTitle}>Discover Landr</h2>
          <p className={billboardSentence}>
            Manage your devices accross your teams in a one stop shop
            application.
          </p>
          <button className="cta-home">Get Started</button>
        </div>
        <div className={billRight}>
          <Illustration alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Billboard
