import React, { useEffect, useRef, useCallback } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useLocation } from "react-router-dom"
import Page from "../../App.styled"
import Nav from "./Navbar.styled"

const Navbar = () => {
  // const [show, setShow] = useState(false)
  const { loginWithRedirect } = useAuth0()
  const location = useLocation()
  const navRef = useRef()

  const handleScroll = useCallback(() => {
    if (location.pathname === "/") {
      if (window.pageYOffset > 30) {
        navRef.current.classList.add("sticky")
        navRef.current.classList.add("animated")
        navRef.current.classList.add("fadeIn")
        navRef.current.classList.add("fast")
      } else {
        navRef.current.classList.remove("sticky")
        navRef.current.classList.remove("animated")
        navRef.current.classList.remove("fadeIn")
        navRef.current.classList.remove("fast")
      }
    }
  }, [location])

  useEffect(() => {
    handleScroll()
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Nav.container ref={navRef}>
        <Page.container>
          <Nav.content>
            <Nav.logo href="/">LANDR</Nav.logo>
            <Nav.navLinks>
              <Nav.navLink>
                <Nav.smoothAnchor href="#pricing">Pricing</Nav.smoothAnchor>
              </Nav.navLink>
              <Nav.navLink>
                <Nav.smoothAnchor href="#team">Team</Nav.smoothAnchor>
              </Nav.navLink>
              <Nav.navLink>
                <Nav.smoothAnchor href="#contact">Contact</Nav.smoothAnchor>
              </Nav.navLink>
              <Nav.navLink>
                <Nav.navButton onClick={loginWithRedirect}>Login</Nav.navButton>
              </Nav.navLink>
            </Nav.navLinks>
          </Nav.content>
        </Page.container>
      </Nav.container>
    </>
  )
}

export default Navbar
