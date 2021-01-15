import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import CustomButton from "./CustomBtn.styled"

const Btn = ({ type, text, styles, loading, ...otherProps }) => {
  return (
    <CustomButton.container type={type} {...otherProps}>
      {loading ? (
        <CustomButton.spinner>
          <FontAwesomeIcon
            icon={faCircleNotch}
            spin
            className="flex items-center"
          />
        </CustomButton.spinner>
      ) : (
        <span>{text}</span>
      )}
    </CustomButton.container>
  )
}

Btn.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Btn
