import React from "react"
import PropTypes from "prop-types"
import Heading from "./Title.styled"

const Title = ({ text }) => {
  return <Heading.style>{text}</Heading.style>
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
