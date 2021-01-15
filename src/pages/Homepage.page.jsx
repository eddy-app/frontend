import React from "react"
import Header from "../components/homepageComponents/header/Header.component"
import Pricing from "../components/homepageComponents/pricing/Pricing.component"
import Team from "../components/homepageComponents/team/Team.component"
import Contact from "../components/homepageComponents/contact/Contact.component"

const Homepage = () => {
  return (
    <>
      <Header />
      <Pricing />
      <Team />
      <Contact />
    </>
  )
}

export default Homepage
