import React from "react"
import PropTypes from "prop-types"

import Message from "./FormError.styled"

const FormError = ({ message }) => {
  return <Message>{message}</Message>
}

FormError.propTypes = {
  message: PropTypes.string.isRequired,
}

export default FormError
