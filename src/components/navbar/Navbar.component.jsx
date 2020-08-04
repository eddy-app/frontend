import React, { useEffect, useRef, useCallback } from "react"
import { useAuth0 } from "@auth0/auth0-react"

// Styles
import {
  header,
  logo,
  publicNavigation,
  privateNavigation,
  navlist,
  navlink,
  ctaSignup,
  ctaDashboard,
} from "./Navbar.styles"

const Navbar = () => {
  const { isAuthenticated } = useAuth0()

  const navRef = useRef()
  const containerRef = useRef()

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 30) {
      navRef.current.classList.add("shadow-lg")
      navRef.current.classList.add("bg-white")
      navRef.current.classList.add("animated")
      containerRef.current.classList.remove("container")
      containerRef.current.classList.remove("mx-auto")
      navRef.current.classList.add("fadeIn")
      navRef.current.classList.add("slow")
    } else {
      navRef.current.classList.remove("shadow-lg")
      navRef.current.classList.remove("bg-white")
      navRef.current.classList.remove("animated")
      containerRef.current.classList.add("container")
      containerRef.current.classList.add("mx-auto")
      navRef.current.classList.remove("fadeIn")
      navRef.current.classList.remove("slow")
    }
  }, [])

  useEffect(() => {
    handleScroll()

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <section
      ref={navRef}
      className="sticky top-0 p-6 transition-all duration-300 ease-in-out"
      id="header">
      <div
        ref={containerRef}
        className="container mx-auto transition-all duration-500 ease-in-out">
        <header className={header}>
          <a href="/">
            <h1 className={logo}>Landr</h1>
          </a>
          <nav>
            {!isAuthenticated ? (
              <ul className={publicNavigation}>
                <li className={navlist}>
                  <a href="#pricing" className={navlink}>
                    Pricing
                  </a>
                </li>
                <li className={navlist}>
                  <a href="#team" className={navlink}>
                    Team
                  </a>
                </li>
                <li className={navlist}>
                  <a href="#contact" className={navlink}>
                    Contact
                  </a>
                </li>
                <li className={navlist}>
                  <a href="/login" className={navlink}>
                    Login
                  </a>
                </li>
                <li>
                  <button className={ctaSignup}>Sign up</button>
                </li>
              </ul>
            ) : (
              <ul className={privateNavigation}>
                <li>
                  <a href="#pricing" className={navlink}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#team" className={navlink}>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className={navlink}>
                    Contact
                  </a>
                </li>
                <li>
                  <button className={ctaDashboard}>Dashboard</button>
                </li>
              </ul>
            )}
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Navbar
