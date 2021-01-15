import React from "react"
import Page from "../../App.styled"
import FooterStyled from "./Footer.styled"

const Footer = () => {
  return (
    <FooterStyled.container>
      <Page.container>
        {`Landr, ${new Date().getFullYear()} All rights reserved.`}
      </Page.container>
    </FooterStyled.container>
  )
}

export default Footer
