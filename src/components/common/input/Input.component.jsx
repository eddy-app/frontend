import React, { forwardRef } from "react"
import PropTypes from "prop-types"

import InputStyle from "./Input.styled"

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder, ...otherProps } = props
  return (
    <>
      <InputStyle.style
        {...otherProps}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
    </>
  )
})

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Input
