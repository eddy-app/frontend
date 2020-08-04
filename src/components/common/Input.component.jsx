import React from "react"
import PropTypes from "prop-types"

const Input = ({ name, type, placeholder, ref }) => {
  return (
    <>
      <input type={type} name={name} placeholder={placeholder} ref={ref} />
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  ref: PropTypes.func.isRequired,
}

export default Input
