import React from "react"
import PropTypes from "prop-types"

const FormError = ({ message }) => {
  return (
    <>
      <p className="text-red-500 text-sm">{message}</p>
    </>
  )
}

FormError.propTypes = {
  message: PropTypes.string.isRequired,
}

export default FormError
