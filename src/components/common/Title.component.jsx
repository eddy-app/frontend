import React from "react"
import PropTypes from "prop-types"

const Title = ({ text }) => {
  return (
    <div className="my-1 sm:my-4">
      <h2 className="text-black font-semibold text-3/2xl antialiased">
        {text}
      </h2>
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
