import React from "react"

import Navbar from "../components/navbar/Navbar.component"
import Billboard from "../components/homepage-components/billboard/Billboard.component"
import Pricing from "../components/homepage-components/pricing/Pricing.component"

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Billboard />
      </div>
      <Pricing />
    </>
  )
}

export default Homepage
