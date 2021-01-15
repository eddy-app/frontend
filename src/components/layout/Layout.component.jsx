import React from "react"
import Navbar from "../navbar/Navbar.component"
import Footer from "../footer/Footer.component"
// import Sidebar from "../sidebar/Sidebar.component"
import { useLocation } from "react-router-dom"
import Wrapper from "./Layout.styled"

const Layout = ({ children }) => {
  const location = useLocation()

  const renderLayout = () => {
    if (location.pathname === "/") {
      return (
        <Wrapper.page>
          <Navbar />
          {children}
          <Footer />
        </Wrapper.page>
      )
    } else {
      return (
        <Wrapper.dashboard>
          {/* <Sidebar /> */}
          {children}
        </Wrapper.dashboard>
      )
    }
  }
  return <>{renderLayout()}</>
}

export default Layout
