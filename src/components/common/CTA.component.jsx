import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"

const CTA = ({ type, text, styles, loading, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles}>
      {loading ? (
        <FontAwesomeIcon
          icon={faCircleNotch}
          spin
          className="flex items-center"
        />
      ) : (
        <>{text}</>
      )}
    </button>
  )
}

CTA.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default CTA
